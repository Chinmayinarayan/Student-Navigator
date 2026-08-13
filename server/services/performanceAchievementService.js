const UserTopicProgress = require("../models/UserTopicProgress");
const UserQuizResult = require("../models/UserQuizResult");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserAssignment = require("../models/UserAssignment");
const TestResult = require("../models/TestResult");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");

const { unlockAchievement } = require("./achievementService");
const { calculateCareerReadiness } = require("./careerReadinessService");

// =====================================================
// checkFirstTopicCompleted
// Called from progressController when a topic is marked
// complete. Unlocks the badge on first completion.
// =====================================================
const checkFirstTopicCompleted = async (userId) => {
  try {
    const count = await UserTopicProgress.countDocuments({
      user: userId,
      completed: true,
    });

    if (count >= 1) {
      await unlockAchievement(
        userId,
        "First Topic Completed",
        "🎉",
        "Completed your first learning topic."
      );
    }
  } catch (error) {
    console.error("checkFirstTopicCompleted Error:", error.message);
  }
};

// =====================================================
// checkExcellentLearner
// Unlocks when the user has completed ALL topics in
// every published subject (100% per subject).
// "Core subjects" = all published subjects in the DB.
// =====================================================
const checkExcellentLearner = async (userId) => {
  try {
    const [allSubjects, allTopics, completedTopicDocs] = await Promise.all([
      Subject.find({ isPublished: true }, "_id").lean(),
      Topic.find({ isPublished: true }, "_id subject").lean(),
      UserTopicProgress.find({ user: userId, completed: true }, "topic").lean(),
    ]);

    if (allSubjects.length === 0) return;

    const completedSet = new Set(
      completedTopicDocs.map((d) => d.topic.toString())
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

    // Every subject must have all its topics completed
    const allComplete = allSubjects.every((subj) => {
      const sid = subj._id.toString();
      const topicIds = topicsBySubject[sid] || [];
      if (topicIds.length === 0) return false;
      return topicIds.every((tid) => completedSet.has(tid));
    });

    if (allComplete) {
      await unlockAchievement(
        userId,
        "Excellent Learner",
        "🏆",
        "Maintained excellent learning performance across all subjects."
      );
    }
  } catch (error) {
    console.error("checkExcellentLearner Error:", error.message);
  }
};

// =====================================================
// checkQuizMaster
// Unlocks when any quiz result has percentage === 100.
// Called from quizController after quiz submission.
// =====================================================
const checkQuizMaster = async (userId) => {
  try {
    const perfect = await UserQuizResult.findOne({
      user: userId,
      isCompleted: true,
      percentage: 100,
    }).lean();

    if (perfect) {
      await unlockAchievement(
        userId,
        "Quiz Master",
        "📝",
        "Scored 100% in a quiz."
      );
    }
  } catch (error) {
    console.error("checkQuizMaster Error:", error.message);
  }
};

// =====================================================
// checkCodingChampion
// Unlocks when user has solved >= 50 coding problems.
// Called from codingProblemController when a problem
// is marked solved.
// =====================================================
const checkCodingChampion = async (userId) => {
  try {
    const solved = await UserCodingProgress.countDocuments({
      user: userId,
      solved: true,
    });

    if (solved >= 50) {
      await unlockAchievement(
        userId,
        "Coding Champion",
        "💻",
        "Solved 50 coding problems."
      );
    }
  } catch (error) {
    console.error("checkCodingChampion Error:", error.message);
  }
};

// =====================================================
// checkAssignmentHero
// Unlocks when user has submitted/reviewed >= 20 assignments.
// Called from assignmentController after submission.
// =====================================================
const checkAssignmentHero = async (userId) => {
  try {
    const submitted = await UserAssignment.countDocuments({
      user: userId,
      status: { $in: ["Submitted", "Reviewed"] },
    });

    if (submitted >= 20) {
      await unlockAchievement(
        userId,
        "Assignment Hero",
        "📚",
        "Completed 20 assignments."
      );
    }
  } catch (error) {
    console.error("checkAssignmentHero Error:", error.message);
  }
};

// =====================================================
// checkPlacementReady
// Unlocks when career readiness score >= 80.
// =====================================================
const checkPlacementReady = async (userId) => {
  try {
    const { careerReadiness } = await calculateCareerReadiness(userId);

    if (careerReadiness >= 80) {
      await unlockAchievement(
        userId,
        "Placement Ready",
        "🚀",
        "Completed placement preparation milestones."
      );
    }
  } catch (error) {
    console.error("checkPlacementReady Error:", error.message);
  }
};

// =====================================================
// checkMockTestAce
// Unlocks when user scores 80%+ in any mock test.
// Called from testController after test submission.
// =====================================================
const checkMockTestAce = async (userId) => {
  try {
    const highScore = await TestResult.findOne({
      user: userId,
      percentage: { $gte: 80 },
    }).lean();

    if (highScore) {
      await unlockAchievement(
        userId,
        "Mock Test Ace",
        "\uD83C\uDFAF",
        "Scored 80% or above in a placement mock test."
      );
    }
  } catch (error) {
    console.error("checkMockTestAce Error:", error.message);
  }
};

module.exports = {
  checkFirstTopicCompleted,
  checkExcellentLearner,
  checkQuizMaster,
  checkCodingChampion,
  checkAssignmentHero,
  checkPlacementReady,
  checkMockTestAce,
};