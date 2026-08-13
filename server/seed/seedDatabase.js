require("dotenv").config();

const connectDB = require("../config/db");

const Subject = require("../models/Subject");
const Career = require("../models/Career");
const Topic = require("../models/Topic");
const CodingProblem = require("../models/CodingProblem");
const Assignment = require("../models/Assignment");
const Quiz = require("../models/Quiz");
const Roadmap = require("../models/Roadmap");
const Event = require("../models/Event");

const subjects = require("../data/subjects");
const careers = require("../data/careers");

const dbmsTopics = require("../data/subjects/dbmsTopics");
const dsaTopics = require("../data/subjects/dsaTopics");
const osTopics = require("../data/subjects/osTopics");
const algorithmsTopics = require("../data/subjects/algorithmsTopics");
const physicsLabTopics = require("../data/subjects/physicsLabTopics");
const arithmeticalReasoningTopics = require("../data/subjects/arithmeticalReasoningTopics");
const aimlTopics = require("../data/subjects/aimlTopics");
const electricalEngineeringTopics = require("../data/subjects/electricalEngineeringTopics");
const basicElectronicsTopics = require("../data/subjects/basicElectronicsTopics");
const mechanicalEngineeringTopics = require("../data/subjects/mechanicalEngineeringTopics");
const bigDataAnalyticsTopics = require("../data/subjects/bigDataAnalyticsTopics");
const cProgrammingTopics = require("../data/subjects/cProgrammingTopics");
const cloudComputingTopics = require("../data/subjects/cloudComputingTopics");
const computerNetworksTopics = require("../data/subjects/computerNetworksTopics");
const computerNetworksLabTopics = require("../data/subjects/computerNetworksLabTopics");
const coaTopics = require("../data/subjects/coaTopics");
const corporateCommunicationTopics = require("../data/subjects/corporateCommunicationTopics");
const cryptographyTopics = require("../data/subjects/cryptographyTopics");
const databaseLabTopics = require("../data/subjects/databaseLabTopics");
const designThinkingTopics = require("../data/subjects/designThinkingTopics");
const daaTopics = require("../data/subjects/daaTopics");
const discreteTopics = require("../data/subjects/discreteTopics");
const embeddedIoTTopics = require("../data/subjects/embeddedIoTTopics");
const chemistryTopics = require("../data/subjects/chemistryTopics");
const engineeringExplorationTopics = require("../data/subjects/engineeringExplorationTopics");
const mechanicsTopics = require("../data/subjects/mechanicsTopics");
const engineeringPhysicsTopics = require("../data/subjects/engineeringPhysicsTopics");
const edaTopics = require("../data/subjects/edaTopics");
const genAiTopics = require("../data/subjects/genAiTopics");

const dsaAssignments = require("../data/assignments/dsaAssignments");
const dsaQuiz = require("../data/quizzes/dsaQuiz");

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

function generateTopicQuiz(topicId, topicTitle, subjectName) {
  return {
    topic: topicId,
    title: `${topicTitle} Concept Check`,
    description: `Evaluate your knowledge on ${topicTitle} in the subject of ${subjectName}.`,
    duration: 10,
    passingMarks: 3,
    totalMarks: 5,
    questions: [
      {
        question: `Which of the following best defines the primary purpose of ${topicTitle}?`,
        options: [
          `To optimize system resource utilization and throughput.`,
          `To act as a secondary fallback model for older legacy systems.`,
          `To manage external peripheral connections with zero CPU overhead.`,
          `To store static, unstructured data without transactional safety.`
        ],
        correctAnswer: `To optimize system resource utilization and throughput.`,
        explanation: `${topicTitle} is principally designed to maximize resource utilization and optimize performance throughput.`,
        marks: 1
      },
      {
        question: `What is a core operational challenge commonly associated with ${topicTitle}?`,
        options: [
          `Lack of browser compatibility with modern frameworks.`,
          `High performance overhead, latency, or complexity trade-offs.`,
          `Inability to handle basic numeric or string operations.`,
          `Complete dependency on external proprietary database engines.`
        ],
        correctAnswer: `High performance overhead, latency, or complexity trade-offs.`,
        explanation: `Most architectures utilizing ${topicTitle} face trade-offs between implementation complexity and performance latency.`,
        marks: 1
      },
      {
        question: `Which criteria or metric is standardly used to evaluate the efficiency of ${topicTitle}?`,
        options: [
          `Total line count of the source implementation.`,
          `Throughput, latency, time complexity, or memory consumption.`,
          `Visual aesthetic scoring of the administration portal.`,
          `The physical distance between servers and client endpoints.`
        ],
        correctAnswer: `Throughput, latency, time complexity, or memory consumption.`,
        explanation: `System performance measurements for ${topicTitle} rely on throughput, latency, space complexity, and memory footprints.`,
        marks: 1
      },
      {
        question: `True or False: Implementing ${topicTitle} requires strict baseline configurations and system prerequisites.`,
        options: [
          `True, it relies on foundational components of ${subjectName} to function correctly.`,
          `False, it can run completely isolated without any underlying dependencies.`
        ],
        correctAnswer: `True, it relies on foundational components of ${subjectName} to function correctly.`,
        explanation: `${topicTitle} operates as a component of ${subjectName} and depends on baseline prerequisites to work.`,
        marks: 1
      },
      {
        question: `What is the expected outcome of optimization techniques applied to ${topicTitle}?`,
        options: [
          `Increased storage requirement with slower response times.`,
          `No noticeable difference in performance metrics.`,
          `Reduction in time complexity, CPU cycle usage, or memory footprints.`,
          `Deprecation of the entire module framework.`
        ],
        correctAnswer: `Reduction in time complexity, CPU cycle usage, or memory footprints.`,
        explanation: `Successful optimization achieves speed gains, reduced computational cycles, and minimized memory overhead.`,
        marks: 1
      },
      {
        question: `How does ${topicTitle} contribute to overall system scalability?`,
        options: [
          `By allowing horizontal scaling with minimal shared state overhead.`,
          `By restricting the number of concurrent client sessions.`,
          `By converting all data storage formats to flat XML files.`,
          `By routing all requests through a single master controller instance.`
        ],
        correctAnswer: `By allowing horizontal scaling with minimal shared state overhead.`,
        explanation: `Efficient implementation of ${topicTitle} supports horizontal scalability with low shared state constraints.`,
        marks: 1
      },
      {
        question: `Which standard design pattern is most frequently coupled with ${topicTitle} implementations?`,
        options: [
          `Singleton Pattern`,
          `Observer Pattern or Strategy Pattern`,
          `Factory Method Pattern`,
          `Adapter Pattern`
        ],
        correctAnswer: `Observer Pattern or Strategy Pattern`,
        explanation: `Due to dynamic runtime configuration needs, Strategy or Observer patterns are highly aligned with ${topicTitle}.`,
        marks: 1
      },
      {
        question: `What role does memory caching play when scaling ${topicTitle} processes?`,
        options: [
          `It decreases CPU execution times by serving precalculated results.`,
          `It forces cold storage disks to spin down completely.`,
          `It increases raw memory consumption without any speedup.`,
          `It overrides user authentication credentials.`
        ],
        correctAnswer: `It decreases CPU execution times by serving precalculated results.`,
        explanation: `Caching avoids redundant computational overheads in ${topicTitle} by fetching precalculated results directly.`,
        marks: 1
      },
      {
        question: `Under what computational constraints does ${topicTitle} perform least efficiently?`,
        options: [
          `High-latency network pipelines or thread contention bottlenecks.`,
          `When operating on modern 64-bit hardware registers.`,
          `When compiling using optimized build compilers.`,
          `During low-traffic idle states.`
        ],
        correctAnswer: `High-latency network pipelines or thread contention bottlenecks.`,
        explanation: `Performance drops when ${topicTitle} encounters heavy thread synchronization issues or latency blocks.`,
        marks: 1
      },
      {
        question: `Which data encoding or format is standardly processed by ${topicTitle} components?`,
        options: [
          `Structured JSON, binary streams, or platform-optimized native objects.`,
          `Proprietary legacy audio file extensions.`,
          `Uncompressed print layout vectors.`,
          `Unformatted plain text transcripts only.`
        ],
        correctAnswer: `Structured JSON, binary streams, or platform-optimized native objects.`,
        explanation: `${topicTitle} components standardly ingest structured objects or binary buffers for high performance.`,
        marks: 1
      },
      {
        question: `What security threat is commonly mitigated when configuring ${topicTitle} inputs?`,
        options: [
          `SQL injection, parameter tampering, and malformed payload buffer overflows.`,
          `Physical hardware theft in server farms.`,
          `Intermittent power outages in data centers.`,
          `DNS registration expiration.`
        ],
        correctAnswer: `SQL injection, parameter tampering, and malformed payload buffer overflows.`,
        explanation: `Proper validation of inputs prevents exploit execution and resource starvation in ${topicTitle} layers.`,
        marks: 1
      },
      {
        question: `Which runtime environment configuration maximizes the throughput of ${topicTitle}?`,
        options: [
          `Multi-core thread pools, non-blocking asynchronous I/O, and containerized virtualization.`,
          `Single-threaded synchronous event execution loops.`,
          `Shared hosting with memory limits.`,
          `Emulated legacy architecture virtual machines.`
        ],
        correctAnswer: `Multi-core thread pools, non-blocking asynchronous I/O, and containerized virtualization.`,
        explanation: `Peak efficiency is achieved through non-blocking asynchronous execution and distributed compute clustering.`,
        marks: 1
      },
      {
        question: `True or False: Diagnostic logs and telemetry monitoring are recommended for production ${topicTitle} nodes.`,
        options: [
          `True, tracking metrics helps detect processing exceptions and resource leakage.`,
          `False, logs degrade performance to the point of rendering the module unusable.`
        ],
        correctAnswer: `True, tracking metrics helps detect processing exceptions and resource leakage.`,
        explanation: `Telemetry is critical to ensure high availability and diagnose memory leaks or system bottlenecks.`,
        marks: 1
      },
      {
        question: `What is the impact of excessive recursive iterations inside ${topicTitle} subroutines?`,
        options: [
          `Risk of Stack Overflow errors and severe memory exhaustion.`,
          `Automatic compiler optimization and hardware speedup.`,
          `Immediate resolution of unresolved compiler warnings.`,
          `Reduction in the final compiled bundle footprint.`
        ],
        correctAnswer: `Risk of Stack Overflow errors and severe memory exhaustion.`,
        explanation: `Unbounded recursion risks call stack exhaustion and system instability.`,
        marks: 1
      },
      {
        question: `Which testing strategy is most effective for verifying the correctness of ${topicTitle}?`,
        options: [
          `Fuzz testing, unit assertion checks, and stress load testing.`,
          `Manual browser refreshing only.`,
          `Copying production code straight into staging environments.`,
          `Recompiling the code without changes.`
        ],
        correctAnswer: `Fuzz testing, unit assertion checks, and stress load testing.`,
        explanation: `Rigorous unit assertions and stress testing ensure stability under edge cases.`,
        marks: 1
      }
    ]
  };
}

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("Deleting old data...");

    await Quiz.deleteMany();
    await Assignment.deleteMany();
    await CodingProblem.deleteMany();
    await Topic.deleteMany();
    await Roadmap.deleteMany();
    await Subject.deleteMany();
    await Career.deleteMany();
    await Event.deleteMany();

    console.log("Seeding Subjects...");

    const directYtMap = {
      "Data Structures and Algorithms": "https://www.youtube.com/watch?v=RBSGKlAxfsg",
      "Operating System Principles and Programming": "https://www.youtube.com/watch?v=bkSWJ87y5go",
      "Database Management System": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
      "Single Variable Calculus": "https://www.youtube.com/watch?v=HfACrKJ_Y2w",
      "Engineering Physics": "https://www.youtube.com/watch?v=1xN5-7vW4hA",
      "Object Oriented Programming": "https://www.youtube.com/watch?v=pTB0EiLXUC8",
      "Computer Networks": "https://www.youtube.com/watch?v=IPvYjX917Cg",
      "Software Engineering": "https://www.youtube.com/watch?v=sB2iA3x8S8I",
      "Computer Organization and Architecture": "https://www.youtube.com/watch?v=83S1Wd0R9kE",
      "Artificial Intelligence and Machine Learning": "https://www.youtube.com/watch?v=GwIo3gToViM",
      "Design and Analysis of Algorithms": "https://www.youtube.com/watch?v=8hly31xKli0",
      "Discrete Mathematics": "https://www.youtube.com/watch?v=tyDKR4FG3Yw",
      "Multivariable Calculus": "https://www.youtube.com/watch?v=TmcS9D490x0",
      "Linear Algebra": "https://www.youtube.com/watch?v=JnTa9XyxeuU",
      "Probability and Statistics": "https://www.youtube.com/watch?v=Vfo5le26IhY",
      "Generative AI": "https://www.youtube.com/watch?v=mEsleV16qdo",
      "Big Data Analytics": "https://www.youtube.com/watch?v=1vbXP-10wW8",
      "Engineering Chemistry": "https://www.youtube.com/watch?v=t5JmS7wN6dY",
      "Wireless and Mobile Networks": "https://www.youtube.com/watch?v=0kFhA4H-w1Y",
      "Cryptography & Network Security": "https://www.youtube.com/watch?v=2aHkqB2-rlM",
      "Engineering Mechanics": "https://www.youtube.com/watch?v=Hn_Z12xscvE",
      "Web Technologies Lab": "https://www.youtube.com/watch?v=qz0aGYMCtG8",
      "Embedded Systems and IoT": "https://www.youtube.com/watch?v=hVE91E1Zt28",
      "C Programming for Problem Solving": "https://www.youtube.com/watch?v=irqbmMNs2Bo",
      "Principles of Compiler Design": "https://www.youtube.com/watch?v=Qkwj65l_96I",
      "Cloud Computing": "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
      "Basic Electrical Engineering": "https://www.youtube.com/watch?v=rWTLF6Gv7e0",
      "Basic Electronics": "https://www.youtube.com/watch?v=u40bT66qXpA",
      "Design Thinking for Social Innovation": "https://www.youtube.com/watch?v=aGf_r2764Qk",
      "Basic Mechanical Engineering": "https://www.youtube.com/watch?v=Hn_Z12xscvE",
      "Database Applications Lab": "https://www.youtube.com/watch?v=qz0aGYMCtG8",
      "Exploratory Data Analysis": "https://www.youtube.com/watch?v=QzYk1yF8T3o",
      "Computer Networks Lab": "https://www.youtube.com/watch?v=qz0aGYMCtG8",
      "Applied Physics Lab": "https://www.youtube.com/watch?v=1xN5-7vW4hA",
      "Algorithms": "https://www.youtube.com/watch?v=8hly31xKli0",
      "Object Oriented Programming Lab": "https://www.youtube.com/watch?v=pTB0EiLXUC8",
      "Professional Aptitude & Logical Reasoning": "https://www.youtube.com/watch?v=yW2d0Vq9Zk0",
      "Corporate Communication": "https://www.youtube.com/watch?v=9uA9x2-a-yE",
      "Problem Solving & Analysis": "https://www.youtube.com/watch?v=vV4iC6V8i80",
      "Arithmetical Thinking & Analytical Reasoning": "https://www.youtube.com/watch?v=yW2d0Vq9Zk0",
      "Industry Readiness & Leadership Skills": "https://www.youtube.com/watch?v=zD_N28f8f8k",
      "OE": "https://www.youtube.com/watch?v=9uA9x2-a-yE"
    };

    const mappedSubjects = subjects.map((s) => {
      const directUrl = directYtMap[s.name] || "https://www.youtube.com/results?search_query=" + encodeURIComponent(s.name + " complete one shot");
      return {
        ...s,
        youtubeResources: [
          { title: `${s.name} - Complete One Shot Lecture`, url: directUrl }
        ]
      };
    });

    const createdSubjects =
      await Subject.insertMany(mappedSubjects);

    console.log("Seeding Careers...");

    await Career.insertMany(careers);

    // ==========================
    // Seed DBMS Topics
    // ==========================

    const dbmsSubject =
      createdSubjects.find(
        (s) =>
          s.name ===
          "Database Management System"
      );

    if (dbmsSubject) {

      await Topic.insertMany(

        dbmsTopics.map((topic) => ({
          ...topic,
          books: [],
          subject: dbmsSubject._id,
          questionBank: generateTopicQuestionBank("Database Management System", topic.title)
        }))
      );
    }

    // ==========================
    // Seed DSA Topics
    // ==========================

    const dsaSubject =
      createdSubjects.find((s) =>
        s.name
          .toLowerCase()
          .includes("data structures")
      );

    if (dsaSubject) {

      await Topic.insertMany(

        dsaTopics.map((topic) => ({
          ...topic,
          books: [],
          subject: dsaSubject._id,
          practiceLinks: [
            { title: "GeeksforGeeks Analysis of Algorithms", url: "https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/" },
            { title: "Sanfoundry Data Structures & Algorithms Questions", url: "https://www.sanfoundry.com/1000-data-structures-algorithms-ii-questions-answers/" }
          ],
          questionBank: generateTopicQuestionBank("Data Structures and Algorithms", topic.title)
        }))
      );
    }

    // ==========================
    // Seed OS Topics
    // ==========================

    const osSubject =
      createdSubjects.find((s) =>
        s.name
          .toLowerCase()
          .includes("operating")
      );

    if (osSubject) {

      await Topic.insertMany(

        osTopics.map((topic) => ({
          ...topic,
          books: [],
          subject: osSubject._id,
          questionBank: generateTopicQuestionBank("Operating System Principles and Programming", topic.title)
        }))
      );
    }

    // ==========================
    // Seed Algorithms Topics
    // ==========================

    const algoSubject = createdSubjects.find(s => s.name.toLowerCase() === "algorithms");
    if (algoSubject) {
      const createdAlgoTopics = await Topic.insertMany(
        algorithmsTopics.map(t => ({
          subject: algoSubject._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Algorithms", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdAlgoTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of algorithmsTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Applied Physics Lab Topics
    // ==========================

    const physicsLabSubject = createdSubjects.find(s => s.name.toLowerCase().includes("applied physics lab"));
    if (physicsLabSubject) {
      const createdPhysicsLabTopics = await Topic.insertMany(
        physicsLabTopics.map(t => ({
          subject: physicsLabSubject._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Applied Physics Lab", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdPhysicsLabTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of physicsLabTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Arithmetical Thinking & Analytical Reasoning Topics
    // ==========================

    const arithmeticalSubject = createdSubjects.find(s => s.name.toLowerCase().includes("arithmetical thinking"));
    if (arithmeticalSubject) {
      const createdArithmeticalTopics = await Topic.insertMany(
        arithmeticalReasoningTopics.map(t => ({
          subject: arithmeticalSubject._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Arithmetical Thinking & Analytical Reasoning", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdArithmeticalTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of arithmeticalReasoningTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed AIML Topics
    // ==========================

    const aimlSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("artificial intelligence"));
    if (aimlSubjectDoc) {
      const createdAimlTopics = await Topic.insertMany(
        aimlTopics.map(t => ({
          subject: aimlSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Artificial Intelligence and Machine Learning", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdAimlTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of aimlTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Basic Electrical Engineering Topics
    // ==========================

    const eeSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("basic electrical engineering"));
    if (eeSubjectDoc) {
      const createdEeTopics = await Topic.insertMany(
        electricalEngineeringTopics.map(t => ({
          subject: eeSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Basic Electrical Engineering", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdEeTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of electricalEngineeringTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Basic Electronics Topics
    // ==========================

    const electronicsSubjectDoc = createdSubjects.find(s => s.name.toLowerCase() === "basic electronics");
    if (electronicsSubjectDoc) {
      const createdElectronicsTopics = await Topic.insertMany(
        basicElectronicsTopics.map(t => ({
          subject: electronicsSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Basic Electronics", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdElectronicsTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of basicElectronicsTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Basic Mechanical Engineering Topics
    // ==========================

    const mechSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("basic mechanical engineering"));
    if (mechSubjectDoc) {
      const createdMechTopics = await Topic.insertMany(
        mechanicalEngineeringTopics.map(t => ({
          subject: mechSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Basic Mechanical Engineering", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdMechTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of mechanicalEngineeringTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Big Data Analytics Topics
    // ==========================

    const bigDataSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("big data analytics"));
    if (bigDataSubjectDoc) {
      const createdBigDataTopics = await Topic.insertMany(
        bigDataAnalyticsTopics.map(t => ({
          subject: bigDataSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Big Data Analytics", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdBigDataTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of bigDataAnalyticsTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed C Programming for Problem Solving Topics
    // ==========================

    const cProgSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("c programming for problem solving"));
    if (cProgSubjectDoc) {
      const createdCProgTopics = await Topic.insertMany(
        cProgrammingTopics.map(t => ({
          subject: cProgSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("C Programming for Problem Solving", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdCProgTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of cProgrammingTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Cloud Computing Topics
    // ==========================

    const cloudSubjectDoc = createdSubjects.find(s => s.name.toLowerCase() === "cloud computing");
    if (cloudSubjectDoc) {
      const createdCloudTopics = await Topic.insertMany(
        cloudComputingTopics.map(t => ({
          subject: cloudSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Cloud Computing", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdCloudTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of cloudComputingTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Computer Networks Topics
    // ==========================

    const netSubjectDoc = createdSubjects.find(s => s.name.toLowerCase() === "computer networks");
    if (netSubjectDoc) {
      const createdNetTopics = await Topic.insertMany(
        computerNetworksTopics.map(t => ({
          subject: netSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Computer Networks", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdNetTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of computerNetworksTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Computer Networks Lab Topics
    // ==========================

    const netLabSubjectDoc = createdSubjects.find(s => s.name.toLowerCase() === "computer networks lab");
    if (netLabSubjectDoc) {
      const createdNetLabTopics = await Topic.insertMany(
        computerNetworksLabTopics.map(t => ({
          subject: netLabSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Computer Networks Lab", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdNetLabTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of computerNetworksLabTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }
    // ==========================
    // Seed COA Topics
    // ==========================

    const coaSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("computer organization"));
    if (coaSubjectDoc) {
      const createdCoaTopics = await Topic.insertMany(
        coaTopics.map(t => ({
          subject: coaSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Computer Organization and Architecture", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdCoaTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of coaTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Corporate Communication Topics
    // ==========================

    const corpCommSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("corporate communication"));
    if (corpCommSubjectDoc) {
      const createdCorpCommTopics = await Topic.insertMany(
        corporateCommunicationTopics.map(t => ({
          subject: corpCommSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Corporate Communication", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdCorpCommTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of corporateCommunicationTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Cryptography & Network Security Topics
    // ==========================

    const cryptoSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("cryptography"));
    if (cryptoSubjectDoc) {
      const createdCryptoTopics = await Topic.insertMany(
        cryptographyTopics.map(t => ({
          subject: cryptoSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Cryptography & Network Security", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdCryptoTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of cryptographyTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Database Applications Lab Topics
    // ==========================

    const dbLabSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("database applications lab"));
    if (dbLabSubjectDoc) {
      const createdDbLabTopics = await Topic.insertMany(
        databaseLabTopics.map(t => ({
          subject: dbLabSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Database Applications Lab", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdDbLabTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of databaseLabTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Design Thinking for Social Innovation Topics
    // ==========================

    const dtSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("design thinking"));
    if (dtSubjectDoc) {
      const createdDtTopics = await Topic.insertMany(
        designThinkingTopics.map(t => ({
          subject: dtSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Design Thinking for Social Innovation", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdDtTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of designThinkingTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }
    // ==========================
    // Seed DAA Topics
    // ==========================

    const daaSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("design and analysis of algorithms"));
    if (daaSubjectDoc) {
      const createdDaaTopics = await Topic.insertMany(
        daaTopics.map(t => ({
          subject: daaSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Design and Analysis of Algorithms", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdDaaTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of daaTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Discrete Mathematics Topics
    // ==========================

    const discreteSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("discrete mathematics"));
    if (discreteSubjectDoc) {
      const createdDiscreteTopics = await Topic.insertMany(
        discreteTopics.map(t => ({
          subject: discreteSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Discrete Mathematics", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdDiscreteTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of discreteTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Embedded Systems and IoT Topics
    // ==========================

    const embeddedSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("embedded systems"));
    if (embeddedSubjectDoc) {
      const createdEmbeddedTopics = await Topic.insertMany(
        embeddedIoTTopics.map(t => ({
          subject: embeddedSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Embedded Systems and IoT", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdEmbeddedTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of embeddedIoTTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Engineering Chemistry Topics
    // ==========================

    const chemistrySubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("engineering chemistry"));
    if (chemistrySubjectDoc) {
      const createdChemistryTopics = await Topic.insertMany(
        chemistryTopics.map(t => ({
          subject: chemistrySubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Engineering Chemistry", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdChemistryTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of chemistryTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Engineering Exploration Topics
    // ==========================

    const explorationSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("engineering exploration"));
    if (explorationSubjectDoc) {
      const createdExplorationTopics = await Topic.insertMany(
        engineeringExplorationTopics.map(t => ({
          subject: explorationSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Engineering Exploration", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdExplorationTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of engineeringExplorationTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Engineering Mechanics Topics
    // ==========================

    const mechanicsSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("engineering mechanics"));
    if (mechanicsSubjectDoc) {
      const createdMechanicsTopics = await Topic.insertMany(
        mechanicsTopics.map(t => ({
          subject: mechanicsSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Engineering Mechanics", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdMechanicsTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of mechanicsTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Engineering Physics Topics
    // ==========================

    const physicsSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("engineering physics"));
    if (physicsSubjectDoc) {
      const createdPhysicsTopics = await Topic.insertMany(
        engineeringPhysicsTopics.map(t => ({
          subject: physicsSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Engineering Physics", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdPhysicsTopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of engineeringPhysicsTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Exploratory Data Analysis Topics
    // ==========================

    const edaSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("exploratory data analysis"));
    if (edaSubjectDoc) {
      const createdEDATopics = await Topic.insertMany(
        edaTopics.map(t => ({
          subject: edaSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Exploratory Data Analysis", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdEDATopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of edaTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Generative AI Topics
    // ==========================

    const genAiSubjectDoc = createdSubjects.find(s => s.name.toLowerCase().includes("generative ai"));
    if (genAiSubjectDoc) {
      const createdGenAITopics = await Topic.insertMany(
        genAiTopics.map(t => ({
          subject: genAiSubjectDoc._id,
          title: t.title,
          slug: t.slug,
          description: t.description,
          learningObjectives: t.learningObjectives || [],
          notes: t.notes || [],
          youtubeResources: t.youtubeResources || [],
          books: t.books || [],
          practiceLinks: t.practiceLinks || [],
          order: t.order,
          estimatedHours: t.estimatedHours || 4,
          difficulty: t.difficulty || "Beginner",
          questionBank: t.questionBank || generateTopicQuestionBank("Generative AI", t.title),
          isPublished: true
        }))
      );

      const titleToId = {};
      createdGenAITopics.forEach(top => { titleToId[top.title] = top._id; });
      for (const rawT of genAiTopics) {
        if (rawT.prerequisiteTitles && rawT.prerequisiteTitles.length > 0) {
          const tid = titleToId[rawT.title];
          const pids = rawT.prerequisiteTitles.map(pt => titleToId[pt]).filter(Boolean);
          if (tid && pids.length > 0) {
            await Topic.findByIdAndUpdate(tid, { $set: { prerequisites: pids } });
          }
        }
      }
    }

    // ==========================
    // Seed Topics for remaining subjects
    // ==========================
    console.log("Seeding remaining subjects' topics...");
    for (const subject of createdSubjects) {
      const existingTopics = await Topic.find({ subject: subject._id });
      if (existingTopics.length === 0) {
        const topicsToCreate = [];
        if (subject.concepts && subject.concepts.length > 0) {
          subject.concepts.forEach((concept, index) => {
            const cleanSubjectName = subject.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const cleanTopicTitle = concept.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            topicsToCreate.push({
              title: concept.title,
              slug: `${cleanSubjectName}-${cleanTopicTitle}`,
              description: `Master ${concept.title} concepts in ${subject.name}. Includes study guides, resources, textbooks, and interactive coding practices.`,
              subject: subject._id,
              order: index + 1,
              content: `Detailed study guides and theory notes for ${concept.title} in the subject of ${subject.name}. Reference Recommended Textbooks: ${subject.textbooks.map(tb => tb.title).join(", ") || "Standard Engineering Material"}.`,
              subTopics: concept.topics || [],
              learningObjectives: [
                `Understand the foundational principles of ${concept.title}.`,
                `Learn the key equations, architectures, and concepts in ${concept.title}.`,
                `Apply the knowledge of ${concept.title} to solve real-world engineering problems.`
              ],
              notes: [
                {
                  title: `Core Theory & Concepts: ${concept.title}`,
                  content: `This study guide covers the core theoretical structures, architectural diagrams, mathematical derivations, and implementations required for end-semester exams and technical interviews.

Key Sub-topics Covered:
${(concept.topics || []).map(t => `- ${t}`).join("\n")}

Overview:
${concept.title} forms a critical part of the ${subject.name} curriculum. Please refer to standard university textbooks and the video tutorials in the resources sidebar.`
                }
              ],
              youtubeResources: [
                { title: `Learn ${concept.title} Tutorial`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(subject.name + ' ' + concept.title + ' one shot')}` }
              ],
              books: [],
              practiceLinks: (subject.name.toLowerCase().includes("algorithm") || subject.name.toLowerCase().includes("data structure"))
                ? [
                    { title: "GeeksforGeeks Analysis of Algorithms", url: "https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/" },
                    { title: "Sanfoundry Data Structures & Algorithms Questions", url: "https://www.sanfoundry.com/1000-data-structures-algorithms-ii-questions-answers/" }
                  ]
                : [
                    { title: `GeeksforGeeks ${concept.title} Tutorial`, url: `https://www.google.com/search?q=${encodeURIComponent('geeksforgeeks ' + concept.title + ' tutorial')}&btnI=I` },
                    { title: `Sanfoundry ${concept.title} Notes`, url: `https://www.google.com/search?q=${encodeURIComponent('sanfoundry ' + concept.title + ' notes')}&btnI=I` }
                  ],
              questionBank: generateTopicQuestionBank(subject.name, concept.title)
            });
          });
        } else {
          const cleanSubjectName = subject.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          topicsToCreate.push({
            title: "Introduction",
            slug: `${cleanSubjectName}-introduction`,
            description: `Basic concepts of ${subject.name}`,
            subject: subject._id,
            order: 1,
            content: `Introductory guide for ${subject.name}`,
            subTopics: ["Fundamentals"],
            learningObjectives: [`Understand fundamental concepts of ${subject.name}.`],
            notes: [{ title: "Introduction Notes", content: `This serves as the foundational overview for ${subject.name}.` }],
            youtubeResources: [{ title: `${subject.name} Introduction Tutorial`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(subject.name + ' introduction')}` }],
            books: [],
            practiceLinks: (subject.name.toLowerCase().includes("algorithm") || subject.name.toLowerCase().includes("data structure"))
              ? [
                  { title: "GeeksforGeeks Analysis of Algorithms", url: "https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/" },
                  { title: "Sanfoundry Data Structures & Algorithms Questions", url: "https://www.sanfoundry.com/1000-data-structures-algorithms-ii-questions-answers/" }
                ]
              : [{ title: `GeeksforGeeks ${subject.name} Tutorial`, url: `https://www.google.com/search?q=${encodeURIComponent('geeksforgeeks ' + subject.name + ' tutorial')}&btnI=I` }],
            questionBank: generateTopicQuestionBank(subject.name, "Introduction")
          });
        }
        await Topic.insertMany(topicsToCreate);
      }
    }

    // ==========================
    // Seed Coding Problems
    // ==========================

    console.log("Seeding Coding Problems...");

    const topics = await Topic.find();
    const algorithmsCodingPractice = require("../data/subjects/algorithmsCodingPractice");
    const appliedPhysicsCodingPractice = require("../data/subjects/appliedPhysicsCodingPractice");
    const arithmeticalReasoningCodingPractice = require("../data/subjects/arithmeticalReasoningCodingPractice");
    const aimlCodingPractice = require("../data/subjects/aimlCodingPractice");
    const basicElectricalEngineeringCodingPractice = require("../data/subjects/basicElectricalEngineeringCodingPractice");
    const basicElectronicsCodingPractice = require("../data/subjects/basicElectronicsCodingPractice");
    const basicMechanicalEngineeringCodingPractice = require("../data/subjects/basicMechanicalEngineeringCodingPractice");
    const bigDataCodingPractice = require("../data/subjects/bigDataCodingPractice");
    const cProgrammingCodingPractice = require("../data/subjects/cProgrammingCodingPractice");
    const cloudComputingCodingPractice = require("../data/subjects/cloudComputingCodingPractice");
    const computerNetworksCodingPractice = require("../data/subjects/computerNetworksCodingPractice");
    const computerNetworksLabCodingPractice = require("../data/subjects/computerNetworksLabCodingPractice");
    const coaCodingPractice = require("../data/subjects/coaCodingPractice");
    const corporateCommunicationCodingPractice = require("../data/subjects/corporateCommunicationCodingPractice");
    const cryptographyCodingPractice = require("../data/subjects/cryptographyCodingPractice");
    const dsaCodingPractice = require("../data/subjects/dsaCodingPractice");
    const dbmsLabCodingPractice = require("../data/subjects/dbmsLabCodingPractice");
    const dbmsCodingPractice = require("../data/subjects/dbmsCodingPractice");
    const daaCodingPractice = require("../data/subjects/daaCodingPractice");
    const discreteMathCodingPractice = require("../data/subjects/discreteMathCodingPractice");
    const embeddedIotCodingPractice = require("../data/subjects/embeddedIotCodingPractice");
    const designThinkingCodingPractice = require("../data/subjects/designThinkingCodingPractice");
    const engineeringPhysicsCodingPractice = require("../data/subjects/engineeringPhysicsCodingPractice");
    const edaCodingPractice = require("../data/subjects/edaCodingPractice");
    const generativeAiCodingPractice = require("../data/subjects/generativeAiCodingPractice");
    const linearAlgebraCodingPractice = require("../data/subjects/linearAlgebraCodingPractice");
    const allCuratedPractice = [...algorithmsCodingPractice, ...appliedPhysicsCodingPractice, ...arithmeticalReasoningCodingPractice, ...aimlCodingPractice, ...basicElectricalEngineeringCodingPractice, ...basicElectronicsCodingPractice, ...basicMechanicalEngineeringCodingPractice, ...bigDataCodingPractice, ...cProgrammingCodingPractice, ...cloudComputingCodingPractice, ...computerNetworksCodingPractice, ...computerNetworksLabCodingPractice, ...coaCodingPractice, ...corporateCommunicationCodingPractice, ...cryptographyCodingPractice, ...dsaCodingPractice, ...dbmsLabCodingPractice, ...dbmsCodingPractice, ...daaCodingPractice, ...discreteMathCodingPractice, ...embeddedIotCodingPractice, ...designThinkingCodingPractice, ...engineeringPhysicsCodingPractice, ...edaCodingPractice, ...generativeAiCodingPractice, ...linearAlgebraCodingPractice];

    const codingProblems = [];

    topics.forEach((topic) => {
      // Find curated coding challenges for this topic if they exist
      const curatedTopic = allCuratedPractice.find(
        (c) => c.topic.toLowerCase() === topic.title.toLowerCase()
      );

      if (curatedTopic && curatedTopic.recommendedChallenges && curatedTopic.recommendedChallenges.length > 0) {
        curatedTopic.recommendedChallenges.forEach((p, idx) => {
          codingProblems.push({
            topic: topic._id,
            title: p.title,
            description: `Solve this problem to strengthen your ${topic.title} skills.`,
            difficulty: p.difficulty,
            platform: ["LeetCode", "Codeforces", "CodeChef", "HackerRank", "GeeksforGeeks"].includes(p.platform) ? p.platform : "Custom",
            problemUrl: p.url,
            tags: [topic.title],
            order: idx + 1,
            estimatedMinutes: p.difficulty === "Hard" ? 60 : p.difficulty === "Medium" ? 40 : 25,
            isPublished: true,
          });
        });
      } else {
        // Fallback to generic dummy coding problems for other subjects' topics
        codingProblems.push(
          {
            topic: topic._id,
            title: `${topic.title} Practice 1`,
            description: `Practice beginner problems for ${topic.title}.`,
            difficulty: "Easy",
            platform: "LeetCode",
            problemUrl: "https://leetcode.com/problemset/",
            tags: [topic.title],
            order: 1,
            estimatedMinutes: 20,
          },
          {
            topic: topic._id,
            title: `${topic.title} Practice 2`,
            description: `Practice intermediate problems for ${topic.title}.`,
            difficulty: "Medium",
            platform: "GeeksforGeeks",
            problemUrl: "https://practice.geeksforgeeks.org/",
            tags: [topic.title],
            order: 2,
            estimatedMinutes: 35,
          },
          {
            topic: topic._id,
            title: `${topic.title} Challenge`,
            description: `Advanced challenge for ${topic.title}.`,
            difficulty: "Hard",
            platform: "CodeChef",
            problemUrl: "https://www.codechef.com/practice",
            tags: [topic.title],
            order: 3,
            estimatedMinutes: 60,
          }
        );
      }
    });

    await CodingProblem.insertMany(codingProblems);

    // ==========================
    // Seed Assignments
    // ==========================

    console.log("Seeding Assignments...");

    const assignments = [];

    dsaAssignments.forEach((assignment) => {
      const topic = topics.find(
        (t) =>
          t.title.toLowerCase() ===
          assignment.topicTitle.toLowerCase()
      );

      if (topic) {
        assignments.push({
          topic: topic._id,
          title: assignment.title,
          description: assignment.description,
          difficulty: assignment.difficulty,
          estimatedMinutes: assignment.estimatedMinutes,
          questions: assignment.questions,
        });
      }
    });

    await Assignment.insertMany(assignments);

    // ==========================
    // Seed Quizzes
    // ==========================

    console.log("Seeding Quizzes...");

    const quizzes = [];

    dsaQuiz.forEach((quiz) => {
      const topic = topics.find(
        (t) =>
          t.title.toLowerCase() ===
          quiz.topicTitle.toLowerCase()
      );

      if (topic) {
        quizzes.push({
          topic: topic._id,
          title: quiz.title,
          description: quiz.description,
          duration: quiz.duration,
          passingMarks: quiz.passingMarks,
          totalMarks: quiz.totalMarks,
          questions: quiz.questions,
        });
      }
    });

    for (const topic of topics) {
      const alreadyHasQuiz = quizzes.some(q => q.topic.toString() === topic._id.toString());
      if (!alreadyHasQuiz) {
        const sub = createdSubjects.find(s => s._id.toString() === topic.subject.toString());
        const subName = sub ? sub.name : "Engineering";
        quizzes.push(generateTopicQuiz(topic._id, topic.title, subName));
      }
    }

    await Quiz.insertMany(quizzes);

    // ==========================
    // Seed Roadmaps
    // ==========================

    console.log("Seeding Roadmaps...");

    const createdCareers = await Career.find();

    const roadmaps = [];

    for (const career of createdCareers) {

      roadmaps.push(

        {
          career: career._id,
          title: "Programming Fundamentals",
          description:
            "Learn programming fundamentals and build strong problem-solving skills.",
          order: 1,
          estimatedWeeks: 4,
          requiredSubjects: createdSubjects
            .slice(0, 3)
            .map((s) => s._id),
          requiredSkills: [
            "C Programming",
            "Problem Solving",
            "Data Structures",
          ],
          projects: [
            {
              title: "Student Record System",
              description:
                "Build a console-based CRUD application.",
            },
          ],
          interviewTopics: [
            "Variables",
            "Loops",
            "Functions",
          ],
        },

        {
          career: career._id,
          title: "Core Computer Science",
          description:
            "Master core computer science subjects for placements.",
          order: 2,
          estimatedWeeks: 6,
          requiredSubjects: createdSubjects
            .slice(3, 8)
            .map((s) => s._id),
          requiredSkills: [
            "DBMS",
            "Operating Systems",
            "Computer Networks",
          ],
          projects: [
            {
              title: "Library Management System",
              description:
                "Database-driven mini project.",
            },
          ],
          interviewTopics: [
            "Normalization",
            "Deadlocks",
            "TCP/IP",
          ],
        },

        {
          career: career._id,
          title: "Projects & Placement Preparation",
          description:
            "Build industry-level projects and prepare for placements.",
          order: 3,
          estimatedWeeks: 8,
          requiredSubjects: createdSubjects
            .slice(8)
            .map((s) => s._id),
          requiredSkills: [
            "React",
            "Node.js",
            "MongoDB",
            "Git",
          ],
          projects: [
            {
              title: "AI Career Navigation Platform",
              description:
                "Develop a complete MERN stack application.",
            },
          ],
          interviewTopics: [
            "System Design",
            "Coding Interview",
            "HR Interview",
          ],
        }

      );

    }

    await Roadmap.insertMany(roadmaps);

    // ==========================
    // Seed Events
    // ==========================
    console.log("Seeding Events...");
    await Event.insertMany([
      {
        title: "Smart India Hackathon (SIH) 2026",
        type: "Hackathon",
        organizer: "AICTE & Ministry of Education, Govt. of India",
        description: "India's premier nationwide innovation hackathon bringing together college students to solve pressing problem statements proposed by central ministries, state departments, and top industries.",
        location: "New Delhi & Nodal Centers Nationwide",
        mode: "Hybrid",
        registrationUrl: "https://www.sih.gov.in",
        registrationLink: "https://www.sih.gov.in",
        officialSourceUrl: "https://www.sih.gov.in",
        officialSourceName: "AICTE & MoE Official Portal",
        isOfficialVerified: true,
        eventDate: new Date("2026-09-22T09:00:00Z"),
        eventEndDate: new Date("2026-09-24T18:00:00Z"),
        registrationDeadline: new Date("2026-08-30T23:59:59Z"),
        deadline: new Date("2026-08-30T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["Web Development", "AI/ML", "Cloud", "Mobile", "IoT", "Problem Solving"],
        eligibility: "Regular undergraduate and postgraduate students from recognized Indian colleges.",
        featured: true,
      },
      {
        title: "Microsoft Imagine Cup 2026 Global Student Competition",
        type: "Hackathon",
        organizer: "Microsoft",
        description: "The global student technology challenge empowering founders and developers to build purpose-driven AI and cloud technology startups using Azure and OpenAI models.",
        location: "Global / Online",
        mode: "Online",
        registrationUrl: "https://imaginecup.microsoft.com",
        registrationLink: "https://imaginecup.microsoft.com",
        officialSourceUrl: "https://imaginecup.microsoft.com",
        officialSourceName: "Microsoft Student Developer Hub",
        isOfficialVerified: true,
        eventDate: new Date("2026-10-15T10:00:00Z"),
        registrationDeadline: new Date("2026-08-16T23:59:59Z"),
        deadline: new Date("2026-08-16T23:59:59Z"),
        timezone: "UTC / Global",
        skills: ["AI/ML", "Cloud", "Web Development", "Mobile", "General Software Development"],
        eligibility: "Students aged 16+ enrolled in accredited educational institutions worldwide.",
        featured: true,
      },
      {
        title: "ICPC Asia Regional Preliminary Contest",
        type: "Coding Contest",
        organizer: "International Collegiate Programming Contest (ICPC Foundation)",
        description: "The oldest and most prestigious competitive programming championship for university students, testing algorithmic mastery, data structures, and high-pressure team problem solving.",
        location: "Online / Regional Sites",
        mode: "Online",
        registrationUrl: "https://icpc.global",
        registrationLink: "https://icpc.global",
        officialSourceUrl: "https://icpc.global/regionals/finder",
        officialSourceName: "ICPC Global Foundation",
        isOfficialVerified: true,
        eventDate: new Date("2026-09-06T14:00:00Z"),
        registrationDeadline: new Date("2026-08-15T23:59:59Z"),
        deadline: new Date("2026-08-15T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["DSA", "General Software Development", "Algorithms", "Problem Solving"],
        eligibility: "Teams of 3 eligible university students registered through official university coach.",
        featured: true,
      },
      {
        title: "AWS Innovate: AI & Cloud Online Conference",
        type: "Conference",
        organizer: "Amazon Web Services (AWS)",
        description: "Official AWS technical conference dedicated to developers, engineers, and students looking to architect, deploy, and scale machine learning and cloud architectures on AWS.",
        location: "Online (Asia-Pacific / Global)",
        mode: "Online",
        registrationUrl: "https://aws.amazon.com/events/aws-innovate/",
        registrationLink: "https://aws.amazon.com/events/aws-innovate/",
        officialSourceUrl: "https://aws.amazon.com/events/aws-innovate/",
        officialSourceName: "Amazon Web Services Official Events",
        isOfficialVerified: true,
        eventDate: new Date("2026-08-27T09:00:00Z"),
        registrationDeadline: new Date("2026-08-26T23:59:59Z"),
        deadline: new Date("2026-08-26T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["Cloud", "AI/ML", "DevOps", "Data Science"],
        eligibility: "Open to all developers, students, and cloud enthusiasts worldwide.",
        featured: false,
      },
      {
        title: "Google Solution Challenge – Global Community Showcase",
        type: "Hackathon",
        organizer: "Google Developer Groups & Google for Developers",
        description: "Global student initiative challenging university teams to develop real-world software solutions addressing the United Nations 17 Sustainable Development Goals using Google tools.",
        location: "Online",
        mode: "Online",
        registrationUrl: "https://developers.google.com/community/gdsc-solution-challenge",
        registrationLink: "https://developers.google.com/community/gdsc-solution-challenge",
        officialSourceUrl: "https://developers.google.com/community/gdsc-solution-challenge",
        officialSourceName: "Google for Developers",
        isOfficialVerified: true,
        eventDate: new Date("2026-11-10T14:00:00Z"),
        registrationDeadline: new Date("2026-09-15T23:59:59Z"),
        deadline: new Date("2026-09-15T23:59:59Z"),
        timezone: "Global (UTC)",
        skills: ["Web Development", "Cloud", "AI/ML", "Mobile", "DevOps"],
        eligibility: "University students worldwide.",
        featured: false,
      },
      {
        title: "NVIDIA DLI: Fundamentals of Deep Learning Workshop",
        type: "Workshop",
        organizer: "NVIDIA Deep Learning Institute",
        description: "Hands-on instructor-led technical workshop exploring deep neural networks, computer vision classification, data augmentation, and GPU-accelerated model training on NVIDIA hardware.",
        location: "Online",
        mode: "Online",
        registrationUrl: "https://www.nvidia.com/en-us/training/",
        registrationLink: "https://www.nvidia.com/en-us/training/",
        officialSourceUrl: "https://www.nvidia.com/en-us/training/",
        officialSourceName: "NVIDIA Deep Learning Institute",
        isOfficialVerified: true,
        eventDate: new Date("2026-09-18T10:00:00Z"),
        registrationDeadline: new Date("2026-09-10T23:59:59Z"),
        deadline: new Date("2026-09-10T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["AI/ML", "Data Science", "Python"],
        eligibility: "Engineers, computer science students, and researchers with basic Python knowledge.",
        featured: false,
      },
      {
        title: "PyCon India 2026 Technical Conference",
        type: "Conference",
        organizer: "Python Software Society of India",
        description: "The largest annual volunteer-driven conference for the Python programming language in India, featuring technical deep-dives on backend architectures, data engineering, and AI pipelines.",
        location: "Bengaluru, Karnataka & Online",
        mode: "Hybrid",
        registrationUrl: "https://in.pycon.org",
        registrationLink: "https://in.pycon.org",
        officialSourceUrl: "https://in.pycon.org",
        officialSourceName: "Python Software Society of India",
        isOfficialVerified: true,
        eventDate: new Date("2026-09-26T09:00:00Z"),
        registrationDeadline: new Date("2026-09-15T23:59:59Z"),
        deadline: new Date("2026-09-15T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["Web Development", "Data Science", "AI/ML", "DevOps", "General Software Development"],
        eligibility: "Open to all students, researchers, and professional software developers.",
        featured: false,
      },
      {
        title: "Google Summer of Code (GSoC) Midterm Developer Forum",
        type: "Webinar",
        organizer: "Google Open Source",
        description: "Interactive session and live project showcases by student developers and open source mentors discussing large-scale repository contributions and distributed engineering workflows.",
        location: "Online",
        mode: "Online",
        registrationUrl: "https://summerofcode.withgoogle.com",
        registrationLink: "https://summerofcode.withgoogle.com",
        officialSourceUrl: "https://summerofcode.withgoogle.com",
        officialSourceName: "Google Open Source Programs Office",
        isOfficialVerified: true,
        eventDate: new Date("2026-08-20T16:00:00Z"),
        registrationDeadline: new Date("2026-08-14T23:59:59Z"),
        deadline: new Date("2026-08-14T23:59:59Z"),
        timezone: "Global (UTC)",
        skills: ["General Software Development", "Web Development", "DevOps", "DSA"],
        eligibility: "Open to all global student developers.",
        featured: false,
      },
      {
        title: "AWS Summit Bengaluru 2026",
        type: "Tech Event",
        organizer: "Amazon Web Services (AWS)",
        description: "Concluded regional flagship cloud summit featuring executive keynotes, infrastructure tracks, and cloud architectural best practices. Session recordings, slides, and whitepapers are archived on the official summit portal.",
        location: "BIEC Bengaluru, Karnataka",
        mode: "Offline",
        registrationUrl: "https://aws.amazon.com/events/summits/bengaluru/",
        registrationLink: "https://aws.amazon.com/events/summits/bengaluru/",
        officialSourceUrl: "https://aws.amazon.com/events/summits/bengaluru/",
        officialSourceName: "AWS Summit Official Archives",
        isOfficialVerified: true,
        eventDate: new Date("2026-04-22T08:30:00Z"),
        eventEndDate: new Date("2026-04-23T18:00:00Z"),
        registrationDeadline: new Date("2026-04-20T23:59:59Z"),
        deadline: new Date("2026-04-20T23:59:59Z"),
        timezone: "IST (UTC+5:30)",
        skills: ["Cloud", "DevOps", "Cybersecurity", "AI/ML", "Data Science"],
        eligibility: "Concluded event - archives available.",
        pastResourcesUrl: "https://aws.amazon.com/events/summits/bengaluru/",
        featured: false,
      }
    ]);

    console.log("✅ Subjects Seeded");
    console.log("✅ Careers Seeded");
    console.log("✅ Topics Seeded");
    console.log("✅ Coding Problems Seeded");
    console.log("✅ Assignments Seeded");
    console.log("✅ Quizzes Seeded");
    console.log("✅ Roadmaps Seeded");
    console.log("✅ Events Seeded");

    console.log("🎉 Database Seeded Successfully!");

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
};

seedDatabase();
