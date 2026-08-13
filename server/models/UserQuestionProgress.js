const mongoose = require("mongoose");

const userQuestionProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      index: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate progress documents for the same user-topic pair
userQuestionProgressSchema.index(
  { user: 1, topic: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "UserQuestionProgress",
  userQuestionProgressSchema
);
