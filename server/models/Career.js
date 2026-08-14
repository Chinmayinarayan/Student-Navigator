const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Software Development",
        "AI & Data",
        "Cloud & Infrastructure",
        "Security",
      ],
      default: "Software Development",
    },

    icon: {
      type: String,
      default: "Code",
    },

    level: {
      type: String,
      enum: ["Beginner to Advanced", "Beginner", "Intermediate", "Advanced", "Intermediate to Advanced"],
      default: "Beginner to Advanced",
    },

    averageSalary: {
      type: String,
      default: "₹8 - ₹20 LPA",
    },

    industryDemand: {
      type: String,
      enum: ["Moderate", "High", "Very High", "Exponential", "Critical Growth"],
      default: "Very High",
    },

    responsibilities: [
      {
        type: String,
      },
    ],

    opportunities: [
      {
        type: String,
      },
    ],

    requiredSkills: [
      {
        type: String,
      },
    ],

    essentialSkills: [
      {
        type: String,
      },
    ],

    importantSkills: [
      {
        type: String,
      },
    ],

    goodToHaveSkills: [
      {
        type: String,
      },
    ],

    relatedSubjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],

    relatedSubjectNames: [
      {
        type: String,
      },
    ],

    roadmap: {
      beginner: [String],
      intermediate: [String],
      advanced: [String],
    },

    roadmapPhases: [
      {
        phaseNumber: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          default: "",
        },
        estimatedWeeks: {
          type: Number,
          default: 4,
        },
        skills: [String],
        subjectNames: [String],
        subjects: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
          },
        ],
        keyTopics: [String],
        learningMilestones: [String],
      },
    ],

    projects: [
      {
        id: String,
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        difficulty: {
          type: String,
          enum: ["Beginner", "Intermediate", "Advanced"],
          default: "Beginner",
        },
        skills: [String],
        technologies: [String],
        expectedOutcome: {
          type: String,
          default: "",
        },
      },
    ],

    dsaRequirements: {
      isImportant: {
        type: Boolean,
        default: true,
      },
      topics: [String],
      recommendedProblemsCount: {
        type: Number,
        default: 120,
      },
      difficultyDistribution: {
        easy: { type: Number, default: 40 },
        medium: { type: Number, default: 60 },
        hard: { type: Number, default: 20 },
      },
      practiceRecommendations: [String],
      interviewFocusedTopics: [String],
    },

    interviewTopics: [
      {
        type: String,
      },
    ],

    certifications: [String],
  },
  {
    timestamps: true,
  }
);

// Indexes
careerSchema.index({ category: 1, title: 1 });

module.exports = mongoose.model("Career", careerSchema);
