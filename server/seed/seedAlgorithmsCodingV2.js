/**
 * seedAlgorithmsCodingV2.js
 * Clears old and re-seeds CodingProblems for all Algorithms topics with curated URLs.
 * Run: node server/seed/seedAlgorithmsCodingV2.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const CodingProblem = require("../models/CodingProblem");

const DATA = [
  {
    topic: "Introduction to Algorithms",
    problems: [
      { platform: "LeetCode", title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
      { platform: "LeetCode", title: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
      { platform: "LeetCode", title: "Find Pivot Index", difficulty: "Easy", url: "https://leetcode.com/problems/find-pivot-index/" },
      { platform: "GeeksforGeeks", title: "Largest Element in Array", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1" },
      { platform: "HackerRank", title: "Solve Me First", difficulty: "Easy", url: "https://www.hackerrank.com/challenges/solve-me-first/problem" }
    ]
  },
  {
    topic: "Complexity Analysis Basics",
    problems: [
      { platform: "GeeksforGeeks", title: "Understanding Time Complexity", difficulty: "Easy", url: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/" },
      { platform: "GeeksforGeeks", title: "Analysis of Algorithms (Big O)", difficulty: "Easy", url: "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/" },
      { platform: "LeetCode", title: "Find Numbers with Even Number of Digits", difficulty: "Easy", url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
      { platform: "LeetCode", title: "Running Sum of 1D Array", difficulty: "Easy", url: "https://leetcode.com/problems/running-sum-of-1d-array/" },
      { platform: "HackerRank", title: "Simple Array Sum", difficulty: "Easy", url: "https://www.hackerrank.com/challenges/simple-array-sum/problem" }
    ]
  },
  {
    topic: "Searching Algorithms",
    problems: [
      { platform: "LeetCode", title: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
      { platform: "LeetCode", title: "Search Insert Position", difficulty: "Easy", url: "https://leetcode.com/problems/search-insert-position/" },
      { platform: "LeetCode", title: "Search a 2D Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { platform: "LeetCode", title: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { platform: "LeetCode", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { platform: "GeeksforGeeks", title: "Binary Search", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1" },
      { platform: "GeeksforGeeks", title: "First and Last Occurrences of X", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1" },
      { platform: "HackerRank", title: "Tutorial Intro", difficulty: "Easy", url: "https://www.hackerrank.com/challenges/tutorial-intro/problem" }
    ]
  },
  {
    topic: "Sorting Algorithms",
    problems: [
      { platform: "LeetCode", title: "Sort Colors", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/" },
      { platform: "LeetCode", title: "Merge Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/merge-sorted-array/" },
      { platform: "LeetCode", title: "Largest Number", difficulty: "Medium", url: "https://leetcode.com/problems/largest-number/" },
      { platform: "LeetCode", title: "Sort an Array", difficulty: "Medium", url: "https://leetcode.com/problems/sort-an-array/" },
      { platform: "GeeksforGeeks", title: "Quick Sort", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/quick-sort/1" },
      { platform: "GeeksforGeeks", title: "Merge Sort", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/merge-sort/1" },
      { platform: "GeeksforGeeks", title: "Insertion Sort", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/insertion-sort/1" },
      { platform: "HackerRank", title: "Counting Sort 1", difficulty: "Easy", url: "https://www.hackerrank.com/challenges/countingsort1/problem" }
    ]
  },
  {
    topic: "Recursion Algorithms",
    problems: [
      { platform: "LeetCode", title: "Fibonacci Number", difficulty: "Easy", url: "https://leetcode.com/problems/fibonacci-number/" },
      { platform: "LeetCode", title: "Pow(x, n)", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" },
      { platform: "LeetCode", title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
      { platform: "LeetCode", title: "Reverse String", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-string/" },
      { platform: "LeetCode", title: "Generate Parentheses", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
      { platform: "GeeksforGeeks", title: "Tower of Hanoi", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1" }
    ]
  },
  {
    topic: "Divide and Conquer Algorithms",
    problems: [
      { platform: "LeetCode", title: "Majority Element", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" },
      { platform: "LeetCode", title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
      { platform: "LeetCode", title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { platform: "LeetCode", title: "Median of Two Sorted Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      { platform: "GeeksforGeeks", title: "Merge Sort", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/merge-sort/1" }
    ]
  },
  {
    topic: "Graph Algorithms",
    problems: [
      { platform: "LeetCode", title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
      { platform: "LeetCode", title: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
      { platform: "LeetCode", title: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
      { platform: "LeetCode", title: "Network Delay Time", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/" },
      { platform: "LeetCode", title: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
      { platform: "LeetCode", title: "Pacific Atlantic Water Flow", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
      { platform: "LeetCode", title: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" },
      { platform: "GeeksforGeeks", title: "BFS Traversal of Graph", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
      { platform: "GeeksforGeeks", title: "Depth First Traversal for a Graph", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" }
    ]
  },
  {
    topic: "Tree Algorithms",
    problems: [
      { platform: "LeetCode", title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { platform: "LeetCode", title: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
      { platform: "LeetCode", title: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
      { platform: "LeetCode", title: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { platform: "LeetCode", title: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { platform: "LeetCode", title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { platform: "LeetCode", title: "Path Sum", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/" },
      { platform: "GeeksforGeeks", title: "Level Order Traversal", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/level-order-traversal/1" }
    ]
  },
  {
    topic: "Greedy Algorithms",
    problems: [
      { platform: "LeetCode", title: "Assign Cookies", difficulty: "Easy", url: "https://leetcode.com/problems/assign-cookies/" },
      { platform: "LeetCode", title: "Jump Game", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/" },
      { platform: "LeetCode", title: "Gas Station", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" },
      { platform: "LeetCode", title: "Task Scheduler", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" },
      { platform: "LeetCode", title: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { platform: "GeeksforGeeks", title: "Activity Selection", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1" }
    ]
  },
  {
    topic: "Dynamic Programming Basics",
    problems: [
      { platform: "LeetCode", title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
      { platform: "LeetCode", title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
      { platform: "LeetCode", title: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
      { platform: "LeetCode", title: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { platform: "LeetCode", title: "Unique Paths", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/" },
      { platform: "LeetCode", title: "Edit Distance", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" },
      { platform: "LeetCode", title: "Partition Equal Subset Sum", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { platform: "LeetCode", title: "Decode Ways", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" },
      { platform: "GeeksforGeeks", title: "0-1 Knapsack Problem", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" }
    ]
  },
  {
    topic: "String Algorithms",
    problems: [
      { platform: "LeetCode", title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
      { platform: "LeetCode", title: "Longest Common Prefix", difficulty: "Easy", url: "https://leetcode.com/problems/longest-common-prefix/" },
      { platform: "LeetCode", title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
      { platform: "LeetCode", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { platform: "LeetCode", title: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { platform: "LeetCode", title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
      { platform: "LeetCode", title: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
      { platform: "GeeksforGeeks", title: "KMP Algorithm for Pattern Searching", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/kmp-algorithm-for-pattern-searching/1" }
    ]
  },
  {
    topic: "Hashing Algorithms",
    problems: [
      { platform: "LeetCode", title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
      { platform: "LeetCode", title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
      { platform: "LeetCode", title: "Longest Consecutive Sequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { platform: "LeetCode", title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { platform: "LeetCode", title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { platform: "LeetCode", title: "Valid Sudoku", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" },
      { platform: "GeeksforGeeks", title: "Frequency of Array Elements", difficulty: "Easy", url: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1" }
    ]
  },
  {
    topic: "Backtracking Algorithms",
    problems: [
      { platform: "LeetCode", title: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
      { platform: "LeetCode", title: "Permutations", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
      { platform: "LeetCode", title: "Combination Sum", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
      { platform: "LeetCode", title: "Combination Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/" },
      { platform: "LeetCode", title: "N-Queens", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
      { platform: "LeetCode", title: "Word Search", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" },
      { platform: "LeetCode", title: "Palindrome Partitioning", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" },
      { platform: "LeetCode", title: "Restore IP Addresses", difficulty: "Medium", url: "https://leetcode.com/problems/restore-ip-addresses/" },
      { platform: "GeeksforGeeks", title: "Rat in a Maze Problem", difficulty: "Medium", url: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" }
    ]
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  const subject = await Subject.findOne({ name: /algorithms/i });
  if (!subject) { console.error("Algorithms subject not found"); process.exit(1); }
  console.log("Subject:", subject.name);

  const allTopics = await Topic.find({ subject: subject._id }).lean();
  const topicIds = allTopics.map(t => t._id);

  // Clear existing coding problems for this subject
  const deleted = await CodingProblem.deleteMany({ topic: { $in: topicIds } });
  console.log("Cleared old problems:", deleted.deletedCount);

  let inserted = 0;
  for (const entry of DATA) {
    const topic = allTopics.find(t => t.title === entry.topic);
    if (!topic) { console.warn("  Topic not found:", entry.topic); continue; }
    console.log("  Seeding:", topic.title, `(${entry.problems.length} problems)`);
    for (let i = 0; i < entry.problems.length; i++) {
      const p = entry.problems[i];
      await CodingProblem.create({
        topic: topic._id,
        title: p.title,
        description: "Solve this problem to strengthen your " + entry.topic + " skills.",
        difficulty: p.difficulty,
        platform: ["LeetCode","Codeforces","CodeChef","HackerRank","GeeksforGeeks"].includes(p.platform) ? p.platform : "Custom",
        problemUrl: p.url,
        tags: [entry.topic],
        order: i + 1,
        estimatedMinutes: p.difficulty === "Hard" ? 60 : p.difficulty === "Medium" ? 40 : 25,
        isPublished: true
      });
      inserted++;
    }
  }
  console.log("Done. Inserted:", inserted);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
