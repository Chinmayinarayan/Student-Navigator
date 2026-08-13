const mongoose = require("mongoose");

const userCodingProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    codingProblem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CodingProblem",
      required: true,
      index: true,
    },

    solved: {
      type: Boolean,
      default: false,
    },

    solvedAt: {
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

userCodingProgressSchema.index(
  { user: 1, codingProblem: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "UserCodingProgress",
  userCodingProgressSchema
);