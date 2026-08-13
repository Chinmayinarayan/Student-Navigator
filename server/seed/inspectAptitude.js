require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

(async () => {
  await connectDB();
  const sub = await Subject.findOne({ name: /^Professional Aptitude/i });
  const topics = await Topic.find({ subject: sub._id }).sort({ order: 1 });

  console.log(`\n📋 Topics in "${sub.name}":`);
  for (const t of topics) {
    const probs = await CodingProblem.find({ topic: t._id });
    console.log(`- Module ${t.order}: ${t.title} (${probs.length} problems)`);
    probs.forEach(p => console.log(`    • ${p.title} [${p.placementImportance || 'N/A'}]`));
  }

  process.exit(0);
})();
