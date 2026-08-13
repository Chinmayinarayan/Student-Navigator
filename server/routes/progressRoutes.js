const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  toggleTopicCompletion,
  getTopicProgress,
  getSubjectProgress,
  getAllSubjectsProgress,
} = require("../controllers/progressController");

// Get progress for all subjects
router.get("/", protect, getAllSubjectsProgress);

// Toggle topic completion
router.post("/topic/:topicId", protect, toggleTopicCompletion);

// Get topic progress
router.get("/topic/:topicId", protect, getTopicProgress);

// Get subject progress
router.get("/subject/:subjectId", protect, getSubjectProgress);

module.exports = router;