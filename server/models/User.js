const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student",
    },

    degree: {
      type: String,
      default: "",
    },

    branch: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    cgpa: {
      type: Number,
      default: null,
    },

    state: {
      type: String,
      default: "",
    },

    familyIncome: {
      type: Number,
      default: null,
    },

    skills: [
      {
        type: String,
      },
    ],

    interests: [
      {
        type: String,
      },
    ],

    careerGoals: {
      type: String,
      default: "",
    },

    bookmarkedSubjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],

    savedEvents: [
      {
        event: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
        savedAt: {
          type: Date,
          default: Date.now,
        },
        reminderDaysBefore: {
          type: Number,
          default: null,
        },
      },
    ],

    progress: {
      type: Number,
      default: 0,
    },

    careerProjectProgress: [
      {
        career: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Career",
        },
        projectId: {
          type: String,
        },
        status: {
          type: String,
          enum: ["Not Started", "In Progress", "Completed"],
          default: "Not Started",
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);