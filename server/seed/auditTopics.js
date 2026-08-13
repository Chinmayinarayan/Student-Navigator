require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');

(async () => {
  await connectDB();

  const subjects = await Subject.find({}).lean();
  const topics = await Topic.find({}).lean();

  console.log(`\nTotal Subjects: ${subjects.length}`);
  console.log(`Total Topics: ${topics.length}\n`);

  const topicsBySubject = {};
  for (const t of topics) {
    const key = t.subject.toString();
    if (!topicsBySubject[key]) topicsBySubject[key] = 0;
    topicsBySubject[key]++;
  }

  const missing = [];
  const present = [];

  for (const s of subjects) {
    const count = topicsBySubject[s._id.toString()] || 0;
    if (count === 0) {
      missing.push(s.name);
    } else {
      present.push({ name: s.name, count });
    }
  }

  console.log('=== SUBJECTS WITH TOPICS ===');
  present.sort((a, b) => a.name.localeCompare(b.name)).forEach(s => {
    console.log(`  ✅ ${s.name}: ${s.count} topics`);
  });

  console.log('\n=== SUBJECTS MISSING TOPICS ===');
  if (missing.length === 0) {
    console.log('  All subjects have topics!');
  } else {
    missing.sort().forEach(name => console.log(`  ❌ ${name}`));
  }

  process.exit(0);
})();
