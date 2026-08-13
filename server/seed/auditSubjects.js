require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');

(async () => {
  await connectDB();

  const subjects = await Subject.find({});
  console.log(`Total Subjects: ${subjects.length}`);
  for (const s of subjects) {
    console.log(`- "${s.name}" (_id: ${s._id}) | Textbooks count: ${s.textbooks ? s.textbooks.length : 0}`);
    if (s.textbooks && s.textbooks.length > 0) {
      console.log(`  Sample 1st book: "${s.textbooks[0].title}" -> ${s.textbooks[0].url}`);
    }
  }

  process.exit(0);
})();
