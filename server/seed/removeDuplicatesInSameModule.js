require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const removeDuplicateProblemsInSameModule = async () => {
  try {
    await connectDB();
    console.log("Scanning all topics for duplicate coding problem URLs within the same module...\n");

    const topics = await Topic.find().populate('subject');
    let totalDuplicatesRemoved = 0;
    let affectedTopicsCount = 0;

    for (const topic of topics) {
      const problems = await CodingProblem.find({ topic: topic._id }).sort({ order: 1, createdAt: 1 });
      if (problems.length <= 1) continue;

      const seenUrls = new Set();
      const seenTitles = new Set();
      const duplicateIds = [];

      for (const p of problems) {
        // Normalize URL (strip trailing slashes and query params for comparison)
        const normalizedUrl = (p.problemUrl || "").trim().replace(/\/+$/, "").toLowerCase();
        const normalizedTitle = (p.title || "").trim().toLowerCase();

        if (seenUrls.has(normalizedUrl) || seenTitles.has(normalizedTitle)) {
          duplicateIds.push(p._id);
        } else {
          seenUrls.add(normalizedUrl);
          seenTitles.add(normalizedTitle);
        }
      }

      if (duplicateIds.length > 0) {
        const delResult = await CodingProblem.deleteMany({ _id: { $in: duplicateIds } });
        totalDuplicatesRemoved += delResult.deletedCount;
        affectedTopicsCount++;
        const subjectName = topic.subject?.name || "Unknown Subject";
        console.log(`🧹 Topic "${topic.title}" (${subjectName}): Removed ${delResult.deletedCount} duplicate problem link(s).`);
      }
    }

    console.log(`\n🎉 Duplicate cleanup complete!`);
    console.log(`- Affected Modules/Topics: ${affectedTopicsCount}`);
    console.log(`- Total Duplicate Problems Removed: ${totalDuplicatesRemoved}`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error removing duplicates:", err);
    process.exit(1);
  }
};

removeDuplicateProblemsInSameModule();
