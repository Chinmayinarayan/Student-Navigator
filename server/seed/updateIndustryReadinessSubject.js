require("dotenv").config();
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const industryReadinessTopics = require("../data/subjects/industryReadinessTopics");

const updateIndustryReadinessSubject = async () => {
  try {
    await connectDB();
    console.log("Connected to database for Industry Readiness & Leadership Skills subject update...");

    let subjectDoc = await Subject.findOne({
      name: { $regex: /^Industry Readiness/i }
    });

    if (!subjectDoc) {
      subjectDoc = await Subject.findOne({
        name: { $regex: /Industry Readiness/i }
      });
    }

    if (!subjectDoc) {
      subjectDoc = await Subject.findOne({
        name: { $regex: /Leadership Skills/i }
      });
    }

    if (!subjectDoc) {
      console.error("Subject 'Industry Readiness & Leadership Skills' not found. Please create it first.");
      process.exit(1);
    }

    console.log(`Found subject: "${subjectDoc.name}" (${subjectDoc._id})`);

    const concepts = industryReadinessTopics.map(t => ({
      title: t.title,
      topics: t.subTopics || []
    }));

    subjectDoc.concepts = concepts;
    await subjectDoc.save();
    console.log(`Updated subject.concepts with ${industryReadinessTopics.length} modules.`);

    const deletedCount = await Topic.deleteMany({ subject: subjectDoc._id });
    console.log(`Cleared ${deletedCount.deletedCount || 0} old topics.`);

    const topicDocsToInsert = industryReadinessTopics.map(t => ({
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
    for (const rawTopic of industryReadinessTopics) {
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
    console.log("✅ Industry Readiness & Leadership Skills update completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating subject:", error);
    process.exit(1);
  }
};

updateIndustryReadinessSubject();
