require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const Quiz = require("../models/Quiz");
const { generateQuestionPoolForTopic } = require("../services/quizGeneratorService");

async function seedRichTopicQuizzes() {
  try {
    await connectDB();
    console.log("Connected to MongoDB...\n");

    const topics = await Topic.find({}, "title notes learningObjectives subject").populate("subject", "title name").lean();
    console.log(`Found ${topics.length} topics to process.\n`);

    const existingQuizzes = await Quiz.find({}, "_id topic").lean();
    const quizMap = new Map();
    for (const q of existingQuizzes) {
      if (q.topic) quizMap.set(q.topic.toString(), q._id);
    }

    const bulkOps = [];
    let updatedCount = 0;
    let createdCount = 0;

    for (const topic of topics) {
      const subName = topic.subject?.title || topic.subject?.name || "Computer Science";
      const richPool = generateQuestionPoolForTopic(
        topic.title,
        subName,
        topic.notes || [],
        topic.learningObjectives || []
      );

      const existingQuizId = quizMap.get(topic._id.toString());

      if (!existingQuizId) {
        bulkOps.push({
          insertOne: {
            document: {
              topic: topic._id,
              title: `${topic.title} Concept Quiz`,
              description: `Test your mastery of ${topic.title} across theoretical, logical, application, and problem-solving questions.`,
              duration: 10,
              passingMarks: 4,
              totalMarks: 10,
              questions: richPool,
              isPublished: true,
            }
          }
        });
        createdCount++;
      } else {
        bulkOps.push({
          updateOne: {
            filter: { _id: existingQuizId },
            update: {
              $set: {
                title: `${topic.title} Concept Quiz`,
                description: `Test your mastery of ${topic.title} across theoretical, logical, application, and problem-solving questions.`,
                questions: richPool,
                totalMarks: 10,
                duration: 10,
                passingMarks: 4,
                isPublished: true,
              }
            }
          }
        });
        updatedCount++;
      }
    }

    console.log(`Executing ${bulkOps.length} bulk operations...`);
    const chunkSize = 50;
    for (let i = 0; i < bulkOps.length; i += chunkSize) {
      const chunk = bulkOps.slice(i, i + chunkSize);
      await Quiz.bulkWrite(chunk, { ordered: false });
      console.log(`Processed ${Math.min(i + chunkSize, bulkOps.length)} / ${bulkOps.length} quizzes...`);
    }

    console.log("==========================================");
    console.log(`✅ Quizzes Seeding Complete!`);
    console.log(`Created: ${createdCount}`);
    console.log(`Updated: ${updatedCount}`);
    console.log(`Total Topics Covered: ${topics.length}`);
    console.log("==========================================");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding rich quizzes:", error);
    process.exit(1);
  }
}

seedRichTopicQuizzes();
