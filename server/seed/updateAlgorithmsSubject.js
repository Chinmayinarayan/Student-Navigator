require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const algorithmsTopics = require("../data/subjects/algorithmsTopics");

const updateAlgorithmsSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Algorithms subject update...");

    // 1. Find existing Algorithms subject
    let algorithmsSubject = await Subject.findOne({
      name: { $regex: /^Algorithms$/i }
    });

    if (!algorithmsSubject) {
      console.log("Algorithms subject not found by exact match, searching by contains...");
      algorithmsSubject = await Subject.findOne({
        name: { $regex: /Algorithms/i }
      });
    }

    if (!algorithmsSubject) {
      console.log("Creating new Algorithms subject as fallback...");
      const additionalSubjects = require("../data/subjects");
      const algoData = additionalSubjects.find(s => s.name === "Algorithms") || {
        name: "Algorithms",
        description: "Analysis of algorithms, divide-and-conquer, greedy, dynamic programming, graph search, searching, sorting, hashing, and backtracking concepts."
      };
      algorithmsSubject = await Subject.create(algoData);
    }

    console.log(`Found subject: "${algorithmsSubject.name}" (${algorithmsSubject._id})`);

    // 2. Update subject's concepts list to match the 13 modules
    const concepts = algorithmsTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    algorithmsSubject.concepts = concepts;
    await algorithmsSubject.save();
    console.log("Updated subject.concepts with 13 modules.");

    // 3. Remove existing topics ONLY for this Algorithms subject
    const deletedCount = await Topic.deleteMany({ subject: algorithmsSubject._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics under Algorithms subject.`);

    // 4. Create topic documents (without prerequisites initially to get IDs)
    const topicDocsToInsert = algorithmsTopics.map(t => ({
      subject: algorithmsSubject._id,
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
    console.log(`Successfully created ${createdTopics.length} new topics for Algorithms.`);

    // Map title -> _id for resolving prerequisites
    const titleToIdMap = {};
    createdTopics.forEach(topic => {
      titleToIdMap[topic.title] = topic._id;
    });

    // 5. Update prerequisites with ObjectIds
    let prereqUpdatesCount = 0;
    for (const rawTopic of algorithmsTopics) {
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
    console.log("✅ Algorithms subject and topics update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating Algorithms subject:", error);
    process.exit(1);
  }
};

updateAlgorithmsSubject();
