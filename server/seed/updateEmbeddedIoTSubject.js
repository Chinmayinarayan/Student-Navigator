require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const embeddedIoTTopics = require("../data/subjects/embeddedIoTTopics");

const updateEmbeddedIoTSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Embedded Systems and IoT subject update...");

    // 1. Find existing subject
    let subjectDoc = await Subject.findOne({
      name: { $regex: /^Embedded Systems and IoT$/i }
    });

    if (!subjectDoc) {
      console.log("Subject not found by exact match, searching by contains...");
      subjectDoc = await Subject.findOne({
        name: { $regex: /Embedded Systems/i }
      });
    }

    if (!subjectDoc) {
      console.log("Creating new subject as fallback...");
      const additionalSubjects = require("../data/subjects");
      const embeddedData = additionalSubjects.find(s => s.name.toLowerCase().includes("embedded systems"));
      subjectDoc = await Subject.create(embeddedData);
    }

    console.log(`Found subject: "${subjectDoc.name}" (${subjectDoc._id})`);

    // 2. Update subject's concepts list to match the 16 modules
    const concepts = embeddedIoTTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    subjectDoc.concepts = concepts;
    await subjectDoc.save();
    console.log("Updated subject.concepts with 16 modules.");

    // 3. Remove existing topics ONLY for this subject
    const deletedCount = await Topic.deleteMany({ subject: subjectDoc._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics under ${subjectDoc.name}.`);

    // 4. Create topic documents
    const topicDocsToInsert = embeddedIoTTopics.map(t => ({
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
    for (const rawTopic of embeddedIoTTopics) {
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
    console.log("✅ Embedded Systems and IoT update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating subject:", error);
    process.exit(1);
  }
};

updateEmbeddedIoTSubject();
