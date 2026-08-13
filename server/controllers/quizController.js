const Quiz = require("../models/Quiz");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const UserQuizResult = require("../models/UserQuizResult");
const { unlockAchievement } = require("../services/achievementService");
const { checkExcellentLearner } = require("../services/performanceAchievementService");
const {
  generateQuestionPoolForTopic,
  selectTenQuestions,
} = require("../services/quizGeneratorService");

// =====================================
// Get Quiz By Topic (Dynamic 10 Questions)
// =====================================
const getQuizByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const userId = req.user?.id || req.user?._id;
    const isRetry = req.query.retry === "true" || req.query.newAttempt === "true";

    // 1. Validate Topic and Subject
    let topic = await Topic.findById(topicId).populate("subject");
    if (!topic) {
      // Check if topicId was passed as a quizId
      const quizRef = await Quiz.findById(topicId);
      if (quizRef && quizRef.topic) {
        topic = await Topic.findById(quizRef.topic).populate("subject");
      }
    }

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    // 2. Fetch or Ensure Rich Question Pool in Quiz
    let quiz = await Quiz.findOne({
      topic: topicId,
      isPublished: true,
    });

    const subName = topic.subject?.title || topic.subject?.name || "Engineering";

    if (!quiz || !quiz.questions || quiz.questions.length < 15) {
      const richPool = generateQuestionPoolForTopic(
        topic.title,
        subName,
        topic.notes || [],
        topic.learningObjectives || []
      );

      if (!quiz) {
        quiz = await Quiz.create({
          topic: topic._id,
          title: `${topic.title} Concept Quiz`,
          description: `Evaluate your knowledge on ${topic.title} across theory, logic, applications, and problem-solving.`,
          duration: 10,
          passingMarks: 4,
          totalMarks: 10,
          questions: richPool,
          isPublished: true,
        });
      } else {
        // Merge and update questions pool
        const existingTexts = new Set((quiz.questions || []).map(q => q.question.trim().toLowerCase()));
        const combined = [...(quiz.questions || [])];
        for (const nq of richPool) {
          if (!existingTexts.has(nq.question.trim().toLowerCase())) {
            combined.push(nq);
            existingTexts.add(nq.question.trim().toLowerCase());
          }
        }
        quiz.questions = combined;
        quiz.totalMarks = 10;
        await quiz.save();
      }
    }

    // 3. Check for Active / In-Progress Attempt (resilient to page refresh)
    if (userId && !isRetry) {
      const activeAttempt = await UserQuizResult.findOne({
        user: userId,
        topic: topicId,
        isCompleted: false,
      }).sort({ createdAt: -1 });

      if (activeAttempt && activeAttempt.servedQuestions && activeAttempt.servedQuestions.length === 10) {
        // Return existing active attempt with exact same questions & shuffled options
        const sanitizedQuestions = activeAttempt.servedQuestions.map((q, idx) => ({
          _id: q._id || q.questionId || `q_${idx}`,
          questionId: q._id || q.questionId || `q_${idx}`,
          question: q.question,
          options: q.options,
          marks: q.marks || 1,
          questionType: q.questionType || "theoretical",
          difficulty: q.difficulty || "medium",
        }));

        return res.status(200).json({
          success: true,
          quiz: {
            _id: quiz._id,
            attemptId: activeAttempt._id,
            topicId: topic._id,
            topicTitle: topic.title,
            title: quiz.title,
            description: quiz.description,
            duration: quiz.duration || 10,
            passingMarks: quiz.passingMarks || 4,
            totalMarks: 10,
            totalQuestions: 10,
            isResume: true,
            startedAt: activeAttempt.startedAt,
            questions: sanitizedQuestions,
          },
        });
      }
    }

    // 4. If starting a new attempt (or retry is requested):
    // If there were incomplete attempts, mark them abandoned
    if (userId && isRetry) {
      await UserQuizResult.updateMany(
        { user: userId, topic: topicId, isCompleted: false },
        { $set: { isCompleted: true, submittedAt: new Date() } }
      );
    }

    // 5. Gather previously served questions from recent attempts (anti-repetition)
    let recentQuestionTexts = [];
    if (userId) {
      const pastAttempts = await UserQuizResult.find({
        user: userId,
        topic: topicId,
      })
        .sort({ createdAt: -1 })
        .limit(5);

      for (const att of pastAttempts) {
        if (att.servedQuestions && att.servedQuestions.length > 0) {
          for (const sq of att.servedQuestions) {
            if (sq.question) recentQuestionTexts.push(sq.question);
          }
        } else if (att.questionIds && att.questionIds.length > 0) {
          recentQuestionTexts.push(...att.questionIds);
        }
      }
    }

    // 6. Select exactly 10 questions with type & difficulty distribution and Fisher-Yates shuffle
    const selectedTen = selectTenQuestions(quiz.questions, recentQuestionTexts);

    // 7. Create and persist new Attempt
    let newAttempt = null;
    if (userId) {
      newAttempt = await UserQuizResult.create({
        user: userId,
        quiz: quiz._id,
        topic: topic._id,
        subject: topic.subject?._id || topic.subject,
        isCompleted: false,
        totalQuestions: 10,
        totalMarks: 10,
        score: 0,
        percentage: 0,
        questionIds: selectedTen.map(q => q.question),
        servedQuestions: selectedTen,
        startedAt: new Date(),
      });
    }

    // 8. Sanitize questions payload (hide correct answers and explanations until submission)
    const clientQuestions = selectedTen.map((q, idx) => ({
      _id: q._id || q.questionId || `q_${idx}`,
      questionId: q._id || q.questionId || `q_${idx}`,
      question: q.question,
      options: q.options,
      marks: q.marks || 1,
      questionType: q.questionType || "theoretical",
      difficulty: q.difficulty || "medium",
    }));

    return res.status(200).json({
      success: true,
      quiz: {
        _id: quiz._id,
        attemptId: newAttempt ? newAttempt._id : undefined,
        topicId: topic._id,
        topicTitle: topic.title,
        title: quiz.title,
        description: quiz.description,
        duration: quiz.duration || 10,
        passingMarks: quiz.passingMarks || 4,
        totalMarks: 10,
        totalQuestions: 10,
        questions: clientQuestions,
      },
    });
  } catch (error) {
    console.error("Error in getQuizByTopic:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error generating quiz",
    });
  }
};

// =====================================
// Submit Quiz
// =====================================
const submitQuiz = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { quizId } = req.params;
    const { answers = {}, attemptId } = req.body;

    let attempt = null;

    // 1. Locate the attempt record
    if (attemptId) {
      attempt = await UserQuizResult.findOne({
        _id: attemptId,
        user: userId,
      });
    }

    if (!attempt) {
      // Find latest uncompleted or recent attempt for this quiz & user
      attempt = await UserQuizResult.findOne({
        user: userId,
        quiz: quizId,
        isCompleted: false,
      }).sort({ createdAt: -1 });
    }

    if (!attempt) {
      attempt = await UserQuizResult.findOne({
        user: userId,
        quiz: quizId,
      }).sort({ createdAt: -1 });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz && !attempt) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    // 2. Determine questions list to evaluate against
    const questionsToGrade =
      attempt && attempt.servedQuestions && attempt.servedQuestions.length > 0
        ? attempt.servedQuestions
        : (quiz ? quiz.questions.slice(0, 10) : []);

    let score = 0;
    const answerSheet = [];
    let totalMarks = 0;

    questionsToGrade.forEach((q, index) => {
      // Support matching by question text, question id, or numeric index
      let selectedAnswer = answers[q.question];
      if (selectedAnswer === undefined && q.questionId) {
        selectedAnswer = answers[q.questionId];
      }
      if (selectedAnswer === undefined && q._id) {
        selectedAnswer = answers[q._id.toString()];
      }
      if (selectedAnswer === undefined) {
        selectedAnswer = answers[index];
      }

      const isCorrect = Boolean(
        selectedAnswer !== undefined &&
        selectedAnswer !== null &&
        selectedAnswer.toString().trim() === (q.correctAnswer || "").toString().trim()
      );

      const qMarks = q.marks || 1;
      totalMarks += qMarks;

      if (isCorrect) {
        score += qMarks;
      }

      answerSheet.push({
        questionIndex: index,
        questionText: q.question,
        selectedAnswer: selectedAnswer || "Not Attempted",
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || `${q.correctAnswer} is the correct answer.`,
        questionType: q.questionType || "theoretical",
        difficulty: q.difficulty || "medium",
        isCorrect,
      });
    });

    if (totalMarks === 0) {
      totalMarks = 10;
    }

    const percentage = Math.round((score / totalMarks) * 100);

    // 3. Save or update Attempt Result
    let resultRecord;
    if (attempt) {
      attempt.isCompleted = true;
      attempt.score = score;
      attempt.totalMarks = totalMarks;
      attempt.percentage = percentage;
      attempt.answers = answerSheet;
      attempt.submittedAt = new Date();
      resultRecord = await attempt.save();
    } else {
      resultRecord = await UserQuizResult.create({
        user: userId,
        quiz: quiz._id,
        topic: quiz.topic,
        isCompleted: true,
        score,
        totalMarks,
        percentage,
        answers: answerSheet,
        submittedAt: new Date(),
      });
    }

    // 4. Process Achievements
    if (percentage === 100) {
      await unlockAchievement(
        userId,
        "Quiz Master",
        "📝",
        "Scored 100% in a quiz."
      );
    }

    await checkExcellentLearner(userId);

    // Populate references for client response
    const populatedResult = await UserQuizResult.findById(resultRecord._id)
      .populate("quiz", "title description duration passingMarks")
      .populate("topic", "title");

    return res.status(201).json({
      success: true,
      result: populatedResult || resultRecord,
    });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error submitting quiz",
    });
  }
};

// =====================================
// Get My Quiz Results
// =====================================
const getMyQuizResults = async (req, res) => {
  try {
    const results = await UserQuizResult.find({
      user: req.user.id,
      isCompleted: true,
    })
      .populate("quiz", "title")
      .populate("topic", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      results,
    });
  } catch (error) {
    console.error("Error in getMyQuizResults:", error);
    res.status(500).json({
      success: false,
      message: "Server Error fetching quiz results",
    });
  }
};

// =====================================
// Get Single Quiz Result
// =====================================
const getQuizResult = async (req, res) => {
  try {
    const userId = (req.user?.id || req.user?._id)?.toString();

    const result = await UserQuizResult.findById(req.params.id)
      .populate("quiz", "title description duration passingMarks")
      .populate("topic", "title");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found",
      });
    }

    // IDOR Check: user must own the quiz result or be admin
    if (result.user && result.user.toString() !== userId && req.user?.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized to view this quiz result.",
      });
    }

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Error in getQuizResult:", error);
    res.status(500).json({
      success: false,
      message: "Server Error fetching result",
    });
  }
};

module.exports = {
  getQuizByTopic,
  submitQuiz,
  getMyQuizResults,
  getQuizResult,
};