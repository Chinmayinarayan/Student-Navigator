/**
 * seedAlgorithmsCoding.js
 * Seeds CodingProblem documents for all Algorithms topics.
 * Run with: node server/seed/seedAlgorithmsCoding.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const CodingProblem = require("../models/CodingProblem");
const codingData = require("../data/subjects/algorithmsCodingPractice");

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");


  // Find Algorithms subject
  const subject = await Subject.findOne({ name: /algorithms/i });
  if (!subject) { console.error("Algorithms subject not found"); process.exit(1); }
  console.log("Found subject:", subject.name, subject._id);

  let inserted = 0;
  let skipped = 0;

  for (const entry of codingData) {
    const topic = await Topic.findOne({ subject: subject._id, title: entry.topic });
    if (!topic) {
      console.warn("  Topic not found:", entry.topic);
      skipped++;
      continue;
    }
    console.log("  Seeding topic:", topic.title);

    for (let i = 0; i < entry.recommendedChallenges.length; i++) {
      const ch = entry.recommendedChallenges[i];
      const existing = await CodingProblem.findOne({ topic: topic._id, title: ch.title });
      if (existing) {
        console.log("    Skip (exists):", ch.title);
        continue;
      }
      await CodingProblem.create({
        topic: topic._id,
        title: ch.title,
        description: `Practice problem: ${ch.title}. Solve on ${ch.platform}.`,
        difficulty: ch.difficulty === "Beginner" ? "Easy" : ch.difficulty,
        platform: ["LeetCode","Codeforces","CodeChef","HackerRank","GeeksforGeeks"].includes(ch.platform) ? ch.platform : "Custom",
        problemUrl: ch.url,
        tags: [entry.topic],
        order: i + 1,
        estimatedMinutes: ch.difficulty === "Hard" ? 60 : ch.difficulty === "Medium" ? 40 : 25,
        isPublished: true
      });
      inserted++;
      console.log("    Inserted:", ch.title, `(${ch.difficulty})`);
    }
  }

  console.log(`\nDone. Inserted: ${inserted}, Skipped topics: ${skipped}`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
