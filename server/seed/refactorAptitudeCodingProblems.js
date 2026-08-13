require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const REFACTORED_APTITUDE_PROBLEMS = {
  numberSystem: [
    {
      title: "Number of 1 Bits",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/number-of-1-bits/",
      placementImportance: "Essential",
      tags: ["Number System", "Bit Manipulation"]
    },
    {
      title: "Palindrome Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/palindrome-number/",
      placementImportance: "Essential",
      tags: ["Number System", "Math"]
    },
    {
      title: "Reverse Integer",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/reverse-integer/",
      placementImportance: "Essential",
      tags: ["Number System", "Math", "Overflow"]
    },
    {
      title: "Count Digits",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/count-digits5716/1",
      placementImportance: "Essential",
      tags: ["Math", "Digits"]
    },
    {
      title: "Sum of Digits of a Number",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",
      placementImportance: "Essential",
      tags: ["Math", "Digits"]
    },
    {
      title: "Prime Number Check",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/prime-number2314/1",
      placementImportance: "Essential",
      tags: ["Primes", "Math"]
    },
    {
      title: "Armstrong Numbers Check",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1",
      placementImportance: "Important",
      tags: ["Armstrong", "Math"]
    },
    {
      title: "GCD and LCM",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1",
      placementImportance: "Essential",
      tags: ["GCD", "LCM", "Number Theory"]
    },
    {
      title: "CodeChef Number Theory Practice",
      difficulty: "Easy",
      platform: "CodeChef",
      problemUrl: "https://www.codechef.com/practice/number-theory",
      placementImportance: "Important",
      tags: ["Number Theory", "Practice"]
    }
  ],
  arithmeticAptitude: [
    {
      title: "Plus One",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/plus-one/",
      placementImportance: "Essential",
      tags: ["Arithmetic", "Arrays"]
    },
    {
      title: "Add Digits (Digital Root)",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/add-digits/",
      placementImportance: "Essential",
      tags: ["Arithmetic", "Math"]
    },
    {
      title: "Happy Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/happy-number/",
      placementImportance: "Essential",
      tags: ["Floyd's Cycle", "Math"]
    },
    {
      title: "Sqrt(x) (Integer Square Root)",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/sqrtx/",
      placementImportance: "Essential",
      tags: ["Binary Search", "Math"]
    },
    {
      title: "Factorial of a Number",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/factorial5739/1",
      placementImportance: "Essential",
      tags: ["Factorial", "Recursion"]
    },
    {
      title: "Fibonacci Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/fibonacci-number/",
      placementImportance: "Essential",
      tags: ["Fibonacci", "Dynamic Programming"]
    }
  ],
  timeSpeedDistance: [
    {
      title: "Time Conversion",
      difficulty: "Easy",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/time-conversion/problem",
      placementImportance: "Essential",
      tags: ["Time", "Strings"]
    },
    {
      title: "Minimum Time Required",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/minimum-time-required/problem",
      placementImportance: "Essential",
      tags: ["Binary Search", "Time Optimization"]
    },
    {
      title: "The Time in Words",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/the-time-in-words/problem",
      placementImportance: "Important",
      tags: ["Strings", "Time Calculations"]
    }
  ],
  permutationsCombinations: [
    {
      title: "Permutations",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/permutations/",
      placementImportance: "Essential",
      tags: ["Backtracking", "Permutations"]
    },
    {
      title: "Combinations",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/combinations/",
      placementImportance: "Essential",
      tags: ["Backtracking", "Combinations"]
    },
    {
      title: "Subsets",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/subsets/",
      placementImportance: "Essential",
      tags: ["Backtracking", "Bit Manipulation"]
    },
    {
      title: "Permutation Sequence (k-th Permutation)",
      difficulty: "Hard",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/permutation-sequence/",
      placementImportance: "Optional",
      tags: ["Math", "Factorials", "Advanced"]
    }
  ],
  probability: [
    {
      title: "New 21 Game (Probability DP)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/new-21-game/",
      placementImportance: "Optional",
      tags: ["Probability", "Dynamic Programming", "Optional"]
    },
    {
      title: "Knight Probability in Chessboard",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      placementImportance: "Optional",
      tags: ["Probability", "DFS", "Optional"]
    },
    {
      title: "Soup Servings (Probability Analysis)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/soup-servings/",
      placementImportance: "Optional",
      tags: ["Probability", "Memoization", "Optional"]
    }
  ],
  logicalReasoning: [
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/valid-parentheses/",
      placementImportance: "Essential",
      tags: ["Stack", "Logic"]
    },
    {
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/two-sum/",
      placementImportance: "Essential",
      tags: ["Hash Table", "Two Pointers"]
    },
    {
      title: "Contains Duplicate",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/contains-duplicate/",
      placementImportance: "Essential",
      tags: ["Hash Set", "Arrays"]
    },
    {
      title: "Majority Element",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/majority-element/",
      placementImportance: "Essential",
      tags: ["Boyer-Moore", "Counting"]
    },
    {
      title: "Reverse a String",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/reverse-string/",
      placementImportance: "Essential",
      tags: ["Two Pointers", "String"]
    },
    {
      title: "Valid Anagram",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/valid-anagram/",
      placementImportance: "Essential",
      tags: ["Hash Table", "String"]
    },
    {
      title: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      placementImportance: "Essential",
      tags: ["Two Pointers", "In-Place"]
    },
    {
      title: "Missing Number",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/missing-number/",
      placementImportance: "Essential",
      tags: ["Bit Manipulation", "Math"]
    },
    {
      title: "Second Largest Element in Array",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/second-largest3735/1",
      placementImportance: "Essential",
      tags: ["Arrays", "Sorting"]
    },
    {
      title: "Move Zeroes",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/move-zeroes/",
      placementImportance: "Essential",
      tags: ["Two Pointers", "Arrays"]
    },
    {
      title: "Coding Friends",
      difficulty: "Medium",
      platform: "HackerRank",
      problemUrl: "https://www.hackerrank.com/challenges/coding-friends/problem",
      placementImportance: "Important",
      tags: ["Logic", "Simulation"]
    }
  ],
  analyticalReasoning: [
    {
      title: "Binary Search",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/binary-search/",
      placementImportance: "Essential",
      tags: ["Binary Search", "Arrays"]
    },
    {
      title: "Search Insert Position",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/search-insert-position/",
      placementImportance: "Essential",
      tags: ["Binary Search", "Analytical"]
    },
    {
      title: "Search a 2D Matrix",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/search-a-2d-matrix/",
      placementImportance: "Essential",
      tags: ["Binary Search", "Matrix"]
    }
  ],
  advancedProblemSolving: [
    {
      title: "3Sum",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/3sum/",
      placementImportance: "Essential",
      tags: ["Two Pointers", "Sorting"]
    },
    {
      title: "Maximum Subarray (Kadane's Algorithm)",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/maximum-subarray/",
      placementImportance: "Essential",
      tags: ["Dynamic Programming", "Kadane's"]
    },
    {
      title: "Product of Array Except Self",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/product-of-array-except-self/",
      placementImportance: "Essential",
      tags: ["Prefix Product", "Arrays"]
    },
    {
      title: "Longest Consecutive Sequence",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
      placementImportance: "Essential",
      tags: ["Hash Set", "Union Find"]
    },
    {
      title: "Subarray Sum Equals K",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/subarray-sum-equals-k/",
      placementImportance: "Essential",
      tags: ["Prefix Sum", "Hash Table"]
    },
    {
      title: "Coin Change",
      difficulty: "Medium",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/coin-change/",
      placementImportance: "Essential",
      tags: ["Dynamic Programming", "BFS"]
    },
    {
      title: "Climbing Stairs",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/climbing-stairs/",
      placementImportance: "Essential",
      tags: ["Dynamic Programming", "Fibonacci"]
    },
    {
      title: "Merge Sorted Array",
      difficulty: "Easy",
      platform: "LeetCode",
      problemUrl: "https://leetcode.com/problems/merge-sorted-array/",
      placementImportance: "Essential",
      tags: ["Two Pointers", "Sorting"]
    },
    {
      title: "Find Minimum and Maximum Element in an Array",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1",
      placementImportance: "Essential",
      tags: ["Arrays", "MinMax"]
    }
  ]
};

const refactorAptitude = async () => {
  try {
    await connectDB();

    const subjects = [
      { name: "Professional Aptitude & Logical Reasoning", query: /^Professional Aptitude/i },
      { name: "Arithmetical Thinking & Analytical Reasoning", query: /^Arithmetical Thinking/i }
    ];

    for (const subItem of subjects) {
      const sub = await Subject.findOne({ name: subItem.query });
      if (!sub) continue;

      console.log(`\n🔧 Refactoring "${sub.name}"...`);
      const topics = await Topic.find({ subject: sub._id });

      // Wipe all existing coding problems for this subject first to remove any generic placeholders
      const topicIds = topics.map(t => t._id);
      await CodingProblem.deleteMany({ topic: { $in: topicIds } });

      const mapping = [
        { pattern: /Number System/i, problems: REFACTORED_APTITUDE_PROBLEMS.numberSystem },
        { pattern: /Arithmetic (Aptitude|Operations)/i, problems: REFACTORED_APTITUDE_PROBLEMS.arithmeticAptitude },
        { pattern: /Time,? Speed and Distance/i, problems: REFACTORED_APTITUDE_PROBLEMS.timeSpeedDistance },
        { pattern: /Permutation and Combination/i, problems: REFACTORED_APTITUDE_PROBLEMS.permutationsCombinations },
        { pattern: /Probability/i, problems: REFACTORED_APTITUDE_PROBLEMS.probability },
        { pattern: /Logical Reasoning/i, problems: REFACTORED_APTITUDE_PROBLEMS.logicalReasoning },
        { pattern: /Analytical Reasoning/i, problems: REFACTORED_APTITUDE_PROBLEMS.analyticalReasoning },
        { pattern: /(Advanced Problem Solving|Problem Solving Techniques)/i, problems: REFACTORED_APTITUDE_PROBLEMS.advancedProblemSolving }
      ];

      let subTotal = 0;
      for (const item of mapping) {
        const topic = topics.find(t => item.pattern.test(t.title));
        if (topic) {
          await CodingProblem.deleteMany({ topic: topic._id });
          const toInsert = item.problems.map((p, idx) => ({
            topic: topic._id,
            title: p.title,
            description: `Placement coding practice for ${topic.title}.`,
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
          subTotal += toInsert.length;
          console.log(`   ✅ "${topic.title}": ${toInsert.length} placement challenges`);
        }
      }
      console.log(`   🎉 Total challenges in ${sub.name}: ${subTotal}`);
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

refactorAptitude();
