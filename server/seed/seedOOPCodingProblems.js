require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

// Curated OOP coding problems mapped by exact topic title
const OOP_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Object Oriented Programming",
    problems: [
      {
        title: "Classes & Objects",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/c-classes-and-objects/",
        tags: ["OOP", "Classes", "Objects"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Design", "Linked List"]
      }
    ]
  },
  {
    topicTitle: "Programming Fundamentals for OOP",
    problems: [
      {
        title: "C++ Strings",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/c-tutorial-strings/problem",
        tags: ["C++", "Strings", "Fundamentals"]
      },
      {
        title: "Arrays Introduction",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/arrays-introduction/problem",
        tags: ["C++", "Arrays", "Fundamentals"]
      },
      {
        title: "C++ Vector",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/vector-sort/problem",
        tags: ["C++", "Vector", "STL"]
      }
    ]
  },
  {
    topicTitle: "Classes and Objects",
    problems: [
      {
        title: "Classes and Objects",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/classes-objects/problem",
        tags: ["OOP", "Classes", "Objects"]
      },
      {
        title: "Design a Class",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-dynamic-memory-and-oops-practice-problems/",
        tags: ["OOP", "Class Design"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Design", "Linked List"]
      }
    ]
  },
  {
    topicTitle: "Encapsulation",
    problems: [
      {
        title: "Box It!",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/box-it/problem",
        tags: ["OOP", "Encapsulation", "Classes"]
      },
      {
        title: "Encapsulation Practice",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-dynamic-memory-and-oops-practice-problems/",
        tags: ["OOP", "Encapsulation"]
      }
    ]
  },
  {
    topicTitle: "Abstraction",
    problems: [
      {
        title: "Abstract Classes - Polymorphism",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/abstract-classes-polymorphism/problem",
        tags: ["OOP", "Abstraction", "Polymorphism"]
      },
      {
        title: "Abstraction in Class",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Abstraction"]
      }
    ]
  },
  {
    topicTitle: "Inheritance",
    problems: [
      {
        title: "Inheritance Introduction",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/inheritance-introduction/problem",
        tags: ["OOP", "Inheritance"]
      },
      {
        title: "Multi Level Inheritance",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/multi-level-inheritance-cpp/problem",
        tags: ["OOP", "Inheritance", "Multi-Level"]
      },
      {
        title: "Accessing Inherited Functions",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/accessing-inherited-functions/problem",
        tags: ["OOP", "Inheritance", "Functions"]
      },
      {
        title: "Inheritance Practice Problems",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-dynamic-memory-and-oops-practice-problems/",
        tags: ["OOP", "Inheritance"]
      }
    ]
  },
  {
    topicTitle: "Polymorphism",
    problems: [
      {
        title: "Virtual Functions",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/virtual-functions/problem",
        tags: ["OOP", "Polymorphism", "Virtual Functions"]
      },
      {
        title: "Abstract Classes - Polymorphism",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/abstract-classes-polymorphism/problem",
        tags: ["OOP", "Polymorphism", "Abstract Class"]
      },
      {
        title: "Polymorphism in Class",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Polymorphism"]
      }
    ]
  },
  {
    topicTitle: "Advanced OOP Concepts",
    problems: [
      {
        title: "Operator Overloading",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/operator-overloading/problem",
        tags: ["OOP", "Operator Overloading"]
      },
      {
        title: "Overload Operators",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/overload-operators/problem",
        tags: ["OOP", "Operator Overloading"]
      },
      {
        title: "Function Overloading",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Function Overloading"]
      }
    ]
  },
  {
    topicTitle: "Exception Handling",
    problems: [
      {
        title: "Exceptional Server",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/exceptional-server/problem",
        tags: ["OOP", "Exception Handling"]
      },
      {
        title: "Exception Handling Practice",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Exception Handling"]
      }
    ]
  },
  {
    topicTitle: "File Handling",
    problems: [
      {
        title: "File Handling in C++",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "File Handling", "C++"]
      },
      {
        title: "C++ File Handling Challenges",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/cpp",
        tags: ["OOP", "File Handling", "C++"]
      }
    ]
  },
  {
    topicTitle: "Generic Programming",
    problems: [
      {
        title: "C++ Class Templates",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/c-class-templates/problem",
        tags: ["OOP", "Templates", "Generic Programming"]
      },
      {
        title: "C++ Class Template Specialization",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/cpp-class-template-specialization/problem",
        tags: ["OOP", "Templates", "Specialization"]
      },
      {
        title: "Template Parameters",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/cpp-variadics/problem",
        tags: ["OOP", "Templates", "Parameters"]
      }
    ]
  },
  {
    topicTitle: "Object Oriented Design Principles",
    problems: [
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Design", "SOLID"]
      },
      {
        title: "Design a Class (OOP Practice)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-dynamic-memory-and-oops-practice-problems/",
        tags: ["OOP", "Design", "SOLID"]
      }
    ]
  },
  {
    topicTitle: "UML and Object Modeling",
    problems: [
      {
        title: "Attribute Parser",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/attribute-parser/problem",
        tags: ["OOP", "UML", "Parsing"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "UML", "Design"]
      }
    ]
  },
  {
    topicTitle: "OOP Implementation in Programming Languages",
    problems: [
      {
        title: "Operator Overloading",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/operator-overloading/problem",
        tags: ["OOP", "C++", "Implementation"]
      },
      {
        title: "Add Two Complex Numbers",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Implementation"]
      },
      {
        title: "Function Overriding",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-programming-examples/",
        tags: ["OOP", "Polymorphism", "Overriding"]
      }
    ]
  },
  {
    topicTitle: "Object Oriented Programming Applications",
    problems: [
      {
        title: "Inherited Code",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/inherited-code/problem",
        tags: ["OOP", "Inheritance", "Applications"]
      },
      {
        title: "Multi Level Inheritance",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/multi-level-inheritance-cpp/problem",
        tags: ["OOP", "Inheritance", "Applications"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Applications", "Design"]
      }
    ]
  },
  {
    topicTitle: "Practical Programming and Projects",
    problems: [
      {
        title: "Inherited Code",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/inherited-code/problem",
        tags: ["OOP", "Projects", "Practical"]
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/design-linked-list/",
        tags: ["OOP", "Projects", "Practical"]
      },
      {
        title: "C++ OOP Practice Problems",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/cpp/cpp-dynamic-memory-and-oops-practice-problems/",
        tags: ["OOP", "Projects", "Practice"]
      }
    ]
  }
];

const seedOOPCodingProblems = async () => {
  try {
    await connectDB();

    // Find the OOP subject
    const subject = await Subject.findOne({ name: /^Object Oriented Programming$/i });
    if (!subject) {
      console.log('❌ OOP Subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    // Get all topics for OOP
    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} OOP topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of OOP_CODING_PROBLEMS) {
      // Find matching topic (case-insensitive)
      const topic = topics.find(
        t => t.title.toLowerCase() === entry.topicTitle.toLowerCase()
      );

      if (!topic) {
        console.log(`❌ Topic not found: "${entry.topicTitle}"`);
        notFound.push(entry.topicTitle);
        continue;
      }

      // Delete existing coding problems for this topic
      const deleted = await CodingProblem.deleteMany({ topic: topic._id });

      // Insert curated problems
      const problemsToInsert = entry.problems.map((p, idx) => ({
        topic: topic._id,
        title: p.title,
        description: `Solve this problem to strengthen your ${topic.title} skills in OOP.`,
        difficulty: p.difficulty,
        platform: p.platform,
        problemUrl: p.problemUrl,
        tags: p.tags || [topic.title],
        order: idx + 1,
        estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
        isPublished: true
      }));

      await CodingProblem.insertMany(problemsToInsert);
      totalAdded += problemsToInsert.length;

      console.log(`✅ "${entry.topicTitle}": replaced ${deleted.deletedCount} → added ${problemsToInsert.length} problems`);
    }

    console.log(`\n🎉 OOP Coding Problems Seeded!`);
    console.log(`   Total problems added: ${totalAdded}`);
    if (notFound.length > 0) {
      console.log(`   Topics not matched: ${notFound.join(', ')}`);
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedOOPCodingProblems();
