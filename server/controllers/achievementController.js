const UserAchievement = require("../models/UserAchievement");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserQuizResult = require("../models/UserQuizResult");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserAssignment = require("../models/UserAssignment");
const TestResult = require("../models/TestResult");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const User = require("../models/User");
const { calculateCareerReadiness } = require("../services/careerReadinessService");
const { unlockAchievement } = require("../services/achievementService");

// ============================================================
// Badge Definitions — single source of truth for all badges.
// To add a new badge, add an entry here. No frontend changes
// needed for the badge metadata.
// ============================================================
const BADGE_DEFINITIONS = [
  {
    name: "First Topic Completed",
    icon: "🎉",
    description: "Completed your first learning topic.",
    requirement: "Complete 1 topic",
    requirementType: "topic_completion",
    category: "Learning",
    target: 1,
  },
  {
    name: "Excellent Learner",
    icon: "🏆",
    description: "Maintained excellent learning performance across all subjects.",
    requirement: "Complete all core subjects",
    requirementType: "subject_completion",
    category: "Learning",
    target: null, // computed dynamically from DB subject count
  },
  {
    name: "Quiz Master",
    icon: "📝",
    description: "Scored 100% in a quiz.",
    requirement: "Score full marks in any quiz",
    requirementType: "quiz_score",
    category: "Assessment",
    target: 100,
  },
  {
    name: "Coding Champion",
    icon: "💻",
    description: "Solved 50 coding problems.",
    requirement: "Solve 50 coding problems",
    requirementType: "coding_count",
    category: "Coding",
    target: 50,
  },
  {
    name: "Assignment Hero",
    icon: "📚",
    description: "Completed 20 assignments.",
    requirement: "Submit 20 assignments",
    requirementType: "assignment_count",
    category: "Assignments",
    target: 20,
  },
  {
    name: "Placement Ready",
    icon: "🚀",
    description: "Completed placement preparation milestones.",
    requirement: "Reach 80%+ Career Readiness",
    requirementType: "career_readiness",
    category: "Career",
    target: 80,
  },
  {
    name: "Mock Test Ace",
    icon: "🎯",
    description: "Scored 80% or above in a placement mock test.",
    requirement: "Score 80%+ in any mock test",
    requirementType: "mock_test_high_score",
    category: "Assessment",
    target: 80,
  },
];

// ============================================================
// GET /api/achievements
// Returns all badge definitions enriched with live progress
// data from the database. Auto-unlocks badges whose threshold
// has just been met.
// ============================================================
const getBadgeProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    // ── 1. Run all DB queries in parallel ─────────────────────────────────
    const [
      userDoc,
      completedTopicsCount,
      allTopics,
      allSubjects,
      completedTopicDocs,
      quizResults,
      codingSolved,
      submittedAssignments,
      unlockedAchievements,
      careerReadinessData,
    ] = await Promise.all([
      User.findById(userId, "careerGoals").lean(),
      UserTopicProgress.countDocuments({ user: userId, completed: true }),
      Topic.find({ isPublished: true }, "_id subject").lean(),
      Subject.find({ isPublished: true }, "_id name").lean(),
      UserTopicProgress.find({ user: userId, completed: true }, "topic").lean(),
      UserQuizResult.find({ user: userId, isCompleted: true }, "percentage").lean(),
      UserCodingProgress.countDocuments({ user: userId, solved: true }),
      UserAssignment.countDocuments({ user: userId, status: { $in: ["Submitted", "Reviewed"] } }),
      UserAchievement.find({ user: userId }).lean(),
      calculateCareerReadiness(userId),
    ]);

    // Pre-fetch best test score for mock_test_high_score badge (used inline in switch)
    // This is fetched lazily inside the switch case, so no extra variable needed here.

    const hasCareerSelected = !!(userDoc?.careerGoals && userDoc.careerGoals.trim() !== "");

    // ── 2. Build subject completion map ───────────────────────────────────
    const completedTopicIdSet = new Set(
      completedTopicDocs.filter((d) => d && d.topic).map((d) => d.topic.toString())
    );

    // Group topics by subject
    const topicsBySubject = {};
    allTopics.forEach((t) => {
      if (t && t.subject) {
        const sid = t.subject.toString();
        if (!topicsBySubject[sid]) topicsBySubject[sid] = [];
        topicsBySubject[sid].push(t._id.toString());
      }
    });

    // A subject is "completed" when ALL its published topics are done
    const totalSubjects = allSubjects.length;
    const completedSubjectsCount = allSubjects.filter((subj) => {
      const sid = subj._id.toString();
      const topicIds = topicsBySubject[sid] || [];
      if (topicIds.length === 0) return false; // no topics → not completable
      return topicIds.every((tid) => completedTopicIdSet.has(tid));
    }).length;

    // ── 3. Best quiz score ─────────────────────────────────────────────────
    const bestQuizScore =
      quizResults.length === 0
        ? 0
        : Math.max(...quizResults.map((q) => q.percentage || 0));

    // ── 4. Career readiness score ──────────────────────────────────────────
    const careerReadiness = careerReadinessData?.careerReadiness ?? 0;

    // ── 5. Build index of already-unlocked badges ──────────────────────────
    const unlockedMap = {};
    unlockedAchievements.forEach((a) => {
      unlockedMap[a.badgeName] = a;
    });

    // ── 6. Evaluate each badge ─────────────────────────────────────────────
    const badges = await Promise.all(
      BADGE_DEFINITIONS.map(async (def) => {
        let current = 0;
        let target = def.target;
        let unlocked = false;
        let statusDetail = "";
        let careerInfo = null;

        switch (def.requirementType) {
          case "topic_completion":
            current = completedTopicsCount;
            target = 1;
            unlocked = current >= target;
            statusDetail = `${current} / ${target} completed`;
            break;

          case "subject_completion":
            current = completedSubjectsCount;
            target = totalSubjects;
            unlocked = totalSubjects > 0 && current >= target;
            statusDetail =
              totalSubjects === 0
                ? "No subjects found"
                : `${current} / ${target} core subjects completed`;
            break;

          case "quiz_score":
            current = bestQuizScore;
            target = 100;
            unlocked = current >= target;
            statusDetail =
              unlocked
                ? "100% achieved ✓"
                : `Best Quiz Score: ${Math.round(current)}%`;
            break;

          case "coding_count":
            current = codingSolved;
            target = 50;
            unlocked = current >= target;
            statusDetail = `${current} / ${target} problems`;
            break;

          case "assignment_count":
            current = submittedAssignments;
            target = 20;
            unlocked = current >= target;
            statusDetail = `${current} / ${target} assignments`;
            break;

          case "career_readiness":
            current = careerReadiness;
            target = 80;
            unlocked = current >= target;
            careerInfo = {
              hasCareerSelected,
              currentReadiness: careerReadiness,
            };
            statusDetail = hasCareerSelected
              ? `Current Career Readiness: ${Math.round(careerReadiness)}%`
              : "Select a career roadmap to start tracking placement readiness.";
            break;

          case "mock_test_high_score": {
            const bestTestResult = await TestResult.findOne(
              { user: userId },
              "percentage"
            ).sort({ percentage: -1 }).lean();
            current = bestTestResult?.percentage ?? 0;
            target = 80;
            unlocked = current >= target;
            statusDetail = bestTestResult
              ? `Best Mock Test Score: ${Math.round(current)}%`
              : "No mock tests attempted yet.";
            break;
          }

          default:
            break;
        }

        const percentage =
          target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0;

        // ── Auto-unlock if newly met ────────────────────────────────────────
        let justUnlocked = false;
        if (unlocked && !unlockedMap[def.name]) {
          await unlockAchievement(userId, def.name, def.icon, def.description);
          justUnlocked = true;
          // Add synthetic entry to map so earnedAt can be set to now
          unlockedMap[def.name] = { createdAt: new Date() };
        }

        const achievementRecord = unlockedMap[def.name];

        return {
          name: def.name,
          icon: def.icon,
          description: def.description,
          requirement: def.requirement,
          requirementType: def.requirementType,
          category: def.category,
          unlocked,
          justUnlocked,
          earnedAt: achievementRecord?.createdAt || null,
          progress: {
            current: Math.round(current),
            target,
            percentage,
          },
          statusDetail,
          careerInfo: careerInfo || undefined,
        };
      })
    );

    // ── 7. Summary counts ──────────────────────────────────────────────────
    const unlockedCount = badges.filter((b) => b.unlocked).length;
    const totalCount = badges.length;
    const overallPercentage =
      totalCount === 0 ? 0 : Math.round((unlockedCount / totalCount) * 100);

    res.status(200).json({
      success: true,
      summary: {
        unlocked: unlockedCount,
        total: totalCount,
        percentage: overallPercentage,
      },
      badges,
    });
  } catch (error) {
    console.error("Achievement Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getBadgeProgress,
};