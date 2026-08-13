/**
 * seedCoaCoding.js
 * Seeds CodingProblem documents for all Computer Organization and Architecture topics.
 * Run with: node server/seed/seedCoaCoding.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const CodingProblem = require("../models/CodingProblem");
const UserCodingProgress = require("../models/UserCodingProgress");
const codingData = require("../data/subjects/coaCodingPractice");

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Find Computer Organization and Architecture subject
  const subject = await Subject.findOne({ name: /computer organization and architecture/i });
  if (!subject) {
    console.error("Computer Organization and Architecture subject not found");
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

    // Insert or update curated challenges
    for (let i = 0; i < entry.recommendedChallenges.length; i++) {
      const ch = entry.recommendedChallenges[i];
      const existing = await CodingProblem.findOne({ topic: topic._id, title: ch.title });
      if (existing) {
        existing.order = i + 1;
        existing.problemUrl = ch.url;
        existing.difficulty = ch.difficulty === "Beginner" ? "Easy" : ch.difficulty;
        existing.platform = ["LeetCode", "Codeforces", "CodeChef", "HackerRank", "GeeksforGeeks"].includes(ch.platform) ? ch.platform : "Custom";
        await existing.save();
        console.log("    Updated (exists):", ch.title);
        updated++;
        continue;
      }
      await CodingProblem.create({
        topic: topic._id,
        title: ch.title,
        description: `Practice problem: ${ch.title}. Solve on ${ch.platform}.`,
        difficulty: ch.difficulty === "Beginner" ? "Easy" : ch.difficulty,
        platform: ["LeetCode", "Codeforces", "CodeChef", "HackerRank", "GeeksforGeeks"].includes(ch.platform) ? ch.platform : "Custom",
        problemUrl: ch.url,
        tags: [entry.topic],
        order: i + 1,
        estimatedMinutes: ch.difficulty === "Hard" ? 60 : ch.difficulty === "Medium" ? 40 : 25,
        isPublished: true,
      });
      inserted++;
      console.log("    Inserted:", ch.title, `(${ch.difficulty})`);
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
