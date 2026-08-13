const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getQuizByTopic,
  submitQuiz,
  getMyQuizResults,
  getQuizResult,
} = require("../controllers/quizController");

// Get quiz of a topic
router.get("/topic/:topicId", protect, getQuizByTopic);

// Submit quiz (supports both /submit/:quizId and /:quizId/submit)
router.post("/submit/:quizId", protect, submitQuiz);
router.post("/:quizId/submit", protect, submitQuiz);

// Logged in user's quiz history
router.get("/my-results", protect, getMyQuizResults);

// Single quiz result
router.get("/result/:id", protect, getQuizResult);

module.exports = router;