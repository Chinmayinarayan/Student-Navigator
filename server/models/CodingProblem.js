const mongoose = require("mongoose");

const codingProblemSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    platform: {
      type: String,
      enum: [
        "LeetCode",
        "Codeforces",
        "CodeChef",
        "HackerRank",
        "GeeksforGeeks",
        "Custom",
      ],
      default: "Custom",
    },

    problemUrl: {
      type: String,
      required: true,
    },

    problemType: {
      type: String,
      enum: ["coding", "implementation", "SQL", "lab", "debugging"],
      default: "coding",
    },

    language: {
      type: String,
      default: "",
    },

    environment: {
      type: String,
      default: "",
    },

    placementImportance: {
      type: String,
      enum: ["Essential", "Important", "Optional"],
      default: "Essential",
    },

    problemStatement: {
      type: String,
      default: "",
    },

    inputFormat: {
      type: String,
      default: "",
    },

    outputFormat: {
      type: String,
      default: "",
    },

    constraints: {
      type: String,
      default: "",
    },

    sampleInput: {
      type: String,
      default: "",
    },

    sampleOutput: {
      type: String,
      default: "",
    },

    expectedLanguage: {
      type: String,
      default: "",
    },

    starterCode: {
      type: String,
      default: "",
    },

    expectedOutput: {
      type: String,
      default: "",
    },

    testCases: [
      {
        input: String,
        output: String,
        isHidden: { type: Boolean, default: false },
      },
    ],

    hints: [
      {
        type: String,
      },
    ],

    solution: {
      type: String,
      default: "",
    },

    tags: [
      {
        type: String,
      },
    ],

    order: {
      type: Number,
      default: 1,
    },

    estimatedMinutes: {
      type: Number,
      default: 30,
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

module.exports = mongoose.model(
  "CodingProblem",
  codingProblemSchema
);