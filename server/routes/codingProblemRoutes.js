const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getProblemsByTopic,
  toggleProblemCompletion,
  getProblemProgress,
} = require("../controllers/codingProblemController");

// Get all coding problems for a topic
router.get("/topic/:topicId", protect, getProblemsByTopic);

// Get coding problem progress
router.get("/progress/:problemId", protect, getProblemProgress);

// Toggle solved / unsolved
router.post("/progress/:problemId", protect, toggleProblemCompletion);

module.exports = router;