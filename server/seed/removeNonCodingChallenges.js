require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const NON_CODING_SUBJECTS = [
  'Corporate Communication',
  'Design Thinking for Social Innovation',
  'Engineering Exploration',
  'Industry Readiness & Leadership Skills'
];

const removeNonCodingChallenges = async () => {
  try {
    await connectDB();

    let totalDeleted = 0;

    for (const name of NON_CODING_SUBJECTS) {
      const subject = await Subject.findOne({
        name: { $regex: new RegExp('^' + name.replace(/[&]/g, '\\&') + '$', 'i') }
      });

      if (!subject) {
        console.log(`❌ Subject not found: "${name}"`);
        continue;
      }

      const topics = await Topic.find({ subject: subject._id });
      const topicIds = topics.map(t => t._id);

      const result = await CodingProblem.deleteMany({ topic: { $in: topicIds } });
      totalDeleted += result.deletedCount;

      console.log(`✅ Subject "${subject.name}": Removed ${result.deletedCount} coding problems across ${topics.length} topics.`);
    }

    console.log(`\n🎉 Total coding problems removed: ${totalDeleted}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

removeNonCodingChallenges();
