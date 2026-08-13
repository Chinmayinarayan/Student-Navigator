require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const Quiz = require('../models/Quiz');
const CodingProblem = require('../models/CodingProblem');

// Load all missing topic files
const linearAlgebraTopics = require('../data/subjects/linearAlgebraTopics');
const multivariableCalculusTopics = require('../data/subjects/multivariableCalculusTopics');
const probabilityStatsTopics = require('../data/subjects/probabilityStatsTopics');
const oopTopics = require('../data/subjects/oopTopics');
const oopLabTopics = require('../data/subjects/oopLabTopics');
const softwareEngineeringTopics = require('../data/subjects/softwareEngineeringTopics');
const wirelessNetworksTopics = require('../data/subjects/wirelessNetworksTopics');
const compilerDesignTopics = require('../data/subjects/compilerDesignTopics');
const singleVariableCalculusTopics = require('../data/subjects/singleVariableCalculusTopics');
const webTechLabTopics = require('../data/subjects/webTechLabTopics');
const industryReadinessTopics = require('../data/subjects/industryReadinessTopics');
const problemSolvingTopics = require('../data/subjects/problemSolvingTopics');
const aptitudeReasoningTopics = require('../data/subjects/aptitudeReasoningTopics');

function generateTopicQuestionBank(subjectName, conceptTitle) {
  return {
    conceptual: [
      `What is the primary role of ${conceptTitle} in the context of ${subjectName}? Explain in brief. (2 Marks)`,
      `Define the term "${conceptTitle}" and state its key application in modern systems. (2 Marks)`,
      `List any two parameters used to measure or optimize ${conceptTitle} performance. (2 Marks)`,
      `Identify the main difference between standard models and ${conceptTitle} designs. (2 Marks)`,
      `Explain the major challenge encountered during the implementation of ${conceptTitle}. (2 Marks)`,
      `What are the typical inputs and expected outputs when dealing with ${conceptTitle}? (2 Marks)`,
      `State the core assumptions or prerequisites required for ${conceptTitle} to function properly. (2 Marks)`,
      `Write down the mathematical formula or system constraints that govern ${conceptTitle}. (2 Marks)`,
      `Name two industry-standard tools or libraries that implement ${conceptTitle}. (2 Marks)`,
      `How does ${conceptTitle} handle edge cases or boundary conditions in ${subjectName}? (2 Marks)`,
      `Explain the trade-off between resource consumption and accuracy in ${conceptTitle}. (2 Marks)`,
      `What is the impact of scaling the input data size on the efficiency of ${conceptTitle}? (2 Marks)`
    ],
    sixMarks: [
      `Explain the architectural structure, block diagram, or mathematical model behind ${conceptTitle} in detail. (6 Marks)`,
      `Trace the step-by-step process of executing or implementing ${conceptTitle} for a sample input dataset. (6 Marks)`,
      `Analyze the time complexity, operational constraints, and memory overhead of the ${conceptTitle} model. (6 Marks)`,
      `Describe the design pattern or protocol workflow utilized in configuring ${conceptTitle} in ${subjectName}. (6 Marks)`,
      `Compare the performance, throughput, and latency characteristics of ${conceptTitle} with its traditional counterparts. (6 Marks)`,
      `Detail the error-handling, validation, or debugging strategies used to maintain reliability in ${conceptTitle}. (6 Marks)`,
      `How does ${conceptTitle} scale under multi-threaded, parallel, or distributed environments? Explain. (6 Marks)`,
      `Discuss a specific optimization technique that improves the execution time or space requirement of ${conceptTitle}. (6 Marks)`
    ],
    longAnswer: [
      `Detail the comprehensive design, structural equations, or algorithmic framework governing ${conceptTitle}. Compare its efficiency against alternative approaches in ${subjectName} with a complete comparative analysis table. (10 Marks)`,
      `Provide a real-world case study or practical system configuration demonstrating the integration of ${conceptTitle}. Address security, scalability, resource allocation, and optimization aspects. (10 Marks)`,
      `Perform a deep-dive analysis on the failures, bottle-necks, and mitigation strategies when deploying ${conceptTitle} in high-availability commercial production systems. (10 Marks)`,
      `Derive the mathematical proof, logical proofs, or design state machines representing the complete lifecycle of ${conceptTitle}. (10 Marks)`,
      `Explain how ${conceptTitle} interacts with modern cloud, hardware accelerators (GPUs/TPUs), or operating system kernel layers to achieve peak performance. (10 Marks)`,
      `Discuss the future trends, research frontiers, and current academic limitations of ${conceptTitle} in the domain of ${subjectName}. (10 Marks)`
    ]
  };
}

// Subjects that need their topics restored, mapped to their topic data + DB name
const RESTORE_MAP = [
  {
    dbName: 'Linear Algebra',
    topics: linearAlgebraTopics
  },
  {
    dbName: 'Multivariable Calculus',
    topics: multivariableCalculusTopics
  },
  {
    dbName: 'Probability and Statistics',
    topics: probabilityStatsTopics
  },
  {
    dbName: 'Object Oriented Programming',
    topics: oopTopics
  },
  {
    dbName: 'Object Oriented Programming Lab',
    topics: oopLabTopics
  },
  {
    dbName: 'Software Engineering',
    topics: softwareEngineeringTopics
  },
  {
    dbName: 'Wireless and Mobile Networks',
    topics: wirelessNetworksTopics
  },
  {
    dbName: 'Principles of Compiler Design',
    topics: compilerDesignTopics
  },
  {
    dbName: 'Single Variable Calculus',
    topics: singleVariableCalculusTopics
  },
  {
    dbName: 'Web Technologies Lab',
    topics: webTechLabTopics
  },
  {
    dbName: 'Industry Readiness & Leadership Skills',
    topics: industryReadinessTopics
  },
  {
    dbName: 'Problem Solving & Analysis',
    topics: problemSolvingTopics
  },
  {
    dbName: 'Professional Aptitude & Logical Reasoning',
    topics: aptitudeReasoningTopics
  }
];

const restoreTopics = async () => {
  try {
    await connectDB();

    let totalRestored = 0;
    let totalDeleted = 0;

    for (const entry of RESTORE_MAP) {
      // Find the subject
      const subject = await Subject.findOne({ name: { $regex: new RegExp(`^${entry.dbName.replace(/[&]/g, '\\&')}$`, 'i') } });
      if (!subject) {
        console.log(`❌ Subject not found: "${entry.dbName}"`);
        continue;
      }

      const currentCount = await Topic.countDocuments({ subject: subject._id });
      const availableCount = entry.topics.length;

      if (currentCount >= availableCount) {
        console.log(`✅ "${entry.dbName}" already has ${currentCount} topics (${availableCount} available) – skipping`);
        continue;
      }

      console.log(`\n🔧 Restoring "${entry.dbName}": ${currentCount} → ${availableCount} topics`);

      // Get old topic IDs for cleanup
      const oldTopics = await Topic.find({ subject: subject._id }, '_id');
      const oldTopicIds = oldTopics.map(t => t._id);

      // Delete old quizzes and coding problems for this subject's topics
      await Quiz.deleteMany({ topic: { $in: oldTopicIds } });
      await CodingProblem.deleteMany({ topic: { $in: oldTopicIds } });

      // Delete old topics
      await Topic.deleteMany({ subject: subject._id });
      totalDeleted += currentCount;

      // Insert full set of topics
      const topicsToInsert = entry.topics.map(t => ({
        subject: subject._id,
        title: t.title,
        slug: t.slug,
        description: t.description,
        learningObjectives: t.learningObjectives || [],
        notes: t.notes || [],
        youtubeResources: t.youtubeResources || [],
        books: t.books || [],
        practiceLinks: t.practiceLinks || [],
        order: t.order,
        estimatedHours: t.estimatedHours || 3,
        difficulty: t.difficulty || 'Beginner',
        questionBank: t.questionBank || generateTopicQuestionBank(entry.dbName, t.title),
        isPublished: true
      }));

      const created = await Topic.insertMany(topicsToInsert);
      totalRestored += created.length;

      // Wire prerequisites using prerequisiteTitles
      if (entry.topics.some(t => t.prerequisiteTitles && t.prerequisiteTitles.length > 0)) {
        const titleToId = {};
        created.forEach(c => { titleToId[c.title] = c._id; });
        for (const rawT of entry.topics) {
          if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
            const tid = titleToId[rawT.title];
            const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
            if (tid && pids.length > 0) {
              await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
            }
          }
        }
      }

      // Re-seed generic quizzes for new topics
      const quizzes = [];
      for (const topic of created) {
        quizzes.push({
          topic: topic._id,
          title: `${topic.title} Concept Check`,
          description: `Evaluate your knowledge on ${topic.title} in ${entry.dbName}.`,
          duration: 10,
          passingMarks: 3,
          totalMarks: 5,
          questions: [
            {
              question: `Which of the following best defines the primary purpose of ${topic.title}?`,
              options: [
                `To optimize system resource utilization and throughput.`,
                `To act as a secondary fallback model for older legacy systems.`,
                `To manage external peripheral connections with zero CPU overhead.`,
                `To store static, unstructured data without transactional safety.`
              ],
              correctAnswer: `To optimize system resource utilization and throughput.`,
              explanation: `${topic.title} is principally designed to maximize resource utilization and optimize performance throughput.`,
              marks: 1
            },
            {
              question: `What is a core operational challenge commonly associated with ${topic.title}?`,
              options: [
                `Lack of browser compatibility with modern frameworks.`,
                `High performance overhead, latency, or complexity trade-offs.`,
                `Inability to handle basic numeric or string operations.`,
                `Complete dependency on external proprietary database engines.`
              ],
              correctAnswer: `High performance overhead, latency, or complexity trade-offs.`,
              explanation: `Most architectures utilizing ${topic.title} face trade-offs between implementation complexity and performance latency.`,
              marks: 1
            },
            {
              question: `Which criteria or metric is standardly used to evaluate the efficiency of ${topic.title}?`,
              options: [
                `Total line count of the source implementation.`,
                `Throughput, latency, time complexity, or memory consumption.`,
                `Visual aesthetic scoring of the administration portal.`,
                `The physical distance between servers and client endpoints.`
              ],
              correctAnswer: `Throughput, latency, time complexity, or memory consumption.`,
              explanation: `System performance measurements for ${topic.title} rely on throughput, latency, space complexity, and memory footprints.`,
              marks: 1
            },
            {
              question: `True or False: Implementing ${topic.title} requires strict baseline configurations and system prerequisites.`,
              options: [
                `True, it relies on foundational components of ${entry.dbName} to function correctly.`,
                `False, it can run completely isolated without any underlying dependencies.`
              ],
              correctAnswer: `True, it relies on foundational components of ${entry.dbName} to function correctly.`,
              explanation: `${topic.title} operates as a component of ${entry.dbName} and depends on baseline prerequisites to work.`,
              marks: 1
            },
            {
              question: `What is the expected outcome of optimization techniques applied to ${topic.title}?`,
              options: [
                `Increased storage requirement with slower response times.`,
                `No noticeable difference in performance metrics.`,
                `Reduction in time complexity, CPU cycle usage, or memory footprints.`,
                `Deprecation of the entire module framework.`
              ],
              correctAnswer: `Reduction in time complexity, CPU cycle usage, or memory footprints.`,
              explanation: `Successful optimization achieves speed gains, reduced computational cycles, and minimized memory overhead.`,
              marks: 1
            }
          ]
        });
      }
      await Quiz.insertMany(quizzes);

      // Re-seed generic coding problems for new topics
      const codingProblems = [];
      for (const topic of created) {
        codingProblems.push(
          {
            topic: topic._id, title: `${topic.title} Practice 1`,
            description: `Practice beginner problems for ${topic.title}.`,
            difficulty: 'Easy', platform: 'LeetCode',
            problemUrl: 'https://leetcode.com/problemset/',
            tags: [topic.title], order: 1, estimatedMinutes: 20, isPublished: true
          },
          {
            topic: topic._id, title: `${topic.title} Practice 2`,
            description: `Practice intermediate problems for ${topic.title}.`,
            difficulty: 'Medium', platform: 'GeeksforGeeks',
            problemUrl: 'https://practice.geeksforgeeks.org/',
            tags: [topic.title], order: 2, estimatedMinutes: 35, isPublished: true
          },
          {
            topic: topic._id, title: `${topic.title} Challenge`,
            description: `Advanced challenge for ${topic.title}.`,
            difficulty: 'Hard', platform: 'CodeChef',
            problemUrl: 'https://www.codechef.com/practice',
            tags: [topic.title], order: 3, estimatedMinutes: 60, isPublished: true
          }
        );
      }
      await CodingProblem.insertMany(codingProblems);

      console.log(`   ✅ Restored ${created.length} topics, ${quizzes.length} quizzes, ${codingProblems.length} coding problems`);
    }

    console.log(`\n🎉 Restore complete!`);
    console.log(`   Topics deleted: ${totalDeleted}`);
    console.log(`   Topics restored: ${totalRestored}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

restoreTopics();
