const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getQuestionsBySubject,
  getQuestionProgress,
  toggleQuestionCompletion,
} = require("../controllers/questionController");

router.get("/:subjectId", protect, getQuestionsBySubject);
router.get("/progress/:topicId", protect, getQuestionProgress);
router.post("/progress/:topicId", protect, toggleQuestionCompletion);

module.exports = router;