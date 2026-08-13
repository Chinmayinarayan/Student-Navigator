require('dotenv').config();
const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');

console.log("=== SEEDING TOPIC PREREQUISITES & NEXT TOPICS ===");

const seedPrerequisites = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully.");

    // ==========================================
    // 1. Seed for Subject: "Algorithms"
    // ==========================================
    const algoSubject = await Subject.findOne({ name: /^Algorithms$/i });
    if (algoSubject) {
      console.log(`Found subject: "Algorithms" (ID: ${algoSubject._id})`);

      const intro = await Topic.findOne({ subject: algoSubject._id, title: /Introduction to Algorithms/i });
      const complexity = await Topic.findOne({ subject: algoSubject._id, title: /Complexity Analysis/i });
      const searching = await Topic.findOne({ subject: algoSubject._id, title: /Searching Algorithms/i });
      const sorting = await Topic.findOne({ subject: algoSubject._id, title: /Sorting Algorithms/i });
      const recursion = await Topic.findOne({ subject: algoSubject._id, title: /Recursion Algorithms/i });
      const divide = await Topic.findOne({ subject: algoSubject._id, title: /Divide and Conquer/i });
      const greedy = await Topic.findOne({ subject: algoSubject._id, title: /Greedy Algorithms/i });
      const dp = await Topic.findOne({ subject: algoSubject._id, title: /Dynamic Programming/i });

      if (intro && complexity && searching && sorting && recursion && divide && greedy && dp) {
        console.log("Found all Algorithms topics. Updating relationships...");

        // Intro
        intro.prerequisites = [];
        intro.nextTopics = [complexity._id];
        await intro.save();

        // Complexity Analysis Basics
        complexity.prerequisites = [intro._id];
        complexity.nextTopics = [searching._id, sorting._id];
        await complexity.save();

        // Searching Algorithms
        searching.prerequisites = [complexity._id];
        searching.nextTopics = [sorting._id];
        await searching.save();

        // Sorting Algorithms
        sorting.prerequisites = [searching._id];
        sorting.nextTopics = [recursion._id];
        await sorting.save();

        // Recursion Algorithms
        recursion.prerequisites = [sorting._id];
        recursion.nextTopics = [divide._id, dp._id];
        await recursion.save();

        // Divide and Conquer
        divide.prerequisites = [recursion._id];
        divide.nextTopics = [greedy._id];
        await divide.save();

        // Greedy Algorithms
        greedy.prerequisites = [divide._id];
        greedy.nextTopics = [dp._id];
        await greedy.save();

        // Dynamic Programming Basics
        dp.prerequisites = [recursion._id, complexity._id];
        dp.nextTopics = [];
        await dp.save();

        console.log("✅ Seeded prerequisites for Subject 'Algorithms'");
      } else {
        console.log("⚠️ Could not find all Algorithms topic documents for seeding.");
      }
    }

    // ==========================================
    // 2. Seed for Subject: "Data Structures and Algorithms"
    // ==========================================
    const dsaSubject = await Subject.findOne({ name: /Data Structures/i });
    if (dsaSubject) {
      console.log(`Found subject: "Data Structures and Algorithms" (ID: ${dsaSubject._id})`);

      const intro = await Topic.findOne({ subject: dsaSubject._id, title: /Introduction/i });
      const analysis = await Topic.findOne({ subject: dsaSubject._id, title: /Analysis/i });
      const arrays = await Topic.findOne({ subject: dsaSubject._id, title: /^Arrays$/i });
      const recursion = await Topic.findOne({ subject: dsaSubject._id, title: /^Recursion$/i });
      const dp = await Topic.findOne({ subject: dsaSubject._id, title: /^Dynamic Programming$/i });

      if (intro && analysis && arrays && recursion && dp) {
        console.log("Found major DSA topics. Updating relationships...");

        intro.prerequisites = [];
        intro.nextTopics = [analysis._id];
        await intro.save();

        analysis.prerequisites = [intro._id];
        analysis.nextTopics = [arrays._id];
        await analysis.save();

        arrays.prerequisites = [analysis._id];
        arrays.nextTopics = [recursion._id];
        await arrays.save();

        recursion.prerequisites = [arrays._id];
        recursion.nextTopics = [dp._id];
        await recursion.save();

        dp.prerequisites = [recursion._id, analysis._id, arrays._id];
        dp.nextTopics = [];
        await dp.save();

        console.log("✅ Seeded prerequisites for Subject 'Data Structures and Algorithms'");
      } else {
        console.log("⚠️ Could not find all DSA topic documents for seeding.");
      }
    }

    console.log("🎉 Seeding finished.");
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

seedPrerequisites();
