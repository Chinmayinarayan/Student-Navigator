const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      default: 10,
    },

    passingMarks: {
      type: Number,
      default: 40,
    },

    totalMarks: {
      type: Number,
      default: 0,
    },

    questions: [
      {
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
          required: true,
        },

        explanation: {
          type: String,
          default: "",
        },

        marks: {
          type: Number,
          default: 1,
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

        isActive: {
          type: Boolean,
          default: true,
        },
      },
    ],

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

quizSchema.index({ topic: 1, isPublished: 1 });

module.exports = mongoose.model("Quiz", quizSchema);