const mongoose = require("mongoose");

const userTopicProgressSchema = new mongoose.Schema(
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

    lastAccessed: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Fast counting of completed topics per user
userTopicProgressSchema.index({ user: 1, completed: 1 });

// Prevent duplicate progress records for the same user-topic pair
userTopicProgressSchema.index(
  { user: 1, topic: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "UserTopicProgress",
  userTopicProgressSchema
);