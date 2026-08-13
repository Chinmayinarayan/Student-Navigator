const mongoose = require("mongoose");

const Subject = require("../models/Subject");
const Topic = require("../models/Topic");

const dbmsTopics = require("../data/subjects/dbmsTopics");
const dsaTopics = require("../data/subjects/dsaTopics");
const osTopics = require("../data/subjects/osTopics");

const seedTopics = async () => {
  try {
    console.log("Deleting old topics...");
    await Topic.deleteMany();

    // ---------------- DBMS ----------------
    const dbmsSubject = await Subject.findOne({
      name: { $regex: /^Database Management System$/i },
    });

    if (dbmsSubject) {
      const topics = dbmsTopics.map((topic) => ({
        ...topic,
        subject: dbmsSubject._id,
      }));

      await Topic.insertMany(topics);

      console.log("✅ DBMS Topics Seeded");
    } else {
      console.log("❌ DBMS Subject not found");
    }

    // ---------------- DSA ----------------
    const dsaSubject = await Subject.findOne({
      name: { $regex: /Data Structures/i },
    });

    if (dsaSubject) {
      const topics = dsaTopics.map((topic) => ({
        ...topic,
        subject: dsaSubject._id,
      }));

      await Topic.insertMany(topics);

      console.log("✅ DSA Topics Seeded");
    } else {
      console.log("❌ DSA Subject not found");
    }

    // ---------------- OS ----------------
    const osSubject = await Subject.findOne({
      name: { $regex: /^Operating/i },
    });

    if (osSubject) {
      const topics = osTopics.map((topic) => ({
        ...topic,
        subject: osSubject._id,
      }));

      await Topic.insertMany(topics);

      console.log("✅ OS Topics Seeded");
    } else {
      console.log("❌ OS Subject not found");
    }

    console.log("\n🎉 Topic Seeding Completed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = seedTopics;
