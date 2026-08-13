const mongoose = require("mongoose");

const userScholarshipSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    scholarship: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scholarship",
      required: true,
      index: true,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
    savedAt: {
      type: Date,
      default: null,
    },
    reminderDaysBefore: {
      type: Number,
      default: null, // e.g. 30, 7, 3, 1
    },
    applicationStatus: {
      type: String,
      enum: [
        "Interested",
        "Saved",
        "Planning to Apply",
        "Application Started",
        "Submitted",
        "Shortlisted",
        "Selected",
        "Rejected",
        "Withdrawn",
      ],
      default: "Saved",
    },
    notes: {
      type: String,
      default: "",
    },
    appliedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index so a user can only have one tracking record per scholarship
userScholarshipSchema.index({ user: 1, scholarship: 1 }, { unique: true });

module.exports = mongoose.model("UserScholarship", userScholarshipSchema);
