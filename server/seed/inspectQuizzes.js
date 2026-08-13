require('dotenv').config();
const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const Topic = require('../models/Topic');
const Subject = require('../models/Subject');
const UserQuizResult = require('../models/UserQuizResult');

async function inspect() {
  await mongoose.connect(process.env.MONGODB_URI);

  const sample = await Quiz.findOne().populate('topic');
  console.log('Sample Quiz Topic:', sample?.topic?.title);
  console.log('Sample Quiz Question count:', sample?.questions?.length);
  if (sample?.questions?.length > 0) {
    console.log('Sample Question 1:', JSON.stringify(sample.questions[0], null, 2));
  }

  const sampleResult = await UserQuizResult.findOne();
  console.log('Sample UserQuizResult:', JSON.stringify(sampleResult, null, 2));

  const questionsCount = await Question.countDocuments();
  console.log('Total Questions in Question collection:', questionsCount);

  // Group quiz question lengths
  const allQuizzes = await Quiz.find({}, 'questions title');
  const counts = {};
  for (const q of allQuizzes) {
    const len = q.questions ? q.questions.length : 0;
    counts[len] = (counts[len] || 0) + 1;
  }
  console.log('Quiz questions array lengths across all 635 quizzes:', counts);

  process.exit(0);
}

inspect().catch(err => {
  console.error(err);
  process.exit(1);
});
