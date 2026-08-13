const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    type: {
      type: String,
      enum: [
        "mcq",
        "conceptual",
        "long-answer",
        "6-mark",
      ],
      default: "mcq",
      required: true,
    },

    questionType: {
      type: String,
      enum: [
        "theoretical",
        "logical",
        "application",
        "coding",
        "calculation",
        "scenario",
        "debugging",
      ],
      default: "theoretical",
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },

    question: {
      type: String,
      required: true,
    },

    options: [
      {
        type: String,
      },
    ],

    correctAnswer: {
      type: String,
    },

    explanation: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

questionSchema.index({ topic: 1, isActive: 1 });
questionSchema.index({ subject: 1, isActive: 1 });

module.exports = mongoose.model(
  "Question",
  questionSchema
);