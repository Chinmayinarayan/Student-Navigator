require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');
const fs = require('fs');

(async () => {
  try {
    await connectDB();

    console.log("Fetching all data from MongoDB in bulk...");
    const subjects = await Subject.find().lean().sort({ name: 1 });
    const topics = await Topic.find().lean().sort({ order: 1 });
    const problems = await CodingProblem.find().lean().sort({ order: 1 });

    console.log(`Loaded ${subjects.length} subjects, ${topics.length} topics, ${problems.length} coding problems.`);

    // Map problems by topicId
    const problemsByTopic = {};
    for (const p of problems) {
      const tid = p.topic.toString();
      if (!problemsByTopic[tid]) problemsByTopic[tid] = [];
      problemsByTopic[tid].push(p);
    }

    // Map topics by subjectId
    const topicsBySubject = {};
    for (const t of topics) {
      const sid = t.subject.toString();
      if (!topicsBySubject[sid]) topicsBySubject[sid] = [];
      topicsBySubject[sid].push(t);
    }

    const report = [];
    let totalProblems = 0;

    for (const sub of subjects) {
      const subTopics = topicsBySubject[sub._id.toString()] || [];
      const subjectData = {
        subjectName: sub.name,
        totalTopics: subTopics.length,
        totalCodingProblems: 0,
        modules: []
      };

      for (const t of subTopics) {
        const tProblems = problemsByTopic[t._id.toString()] || [];
        subjectData.totalCodingProblems += tProblems.length;
        totalProblems += tProblems.length;

        subjectData.modules.push({
          order: t.order,
          topicTitle: t.title,
          problemsCount: tProblems.length,
          problems: tProblems.map(p => ({
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
    console.log(`🎉 Complete inventory generated in ./scratch_coding_links_inventory.json! Total Problems: ${totalProblems}`);

    report.forEach((s, idx) => {
      console.log(`${idx + 1}. ${s.subjectName} -> ${s.totalTopics} modules | ${s.totalCodingProblems} coding challenges`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
})();
