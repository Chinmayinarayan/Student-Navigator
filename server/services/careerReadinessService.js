const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserQuizResult = require("../models/UserQuizResult");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserAssignment = require("../models/UserAssignment");
const TestResult = require("../models/TestResult");

// Standardized career readiness service
const calculateCareerReadiness = async (userId) => {
  const [
    totalTopics,
    completedTopics,
    quizResults,
    solvedProblems,
    completedAssignments,
    testResults,
  ] = await Promise.all([
    Topic.countDocuments({ isPublished: true }),
    UserTopicProgress.countDocuments({ user: userId, completed: true }),
    UserQuizResult.find({ user: userId }, "percentage"),
    UserCodingProgress.countDocuments({ user: userId, solved: true }),
    UserAssignment.countDocuments({ user: userId, status: "Submitted" }),
    TestResult.find({ user: userId }, "percentage"),
  ]);

  const topicPercentage =
    totalTopics === 0 ? 0 : (completedTopics / totalTopics) * 100;

  const quizAverage =
    quizResults.length === 0
      ? 0
      : quizResults.reduce((sum, q) => sum + q.percentage, 0) / quizResults.length;

  const testAverage =
    testResults.length === 0
      ? 0
      : testResults.reduce((sum, t) => sum + t.percentage, 0) / testResults.length;

  // Weighted component scores (sum = 100 max)
  const topicScore = Math.min(30, Math.round((completedTopics / Math.max(totalTopics, 1)) * 30));
  const quizScore = Math.round((quizAverage / 100) * 20);
  const codingScore = Math.min(20, Math.round((solvedProblems / 50) * 20));
  const assignScore = Math.min(10, Math.round((completedAssignments / 20) * 10));
  const testScore = Math.round((testAverage / 100) * 20);

  const careerReadiness = Math.min(100, Math.max(0, topicScore + quizScore + codingScore + assignScore + testScore));

  // 0–24% → Beginner, 25–49% → Developing, 50–74% → Intermediate, 75–89% → Advanced, 90–100% → Placement Ready
  const level =
    careerReadiness >= 90
      ? "Placement Ready"
      : careerReadiness >= 75
      ? "Advanced"
      : careerReadiness >= 50
      ? "Intermediate"
      : careerReadiness >= 25
      ? "Developing"
      : "Beginner";

  // Data-driven checklist items
  const checklist = [
    {
      id: "topics",
      label: "Learning Topics",
      title: topicPercentage >= 25 ? "Topic syllabus coverage on track" : "Complete more learning topics",
      status: topicPercentage >= 25 ? "met" : "warning",
      detail: `${completedTopics} / ${totalTopics} topics completed (${Math.round(topicPercentage)}%)`,
      link: "/subjects",
      actionText: "Continue Learning",
    },
    {
      id: "quizzes",
      label: "Quiz Performance",
      title: (quizResults.length >= 3 && quizAverage >= 70) ? "Quiz performance is strong" : "Improve quiz performance",
      status: (quizResults.length >= 3 && quizAverage >= 70) ? "met" : "warning",
      detail: quizResults.length > 0 ? `${Math.round(quizAverage)}% average across ${quizResults.length} quizzes` : "No quizzes attempted yet",
      link: "/quiz-history",
      actionText: "Review Quizzes",
    },
    {
      id: "coding",
      label: "Coding Problems",
      title: solvedProblems >= 25 ? "Coding practice is strong" : "Solve more coding problems",
      status: solvedProblems >= 25 ? "met" : "warning",
      detail: `${solvedProblems} coding challenges solved`,
      link: "/subjects",
      actionText: "Practice Coding",
    },
    {
      id: "tests",
      label: "Mock Tests",
      title: (testResults.length >= 2 && testAverage >= 60) ? "Mock test scores are competitive" : "Improve mock test scores",
      status: (testResults.length >= 2 && testAverage >= 60) ? "met" : "warning",
      detail: testResults.length > 0 ? `${Math.round(testAverage)}% average (${testResults.length} attempted)` : "No mock tests attempted yet",
      link: "/tests",
      actionText: "Take Mock Test",
    },
  ];

  const recommendations = [];
  if (topicPercentage < 25) recommendations.push("Complete more learning topics to cover core syllabus concepts.");
  if (quizAverage < 70) recommendations.push("Improve your quiz scores by reviewing topic notes and re-attempting quizzes.");
  if (solvedProblems < 25) recommendations.push("Solve more coding problems to strengthen your algorithmic problem solving.");
  if (testAverage < 60 || testResults.length === 0) recommendations.push("Practice placement mock exams under timed conditions.");

  return {
    careerReadiness,
    level,
    breakdown: {
      topicScore,
      quizScore,
      codingScore,
      assignScore,
      testScore,
    },
    topicCompletion: Math.round(topicPercentage),
    quizAverage: Math.round(quizAverage),
    codingSolved: solvedProblems,
    assignmentsCompleted: completedAssignments,
    testsAverage: Math.round(testAverage),
    testsAttempted: testResults.length,
    checklist,
    recommendations,
  };
};

module.exports = { calculateCareerReadiness };