require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const databaseLabTopics = require("../data/subjects/databaseLabTopics");

const updateDatabaseLabSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Database Applications Lab subject update...");

    // 1. Find existing subject
    let subjectDoc = await Subject.findOne({
      name: { $regex: /^Database Applications Lab$/i }
    });

    if (!subjectDoc) {
      console.log("Subject not found by exact match, searching by contains...");
      subjectDoc = await Subject.findOne({
        name: { $regex: /Database Applications Lab/i }
      });
    }

    if (!subjectDoc) {
      console.log("Creating new subject as fallback...");
      const additionalSubjects = require("../data/subjects");
      const subData = additionalSubjects.find(s => s.name === "Database Applications Lab") || {
        name: "Database Applications Lab",
        description: "Master Database Applications Lab: MySQL/Oracle setup, SQL DDL/DML with constraints, Joins & Subqueries, ER Diagram design & 3NF Normalization, PL/SQL Stored Procedures & Triggers, TCL Transaction Concurrency, Python/Java JDBC Connectivity, Full Domain Applications, MongoDB NoSQL Document CRUD, and Capstone Project Work."
      };
      subjectDoc = await Subject.create(subData);
    }

    console.log(`Found subject: "${subjectDoc.name}" (${subjectDoc._id})`);

    // 2. Update subject's concepts list to match the 10 modules
    const concepts = databaseLabTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    subjectDoc.concepts = concepts;
    await subjectDoc.save();
    console.log("Updated subject.concepts with 10 modules.");

    // 3. Remove existing topics ONLY for this subject
    const deletedCount = await Topic.deleteMany({ subject: subjectDoc._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics under ${subjectDoc.name}.`);

    // 4. Create topic documents
    const topicDocsToInsert = databaseLabTopics.map(t => ({
      subject: subjectDoc._id,
      title: t.title,
      slug: t.slug,
      description: t.description,
      learningObjectives: t.learningObjectives || [],
      notes: t.notes || [],
      youtubeResources: t.youtubeResources || [],
      books: t.books || [],
      practiceLinks: t.practiceLinks || [],
      order: t.order,
      estimatedHours: t.estimatedHours || 4,
      difficulty: t.difficulty || "Beginner",
      questionBank: t.questionBank || { conceptual: [], sixMarks: [], longAnswer: [] },
      isPublished: true
    }));

    const createdTopics = await Topic.insertMany(topicDocsToInsert);
    console.log(`Successfully created ${createdTopics.length} new topics.`);

    // Map title -> _id for resolving prerequisites
    const titleToIdMap = {};
    createdTopics.forEach(topic => {
      titleToIdMap[topic.title] = topic._id;
    });

    // 5. Update prerequisites with ObjectIds
    let prereqUpdatesCount = 0;
    for (const rawTopic of databaseLabTopics) {
      if (rawTopic.prerequisiteTitles && rawTopic.prerequisiteTitles.length > 0) {
        const currentTopicId = titleToIdMap[rawTopic.title];
        const prereqIds = rawTopic.prerequisiteTitles
          .map(title => titleToIdMap[title])
          .filter(id => Boolean(id));

        if (currentTopicId && prereqIds.length > 0) {
          await Topic.findByIdAndUpdate(currentTopicId, {
            $set: { prerequisites: prereqIds }
          });
          prereqUpdatesCount++;
        }
      }
    }

    console.log(`Updated prerequisites for ${prereqUpdatesCount} topics.`);
    console.log("✅ Database Applications Lab update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating subject:", error);
    process.exit(1);
  }
};

updateDatabaseLabSubject();
