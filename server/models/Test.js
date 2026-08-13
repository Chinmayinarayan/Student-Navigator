const mongoose = require("mongoose");


const testSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },


    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },


    title: {
      type: String,
      required: true,
    },


    description: {
      type: String,
      default:"",
    },


    // ── New placement fields ──────────────────────────────────────────────────
    category: {
      type: String,
      enum: [
        "Programming & DSA",
        "Core CS",
        "Development",
        "Specialized",
        "Placement",
      ],
      default: "Programming & DSA",
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Intermediate",
    },

    passingScore: {
      // percentage required to pass, e.g. 60 means 60%
      type: Number,
      default: 60,
    },

    topics: [
      {
        type: String, // topic names covered in this test
      }
    ],

    negativeMarking: {
      type: Boolean,
      default: false,
    },

    allowRetake: {
      type: Boolean,
      default: true,
    },
    // ─────────────────────────────────────────────────────────────────────────


    duration: {
      type: Number,
      default:30,
    },


    totalMarks:{
      type:Number,
      default:0,
    },


    questions:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
      }
    ],

  },
  {
    timestamps:true,
  }
);


module.exports = mongoose.model(
  "Test",
  testSchema
);