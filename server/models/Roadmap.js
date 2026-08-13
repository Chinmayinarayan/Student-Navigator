const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Career",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      default: 1,
    },

    estimatedWeeks: {
      type: Number,
      default: 2,
    },

    requiredSubjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],

    requiredSkills: [
      {
        type: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
      },
    ],

    interviewTopics: [
      {
        type: String,
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

module.exports = mongoose.model(
  "Roadmap",
  roadmapSchema
);