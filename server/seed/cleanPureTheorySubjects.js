require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const cleanSubjects = async () => {
  try {
    await connectDB();
    const names = [
      'Basic Electrical Engineering',
      'Basic Electronics',
      'Applied Physics Lab',
      'Basic Mechanical Engineering',
      'Engineering Mechanics',
      'Engineering Chemistry',
      'Engineering Physics',
      'Engineering Exploration',
      'Corporate Communication',
      'Design Thinking for Social Innovation',
      'Industry Readiness & Leadership Skills',
      'Embedded Systems and IoT'
    ];

    for (const name of names) {
      const subject = await Subject.findOne({ name: { $regex: new RegExp('^' + name.replace(/[&]/g, '\\&') + '$', 'i') } });
      if (subject) {
        const topics = await Topic.find({ subject: subject._id });
        const topicIds = topics.map(t => t._id);
        const res = await CodingProblem.deleteMany({ topic: { $in: topicIds } });
        console.log(`✅ Cleaned "${subject.name}": ${res.deletedCount} coding problems removed.`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

cleanSubjects();
