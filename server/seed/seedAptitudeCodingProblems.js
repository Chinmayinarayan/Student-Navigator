require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const CURATED_APTITUDE_PROBLEMS = {
  numberSystem: [
    {
      title: "Number of 1 Bits",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/number-of-1-bits/",
      tags: ["Number System", "Bit Manipulation", "LeetCode"]
    },
    {
      title: "Palindrome Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/palindrome-number/",
      tags: ["Number System", "Math", "LeetCode"]
    },
    {
      title: "Reverse Integer",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/reverse-integer/",
      tags: ["Number System", "Math", "Overflow"]
    },
    {
      title: "Count Special Integers",
      difficulty: "Hard",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/count-special-integers/",
      tags: ["Number System", "Combinatorics", "Math"]
    },
    {
      title: "CodeChef Number Theory Practice (GCD, Primes)",
      difficulty: "Easy",
      platform: "CodeChef",
      problemUrl: "https://www.codechef.com/practice/number-theory",
      tags: ["Number Theory", "GCD", "Primes"]
    }
  ],
  arithmeticAptitude: [
    {
      title: "Plus One",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/plus-one/",
      tags: ["Arithmetic", "Arrays", "Math"]
    },
    {
      title: "Add Digits",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/add-digits/",
      tags: ["Arithmetic", "Digital Root", "Math"]
    },
    {
      title: "Happy Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/happy-number/",
      tags: ["Arithmetic", "Floyd's Cycle", "Math"]
    },
    {
      title: "Sqrt(x) (Integer Square Root)",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/sqrtx/",
      tags: ["Binary Search", "Math", "Arithmetic"]
    }
  ],
  timeSpeedDistance: [
    {
      title: "Time Conversion",
      difficulty: "Easy",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/time-conversion/problem",
      tags: ["Time", "Strings", "HackerRank"]
    },
    {
      title: "Minimum Time Required",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/minimum-time-required/problem",
      tags: ["Binary Search", "Time Optimization"]
    },
    {
      title: "The Time in Words",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/the-time-in-words/problem",
      tags: ["Strings", "Time Calculations"]
    }
  ],
  permutationsCombinations: [
    {
      title: "Permutations",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/permutations/",
      tags: ["Backtracking", "Permutations", "Recursion"]
    },
    {
      title: "Combinations",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/combinations/",
      tags: ["Backtracking", "Combinations", "Recursion"]
    },
    {
      title: "Permutation Sequence",
      difficulty: "Hard",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/permutation-sequence/",
      tags: ["Math", "Factorials", "Permutations"]
    },
    {
      title: "Subsets",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/subsets/",
      tags: ["Backtracking", "Bit Manipulation", "Subsets"]
    }
  ],
  probability: [
    {
      title: "New 21 Game (Dynamic Programming & Probability)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/new-21-game/",
      tags: ["Probability", "Dynamic Programming", "Sliding Window"]
    },
    {
      title: "Knight Probability in Chessboard",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      tags: ["Probability", "Dynamic Programming", "DFS"]
    },
    {
      title: "Soup Servings (Probability Analysis)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/soup-servings/",
      tags: ["Probability", "Dynamic Programming", "Memoization"]
    }
  ],
  logicalReasoning: [
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/valid-parentheses/",
      tags: ["Stack", "Logical Reasoning", "String"]
    },
    {
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/two-sum/",
      tags: ["Hash Table", "Logic", "Arrays"]
    },
    {
      title: "Contains Duplicate",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/contains-duplicate/",
      tags: ["Hash Set", "Logic", "Arrays"]
    },
    {
      title: "Majority Element",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/majority-element/",
      tags: ["Boyer-Moore", "Counting", "Logic"]
    },
    {
      title: "Coding Friends",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/coding-friends/problem",
      tags: ["Logic", "Simulation", "HackerRank"]
    }
  ],
  analyticalReasoning: [
    {
      title: "Binary Search",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/binary-search/",
      tags: ["Binary Search", "Analytical", "Arrays"]
    },
    {
      title: "Search Insert Position",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/search-insert-position/",
      tags: ["Binary Search", "Analytical"]
    },
    {
      title: "Search a 2D Matrix",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/search-a-2d-matrix/",
      tags: ["Binary Search", "Matrix", "Analytical"]
    },
    {
      title: "Minimum Time Required",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/minimum-time-required/problem",
      tags: ["Binary Search", "Optimization", "HackerRank"]
    }
  ],
  advancedProblemSolving: [
    {
      title: "3Sum",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/3sum/",
      tags: ["Two Pointers", "Sorting", "Triplets"]
    },
    {
      title: "Maximum Subarray (Kadane's Algorithm)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/maximum-subarray/",
      tags: ["Dynamic Programming", "Kadane's", "Arrays"]
    },
    {
      title: "Product of Array Except Self",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/product-of-array-except-self/",
      tags: ["Prefix Product", "Arrays"]
    },
    {
      title: "Longest Consecutive Sequence",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
      tags: ["Hash Set", "Union Find"]
    },
    {
      title: "Subarray Sum Equals K",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/subarray-sum-equals-k/",
      tags: ["Prefix Sum", "Hash Table"]
    },
    {
      title: "Coin Change",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/coin-change/",
      tags: ["Dynamic Programming", "BFS"]
    },
    {
      title: "Climbing Stairs",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/climbing-stairs/",
      tags: ["Dynamic Programming", "Fibonacci"]
    }
  ]
};

const seedAptitudeCodingProblems = async () => {
  try {
    await connectDB();

    // 1. Professional Aptitude & Logical Reasoning
    const profSubject = await Subject.findOne({ name: /^Professional Aptitude/i });
    if (profSubject) {
      console.log(`✅ Found subject: "${profSubject.name}"`);
      const topics = await Topic.find({ subject: profSubject._id });

      const topicMapping = [
        { pattern: /Number System/i, problems: CURATED_APTITUDE_PROBLEMS.numberSystem },
        { pattern: /Arithmetic Aptitude/i, problems: CURATED_APTITUDE_PROBLEMS.arithmeticAptitude },
        { pattern: /Time Speed and Distance/i, problems: CURATED_APTITUDE_PROBLEMS.timeSpeedDistance },
        { pattern: /Permutation and Combination/i, problems: CURATED_APTITUDE_PROBLEMS.permutationsCombinations },
        { pattern: /Probability/i, problems: CURATED_APTITUDE_PROBLEMS.probability },
        { pattern: /Logical Reasoning/i, problems: CURATED_APTITUDE_PROBLEMS.logicalReasoning },
        { pattern: /Analytical Reasoning/i, problems: CURATED_APTITUDE_PROBLEMS.analyticalReasoning },
        { pattern: /Advanced Problem Solving/i, problems: CURATED_APTITUDE_PROBLEMS.advancedProblemSolving }
      ];

      for (const item of topicMapping) {
        const topic = topics.find(t => item.pattern.test(t.title));
        if (topic) {
          await CodingProblem.deleteMany({ topic: topic._id });
          const problemsToInsert = item.problems.map((p, idx) => ({
            topic: topic._id,
            title: p.title,
            description: `Solve this challenge for ${topic.title} in Professional Aptitude.`,
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
        }
      }
    }

    // 2. Arithmetical Thinking & Analytical Reasoning
    const arithSubject = await Subject.findOne({ name: /^Arithmetical Thinking/i });
    if (arithSubject) {
      console.log(`\n✅ Found subject: "${arithSubject.name}"`);
      const topics = await Topic.find({ subject: arithSubject._id });

      const arithMapping = [
        { pattern: /Number System/i, problems: CURATED_APTITUDE_PROBLEMS.numberSystem },
        { pattern: /Arithmetic Operations/i, problems: CURATED_APTITUDE_PROBLEMS.arithmeticAptitude },
        { pattern: /Time, Speed and Distance/i, problems: CURATED_APTITUDE_PROBLEMS.timeSpeedDistance },
        { pattern: /Logical Reasoning/i, problems: CURATED_APTITUDE_PROBLEMS.logicalReasoning },
        { pattern: /Analytical Reasoning/i, problems: CURATED_APTITUDE_PROBLEMS.analyticalReasoning },
        { pattern: /Problem Solving Techniques/i, problems: CURATED_APTITUDE_PROBLEMS.advancedProblemSolving }
      ];

      for (const item of arithMapping) {
        const topic = topics.find(t => item.pattern.test(t.title));
        if (topic) {
          await CodingProblem.deleteMany({ topic: topic._id });
          const problemsToInsert = item.problems.map((p, idx) => ({
            topic: topic._id,
            title: p.title,
            description: `Solve this challenge for ${topic.title} in Arithmetical Thinking.`,
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
        }
      }
    }

    console.log(`\n🎉 Aptitude & Reasoning Coding Problems Seeded!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedAptitudeCodingProblems();
