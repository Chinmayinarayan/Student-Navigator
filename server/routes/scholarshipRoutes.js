const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  getScholarships,
  getScholarshipSummary,
  getClosingSoonScholarships,
  getRecommendedScholarships,
  getSavedScholarships,
  getUserApplications,
  getScholarshipById,
  toggleSaveScholarship,
  updateApplicationStatus,
  setScholarshipReminder,
} = require("../controllers/scholarshipController");

// Public/Protected with optional auth or protected routes
router.get("/", protect, getScholarships);
router.get("/summary", protect, getScholarshipSummary);
router.get("/closing-soon", protect, getClosingSoonScholarships);
router.get("/recommended", protect, getRecommendedScholarships);
router.get("/saved", protect, getSavedScholarships);
router.get("/applications", protect, getUserApplications);
router.get("/:id", protect, getScholarshipById);

router.post("/:id/toggle-save", protect, toggleSaveScholarship);
router.post("/:id/status", protect, updateApplicationStatus);
router.post("/:id/reminder", protect, setScholarshipReminder);

module.exports = router;
