const Test = require("../models/Test");
const Question = require("../models/Question");
const TestResult = require("../models/TestResult");
const User = require("../models/User");
const Subject = require("../models/Subject");
const { checkMockTestAce } = require("../services/performanceAchievementService");

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Build per-test history summary from an array of TestResult docs */
const buildTestHistoryMap = (results) => {
  const map = {}; // testId → { attempts, bestScore, lastScore, bestResult }

  results.forEach((r) => {
    const testId = r.test?.toString?.() || r.test;
    if (!testId) return;

    if (!map[testId]) {
      map[testId] = {
        attempts: 0,
        bestScore: 0,
        lastScore: 0,
        bestResultId: null,
        lastAttemptAt: null,
      };
    }

    const entry = map[testId];
    entry.attempts += 1;

    if (r.percentage > entry.bestScore) {
      entry.bestScore = r.percentage;
      entry.bestResultId = r._id;
    }

    if (!entry.lastAttemptAt || new Date(r.createdAt) > new Date(entry.lastAttemptAt)) {
      entry.lastScore = r.percentage;
      entry.lastAttemptAt = r.createdAt;
    }
  });

  return map;
};

/** Derive a human-readable status from history + test config */
const deriveStatus = (historyEntry, allowRetake) => {
  if (!historyEntry || historyEntry.attempts === 0) return "Not Attempted";
  if (allowRetake) return "Retake Available";
  return "Completed";
};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests
// Returns all tests with basic metadata (no questions array) and question count
// ─────────────────────────────────────────────────────────────────────────────
const getTests = async (req, res) => {
  try {
    const tests = await Test.find()
      .populate("subject", "name")
      .lean();

    // Attach question count (populate already loaded questions IDs)
    const enriched = tests.map((t) => ({
      ...t,
      questionCount: (t.questions || []).length,
      questions: undefined, // don't send full array
    }));

    res.status(200).json({
      success: true,
      tests: enriched,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/summary
// Returns aggregate placement stats for the logged-in user
// ─────────────────────────────────────────────────────────────────────────────
const getPlacementSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const [allTests, userResults] = await Promise.all([
      Test.find({}, "title allowRetake").lean(),
      TestResult.find({ user: userId }, "test percentage passed createdAt").lean(),
    ]);

    const totalTests = allTests.length;
    const historyMap = buildTestHistoryMap(userResults);

    const attemptedEntries = Object.values(historyMap);
    const testsAttempted = attemptedEntries.length;

    const testsPassed = userResults.filter((r) => r.passed).length > 0
      ? [...new Set(userResults.filter((r) => r.passed).map((r) => r.test?.toString()))].length
      : 0;

    const averageScore =
      userResults.length === 0
        ? 0
        : Math.round(userResults.reduce((s, r) => s + (r.percentage || 0), 0) / userResults.length);

    const bestScore =
      userResults.length === 0
        ? 0
        : Math.max(...userResults.map((r) => r.percentage || 0));

    // Technical readiness: weighted contribution of test performance
    // Uses same formula slice as careerReadinessService (20% weight of 100-point scale)
    const technicalReadiness =
      userResults.length === 0
        ? 0
        : Math.min(100, Math.round(averageScore * 0.8 + (testsPassed / Math.max(testsAttempted, 1)) * 20));

    res.status(200).json({
      success: true,
      summary: {
        totalTests,
        testsAttempted,
        testsPassed,
        averageScore,
        bestScore,
        technicalReadiness,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/with-progress
// Returns all tests merged with per-user history so the frontend can show
// status, best score, attempts, etc. without separate API calls
// ─────────────────────────────────────────────────────────────────────────────
const getTestsWithProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    const [tests, userResults, userDoc] = await Promise.all([
      Test.find().populate("subject", "name").lean(),
      TestResult.find({ user: userId }, "test percentage passed createdAt").sort({ createdAt: 1 }).lean(),
      User.findById(userId, "careerGoals").lean(),
    ]);

    const historyMap = buildTestHistoryMap(userResults);

    const enriched = tests.map((t) => {
      const testId = t._id.toString();
      const history = historyMap[testId] || null;
      const questionCount = (t.questions || []).length;

      return {
        _id: t._id,
        title: t.title,
        description: t.description,
        subject: t.subject,
        category: t.category || "Programming & DSA",
        difficulty: t.difficulty || "Intermediate",
        passingScore: t.passingScore ?? 60,
        topics: t.topics || [],
        negativeMarking: t.negativeMarking ?? false,
        allowRetake: t.allowRetake ?? true,
        duration: t.duration,
        totalMarks: t.totalMarks || questionCount,
        questionCount,
        status: deriveStatus(history, t.allowRetake ?? true),
        attempts: history?.attempts || 0,
        bestScore: history?.bestScore || 0,
        lastScore: history?.lastScore || 0,
        bestResultId: history?.bestResultId || null,
        lastAttemptAt: history?.lastAttemptAt || null,
      };
    });

    res.status(200).json({
      success: true,
      tests: enriched,
      careerGoal: userDoc?.careerGoals || null,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/my-results
// ─────────────────────────────────────────────────────────────────────────────
const getMyTestResults = async (req, res) => {
  try {
    const results = await TestResult.find({
      user: req.user.id,
    }).populate({
      path: "test",
      select: "title category difficulty",
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      results,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/:id
// ─────────────────────────────────────────────────────────────────────────────
const getTestById = async (req, res) => {
  try {

    const test = await Test.findById(req.params.id)
      .populate("subject", "name")
      .populate({
        path: "questions",
        select: "question options type difficulty topic",
      });


    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Test not found"
      });
    }


    res.status(200).json({
      success: true,
      test
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};


// ─────────────────────────────────────────────────────────────────────────────
// POST /api/tests/:id/submit
// ─────────────────────────────────────────────────────────────────────────────
const submitTest = async (req, res) => {

  try {

    const userId = req.user.id;

    const { answers, timeTaken } = req.body;

    const test = await Test.findById(req.params.id)
      .populate("questions");


    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Test not found"
      });
    }

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unanswered = 0;

    const safeAnswers = answers && typeof answers === "object" ? answers : {};

    // Topic-level breakdown
    const topicMap = {}; // topicName → { correct, total }

    test.questions.forEach((question) => {
      const userAnswer = safeAnswers[question._id];

      // Determine topic label
      const topicLabel = question.topic?.toString?.() || "General";

      if (!topicMap[topicLabel]) topicMap[topicLabel] = { correct: 0, total: 0 };
      topicMap[topicLabel].total += 1;

      if (!userAnswer) {
        unanswered += 1;
      } else if (userAnswer === question.correctAnswer) {
        correctAnswers += 1;
        topicMap[topicLabel].correct += 1;
      } else {
        incorrectAnswers += 1;
      }
    });

    const score = correctAnswers;
    const totalQuestions = test.questions.length;

    const percentage =
      totalQuestions === 0
        ? 0
        : Math.round((score / totalQuestions) * 100);

    const passed = percentage >= (test.passingScore ?? 60);

    const topicPerformance = Object.entries(topicMap).map(([topic, data]) => ({
      topic,
      correct: data.correct,
      total: data.total,
    }));

    const result = await TestResult.create({
      user: userId,
      test: test._id,
      score,
      totalQuestions,
      percentage,
      correctAnswers,
      incorrectAnswers,
      unanswered,
      timeTaken: timeTaken || 0,
      passed,
      topicPerformance,
    });

    // Fire-and-forget achievement check
    checkMockTestAce(userId).catch((err) =>
      console.error("checkMockTestAce failed:", err.message)
    );

    res.status(200).json({
      success: true,
      result
    });



  } catch (error) {

    console.log(error);


    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/result/:id
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// GET /api/tests/result/:id
// ─────────────────────────────────────────────────────────────────────────────
const getTestResult = async (req, res) => {
  try {
    const userId = (req.user?.id || req.user?._id)?.toString();

    const result = await TestResult.findById(req.params.id)
      .populate({
        path: "test",
        select: "title category difficulty passingScore topics allowRetake duration",
      });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found",
      });
    }

    // IDOR Check: user must own the test result or be admin
    if (result.user && result.user.toString() !== userId && req.user?.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized to view this test result.",
      });
    }

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


module.exports = {

  getTests,
  getTestById,
  submitTest,
  getTestResult,
  getMyTestResults,
  getTestsWithProgress,
  getPlacementSummary,

};