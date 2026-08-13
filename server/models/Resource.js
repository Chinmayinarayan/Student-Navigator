const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    topic: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["youtube", "book", "article", "website"],
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resource", resourceSchema);