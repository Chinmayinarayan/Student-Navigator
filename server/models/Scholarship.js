const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    provider: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    awardAmount: {
      type: String,
      required: true,
      trim: true, // e.g. "₹75,000 / year", "Up to ₹2,00,000", "Full Tuition + ₹10,000/month stipend"
    },
    awardAmountValue: {
      type: Number,
      default: 0, // Numeric amount for sorting/filtering e.g. 50000
    },
    currency: {
      type: String,
      default: "INR",
    },
    category: {
      type: String,
      enum: [
        "Government",
        "Corporate",
        "University",
        "STEM/Engineering",
        "Merit-Based",
        "Need-Based",
        "Research",
        "International",
      ],
      required: true,
    },
    type: {
      type: String,
      default: "Merit-Based", // Merit, Need-based, Government, Corporate, Private, Minority/category-based, Women, Disability, Research, Other
    },
    eligibilitySummary: {
      type: String,
      required: true,
      trim: true,
    },
    eligibleEducationLevel: [
      {
        type: String,
        enum: ["10th", "12th", "Diploma", "Undergraduate", "Postgraduate", "PhD"],
        trim: true,
      },
    ],
    minimumCGPA: {
      type: Number,
      default: 0, // e.g. 7.5 (or 0 if no min CGPA required)
    },
    minimumPercentage: {
      type: Number,
      default: 0, // e.g. 60, 75, 85
    },
    eligibleCourses: [
      {
        type: String,
        trim: true,
      },
    ], // e.g. ["B.Tech", "B.E.", "BCA", "MCA", "B.Sc", "M.Tech", "Undergraduate", "Postgraduate", "Engineering", "Computer Science"]
    eligibleBranches: [
      {
        type: String,
        trim: true,
      },
    ], // e.g. ["Computer Science", "Information Technology", "Electronics", "Mechanical", "Civil", "All Engineering"]
    eligibleYears: [
      {
        type: String,
        trim: true,
      },
    ], // e.g. ["1st Year", "2nd Year", "3rd Year", "4th Year", "All Years"]
    eligibleLocations: [
      {
        type: String,
        trim: true,
      },
    ], // e.g. ["India", "Karnataka", "All States", "International"]
    eligibleStates: [
      {
        type: String,
        trim: true,
      },
    ],
    incomeRequirement: {
      type: String,
      default: "", // e.g. "Annual family income < ₹6,00,000" or empty
    },
    maxAnnualIncome: {
      type: Number,
      default: 0, // numeric limit if applicable e.g. 600000
    },
    genderRequirement: {
      type: String,
      enum: ["All", "Female", "Male", "Transgender"],
      default: "All",
    },
    ageRequirement: {
      type: String,
      default: "",
    },
    benefits: [
      {
        type: String,
        trim: true,
      },
    ],
    requiredDocuments: [
      {
        type: String,
        trim: true,
      },
    ],
    applicationOpenDate: {
      type: Date,
    },
    applicationDeadline: {
      type: Date,
    },
    deadlineUnknown: {
      type: Boolean,
      default: false,
    },
    resultDate: {
      type: String,
      default: "",
    },
    applicationProcess: [
      {
        stepNumber: Number,
        title: String,
        description: String,
      },
    ],
    applicationUrl: {
      type: String,
      required: true,
      trim: true,
    },
    officialSourceUrl: {
      type: String,
      required: true,
      trim: true,
    },
    sourceUrl: {
      type: String,
      trim: true,
    },
    officialSourceName: {
      type: String,
      default: "Official Scholarship Portal",
      trim: true,
    },
    sourcePortal: {
      type: String,
      enum: ["Buddy4Study", "Vidyasaarathi", "Government", "Official Provider", "University"],
      default: "Official Provider",
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    isOfficialVerified: {
      type: Boolean,
      default: true,
    },
    lastVerifiedAt: {
      type: Date,
      default: Date.now,
    },
    logoUrl: {
      type: String,
      default: "",
    },
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    careerPaths: [
      {
        type: String,
        trim: true,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual alias for amount & deadline
scholarshipSchema.virtual("amount").get(function () {
  return this.awardAmount;
});
scholarshipSchema.virtual("deadline").get(function () {
  return this.applicationDeadline;
});

// Helpful text search index
scholarshipSchema.index({
  title: "text",
  provider: "text",
  description: "text",
  eligibilitySummary: "text",
  eligibleCourses: "text",
  eligibleBranches: "text",
  category: "text",
  sourcePortal: "text",
  eligibleLocations: "text",
});

module.exports = mongoose.model("Scholarship", scholarshipSchema);
