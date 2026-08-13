require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const REFACTORED_SE_PROBLEMS = {
  oopDesign: [
    {
      title: "Design Parking System",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/design-parking-system/",
      placementImportance: "Essential",
      tags: ["OOP Design", "Classes", "Simulation"]
    },
    {
      title: "Design HashMap",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/design-hashmap/",
      placementImportance: "Essential",
      tags: ["OOP Design", "Hashing", "Data Structures"]
    },
    {
      title: "Design Linked List",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/design-linked-list/",
      placementImportance: "Essential",
      tags: ["OOP Design", "Pointers", "Modularity"]
    },
    {
      title: "Design Underground System",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/design-underground-system/",
      placementImportance: "Essential",
      tags: ["OOP Design", "System Design", "Hash Table"]
    }
  ],
  implementation: [
    {
      title: "Implement Trie (Prefix Tree)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      placementImportance: "Essential",
      tags: ["Trie", "Design", "Data Structures"]
    },
    {
      title: "LRU Cache Implementation",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/lru-cache/",
      placementImportance: "Essential",
      tags: ["LRU", "Doubly Linked List", "System Design"]
    },
    {
      title: "Min Stack Design",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/min-stack/",
      placementImportance: "Essential",
      tags: ["Stack", "Design", "O(1)"]
    },
    {
      title: "Implement Queue using Stacks",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
      placementImportance: "Essential",
      tags: ["Queue", "Stack", "Design"]
    }
  ],
  softwareTesting: [
    {
      title: "Calculator Unit Testing Suite",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Unit Testing", "Assertions", "Edge Cases"],
      description: "Write automated unit tests to verify addition, division by zero, float precision, and negative numbers for a Calculator module."
    },
    {
      title: "Login Validation Testing",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Unit Testing", "Validation", "Authentication"],
      description: "Implement test cases asserting correct rejection of empty usernames, invalid credentials, and SQL injection payloads."
    },
    {
      title: "Email Validation Testing",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Regex", "Unit Testing", "Boundary Values"],
      description: "Construct unit tests verifying valid RFC email patterns and checking invalid domains, multiple @ symbols, and special characters."
    },
    {
      title: "Password Validation Testing",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Security Testing", "Validation", "Unit Tests"],
      description: "Develop test cases asserting password strength rules (length >= 8, uppercase, numbers, special characters)."
    },
    {
      title: "Boundary Value Testing for Array Range",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Boundary Value Analysis", "Black Box Testing"],
      description: "Write test cases for min-1, min, min+1, max-1, max, and max+1 boundaries on input range validation."
    },
    {
      title: "Invalid Input & Error Handling Testing",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Error Handling", "Negative Testing"],
      description: "Test software robustness against null pointers, unexpected types, overflow numbers, and undefined inputs."
    },
    {
      title: "Exception Handling Test Cases",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["Exception Handling", "Unit Testing"],
      description: "Assert that critical failures throw the expected custom exceptions and do not crash the application."
    },
    {
      title: "Test a REST API Response",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["API Testing", "HTTP Codes", "JSON Assertions"],
      description: "Write integration tests validating 200 OK, 201 Created, 400 Bad Request, and 404 Not Found payloads."
    },
    {
      title: "Test CRUD Operations in Data Layer",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://jestjs.io/docs/getting-started",
      placementImportance: "Essential",
      tags: ["CRUD Testing", "Database Testing"],
      description: "Test state persistence across Create, Read, Update, and Delete operations."
    }
  ],
  testingTechniques: [
    {
      title: "White-Box Test Cases for Branch & Condition Coverage",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/white-box-testing/",
      placementImportance: "Essential",
      tags: ["White-Box", "Cyclomatic Complexity", "Coverage"],
      description: "Analyze a complex branching function, compute Cyclomatic Complexity V(G), and design test cases covering 100% of branches."
    },
    {
      title: "Black-Box Test Cases for Login Form",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/black-box-testing/",
      placementImportance: "Essential",
      tags: ["Black-Box", "Functional Testing"],
      description: "Design comprehensive functional black-box test specifications for user authentication."
    },
    {
      title: "Equivalence Partitioning for Student Grading",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/equivalence-partitioning-method/",
      placementImportance: "Essential",
      tags: ["Equivalence Partitioning", "Test Design"],
      description: "Identify valid and invalid equivalence partitions for marks [0-100] and formulate minimal test sets."
    },
    {
      title: "Boundary Value Testing for Age Validation",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/boundary-value-analysis/",
      placementImportance: "Essential",
      tags: ["Boundary Value Analysis", "Test Design"],
      description: "Define test cases for age range [18 to 60] using 2-value and 3-value boundary test methodology."
    },
    {
      title: "Decision Table Testing for Discount Calculation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/decision-table-testing-in-software-engineering/",
      placementImportance: "Essential",
      tags: ["Decision Table", "Combinatorial Testing"],
      description: "Build a decision table covering customer type, coupon code, and order total combinations."
    },
    {
      title: "Test Cases for ATM Cash Withdrawal System",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/test-cases-for-atm/",
      placementImportance: "Essential",
      tags: ["Test Cases", "State Transition"],
      description: "Formulate test scenarios for daily limit exceeded, incorrect PIN, balance deduction, and cash dispenser failure."
    },
    {
      title: "Test Cases for E-Commerce Shopping Cart",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/test-cases-for-shopping-cart/",
      placementImportance: "Essential",
      tags: ["E-Commerce", "Test Design"],
      description: "Design end-to-end test cases for cart item quantities, promo code stacking, stock validation, and tax calculation."
    },
    {
      title: "Test Cases for JWT API Authentication Security",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.geeksforgeeks.org/jwt-json-web-token/",
      placementImportance: "Essential",
      tags: ["Security Testing", "JWT", "API"],
      description: "Create test cases verifying expired tokens, tampered signatures, missing Bearer headers, and role authorization."
    }
  ],
  devopsDeployment: [
    {
      title: "Dockerize a C++ / Node.js Application",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.docker.com/get-started/",
      placementImportance: "Essential",
      tags: ["Docker", "DevOps", "Containers"],
      description: "Write a multi-stage Dockerfile to build and package a minimal runtime container image."
    },
    {
      title: "Create a Production Dockerfile",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.docker.com/engine/reference/builder/",
      placementImportance: "Essential",
      tags: ["Docker", "Containers", "Best Practices"],
      description: "Construct an optimized non-root production Dockerfile leveraging layer caching and Alpine Linux."
    },
    {
      title: "Create Docker Compose Setup",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.docker.com/compose/",
      placementImportance: "Essential",
      tags: ["Docker Compose", "Microservices", "Networking"],
      description: "Configure docker-compose.yml orchestrating an Express backend, React frontend, and MongoDB database with persistent volumes."
    },
    {
      title: "Build and Run a Containerized Application",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://docs.docker.com/get-started/workshop/02_our_app/",
      placementImportance: "Essential",
      tags: ["Docker", "CLI", "Containers"],
      description: "Execute docker build, tag, port mapping (-p 5000:5000), environment variables (-e), and inspect container logs."
    },
    {
      title: "GitHub Actions CI Pipeline Configuration",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.github.com/en/actions",
      placementImportance: "Essential",
      tags: ["CI/CD", "GitHub Actions", "Automation"],
      description: "Create .github/workflows/ci.yml to automatically run linting and unit tests on every pull request."
    },
    {
      title: "Automated Build, Test and Release Pipeline",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://docs.github.com/en/actions/automating-builds-and-tests",
      placementImportance: "Important",
      tags: ["CI/CD", "DevOps", "Release Pipeline"],
      description: "Implement an end-to-end pipeline that runs tests, builds Docker images, and pushes images to DockerHub on release tags."
    }
  ],
  configurationManagement: [
    {
      title: "Git Repository Setup and Initialization",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://github.com/git-guides",
      placementImportance: "Essential",
      tags: ["Git", "VCS", "Setup"],
      description: "Initialize git repository, configure .gitignore, user name, email, and make initial semantic commits."
    },
    {
      title: "Branching and Merging Workflow (Gitflow)",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
      placementImportance: "Essential",
      tags: ["Git", "Branching", "Collaboration"],
      description: "Create feature branches from main/dev, commit isolated changes, and merge via fast-forward and 3-way merges."
    },
    {
      title: "Pull Request and Code Review Workflow",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.github.com/en/pull-requests",
      placementImportance: "Essential",
      tags: ["GitHub", "Pull Requests", "Code Review"],
      description: "Fork a repository, create a descriptive PR with issue linking, address code review comments, and squash merge."
    },
    {
      title: "Merge Conflict Resolution Practice",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts",
      placementImportance: "Essential",
      tags: ["Git", "Merge Conflicts", "Troubleshooting"],
      description: "Simulate conflicting changes in the same file across two branches, inspect diff markers, resolve conflicts, and complete merge commit."
    },
    {
      title: "Git Revert, Reset, and Stash Practice",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified",
      placementImportance: "Important",
      tags: ["Git", "Undo", "Stash"],
      description: "Practice safe rollback using git revert, git reset (--soft, --mixed, --hard), and temporarily shelving changes with git stash."
    },
    {
      title: "Semantic Versioning, Tagging and Release Workflow",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://git-scm.com/book/en/v2/Git-Basics-Tagging",
      placementImportance: "Important",
      tags: ["Git Tags", "SemVer", "Releases"],
      description: "Create annotated git tags (v1.0.0), push tags to remote, and generate changelog releases on GitHub."
    }
  ]
};

const refactorSoftwareEngineering = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Software Engineering/i });
    if (!subject) {
      console.log('❌ Software Engineering subject not found');
      process.exit(1);
    }

    console.log(`\n🔧 Refactoring "${subject.name}"...`);
    const topics = await Topic.find({ subject: subject._id });

    // Wipe old coding problems for this subject
    const topicIds = topics.map(t => t._id);
    await CodingProblem.deleteMany({ topic: { $in: topicIds } });

    const mapping = [
      { pattern: /Object-Oriented Software Design/i, problems: REFACTORED_SE_PROBLEMS.oopDesign },
      { pattern: /Software Implementation and Coding/i, problems: REFACTORED_SE_PROBLEMS.implementation },
      { pattern: /^Software Testing$/i, problems: REFACTORED_SE_PROBLEMS.softwareTesting },
      { pattern: /Software Testing Techniques/i, problems: REFACTORED_SE_PROBLEMS.testingTechniques },
      { pattern: /DevOps and Software Deployment/i, problems: REFACTORED_SE_PROBLEMS.devopsDeployment },
      { pattern: /Software Configuration Management/i, problems: REFACTORED_SE_PROBLEMS.configurationManagement }
    ];

    let totalInserted = 0;
    for (const item of mapping) {
      const topic = topics.find(t => item.pattern.test(t.title));
      if (topic) {
        const toInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: p.description || `Practical software engineering challenge for ${topic.title}.`,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          placementImportance: p.placementImportance || "Essential",
          tags: p.tags || [topic.title],
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(toInsert);
        totalInserted += toInsert.length;
        console.log(`   ✅ "${topic.title}": ${toInsert.length} distinct challenges`);
      }
    }

    console.log(`\n🎉 Refactored Software Engineering successfully! Total challenges: ${totalInserted} (Zero duplicates).`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

refactorSoftwareEngineering();
