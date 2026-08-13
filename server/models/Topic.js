const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    learningObjectives: [
      {
        type: String,
      },
    ],

    notes: [
      {
        title: String,
        content: String,
      },
    ],

    youtubeResources: [
      {
        title: String,
        url: String,
        channel: String,
                category: {
          type: String,
          enum: ["Beginner", "University Level", "Placement Focus", "Experiment Demonstration", "Theory Explanation", "Viva Preparation"],
        },
        recommended: {
          type: Boolean,
          default: false,
        },
      },
    ],

    books: [
      {
        title: String,
        author: String,
        url: String,
      },
    ],

    practiceLinks: [
      {
        title: String,
        url: String,
      },
    ],

    order: {
      type: Number,
      required: true,
    },

    estimatedHours: {
      type: Number,
      default: 1,
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    prerequisites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],

    nextTopics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],

    questionBank: {
      conceptual: [String],
      sixMarks: [String],
      longAnswer: [String]
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

// Indexes for fast subject-scoped and published-state queries
topicSchema.index({ subject: 1, isPublished: 1 });
topicSchema.index({ isPublished: 1 });

module.exports = mongoose.model("Topic", topicSchema);