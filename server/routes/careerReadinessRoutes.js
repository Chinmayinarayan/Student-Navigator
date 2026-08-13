const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getCareerReadiness,
} = require("../controllers/careerReadinessController");

// =====================================
// Career Readiness API
// =====================================

router.get(
  "/",
  protect,
  getCareerReadiness
);

module.exports = router;