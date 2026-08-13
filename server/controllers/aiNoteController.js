const AINote = require("../models/AINote");

// =============================================
// POST /api/ai-notes — Save a note
// =============================================
const saveNote = async (req, res) => {
  const { subject, topic, question, answer, difficulty, readingTime } = req.body;

  if (!subject || !topic || !question || !answer) {
    return res.status(400).json({
      success: false,
      message: "subject, topic, question, and answer are required.",
    });
  }

  try {
    const note = await AINote.create({
      user: req.user._id,
      subject,
      topic,
      question,
      answer,
      difficulty: difficulty || "Beginner",
      readingTime: readingTime || 1,
    });

    return res.status(201).json({ success: true, note });
  } catch (err) {
    console.error("[AI Notes] Save error:", err.message);
    return res.status(500).json({ success: false, message: "Failed to save note." });
  }
};

// =============================================
// GET /api/ai-notes — Get all notes for logged-in user
// =============================================
const getNotes = async (req, res) => {
  try {
    const notes = await AINote.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    // Group by subject → topic
    const grouped = {};
    notes.forEach((note) => {
      if (!grouped[note.subject]) grouped[note.subject] = {};
      if (!grouped[note.subject][note.topic]) grouped[note.subject][note.topic] = [];
      grouped[note.subject][note.topic].push(note);
    });

    return res.json({ success: true, notes, grouped });
  } catch (err) {
    console.error("[AI Notes] Fetch error:", err.message);
    return res.status(500).json({ success: false, message: "Failed to fetch notes." });
  }
};

// =============================================
// DELETE /api/ai-notes/:id — Delete a note
// =============================================
const deleteNote = async (req, res) => {
  try {
    const note = await AINote.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found." });
    }

    return res.json({ success: true, message: "Note deleted." });
  } catch (err) {
    console.error("[AI Notes] Delete error:", err.message);
    return res.status(500).json({ success: false, message: "Failed to delete note." });
  }
};

module.exports = { saveNote, getNotes, deleteNote };
