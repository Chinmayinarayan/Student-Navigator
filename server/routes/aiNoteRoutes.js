const express = require("express");
const { saveNote, getNotes, deleteNote } = require("../controllers/aiNoteController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// All routes require authentication
router.post("/", protect, saveNote);
router.get("/", protect, getNotes);
router.delete("/:id", protect, deleteNote);

module.exports = router;
