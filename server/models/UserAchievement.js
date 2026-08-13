const mongoose = require("mongoose");

const userAchievementSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    badgeName: {
      type: String,
      required: true,
    },

    badgeIcon: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    unlockedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


// Compound index to prevent duplicate achievements for the same user
userAchievementSchema.index({ user: 1, badgeName: 1 }, { unique: true });

module.exports = mongoose.model(
  "UserAchievement",
  userAchievementSchema
);