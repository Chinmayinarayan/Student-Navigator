const express = require("express");

const {
  getTopics,
  getTopicsBySubject,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
} = require("../controllers/topicController");

const { getTopicPrerequisites, getSubjectPrerequisites } = require("../controllers/prerequisiteController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

// Public Routes
router.get("/", getTopics);
router.get("/subject/:subjectId/prerequisites", getSubjectPrerequisites);
router.get("/subject/:subjectId", getTopicsBySubject);
router.get("/:id", getTopicById);
router.get("/:topicId/prerequisites", protect, getTopicPrerequisites);

// Admin Routes
router.post("/", protect, adminOnly, createTopic);
router.put("/:id", protect, adminOnly, updateTopic);
router.delete("/:id", protect, adminOnly, deleteTopic);

module.exports = router;