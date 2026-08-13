require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const normalizeMetadata = async () => {
  try {
    await connectDB();

    console.log("Auditing and normalizing coding challenge metadata across all 42 subjects...\n");
    const subjects = await Subject.find();

    // 1. Strictly theoretical / Non-programming subjects where artificial code problems should NOT exist
    const PURE_THEORY_OR_NON_CODING_SUBJECTS = [
      'Corporate Communication',
      'Design Thinking for Social Innovation',
      'Engineering Exploration',
      'Industry Readiness & Leadership Skills',
      'Basic Mechanical Engineering',
      'Engineering Physics',
      'Basic Electrical Engineering',
      'Basic Electronics',
      'Engineering Mechanics',
      'Engineering Chemistry',
      'Applied Physics Lab',
      'Embedded Systems and IoT'
    ];

    for (const sub of subjects) {
      const isPureTheory = PURE_THEORY_OR_NON_CODING_SUBJECTS.some(
        name => sub.name.toLowerCase() === name.toLowerCase()
      );

      const topics = await Topic.find({ subject: sub._id });
      const topicIds = topics.map(t => t._id);

      if (isPureTheory) {
        const deleted = await CodingProblem.deleteMany({ topic: { $in: topicIds } });
        if (deleted.deletedCount > 0) {
          console.log(`🧹 Cleaned pure theory subject "${sub.name}": Removed ${deleted.deletedCount} non-applicable coding problems.`);
        } else {
          console.log(`✨ Verified pure theory subject "${sub.name}": 0 coding problems.`);
        }
        continue;
      }

      // 2. Set domain-specific language, problemType, and environment for technical subjects
      let subLang = "C++ / Python / Java";
      let subType = "coding";
      let subEnv = "Standard Runtime";

      const sName = sub.name.toLowerCase();
      if (sName.includes("web technologies")) {
        subLang = "JavaScript / React / Node.js";
        subType = "implementation";
        subEnv = "Browser / Node.js";
      } else if (sName.includes("operating system")) {
        subLang = "C";
        subType = "implementation";
        subEnv = "Linux/POSIX";
      } else if (sName.includes("database") || sName.includes("dbms")) {
        subLang = "SQL";
        subType = "SQL";
        subEnv = "MySQL / MongoDB";
      } else if (sName.includes("compiler")) {
        subLang = "C / C++";
        subType = "implementation";
        subEnv = "Flex/Bison / GCC";
      } else if (sName.includes("network")) {
        subLang = "C / Python";
        subType = "implementation";
        subEnv = "Socket / Linux";
      } else if (sName.includes("intelligence") || sName.includes("machine learning") || sName.includes("data analysis") || sName.includes("generative ai") || sName.includes("big data")) {
        subLang = "Python";
        subType = "implementation";
        subEnv = "Python 3 / Jupyter";
      } else if (sName.includes("cloud")) {
        subLang = "Bash / Dockerfile";
        subType = "lab";
        subEnv = "Docker / Linux";
      } else if (sName.includes("c programming")) {
        subLang = "C";
        subType = "coding";
        subEnv = "GCC / C11";
      } else if (sName.includes("linear algebra") || sName.includes("calculus") || sName.includes("probability")) {
        subLang = "Python / NumPy / SciPy";
        subType = "coding";
        subEnv = "Python 3";
      }

      // Update problems under this subject that don't have explicit language set
      const problems = await CodingProblem.find({ topic: { $in: topicIds } });
      for (const p of problems) {
        if (!p.language || p.language === "") p.language = subLang;
        if (!p.problemType || p.problemType === "coding") {
          if (sName.includes("database") || p.title.toLowerCase().includes("sql")) p.problemType = "SQL";
          else if (sName.includes("web") || sName.includes("operating") || sName.includes("software")) p.problemType = "implementation";
          else p.problemType = subType;
        }
        if (!p.environment || p.environment === "") p.environment = subEnv;
        await p.save();
      }

      console.log(`✅ Subject "${sub.name}": ${problems.length} challenges normalized (Type: ${subType}, Lang: ${subLang}).`);
    }

    console.log("\n🎉 Full platform metadata normalization complete!");
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

normalizeMetadata();
