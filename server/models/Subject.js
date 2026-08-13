const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    concepts: [
      {
        title: String,
        topics: [String],
      },
    ],

    youtubeResources: [
      {
        title: String,
        url: String,
      },
    ],

    textbooks: [
      {
        title: String,
        author: String,
        url: String,
      },
    ],

    softwareTools: [String],

    practicePlatforms: [String],

    roadmap: {
      beginner: [String],
      intermediate: [String],
      advanced: [String],
    },

    questionBank: {
      sixMarks: [String],
      conceptual: [String],
      longAnswer: [String],
    },

    careerPaths: [String],

    difficulty: {
      type: String,
      default: "Beginner",
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for fast sorted listing and published filtering
subjectSchema.index({ isPublished: 1, name: 1 });

module.exports = mongoose.model("Subject", subjectSchema);