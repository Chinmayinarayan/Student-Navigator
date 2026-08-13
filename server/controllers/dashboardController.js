const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Test = require("../models/Test");
const Question = require("../models/Question");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserQuizResult = require("../models/UserQuizResult");
const TestResult = require("../models/TestResult");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserAssignment = require("../models/UserAssignment");
const UserAchievement = require("../models/UserAchievement");
const Scholarship = require("../models/Scholarship");
const UserScholarship = require("../models/UserScholarship");
const User = require("../models/User");
const {
  calculateScholarshipLifecycle,
  computeScholarshipMatch,
} = require("./scholarshipController");

// =====================================
// Get Dashboard (all queries parallel)
// =====================================

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user details for profile-matching
    const userDoc = await User.findById(userId).lean();
    const user = {
      id: req.user.id,
      name: userDoc?.name || req.user.name,
      email: userDoc?.email || req.user.email,
      degree: userDoc?.degree || req.user.degree || "",
      branch: userDoc?.branch || req.user.branch || "",
      year: userDoc?.year || req.user.year || "",
      cgpa: typeof userDoc?.cgpa === "number" ? userDoc.cgpa : (typeof req.user.cgpa === "number" ? req.user.cgpa : null),
      state: userDoc?.state || req.user.state || "",
      familyIncome: userDoc?.familyIncome ?? null,
      skills: userDoc?.skills || [],
      interests: userDoc?.interests || [],
      careerGoals: userDoc?.careerGoals || req.user.careerGoals || "",
    };

    const now = new Date();

    // Fire all database queries concurrently
    const [
      totalTopics,
      completedTopicDocs,
      recentTopicProgressDocs,
      recentTestResultDocs,
      quizResults,
      testResults,
      codingSolved,
      assignmentsCompleted,
      achievementsUnlocked,
      allActiveScholarships,
      savedScholarshipsCount,
    ] = await Promise.all([
      Topic.countDocuments({ isPublished: true }),

      UserTopicProgress.countDocuments({ user: userId, completed: true }),

      UserTopicProgress.find({ user: userId, completed: true }, "topic completedAt updatedAt")
        .populate("topic", "title slug subject")
        .sort({ completedAt: -1, updatedAt: -1 })
        .limit(10)
        .lean(),

      TestResult.find({ user: userId }, "test percentage score totalQuestions createdAt")
        .populate("test", "title")
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),

      UserQuizResult.find({ user: userId }, "percentage").lean(),

      TestResult.find({ user: userId }, "percentage score totalQuestions createdAt").lean(),

      UserCodingProgress.countDocuments({ user: userId, solved: true }),

      UserAssignment.countDocuments({ user: userId, status: "Submitted" }),

      UserAchievement.countDocuments({ user: userId }),

      Scholarship.find({ isActive: true }).lean(),

      UserScholarship.countDocuments({ user: userId, isSaved: true }),
    ]);

    // ─────────────────────────────────────────────────────────────────────────
    // 1. Core Quick Statistics
    // ─────────────────────────────────────────────────────────────────────────
    const progress =
      totalTopics === 0
        ? 0
        : Math.round((completedTopicDocs / totalTopics) * 100);

    const quizAverage =
      quizResults.length === 0
        ? 0
        : Math.round(
            quizResults.reduce((sum, q) => sum + (q.percentage || 0), 0) /
              quizResults.length
          );

    const testAverage =
      testResults.length === 0
        ? 0
        : Math.round(
            testResults.reduce((sum, t) => sum + (t.percentage || 0), 0) /
              testResults.length
          );

    // ─────────────────────────────────────────────────────────────────────────
    // 2. Standardized Career Readiness Calculation & Breakdown
    // ─────────────────────────────────────────────────────────────────────────
    const topicScore = Math.min(30, Math.round((completedTopicDocs / Math.max(totalTopics, 1)) * 30));
    const quizScore = Math.round((quizAverage / 100) * 20);
    const codingScore = Math.min(20, Math.round((codingSolved / 50) * 20));
    const assignScore = Math.min(10, Math.round((assignmentsCompleted / 20) * 10));
    const testScore = Math.round((testAverage / 100) * 20);

    const careerReadinessScore = Math.min(
      100,
      Math.max(0, topicScore + quizScore + codingScore + assignScore + testScore)
    );

    const careerReadinessLevel =
      careerReadinessScore >= 90
        ? "Placement Ready"
        : careerReadinessScore >= 75
        ? "Advanced"
        : careerReadinessScore >= 50
        ? "Intermediate"
        : careerReadinessScore >= 25
        ? "Developing"
        : "Beginner";

    // ─────────────────────────────────────────────────────────────────────────
    // 3. Placement Readiness Checklist (Data-Driven)
    // ─────────────────────────────────────────────────────────────────────────
    const placementChecklist = [
      {
        id: "topics",
        label: "Curriculum Coverage",
        title: progress >= 25 ? "Topic syllabus coverage on track" : "Complete more learning topics",
        status: progress >= 25 ? "met" : "warning",
        detail: `${completedTopicDocs} / ${totalTopics} topics completed (${progress}%)`,
        link: "/subjects",
        actionText: "Study Topics",
      },
      {
        id: "quizzes",
        label: "Quiz Conceptual Checks",
        title: (quizResults.length >= 3 && quizAverage >= 70) ? "Quiz performance is strong" : "Improve quiz performance",
        status: (quizResults.length >= 3 && quizAverage >= 70) ? "met" : "warning",
        detail: quizResults.length > 0 ? `${quizAverage}% average score across ${quizResults.length} quizzes` : "No topic quizzes completed yet",
        link: "/quiz-history",
        actionText: "Review Quizzes",
      },
      {
        id: "coding",
        label: "Coding Practice",
        title: codingSolved >= 25 ? "Coding practice is strong" : "Solve more coding problems",
        status: codingSolved >= 25 ? "met" : "warning",
        detail: `${codingSolved} coding challenges solved`,
        link: "/subjects",
        actionText: "Solve Problems",
      },
      {
        id: "tests",
        label: "Placement Mock Exams",
        title: (testResults.length >= 2 && testAverage >= 60) ? "Mock test scores are competitive" : "Improve mock test scores",
        status: (testResults.length >= 2 && testAverage >= 60) ? "met" : "warning",
        detail: testResults.length > 0 ? `${testAverage}% average across ${testResults.length} mock tests` : "No mock tests attempted yet",
        link: "/tests",
        actionText: "Take Mock Test",
      },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // 4. Dynamic "Next Best Action 🚀"
    // ─────────────────────────────────────────────────────────────────────────
    let nextBestAction;
    if (totalTopics > 0 && (completedTopicDocs / totalTopics) < 0.15) {
      nextBestAction = {
        title: "Focus on completing learning topics",
        reason: `You have completed ${completedTopicDocs} of ${totalTopics} curriculum topics. Mastering core fundamentals is your first stepping stone toward placement success.`,
        actionText: "Continue Learning",
        actionLink: "/subjects",
      };
    } else if (codingSolved < 15) {
      nextBestAction = {
        title: "Solve more coding problems",
        reason: `You have solved ${codingSolved} problems so far. Build interview-ready algorithmic speed by solving more hands-on coding challenges.`,
        actionText: "Practice Coding",
        actionLink: "/subjects",
      };
    } else if (quizResults.length > 0 && quizAverage < 70) {
      nextBestAction = {
        title: "Improve your quiz performance",
        reason: `Your topic quiz average is currently ${quizAverage}%. Revisiting core subject notes will elevate your conceptual clarity for technical screenings.`,
        actionText: "Review Quizzes",
        actionLink: "/quiz-history",
      };
    } else if (testResults.length === 0) {
      nextBestAction = {
        title: "Practice placement mock tests",
        reason: "Take your first placement mock test to benchmark your aptitude, speed, and technical exam readiness.",
        actionText: "Take a Mock Test",
        actionLink: "/tests",
      };
    } else if (testAverage < 65) {
      nextBestAction = {
        title: "Improve mock test scores",
        reason: `Your mock test average is ${testAverage}%. Practicing full-length placement tests under timed conditions will boost your score.`,
        actionText: "Practice Placement Tests",
        actionLink: "/tests",
      };
    } else {
      nextBestAction = {
        title: "Advance your career preparation",
        reason: "Great consistency! Continue sharpening advanced domain skills, explore high-match career paths, and apply for verified scholarships.",
        actionText: "Explore Careers",
        actionLink: "/careers",
      };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 5. Accurate Scholarship Opportunities & Recommendations
    // ─────────────────────────────────────────────────────────────────────────
    // Only count active, verified scholarships with non-empty valid URLs
    const verifiedActiveScholarships = allActiveScholarships.filter((s) => {
      if (s.isVerified === false) return false;
      const url = s.applicationUrl || s.officialSourceUrl || s.sourceUrl;
      if (!url || typeof url !== "string" || url.trim().length === 0) return false;
      const lc = calculateScholarshipLifecycle(s, now);
      if (lc.isClosed) return false; // Exclude expired/closed scholarships
      return true;
    });

    let totalVerifiedScholarships = verifiedActiveScholarships.length;
    let scholarshipsClosingSoon = 0;
    let scholarshipsMatchingProfile = 0;

    // Portal priority order for recommendations: Buddy4Study, Vidyasaarathi, Government, Official Provider, University
    const portalPriority = {
      Buddy4Study: 5,
      Vidyasaarathi: 4,
      Government: 3,
      "Official Provider": 2,
      University: 1,
    };

    const enrichedScholarships = verifiedActiveScholarships.map((sch) => {
      const lifecycle = calculateScholarshipLifecycle(sch, now);
      const match = computeScholarshipMatch(sch, user);

      if (lifecycle.isClosingSoon) {
        scholarshipsClosingSoon++;
      }
      if (match.matchScore >= 60) {
        scholarshipsMatchingProfile++;
      }

      return {
        _id: sch._id,
        title: sch.title,
        provider: sch.provider,
        awardAmount: sch.awardAmount || sch.amount || "Financial Support",
        awardAmountValue: sch.awardAmountValue || 0,
        category: sch.category,
        sourcePortal: sch.sourcePortal,
        sourceUrl: sch.sourceUrl || sch.officialSourceUrl || sch.applicationUrl,
        applicationUrl: sch.applicationUrl || sch.officialSourceUrl,
        applicationDeadline: sch.applicationDeadline,
        isVerified: sch.isVerified !== false,
        lifecycle,
        match,
        portalRank: portalPriority[sch.sourcePortal] || 0,
      };
    });

    // Filter specifically for closing soon verified scholarships
    const closingSoonList = enrichedScholarships
      .filter((s) => s.lifecycle.isClosingSoon)
      .sort((a, b) => new Date(a.applicationDeadline) - new Date(b.applicationDeadline));

    // If closing soon exist (< 7 days), use them; otherwise fallback to nearest upcoming active deadlines
    const recommendedScholarships =
      closingSoonList.length > 0
        ? closingSoonList.slice(0, 3)
        : enrichedScholarships
            .filter((s) => s.applicationDeadline && !s.lifecycle.isClosed)
            .sort((a, b) => new Date(a.applicationDeadline) - new Date(b.applicationDeadline))
            .slice(0, 3);

    // ─────────────────────────────────────────────────────────────────────────
    // 6. Recent Topics Completed (Clean Fallbacks, Never Generic "Topic")
    // ─────────────────────────────────────────────────────────────────────────
    const recentTopics = recentTopicProgressDocs
      .filter((item) => item.topic && typeof item.topic === "object")
      .map((item) => ({
        _id: item._id,
        topic: {
          _id: item.topic._id,
          title: item.topic.title || "Topic information unavailable",
          slug: item.topic.slug || "",
        },
        title: item.topic.title || "Topic information unavailable",
        completedAt: item.completedAt || item.updatedAt || new Date(),
      }))
      .slice(0, 5);

    // ─────────────────────────────────────────────────────────────────────────
    // 7. Recent Test Attempts (Data-Driven, Clean Fallbacks)
    // ─────────────────────────────────────────────────────────────────────────
    const recentTests = recentTestResultDocs
      .filter((item) => item.test && typeof item.test === "object")
      .map((item) => ({
        _id: item._id,
        test: {
          _id: item.test._id,
          title: item.test.title || "Placement Mock Test",
        },
        title: item.test.title || "Placement Mock Test",
        percentage: typeof item.percentage === "number" ? item.percentage : 0,
        score: item.score ?? 0,
        totalQuestions: item.totalQuestions ?? 0,
        attemptedAt: item.createdAt || new Date(),
      }))
      .slice(0, 5);

    // ─────────────────────────────────────────────────────────────────────────
    // 8. Consolidated Response Payload
    // ─────────────────────────────────────────────────────────────────────────
    res.status(200).json({
      success: true,
      dashboard: {
        user,
        stats: {
          totalTopics,
          completedTopics: completedTopicDocs,
          progress,
          codingSolved,
          quizAverage,
          testAverage,
          assignmentsCompleted,
          achievementsUnlocked,
          totalScholarships: totalVerifiedScholarships,
          totalVerifiedScholarships,
          scholarshipsClosingSoon,
          scholarshipsMatchingProfile,
          savedScholarships: savedScholarshipsCount,
        },
        careerReadiness: {
          careerReadiness: careerReadinessScore,
          level: careerReadinessLevel,
          breakdown: {
            topicScore,
            quizScore,
            codingScore,
            assignScore,
            testScore,
          },
          topicCompletion: progress,
          quizAverage,
          codingSolved,
          assignmentsCompleted,
          testsAverage: testAverage,
          checklist: placementChecklist,
        },
        placementChecklist,
        aiRecommendation: nextBestAction,
        recommendedScholarships,
        recentTopics,
        recentTests,
      },
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

module.exports = { getDashboard };