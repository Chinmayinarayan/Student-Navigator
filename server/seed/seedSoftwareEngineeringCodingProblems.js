require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const SE_CURATED_PROBLEMS = [
  {
    topicPattern: /Object-Oriented Software Design/i,
    problems: [
      {
        title: "Design Parking System",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-parking-system/",
        tags: ["OOP", "System Design", "Classes"]
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-hashmap/",
        tags: ["OOP", "Data Structures", "Design"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Linked List", "Design"]
      },
      {
        title: "Design Underground System",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-underground-system/",
        tags: ["OOP", "System Design", "Hash Table"]
      }
    ]
  },
  {
    topicPattern: /Software Implementation and Coding/i,
    problems: [
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
        tags: ["Implementation", "Trie", "Design"]
      },
      {
        title: "LRU Cache Implementation",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/lru-cache/",
        tags: ["Implementation", "LRU Cache", "Hash Table", "Doubly Linked List"]
      },
      {
        title: "Min Stack Design",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/min-stack/",
        tags: ["Implementation", "Stack", "Design"]
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
        tags: ["Implementation", "Stack", "Queue"]
      }
    ]
  },
  {
    topicPattern: /^Software Testing$/i,
    problems: [
      {
        title: "Valid Palindrome (Unit Testing & Edge Cases)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-palindrome/",
        tags: ["Software Testing", "Unit Tests", "Strings"]
      },
      {
        title: "Valid Parentheses (Boundary & Structural Testing)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-parentheses/",
        tags: ["Software Testing", "Boundary Values", "Stack"]
      },
      {
        title: "Fizz Buzz (Equivalence Partitioning)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/fizz-buzz/",
        tags: ["Software Testing", "Equivalence Partitioning"]
      },
      {
        title: "Add Two Numbers (Corner Case & Carry Testing)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/add-two-numbers/",
        tags: ["Software Testing", "Corner Cases", "Linked List"]
      }
    ]
  },
  {
    topicPattern: /Software Testing Techniques/i,
    problems: [
      {
        title: "Valid Palindrome Test Suites (White-box Testing)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-palindrome/",
        tags: ["Testing Techniques", "White-Box", "Strings"]
      },
      {
        title: "Valid Parentheses (Black-box Boundary Testing)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-parentheses/",
        tags: ["Testing Techniques", "Black-Box", "Stack"]
      },
      {
        title: "Fizz Buzz (Equivalence Class Partitioning)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/fizz-buzz/",
        tags: ["Testing Techniques", "Equivalence Classes"]
      },
      {
        title: "Add Two Numbers (Edge Cases & Stress Testing)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/add-two-numbers/",
        tags: ["Testing Techniques", "Stress Testing"]
      }
    ]
  },
  {
    topicPattern: /DevOps and Software Deployment/i,
    problems: [
      {
        title: "Dockerize a C++ / Node.js Microservice",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.docker.com/get-started/",
        tags: ["DevOps", "Docker", "Containers", "Deployment"]
      },
      {
        title: "CI/CD Pipeline Setup with GitHub Actions",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.github.com/en/actions",
        tags: ["DevOps", "CI/CD", "GitHub Actions"]
      }
    ]
  },
  {
    topicPattern: /Software Configuration Management/i,
    problems: [
      {
        title: "Git Repository Setup, Branching & Merging Workflow",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://github.com/git-guides",
        tags: ["Git", "Version Control", "Branching", "SCM"]
      },
      {
        title: "Resolving Git Merge Conflicts & Pull Requests",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.github.com/en/get-started",
        tags: ["Git", "Merge Conflicts", "Pull Requests", "SCM"]
      }
    ]
  }
];

const seedSoftwareEngineeringCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Software Engineering$/i });
    if (!subject) {
      console.log('❌ Software Engineering subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id });

    for (const item of SE_CURATED_PROBLEMS) {
      const topic = topics.find(t => item.topicPattern.test(t.title));
      if (topic) {
        await CodingProblem.deleteMany({ topic: topic._id });
        const problemsToInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: `Solve this challenge for ${topic.title} in Software Engineering.`,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          tags: p.tags || [topic.title],
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(problemsToInsert);
        console.log(`   ✅ "${topic.title}": added ${problemsToInsert.length} problems`);
      } else {
        console.log(`   ❌ Topic pattern not matched: ${item.topicPattern}`);
      }
    }

    console.log(`\n🎉 Software Engineering Coding Problems Seeded!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedSoftwareEngineeringCodingProblems();
