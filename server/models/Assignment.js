const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
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

    instructions: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    estimatedMinutes: {
      type: Number,
      default: 60,
    },

    dueDate: {
      type: Date,
    },

    maxMarks: {
      type: Number,
      default: 100,
    },

    pdfUrl: {
      type: String,
      default: "",
    },

    starterCodeUrl: {
      type: String,
      default: "",
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

module.exports = mongoose.model("Assignment", assignmentSchema);