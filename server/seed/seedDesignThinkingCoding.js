/**
 * seedDesignThinkingCoding.js
 * Cleans CodingProblem documents for all Design Thinking for Social Innovation topics.
 * Run with: node server/seed/seedDesignThinkingCoding.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const CodingProblem = require("../models/CodingProblem");
const UserCodingProgress = require("../models/UserCodingProgress");
const codingData = require("../data/subjects/designThinkingCodingPractice");

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Find Design Thinking for Social Innovation subject
  const subject = await Subject.findOne({ name: /design thinking/i });
  if (!subject) {
    console.error("Design Thinking for Social Innovation subject not found");
    process.exit(1);
  }
  console.log("Found subject:", subject.name, subject._id);

  let inserted = 0;
  let updated = 0;
  let deleted = 0;

  for (const entry of codingData) {
    const topic = await Topic.findOne({ subject: subject._id, title: entry.topic });
    if (!topic) {
      console.warn("  Topic not found:", entry.topic);
      continue;
    }
    console.log("  Processing topic:", topic.title);

    const validTitles = entry.recommendedChallenges.map((c) => c.title);

    // Delete obsolete / old problems for this topic
    const oldProblems = await CodingProblem.find({
      topic: topic._id,
      title: { $nin: validTitles }
    });

    for (const old of oldProblems) {
      await UserCodingProgress.deleteMany({ codingProblem: old._id });
      await CodingProblem.deleteOne({ _id: old._id });
      console.log("    Deleted obsolete:", old.title);
      deleted++;
    }
  }

  console.log(`\nDone. Inserted: ${inserted}, Updated: ${updated}, Deleted: ${deleted}`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
