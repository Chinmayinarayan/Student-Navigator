const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getRoadmap,
} = require("../controllers/roadmapController");

// ==========================================
// Get Personalized Roadmap
// ==========================================

router.get(
  "/:careerId",
  protect,
  getRoadmap
);

module.exports = router;