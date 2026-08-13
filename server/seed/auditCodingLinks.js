require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');
const fs = require('fs');

(async () => {
  try {
    await connectDB();

    const subjects = await Subject.find().sort({ name: 1 });
    let totalProblems = 0;
    const report = [];

    for (const sub of subjects) {
      const topics = await Topic.find({ subject: sub._id }).sort({ order: 1 });
      const subjectData = {
        subjectName: sub.name,
        totalTopics: topics.length,
        totalCodingProblems: 0,
        modules: []
      };

      for (const t of topics) {
        const problems = await CodingProblem.find({ topic: t._id }).sort({ order: 1 });
        subjectData.totalCodingProblems += problems.length;
        totalProblems += problems.length;

        subjectData.modules.push({
          order: t.order,
          topicTitle: t.title,
          problemsCount: problems.length,
          problems: problems.map(p => ({
            title: p.title,
            platform: p.platform,
            difficulty: p.difficulty,
            url: p.problemUrl
          }))
        });
      }

      report.push(subjectData);
    }

    fs.writeFileSync('./scratch_coding_links_inventory.json', JSON.stringify({ totalSubjects: subjects.length, totalProblems, subjects: report }, null, 2));
    console.log(`✅ Inventory exported! Total Subjects: ${subjects.length} | Total Problems: ${totalProblems}`);

    // Print summary per subject
    report.forEach(s => {
      console.log(`- ${s.subjectName}: ${s.totalTopics} modules | ${s.totalCodingProblems} coding challenges`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
})();
