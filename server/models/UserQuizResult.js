const mongoose = require("mongoose");

const userQuizResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    totalQuestions: {
      type: Number,
      default: 10,
    },

    questionIds: [
      {
        type: String,
      },
    ],

    // Complete snapshot of questions served for this specific attempt
    servedQuestions: [
      {
        questionId: String,
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
        questionType: {
          type: String,
          default: "theoretical",
        },
        difficulty: {
          type: String,
          default: "medium",
        },
        marks: {
          type: Number,
          default: 1,
        },
      },
    ],

    score: {
      type: Number,
      default: 0,
    },

    totalMarks: {
      type: Number,
      default: 10,
    },

    percentage: {
      type: Number,
      default: 0,
    },

    answers: [
      {
        questionIndex: Number,
        questionText: String,
        selectedAnswer: String,
        correctAnswer: String,
        explanation: String,
        isCorrect: Boolean,
      },
    ],

    startedAt: {
      type: Date,
      default: Date.now,
    },

    submittedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userQuizResultSchema.index({ user: 1, topic: 1, createdAt: -1 });
userQuizResultSchema.index({ user: 1, isCompleted: 1 });
userQuizResultSchema.index({ quiz: 1 });

module.exports = mongoose.model("UserQuizResult", userQuizResultSchema);