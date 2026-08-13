const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },

    score: {
      type: Number,
      default: 0,
    },

    totalQuestions: {
      type: Number,
      default: 0,
    },

    percentage: {
      type: Number,
      default: 0,
    },

    // ── Detailed result fields ────────────────────────────────────────────────
    correctAnswers: {
      type: Number,
      default: 0,
    },

    incorrectAnswers: {
      type: Number,
      default: 0,
    },

    unanswered: {
      type: Number,
      default: 0,
    },

    timeTaken: {
      // seconds elapsed during the test
      type: Number,
      default: 0,
    },

    passed: {
      type: Boolean,
      default: false,
    },

    topicPerformance: [
      {
        topic: { type: String },
        correct: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
      },
    ],
    // ─────────────────────────────────────────────────────────────────────────
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TestResult", testResultSchema);