const Roadmap = require("../models/Roadmap");
const Career = require("../models/Career");
const Subject = require("../models/Subject");

const seedRoadmaps = async () => {
  try {
    await Roadmap.deleteMany();

    const careers = await Career.find();
    const subjects = await Subject.find();

    if (careers.length === 0 || subjects.length === 0) {
      console.log("❌ Careers or Subjects not found.");
      return;
    }

    const roadmaps = [];

    for (const career of careers) {
      roadmaps.push(
        {
          career: career._id,
          title: "Programming Fundamentals",
          description:
            "Build a strong programming foundation before moving to advanced topics.",
          order: 1,
          estimatedWeeks: 4,
          requiredSubjects: subjects.slice(0, 3).map((s) => s._id),
          requiredSkills: [
            "Problem Solving",
            "C Programming",
            "Data Structures",
          ],
          projects: [
            {
              title: "Student Record System",
              description: "Console application using C/C++",
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
            "Master the core CS subjects required for placements.",
          order: 2,
          estimatedWeeks: 6,
          requiredSubjects: subjects.slice(3, 8).map((s) => s._id),
          requiredSkills: [
            "DBMS",
            "Operating Systems",
            "Computer Networks",
          ],
          projects: [
            {
              title: "Library Management System",
              description: "Database-based mini project",
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
            "Build portfolio projects and prepare for interviews.",
          order: 3,
          estimatedWeeks: 8,
          requiredSubjects: subjects.slice(8).map((s) => s._id),
          requiredSkills: [
            "React",
            "Node.js",
            "MongoDB",
            "Git",
          ],
          projects: [
            {
              title: "AI Career Navigation Platform",
              description: "Full-stack capstone project",
            },
          ],
          interviewTopics: [
            "System Design",
            "HR Interview",
            "Coding Interview",
          ],
        }
      );
    }

    await Roadmap.insertMany(roadmaps);

    console.log("✅ Roadmaps Seeded Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedRoadmaps;
