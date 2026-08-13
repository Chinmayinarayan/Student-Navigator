require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const PROBLEM_SOLVING_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Problem Solving",
    problems: [
      {
        title: "Solve Me First",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/solve-me-first/problem",
        tags: ["Basics", "Warmup", "HackerRank"]
      },
      {
        title: "A Very Big Sum",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/a-very-big-sum/problem",
        tags: ["Arrays", "Big Integer", "Warmup"]
      },
      {
        title: "Add Two Integers",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/add-two-integers/",
        tags: ["Math", "Basics", "LeetCode"]
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/fizz-buzz/",
        tags: ["Math", "String", "Simulation"]
      },
      {
        title: "Sum of Digits",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",
        tags: ["Math", "Basic Problem Solving"]
      }
    ]
  },
  {
    topicTitle: "Computational Thinking",
    problems: [
      {
        title: "Plus Minus",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/plus-minus/problem",
        tags: ["Arrays", "Ratios", "Computational Thinking"]
      },
      {
        title: "Staircase Pattern",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/staircase/problem",
        tags: ["Patterns", "Loops", "HackerRank"]
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/number-of-1-bits/",
        tags: ["Bit Manipulation", "LeetCode"]
      },
      {
        title: "Power of Two",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/power-of-two/",
        tags: ["Bit Manipulation", "Math", "Recursion"]
      },
      {
        title: "Reverse Integer",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/reverse-integer/",
        tags: ["Math", "Overflow", "LeetCode"]
      }
    ]
  },
  {
    topicTitle: "Problem Analysis Techniques",
    problems: [
      {
        title: "Solve Me First Analysis",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/solve-me-first/problem",
        tags: ["Problem Analysis", "Basics"]
      },
      {
        title: "Compare the Triplets",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/compare-the-triplets/problem",
        tags: ["Comparison", "Arrays", "Logic"]
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/two-sum/",
        tags: ["Hash Table", "Arrays", "Two Pointers"]
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-anagram/",
        tags: ["Hash Table", "String", "Sorting"]
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/missing-number/",
        tags: ["Bit Manipulation", "Math", "Arrays"]
      }
    ]
  },
  {
    topicTitle: "Logical Reasoning",
    problems: [
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/palindrome-number/",
        tags: ["Math", "Logic", "LeetCode"]
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-parentheses/",
        tags: ["Stack", "Logic", "String"]
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/roman-to-integer/",
        tags: ["Hash Table", "Math", "String"]
      },
      {
        title: "Find the Difference",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/find-the-difference/",
        tags: ["Bit Manipulation", "Hash Table"]
      },
      {
        title: "Intersection of Two Arrays (Common Elements)",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/intersection-of-two-arrays/",
        tags: ["Arrays", "Sets", "Intersection"]
      }
    ]
  },
  {
    topicTitle: "Algorithmic Thinking",
    problems: [
      {
        title: "Binary Search",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/binary-search/",
        tags: ["Binary Search", "Arrays", "Algorithms"]
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/search-insert-position/",
        tags: ["Binary Search", "Arrays"]
      },
      {
        title: "Bubble Sort",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/ctci-bubble-sort/problem",
        tags: ["Sorting", "Algorithms", "Swaps"]
      },
      {
        title: "Insertion Sort Part 1",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/insertionsort1/problem",
        tags: ["Sorting", "Insertion Sort"]
      },
      {
        title: "Selection Sort Algorithm",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/selection-sort-algorithm-2/",
        tags: ["Sorting", "Selection Sort"]
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/merge-sorted-array/",
        tags: ["Two Pointers", "Sorting", "Arrays"]
      }
    ]
  },
  {
    topicTitle: "Programming Problem Solving Basics",
    problems: [
      {
        title: "Grading Students",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/grading/problem",
        tags: ["Rounding", "Math", "Basics"]
      },
      {
        title: "Time Conversion",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/time-conversion/problem",
        tags: ["String Parsing", "Time", "Basics"]
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/find-pivot-index/",
        tags: ["Prefix Sum", "Arrays"]
      },
      {
        title: "Maximum Subarray",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/maximum-subarray/",
        tags: ["Kadane's Algorithm", "Dynamic Programming"]
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        tags: ["Arrays", "Dynamic Programming", "Greedy"]
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/contains-duplicate/",
        tags: ["Hash Table", "Arrays", "Sorting"]
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/move-zeroes/",
        tags: ["Two Pointers", "Arrays"]
      }
    ]
  },
  {
    topicTitle: "Data Handling and Problem Solving",
    problems: [
      {
        title: "Plus One",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/plus-one/",
        tags: ["Arrays", "Math", "Data Handling"]
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/majority-element/",
        tags: ["Boyer-Moore", "Counting", "Hash Table"]
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        tags: ["Two Pointers", "In-Place", "Arrays"]
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/intersection-of-two-arrays/",
        tags: ["Hash Table", "Two Pointers", "Binary Search"]
      },
      {
        title: "Sparse Arrays (Frequency Counter)",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/sparse-arrays/problem",
        tags: ["Frequency Counter", "Strings", "Hash Table"]
      },
      {
        title: "Find Missing Elements of a Range",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/find-missing-elements-of-a-range/",
        tags: ["Range", "Arrays", "Data Handling"]
      }
    ]
  },
  {
    topicTitle: "Mathematical Problem Solving",
    problems: [
      {
        title: "Find GCD (Restaurant Challenge)",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/restaurant/problem",
        tags: ["GCD", "Math", "Number Theory"]
      },
      {
        title: "Count Primes",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/count-primes/",
        tags: ["Sieve", "Primes", "Math"]
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/happy-number/",
        tags: ["Floyd's Cycle", "Hash Table", "Math"]
      },
      {
        title: "Power of Three",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/power-of-three/",
        tags: ["Recursion", "Math"]
      },
      {
        title: "Sieve of Eratosthenes Algorithm",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
        tags: ["Primes", "Sieve", "Math"]
      },
      {
        title: "Factorial Trailing Zeroes",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/factorial-trailing-zeroes/",
        tags: ["Math", "Number Theory"]
      }
    ]
  },
  {
    topicTitle: "Analytical Reasoning",
    problems: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/two-sum/",
        tags: ["Hash Table", "Analytical"]
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum/",
        tags: ["Two Pointers", "Sorting", "Triplets"]
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/product-of-array-except-self/",
        tags: ["Prefix Product", "Suffix Product", "Arrays"]
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/subarray-sum-equals-k/",
        tags: ["Prefix Sum", "Hash Table"]
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
        tags: ["Hash Set", "Union Find", "Arrays"]
      }
    ]
  },
  {
    topicTitle: "Optimization and Efficiency",
    problems: [
      {
        title: "Binary Search Optimization",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/binary-search/",
        tags: ["O(log N)", "Binary Search"]
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/first-bad-version/",
        tags: ["Binary Search", "Interactive"]
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/climbing-stairs/",
        tags: ["Dynamic Programming", "Fibonacci", "Optimization"]
      },
      {
        title: "House Robber",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/house-robber/",
        tags: ["Dynamic Programming", "Memoization"]
      },
      {
        title: "Maximum Subarray (Kadane's O(N))",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/maximum-subarray/",
        tags: ["Kadane's", "Greedy", "DP"]
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/coin-change/",
        tags: ["Dynamic Programming", "BFS"]
      }
    ]
  },
  {
    topicTitle: "Data Structures Based Problem Solving",
    problems: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/reverse-linked-list/",
        tags: ["Linked List", "Recursion"]
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
        tags: ["Linked List", "Recursion"]
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/linked-list-cycle/",
        tags: ["Floyd's Cycle", "Two Pointers", "Linked List"]
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-parentheses/",
        tags: ["Stack", "String"]
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/min-stack/",
        tags: ["Stack", "Design"]
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        tags: ["Tree", "DFS", "Binary Tree"]
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        tags: ["Tree", "DFS", "BFS"]
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/number-of-islands/",
        tags: ["DFS", "BFS", "Matrix", "Graphs"]
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/flood-fill/",
        tags: ["DFS", "BFS", "Matrix"]
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
        tags: ["Stack", "Queue", "Design"]
      }
    ]
  },
  {
    topicTitle: "Advanced Problem Solving Techniques",
    problems: [
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        tags: ["Sliding Window", "Hash Table", "String"]
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
        tags: ["Two Pointers", "Dynamic Programming", "String"]
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/merge-intervals/",
        tags: ["Intervals", "Sorting", "Arrays"]
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/jump-game/",
        tags: ["Greedy", "Dynamic Programming"]
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/subsets/",
        tags: ["Backtracking", "Bit Manipulation"]
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/permutations/",
        tags: ["Backtracking", "Recursion"]
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/combination-sum/",
        tags: ["Backtracking", "Arrays"]
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/word-search/",
        tags: ["Backtracking", "Matrix", "DFS"]
      }
    ]
  },
  {
    topicTitle: "Competitive Programming Fundamentals",
    problems: [
      {
        title: "Watermelon (4A)",
        difficulty: "Easy",
        platform: "Codeforces",
        problemUrl: "https://codeforces.com/problemset/problem/4/A",
        tags: ["Codeforces", "Brute Force", "Math"]
      },
      {
        title: "Way Too Long Words (71A)",
        difficulty: "Easy",
        platform: "Codeforces",
        problemUrl: "https://codeforces.com/problemset/problem/71/A",
        tags: ["Codeforces", "Strings"]
      },
      {
        title: "Team (231A)",
        difficulty: "Easy",
        platform: "Codeforces",
        problemUrl: "https://codeforces.com/problemset/problem/231/A",
        tags: ["Codeforces", "Brute Force", "Greedy"]
      },
      {
        title: "Next Round (158A)",
        difficulty: "Easy",
        platform: "Codeforces",
        problemUrl: "https://codeforces.com/problemset/problem/158/A",
        tags: ["Codeforces", "Implementation"]
      },
      {
        title: "Domino piling (50A)",
        difficulty: "Easy",
        platform: "Codeforces",
        problemUrl: "https://codeforces.com/problemset/problem/50/A",
        tags: ["Codeforces", "Math", "Greedy"]
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://cses.fi/problemset/task/1083",
        tags: ["CSES", "Math", "Bitwise"]
      },
      {
        title: "Repetitions",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://cses.fi/problemset/task/1069",
        tags: ["CSES", "Strings"]
      },
      {
        title: "Increasing Array",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://cses.fi/problemset/task/1094",
        tags: ["CSES", "Greedy", "Arrays"]
      }
    ]
  },
  {
    topicTitle: "Debugging and Error Analysis",
    problems: [
      {
        title: "HackerRank Debugging & Syntax Challenge",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
        tags: ["Debugging", "Syntax", "Logic"]
      },
      {
        title: "Debug Array Index & Boundary Bounds",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
        tags: ["Debugging", "Arrays", "Bounds"]
      },
      {
        title: "Debug Recursive Call Stack & Base Cases",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
        tags: ["Debugging", "Recursion", "Stack Overflow"]
      },
      {
        title: "Debug Pointer & Reference Invalidation in C++",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",
        tags: ["Debugging", "Pointers", "Memory"]
      }
    ]
  },
  {
    topicTitle: "Real-World Problem Solving",
    problems: [
      {
        title: "Meeting Rooms (Interval Scheduling)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/meeting-rooms/",
        tags: ["Intervals", "Sorting", "Greedy"]
      },
      {
        title: "Best Time to Buy and Sell Stock (Financial Modeling)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        tags: ["Financial", "Greedy", "Arrays"]
      },
      {
        title: "Top K Frequent Elements (Data Stream Analysis)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
        tags: ["Heap", "Priority Queue", "Hash Table"]
      },
      {
        title: "Design Custom Cache Data Structure",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/data-structures",
        tags: ["System Design", "LRU Cache", "Data Structures"]
      }
    ]
  },
  {
    topicTitle: "Practical Exercises and Projects",
    problems: [
      {
        title: "Project 1: Student Record Management System (CRUD, File I/O, Sorting, OOP)",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",
        tags: ["Project", "Record Management", "C++", "OOP"]
      },
      {
        title: "Project 2: Personal Expense Tracker Application (Filtering, Sorting, Analytics, Storage)",
        difficulty: "Hard",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problemset/",
        tags: ["Project", "Expense Tracker", "Analytics", "Full Application"]
      }
    ]
  }
];

const seedProblemSolvingCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({
      name: { $regex: /^Problem Solving/i }
    });
    if (!subject) {
      console.log('❌ Problem Solving subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Problem Solving topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of PROBLEM_SOLVING_CODING_PROBLEMS) {
      const topic = topics.find(
        t => t.title.toLowerCase() === entry.topicTitle.toLowerCase()
      );

      if (!topic) {
        console.log(`❌ Topic not found: "${entry.topicTitle}"`);
        notFound.push(entry.topicTitle);
        continue;
      }

      const deleted = await CodingProblem.deleteMany({ topic: topic._id });

      const problemsToInsert = entry.problems.map((p, idx) => ({
        topic: topic._id,
        title: p.title,
        description: `Practice challenge for ${topic.title} in Problem Solving & Analysis.`,
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

    console.log(`\n🎉 Problem Solving Coding Problems Seeded!`);
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

seedProblemSolvingCodingProblems();
