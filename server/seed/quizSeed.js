require("dotenv").config();

const connectDB = require("../config/db");

const Topic = require("../models/Topic");
const Quiz = require("../models/Quiz");

const dbmsQuizBank = require("./quizBank/dbms");

const quizBanks = {
  ...dbmsQuizBank,
};

const seedQuizzes = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB...\n");

    const topics = await Topic.find();

    let created = 0;
    let skipped = 0;

    for (const topic of topics) {
      const template = quizBanks[topic.title];

      if (!template) {
        console.log(`⚠️  No quiz template for: ${topic.title}`);
        continue;
      }

      const existingQuiz = await Quiz.findOne({
        topic: topic._id,
      });

      if (existingQuiz) {
        console.log(`⏭️  Quiz already exists: ${topic.title}`);
        skipped++;
        continue;
      }

      const totalMarks = template.questions.reduce(
        (sum, q) => sum + q.marks,
        0
      );

      await Quiz.create({
        topic: topic._id,
        title: template.title,
        description: template.description,
        duration: template.duration,
        passingMarks: template.passingMarks,
        totalMarks,
        questions: template.questions,
        isPublished: true,
      });

      console.log(`✅ Quiz created: ${topic.title}`);
      created++;
    }

    console.log("\n==========================");
    console.log(`Created : ${created}`);
    console.log(`Skipped : ${skipped}`);
    console.log("==========================");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedQuizzes();
