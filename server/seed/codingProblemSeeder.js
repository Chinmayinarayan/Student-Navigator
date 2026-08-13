const CodingProblem = require("../models/CodingProblem");
const Topic = require("../models/Topic");

const seedCodingProblems = async () => {
  try {
    await CodingProblem.deleteMany();

    const topics = await Topic.find();

    const codingProblems = [];

    topics.forEach((topic) => {
      codingProblems.push(
        {
          topic: topic._id,
          title: `${topic.title} Practice 1`,
          description: `Solve beginner-level problems related to ${topic.title}.`,
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
          description: `Intermediate practice for ${topic.title}.`,
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
          description: `Advanced coding challenge for ${topic.title}.`,
          difficulty: "Hard",
          platform: "CodeChef",
          problemUrl: "https://www.codechef.com/practice",
          tags: [topic.title],
          order: 3,
          estimatedMinutes: 60,
        }
      );
    });

    await CodingProblem.insertMany(codingProblems);

    console.log("✅ Coding Problems Seeded Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedCodingProblems;
