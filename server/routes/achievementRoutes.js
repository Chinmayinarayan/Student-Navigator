const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getBadgeProgress,
} = require("../controllers/achievementController");

router.get(
  "/",
  authMiddleware,
  getBadgeProgress
);

module.exports = router;