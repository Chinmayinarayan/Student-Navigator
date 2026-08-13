const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getResourcesBySubject,
} = require("../controllers/resourceController");

router.get("/:subjectId", protect, getResourcesBySubject);

module.exports = router;