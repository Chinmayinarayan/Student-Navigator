require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');

(async () => {
  await connectDB();
  const subjects = await Subject.find({});
  console.log("All subjects in DB:");
  subjects.forEach(s => {
    if (s.name.toLowerCase().includes("aptitude") || s.name.toLowerCase().includes("reasoning") || s.name.toLowerCase().includes("arithmetic")) {
      console.log(`- ID: ${s._id}, Name: "${s.name}", Textbooks Count: ${s.textbooks ? s.textbooks.length : 0}`);
      if (s.textbooks) {
        s.textbooks.forEach((b, i) => console.log(`    ${i+1}. ${b.title} (${b.author}) -> ${b.url}`));
      }
    }
  });
  process.exit(0);
})();
