const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: [
        "Hackathon",
        "Coding Contest",
        "Workshop",
        "Tech Event",
        "Conference",
        "Webinar",
        "Meetup",
        "Internship Drive",
        "Career Fair",
        "Certification Event",
      ],
      required: true,
    },

    organizer: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "Online",
    },

    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      default: "Online",
    },

    registrationUrl: {
      type: String,
      default: "",
      trim: true,
    },

    registrationLink: {
      type: String,
      default: "",
      trim: true,
    },

    officialSourceUrl: {
      type: String,
      default: "",
      trim: true,
    },

    officialSourceName: {
      type: String,
      default: "",
      trim: true,
    },

    isOfficialVerified: {
      type: Boolean,
      default: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    eventEndDate: {
      type: Date,
    },

    registrationDeadline: {
      type: Date,
    },

    deadline: {
      type: Date,
    },

    deadlineUnknown: {
      type: Boolean,
      default: false,
    },

    timezone: {
      type: String,
      default: "IST (UTC+5:30)",
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    eligibility: {
      type: String,
      default: "Open to all students",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    pastResourcesUrl: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to keep registrationLink and registrationUrl / deadline and registrationDeadline synced
eventSchema.pre("save", function (next) {
  if (!this.registrationUrl && this.registrationLink) {
    this.registrationUrl = this.registrationLink;
  }
  if (!this.registrationLink && this.registrationUrl) {
    this.registrationLink = this.registrationUrl;
  }
  if (!this.registrationDeadline && this.deadline) {
    this.registrationDeadline = this.deadline;
  }
  if (!this.deadline && this.registrationDeadline) {
    this.deadline = this.registrationDeadline;
  }
  next();
});

module.exports = mongoose.model("Event", eventSchema);