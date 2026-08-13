const mongoose = require("mongoose");

/**
 * AINote — stores a student's saved AI study assistant responses.
 * Grouped by subject + topic for the "My AI Notes" page.
 */
const aiNoteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    topic: {
      type: String,
      required: true,
      trim: true,
    },

    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    readingTime: {
      type: Number, // minutes
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AINote", aiNoteSchema);
