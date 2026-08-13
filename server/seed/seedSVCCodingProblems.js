require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const SVC_CURATED_PROBLEMS = [
  {
    topicPattern: /Numerical Methods/i,
    problems: [
      {
        title: "Sqrt(x) (Newton-Raphson / Binary Search)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/sqrtx/",
        tags: ["Numerical Methods", "Binary Search", "Calculus"]
      },
      {
        title: "Pow(x, n) (Divide and Conquer / Power Computation)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/powx-n/",
        tags: ["Numerical Methods", "Divide and Conquer", "Math"]
      },
      {
        title: "Find the Smallest Divisor Given a Threshold",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
        tags: ["Binary Search", "Optimization", "Numerical"]
      }
    ]
  },
  {
    topicPattern: /Computational Applications/i,
    problems: [
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/find-peak-element/",
        tags: ["Binary Search", "Critical Points", "Calculus"]
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/koko-eating-bananas/",
        tags: ["Binary Search on Answer", "Rate Optimization"]
      },
      {
        title: "Capacity to Ship Packages Within D Days",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        tags: ["Binary Search", "Greedy", "Optimization"]
      },
      {
        title: "Minimum Speed to Arrive on Time",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
        tags: ["Binary Search", "Speed & Distance", "Calculus"]
      }
    ]
  },
  {
    topicPattern: /Engineering and CS/i,
    problems: [
      {
        title: "Maximum Subarray (Kadane's Optimization)",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/maximum-subarray/",
        tags: ["Dynamic Programming", "Optimization", "Arrays"]
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        tags: ["Greedy", "Rate of Change", "Optimization"]
      },
      {
        title: "Climbing Stairs (Discrete Modeling)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/climbing-stairs/",
        tags: ["Dynamic Programming", "Recursion", "Calculus"]
      }
    ]
  },
  {
    topicPattern: /Practical Problem Solving/i,
    problems: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/two-sum/",
        tags: ["Hash Table", "Arrays", "Problem Solving"]
      },
      {
        title: "Binary Search",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/binary-search/",
        tags: ["Binary Search", "Root Finding"]
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        tags: ["Binary Search", "Rotated Array", "Optimization"]
      }
    ]
  }
];

const seedSVCCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Single Variable Calculus/i });
    if (!subject) {
      console.log('❌ Single Variable Calculus subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id });

    for (const item of SVC_CURATED_PROBLEMS) {
      const topic = topics.find(t => item.topicPattern.test(t.title));
      if (topic) {
        await CodingProblem.deleteMany({ topic: topic._id });
        const problemsToInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: `Solve this computational problem for ${topic.title} in Single Variable Calculus.`,
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

    console.log(`\n🎉 Single Variable Calculus (Modules 13-16) Coding Problems Seeded!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedSVCCodingProblems();
