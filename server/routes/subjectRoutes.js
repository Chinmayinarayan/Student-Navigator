const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAllSubjects,
  getSubjectById,
  searchSubjects,
} = require("../controllers/subjectController");

router.get("/", getAllSubjects);
router.get("/search", searchSubjects);
router.get("/:id", getSubjectById);

module.exports = router;