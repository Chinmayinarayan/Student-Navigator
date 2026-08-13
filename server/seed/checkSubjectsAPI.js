require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');

(async () => {
  await connectDB();

  const subjects = await Subject.find({});
  console.log(`Subjects in Database: ${subjects.length}`);
  if (subjects.length > 0) {
    console.log(`Sample Subject: "${subjects[0].name}" (code: ${subjects[0].code})`);
  } else {
    console.log("⚠️ NO SUBJECTS FOUND IN MONGODB DATABASE!");
  }

  process.exit(0);
})();
