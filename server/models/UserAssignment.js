const mongoose = require("mongoose");

const userAssignmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Submitted", "Reviewed"],
      default: "Pending",
    },

    submissionLink: {
      type: String,
      default: "",
    },

    submittedAt: {
      type: Date,
    },

    marks: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

userAssignmentSchema.index(
  {
    user: 1,
    assignment: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model(
  "UserAssignment",
  userAssignmentSchema
);