require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const singleVariableCalculusTopics = require("../data/subjects/singleVariableCalculusTopics");

const updateSingleVariableCalculusSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Single Variable Calculus subject update...");

    let subjectDoc = await Subject.findOne({
      name: { $regex: /^Single Variable Calculus$/i }
    });

    if (!subjectDoc) {
      subjectDoc = await Subject.findOne({
        name: { $regex: /Single Variable Calculus/i }
      });
    }

    if (!subjectDoc) {
      subjectDoc = await Subject.findOne({
        name: { $regex: /Calculus/i }
      });
    }

    if (!subjectDoc) {
      console.error("Subject 'Single Variable Calculus' not found. Please create it first.");
      process.exit(1);
    }

    console.log(`Found subject: "${subjectDoc.name}" (${subjectDoc._id})`);

    const concepts = singleVariableCalculusTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    subjectDoc.concepts = concepts;
    await subjectDoc.save();
    console.log(`Updated subject.concepts with ${singleVariableCalculusTopics.length} modules.`);

    const deletedCount = await Topic.deleteMany({ subject: subjectDoc._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics.`);

    const topicDocsToInsert = singleVariableCalculusTopics.map(t => ({
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

    const titleToIdMap = {};
    createdTopics.forEach(topic => {
      titleToIdMap[topic.title] = topic._id;
    });

    let prereqUpdatesCount = 0;
    for (const rawTopic of singleVariableCalculusTopics) {
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
    console.log("✅ Single Variable Calculus update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating subject:", error);
    process.exit(1);
  }
};

updateSingleVariableCalculusSubject();
