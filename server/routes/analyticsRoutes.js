const express = require("express");

const router = express.Router();

const {
  getDashboardAnalytics,
} = require("../controllers/analyticsController");

const authMiddleware = require("../middleware/authMiddleware");

// Dashboard Analytics
router.get(
  "/dashboard",
  authMiddleware,
  getDashboardAnalytics
);

module.exports = router;