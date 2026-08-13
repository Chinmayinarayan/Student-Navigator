require('dotenv').config();
const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');

console.log("=== SEEDING SEQUENTIAL PREREQUISITES FOR ALL 42 SUBJECTS ===");

const seedAllPrerequisites = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const subjects = await Subject.find();
    console.log(`Found ${subjects.length} subjects in database.`);

    for (let sub of subjects) {
      // Find all topics for this subject, sorted by their order
      const topics = await Topic.find({ subject: sub._id }).sort({ order: 1 });

      if (topics.length === 0) {
        console.log(`⚠️ Subject "${sub.name}" has no topics.`);
        continue;
      }

      console.log(`Processing "${sub.name}" (${topics.length} topics)...`);

      for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];

        // Prerequisites
        if (i === 0) {
          topic.prerequisites = [];
        } else {
          // Prerequisite is the previous topic in order
          topic.prerequisites = [topics[i - 1]._id];
        }

        // Next Recommended Topics
        if (i === topics.length - 1) {
          topic.nextTopics = [];
        } else {
          // Next topic is the succeeding topic in order
          topic.nextTopics = [topics[i + 1]._id];
        }

        await topic.save();
      }
      console.log(`  ✅ Seeded sequential path for "${sub.name}"`);
    }

    console.log("\n🎉 Sequential prerequisites seeded for all subjects successfully!");
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

seedAllPrerequisites();
