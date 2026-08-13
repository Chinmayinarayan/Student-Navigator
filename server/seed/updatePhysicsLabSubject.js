require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const physicsLabTopics = require("../data/subjects/physicsLabTopics");

const updatePhysicsLabSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Applied Physics Lab subject update...");

    // 1. Find existing Applied Physics Lab subject
    let physicsLabSubject = await Subject.findOne({
      name: { $regex: /^Applied Physics Lab$/i }
    });

    if (!physicsLabSubject) {
      console.log("Applied Physics Lab subject not found by exact match, searching by contains...");
      physicsLabSubject = await Subject.findOne({
        name: { $regex: /Applied Physics Lab|Physics Lab/i }
      });
    }

    if (!physicsLabSubject) {
      console.log("Creating new Applied Physics Lab subject as fallback...");
      const additionalSubjects = require("../data/subjects");
      const physicsLabData = additionalSubjects.find(s => s.name === "Applied Physics Lab") || {
        name: "Applied Physics Lab",
        description: "Hands-on lab experiments for lasers, optics, fiber optics, semiconductors, Hall Effect, ultrasonics, solar cells, and experimental error analysis."
      };
      physicsLabSubject = await Subject.create(physicsLabData);
    }

    console.log(`Found subject: "${physicsLabSubject.name}" (${physicsLabSubject._id})`);
    const additionalSubjects = require("../data/subjects");
    const physicsLabData = additionalSubjects.find(s => s.name === "Applied Physics Lab");

    // 2. Update subject's concepts list to match the 9 experiment modules
    const concepts = physicsLabTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    physicsLabSubject.concepts = concepts;
    if (physicsLabData) {
      physicsLabSubject.youtubeResources = physicsLabData.youtubeResources || [];
      physicsLabSubject.textbooks = physicsLabData.textbooks || [];
      physicsLabSubject.softwareTools = physicsLabData.softwareTools || [];
      physicsLabSubject.practicePlatforms = physicsLabData.practicePlatforms || [];
      physicsLabSubject.roadmap = physicsLabData.roadmap || physicsLabSubject.roadmap;
      physicsLabSubject.questionBank = physicsLabData.questionBank || physicsLabSubject.questionBank;
      physicsLabSubject.careerPaths = physicsLabData.careerPaths || [];
      physicsLabSubject.difficulty = physicsLabData.difficulty || physicsLabSubject.difficulty;
    }
    await physicsLabSubject.save();
    console.log("Updated subject.concepts and subject-level resources with 9 experiment modules.");

    // 3. Remove existing topics ONLY for this Applied Physics Lab subject
    const deletedCount = await Topic.deleteMany({ subject: physicsLabSubject._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics under Applied Physics Lab subject.`);

    // 4. Create topic documents
    const topicDocsToInsert = physicsLabTopics.map(t => ({
      subject: physicsLabSubject._id,
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
    console.log(`Successfully created ${createdTopics.length} new experiment topics for Applied Physics Lab.`);

    // Map title -> _id for resolving prerequisites
    const titleToIdMap = {};
    createdTopics.forEach(topic => {
      titleToIdMap[topic.title] = topic._id;
    });

    // 5. Update prerequisites with ObjectIds
    let prereqUpdatesCount = 0;
    for (const rawTopic of physicsLabTopics) {
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

    console.log(`Updated prerequisites for ${prereqUpdatesCount} experiment topics.`);
    console.log("✅ Applied Physics Lab subject and experiment topics update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating Applied Physics Lab subject:", error);
    process.exit(1);
  }
};

updatePhysicsLabSubject();
