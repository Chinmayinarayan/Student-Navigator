const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAssignmentsByTopic,
  getAssignmentById,
  submitAssignment,
  getAssignmentStatus,
} = require("../controllers/assignmentController");

// Get all assignments for a topic
router.get(
  "/topic/:topicId",
  protect,
  getAssignmentsByTopic
);

// Get single assignment
router.get(
  "/:id",
  protect,
  getAssignmentById
);

// Get logged-in user's assignment status
router.get(
  "/status/:id",
  protect,
  getAssignmentStatus
);

// Submit assignment
router.post(
  "/submit/:id",
  protect,
  submitAssignment
);

module.exports = router;