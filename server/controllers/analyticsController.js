const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserQuizResult = require("../models/UserQuizResult");
const TestResult = require("../models/TestResult");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserAssignment = require("../models/UserAssignment");
const User = require("../models/User");
const Career = require("../models/Career");
const { calculateUserCareerMetrics } = require("../services/careerService");

// =========================================
// Dashboard Analytics
// =========================================

const getDashboardAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;

    // ── Run ALL independent DB queries in parallel ──────────────────────────
    const [
      userDoc,
      totalTopics,
      completedTopics,
      quizResults,
      testResults,
      codingSolved,
      assignmentsCompleted,
      completedTopicDocs,
      codingDocs,
      assignmentDocs,
      subjects,
      allCareers,
    ] = await Promise.all([
      User.findById(userId, "name careerGoals skills interests careerProjectProgress"),
      Topic.countDocuments({ isPublished: true }),
      UserTopicProgress.countDocuments({ user: userId, completed: true }),
      UserQuizResult.find({ user: userId })
        .populate("subject", "name")
        .populate("topic", "title")
        .populate("quiz", "title")
        .sort({ createdAt: 1 }),
      TestResult.find({ user: userId }, "percentage createdAt").sort({ createdAt: 1 }),
      UserCodingProgress.countDocuments({ user: userId, solved: true }),
      UserAssignment.countDocuments({ user: userId, status: "Submitted" }),
      UserTopicProgress.find({ user: userId, completed: true }, "completedAt topic"),
      UserCodingProgress.find({ user: userId, solved: true }, "solvedAt"),
      UserAssignment.find({ user: userId, status: "Submitted" }, "submittedAt"),
      Subject.find({ isPublished: true }, "_id name"),
      Career.find().populate("relatedSubjects", "_id name"),
    ]);

    const curriculumProgress =
      totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

    const quizzesAttempted = quizResults.length;
    const averageQuizScore =
      quizzesAttempted === 0
        ? 0
        : Math.round(
            quizResults.reduce((sum, q) => sum + (q.percentage || 0), 0) / quizzesAttempted
          );

    const testsAttempted = testResults.length;
    const averageTestScore =
      testsAttempted === 0
        ? 0
        : Math.round(
            testResults.reduce((sum, t) => sum + (t.percentage || 0), 0) / testsAttempted
          );

    // ── Normalized Placement Readiness Components (0-100) ───────────────────
    const codingBenchmark = 50; // benchmark target problems for placement
    const assignmentBenchmark = 10; // benchmark assignments

    const topicScore = curriculumProgress;
    const quizScore = averageQuizScore;
    const testScore = averageTestScore;
    const codingScore = Math.min(100, Math.round((codingSolved / codingBenchmark) * 100));
    const assignmentScore = Math.min(100, Math.round((assignmentsCompleted / assignmentBenchmark) * 100));

    // Weighted Formula: 30% Topics + 20% Quiz + 20% Tests + 20% Coding + 10% Assignments
    const placementReadinessScore = Math.round(
      topicScore * 0.30 +
      quizScore * 0.20 +
      testScore * 0.20 +
      codingScore * 0.20 +
      assignmentScore * 0.10
    );

    const placementLevel =
      placementReadinessScore >= 90 ? "Excellent" :
      placementReadinessScore >= 75 ? "Placement Ready" :
      placementReadinessScore >= 50 ? "Interview Ready" :
      placementReadinessScore >= 30 ? "Developing" : "Beginner";

    const placementRecommendation =
      placementReadinessScore >= 90
        ? "Outstanding readiness! Continue advanced mock interviews and system design practice."
        : placementReadinessScore >= 75
        ? "You're close to placement ready. Maintain coding consistency and revise weak core concepts."
        : placementReadinessScore >= 50
        ? "Solid foundation developing. Complete remaining core topics and solve 3-5 coding problems weekly."
        : placementReadinessScore >= 30
        ? "Keep building fundamentals. Complete curriculum topics and attempt chapter quizzes regularly."
        : "Start your learning journey. Follow the structured roadmaps and begin with fundamental topics.";

    // ── Subject Progress ───────────────────────────────────────────────────
    const subjectIds = subjects.map((s) => s._id);

    const allTopics = await Topic.find(
      { isPublished: true, subject: { $in: subjectIds } },
      "_id title subject order"
    ).sort({ order: 1 }).lean();

    const topicsBySubject = {};
    allTopics.forEach((t) => {
      const sid = t.subject.toString();
      if (!topicsBySubject[sid]) topicsBySubject[sid] = [];
      topicsBySubject[sid].push(t);
    });

    const completedTopicIds = new Set(
      completedTopicDocs.map((d) => d.topic.toString())
    );

    const subjectProgress = subjects.map((subject) => {
      const sid = subject._id.toString();
      const sTopics = topicsBySubject[sid] || [];
      const total = sTopics.length;
      const completed = sTopics.filter((t) => completedTopicIds.has(t._id.toString())).length;
      const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
      const cleanName = (subject.name || "Subject").replace(/^#+\s*/, "").trim();
      return {
        _id: subject._id,
        subject: cleanName,
        completed,
        total,
        percentage,
      };
    });

    let strongestSubject = null;
    let weakestSubject = null;

    if (subjectProgress.length > 0) {
      const validSubjects = subjectProgress.filter((s) => s.total > 0);
      if (validSubjects.length > 0) {
        strongestSubject = [...validSubjects].sort((a, b) => b.percentage - a.percentage || b.completed - a.completed)[0];
        weakestSubject = [...validSubjects].sort((a, b) => a.percentage - b.percentage || a.completed - b.completed)[0];
      }
    }

    // ── Weekly Activity (real user data across all categories) ───────────────
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weeklyActivity = weekDays.map((day) => ({
      day,
      topics: 0,
      quizzes: 0,
      tests: 0,
      coding: 0,
      assignments: 0,
    }));

    completedTopicDocs.forEach((item) => {
      if (!item.completedAt) return;
      const dayIdx = new Date(item.completedAt).getDay();
      weeklyActivity[dayIdx].topics++;
    });
    quizResults.forEach((item) => {
      if (!item.createdAt) return;
      const dayIdx = new Date(item.createdAt).getDay();
      weeklyActivity[dayIdx].quizzes++;
    });
    testResults.forEach((item) => {
      if (!item.createdAt) return;
      const dayIdx = new Date(item.createdAt).getDay();
      weeklyActivity[dayIdx].tests++;
    });
    codingDocs.forEach((item) => {
      if (!item.solvedAt) return;
      const dayIdx = new Date(item.solvedAt).getDay();
      weeklyActivity[dayIdx].coding++;
    });
    assignmentDocs.forEach((item) => {
      if (!item.submittedAt) return;
      const dayIdx = new Date(item.submittedAt).getDay();
      weeklyActivity[dayIdx].assignments++;
    });

    // ── Monthly Activity (real user data across all categories) ──────────────
    const monthlyActivity = Array.from({ length: 5 }, (_, i) => ({
      date: `Week ${i + 1}`,
      topics: 0,
      quizzes: 0,
      tests: 0,
      coding: 0,
      assignments: 0,
    }));

    const weekIndex = (date) => Math.min(Math.floor((new Date(date).getDate() - 1) / 7), 4);

    completedTopicDocs.forEach((item) => {
      if (item.completedAt) monthlyActivity[weekIndex(item.completedAt)].topics++;
    });
    quizResults.forEach((item) => {
      if (item.createdAt) monthlyActivity[weekIndex(item.createdAt)].quizzes++;
    });
    testResults.forEach((item) => {
      if (item.createdAt) monthlyActivity[weekIndex(item.createdAt)].tests++;
    });
    codingDocs.forEach((item) => {
      if (item.solvedAt) monthlyActivity[weekIndex(item.solvedAt)].coding++;
    });
    assignmentDocs.forEach((item) => {
      if (item.submittedAt) monthlyActivity[weekIndex(item.submittedAt)].assignments++;
    });

    // ── Learning Streak ──────────────────────────────────────────────────────
    const dateSet = new Set();
    completedTopicDocs.forEach((i) => { if (i.completedAt) dateSet.add(new Date(i.completedAt).toISOString().split("T")[0]); });
    quizResults.forEach((i) => { if (i.createdAt) dateSet.add(new Date(i.createdAt).toISOString().split("T")[0]); });
    testResults.forEach((i) => { if (i.createdAt) dateSet.add(new Date(i.createdAt).toISOString().split("T")[0]); });
    codingDocs.forEach((i) => { if (i.solvedAt) dateSet.add(new Date(i.solvedAt).toISOString().split("T")[0]); });
    assignmentDocs.forEach((i) => { if (i.submittedAt) dateSet.add(new Date(i.submittedAt).toISOString().split("T")[0]); });

    const uniqueDates = [...dateSet].sort();
    let currentStreak = 0;
    let longestStreak = 0;

    if (uniqueDates.length > 0) {
      longestStreak = 1;
      let streak = 1;
      for (let i = 1; i < uniqueDates.length; i++) {
        const diff = (new Date(uniqueDates[i]) - new Date(uniqueDates[i - 1])) / 86400000;
        streak = Math.round(diff) === 1 ? streak + 1 : 1;
        longestStreak = Math.max(longestStreak, streak);
      }

      currentStreak = 1;
      for (let i = uniqueDates.length - 1; i > 0; i--) {
        const diff = (new Date(uniqueDates[i]) - new Date(uniqueDates[i - 1])) / 86400000;
        if (Math.round(diff) === 1) currentStreak++;
        else break;
      }
    }

    // ── Quiz performance series with rich tooltip metadata ──────────────────
    const quizPerformance = quizResults.map((quiz, index) => {
      const subjectName = quiz.subject?.name || (quiz.topic?.subject ? "Subject" : "General");
      const cleanSubject = subjectName.replace(/^#+\s*/, "").trim();
      return {
        attempt: `Quiz ${index + 1}`,
        quizTitle: quiz.quiz?.title || `Quiz ${index + 1}`,
        score: quiz.percentage || 0,
        date: quiz.createdAt
          ? new Date(quiz.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "Recent",
        rawDate: quiz.createdAt,
        subject: cleanSubject,
        topic: quiz.topic?.title || "",
      };
    });

    // ── Career Readiness & Dynamic Next Recommended Action ──────────────────
    let selectedCareerDoc = null;
    let hasUserSelectedCareer = false;

    if (userDoc?.careerGoals) {
      selectedCareerDoc = allCareers.find(
        (c) => c.title.toLowerCase().trim() === userDoc.careerGoals.toLowerCase().trim()
      );
      if (selectedCareerDoc) {
        hasUserSelectedCareer = true;
      }
    }

    // Default fallback to Software Engineer or first career
    if (!selectedCareerDoc && allCareers.length > 0) {
      selectedCareerDoc =
        allCareers.find((c) => c.title.includes("Software Engineer")) || allCareers[0];
    }

    let careerReadinessData = null;

    if (selectedCareerDoc) {
      const careerMetrics = await calculateUserCareerMetrics(userId, selectedCareerDoc);

      // Build subject & skill breakdown specific to this career
      const careerSubjectIds = (selectedCareerDoc.relatedSubjects || []).map((s) =>
        s._id ? s._id.toString() : s.toString()
      );

      const careerSubjectProgress = subjects
        .filter((s) => careerSubjectIds.includes(s._id.toString()))
        .map((s) => {
          const sid = s._id.toString();
          const sTopics = topicsBySubject[sid] || [];
          const total = sTopics.length;
          const completed = sTopics.filter((t) => completedTopicIds.has(t._id.toString())).length;
          const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
          return {
            name: s.name.replace(/^#+\s*/, "").trim(),
            percentage,
            completed,
            total,
          };
        });

      // Assemble full skills breakdown list (Subjects + Projects + Coding)
      const skillsBreakdown = [
        ...careerSubjectProgress.map((sp) => ({
          name: sp.name,
          progress: sp.percentage,
          category: "Subject",
        })),
        {
          name: "Projects",
          progress: careerMetrics.projectProgress || 0,
          category: "Project",
        },
        {
          name: "Coding",
          progress: careerMetrics.codingProgress || 0,
          category: "Practice",
        },
      ];

      // Calculate dynamic Next Recommended Action
      let nextRecommendedAction = "";

      // 1. Check for uncompleted topic in the lowest completed career subject
      const lowestCareerSub = [...careerSubjectProgress].sort((a, b) => a.percentage - b.percentage)[0];
      if (lowestCareerSub && lowestCareerSub.percentage < 100) {
        const subId = subjects.find(
          (s) => s.name.replace(/^#+\s*/, "").trim() === lowestCareerSub.name
        )?._id;
        if (subId) {
          const subTopics = topicsBySubject[subId.toString()] || [];
          const nextUncompletedTopic = subTopics.find(
            (t) => !completedTopicIds.has(t._id.toString())
          );
          if (nextUncompletedTopic) {
            nextRecommendedAction = `Complete ${lowestCareerSub.name} → ${nextUncompletedTopic.title}`;
          }
        }
      }

      // 2. If all subjects completed or no specific topic found, check coding target
      if (!nextRecommendedAction) {
        if (codingSolved < 30) {
          nextRecommendedAction = `Solve 5 more DSA problems this week to boost problem-solving speed.`;
        } else if (careerMetrics.projectProgress < 50) {
          nextRecommendedAction = `Start or advance your ${selectedCareerDoc.title} capstone project.`;
        } else if (averageQuizScore < 75 && quizzesAttempted > 0) {
          nextRecommendedAction = `Retake foundational quizzes to reach 80%+ subject accuracy.`;
        } else {
          nextRecommendedAction = `Practice mock interview questions for ${selectedCareerDoc.title}.`;
        }
      }

      careerReadinessData = {
        hasUserSelectedCareer,
        careerId: selectedCareerDoc._id,
        careerTitle: selectedCareerDoc.title,
        category: selectedCareerDoc.category,
        readinessScore: careerMetrics.placementReadiness || 0,
        readinessStatus: careerMetrics.readinessStatus || "Starting",
        skillsBreakdown,
        nextRecommendedAction,
        availableCareers: allCareers.map((c) => ({
          _id: c._id,
          title: c.title,
          category: c.category,
        })),
      };
    }

    // ── Personalized AI Insights (Tailored to actual performance) ───────────
    const personalizedInsights = [];

    // Accuracy vs Progress insight
    if (quizzesAttempted > 0 && curriculumProgress < 15 && averageQuizScore >= 60) {
      personalizedInsights.push(
        `Your quiz accuracy is ${averageQuizScore}%, but curriculum completion is only ${curriculumProgress}%. Focus on completing structured topics before attempting more quizzes.`
      );
    } else if (curriculumProgress >= 50 && averageQuizScore < 60 && quizzesAttempted > 0) {
      personalizedInsights.push(
        `You have completed ${curriculumProgress}% of curriculum topics, but quiz accuracy is ${averageQuizScore}%. Take time to review key concepts before attempting assessments.`
      );
    } else if (curriculumProgress >= 70) {
      personalizedInsights.push(
        `Outstanding pace! You have covered ${curriculumProgress}% of the curriculum. Focus on high-difficulty problem sets.`
      );
    } else {
      personalizedInsights.push(
        `Curriculum progress is at ${curriculumProgress}%. Target completing 2-3 topics per week to maintain study momentum.`
      );
    }

    // Coding Consistency insight
    if (codingSolved === 0) {
      personalizedInsights.push(
        `You have not started coding problem practice yet. Solve beginner problems in Arrays and Strings to build foundational skills.`
      );
    } else if (codingSolved < 20) {
      personalizedInsights.push(
        `You have solved ${codingSolved} coding problems. Increase consistency by solving 3–5 problems per week.`
      );
    } else {
      personalizedInsights.push(
        `Great momentum with ${codingSolved} coding problems solved! Start tackling Medium-difficulty LeetCode problems.`
      );
    }

    // Weakest Subject insight
    if (weakestSubject && weakestSubject.percentage < 50) {
      personalizedInsights.push(
        `${weakestSubject.subject} has ${weakestSubject.percentage}% completion (${weakestSubject.completed}/${weakestSubject.total} topics). Prioritize this subject next.`
      );
    }

    // Strongest Subject highlight
    if (strongestSubject && strongestSubject.percentage > 0) {
      personalizedInsights.push(
        `Your strongest subject is ${strongestSubject.subject} with ${strongestSubject.percentage}% completion.`
      );
    }

    // Streak / Consistency insight
    if (currentStreak >= 3) {
      personalizedInsights.push(
        `🔥 You are on a ${currentStreak}-day learning streak! Keep practicing today to reach ${currentStreak + 1} days.`
      );
    } else if (uniqueDates.length > 0) {
      personalizedInsights.push(
        `You have logged ${uniqueDates.length} active learning days. Build a daily study habit to increase your streak.`
      );
    }

    // Assignment & Test insight
    if (assignmentsCompleted === 0) {
      personalizedInsights.push(
        `Practical assignments enhance hands-on retention. Complete pending assignments to improve your readiness.`
      );
    }

    res.status(200).json({
      success: true,
      analytics: {
        subjects: { total: subjects.length },
        topics: {
          total: totalTopics,
          completed: completedTopics,
          percentage: curriculumProgress,
        },
        quizzes: {
          attempted: quizzesAttempted,
          averageScore: averageQuizScore,
          performance: quizPerformance,
        },
        tests: {
          attempted: testsAttempted,
          averageScore: averageTestScore,
        },
        coding: {
          solved: codingSolved,
          score: codingScore,
          target: codingBenchmark,
        },
        assignments: {
          completed: assignmentsCompleted,
          score: assignmentScore,
          target: assignmentBenchmark,
        },
        subjectProgress,
        strongestSubject,
        weakestSubject,
        weeklyActivity,
        monthlyActivity,
        streak: {
          current: currentStreak,
          longest: longestStreak,
          lastActive: uniqueDates.length > 0 ? uniqueDates[uniqueDates.length - 1] : null,
          totalLearningDays: uniqueDates.length,
        },
        placementReadiness: {
          score: placementReadinessScore,
          level: placementLevel,
          recommendation: placementRecommendation,
          components: {
            topics: {
              name: "Topic Completion Score",
              score: topicScore,
              percentage: topicScore,
              completed: completedTopics,
              total: totalTopics,
              weight: "30%",
            },
            quiz: {
              name: "Quiz Performance Score",
              score: quizScore,
              percentage: quizScore,
              attempted: quizzesAttempted,
              weight: "20%",
            },
            tests: {
              name: "Test Performance Score",
              score: testScore,
              percentage: testScore,
              attempted: testsAttempted,
              weight: "20%",
            },
            coding: {
              name: "Coding Score",
              score: codingScore,
              percentage: codingScore,
              solved: codingSolved,
              target: codingBenchmark,
              weight: "20%",
            },
            assignments: {
              name: "Assignment Score",
              score: assignmentScore,
              percentage: assignmentScore,
              completed: assignmentsCompleted,
              target: assignmentBenchmark,
              weight: "10%",
            },
          },
        },
        careerReadiness: careerReadinessData,
        insights: personalizedInsights,
      },
    });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getDashboardAnalytics };