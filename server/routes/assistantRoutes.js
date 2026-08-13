const express = require("express");
const { chat } = require("../controllers/assistantController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/assistant/chat
// Protected: requires a valid JWT token (existing auth middleware)
router.post("/chat", protect, chat);

module.exports = router;
