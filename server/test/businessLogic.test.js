require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = require("../app");
const User = require("../models/User");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const Quiz = require("../models/Quiz");
const UserQuizResult = require("../models/UserQuizResult");
const Test = require("../models/Test");
const Question = require("../models/Question");
const TestResult = require("../models/TestResult");
const Scholarship = require("../models/Scholarship");
const Career = require("../models/Career");
const generateToken = require("../utils/generateToken");
const { calculateCareerReadiness } = require("../services/careerReadinessService");
const { computeScholarshipMatch } = require("../controllers/scholarshipController");
const { generateRecommendations } = require("../services/recommendationService");

let testUser, userToken;
let testSubject, testTopic;

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const hashedPassword = await bcrypt.hash("Password123!", 10);
  testUser = await User.create({
    name: "Logic Test User",
    email: `logic_user_${Date.now()}@example.com`,
    password: hashedPassword,
    degree: "B.Tech",
    branch: "Computer Science",
    year: "3",
    cgpa: 8.8,
    state: "Karnataka",
    familyIncome: 350000,
    skills: ["Python", "Java", "Data Structures", "SQL"],
    interests: ["Software Engineering", "AI", "Cloud Computing"],
    careerGoals: "Software Engineer",
  });
  userToken = generateToken(testUser._id);

  testSubject = await Subject.create({
    name: "Logic Test Subject",
    code: `SUB_LOGIC_${Date.now()}`,
    description: "Subject for business logic tests",
  });

  testTopic = await Topic.create({
    title: "Logic Test Topic",
    slug: `logic-test-topic-${Date.now()}`,
    description: "Description for logic test topic",
    subject: testSubject._id,
    order: 1,
  });
});

afterAll(async () => {
  if (testUser) {
    await User.findByIdAndDelete(testUser._id);
    await UserQuizResult.deleteMany({ user: testUser._id });
    await TestResult.deleteMany({ user: testUser._id });
  }
  if (testTopic) await Topic.findByIdAndDelete(testTopic._id);
  if (testSubject) await Subject.findByIdAndDelete(testSubject._id);
  await mongoose.connection.close();
});

describe("Critical Business Logic & Scoring Verification", () => {
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Career Readiness Score Calculation
  // ─────────────────────────────────────────────────────────────────────────
  it("should correctly compute Career Readiness score for user profile", async () => {
    const readiness = await calculateCareerReadiness(testUser._id);

    expect(readiness).toBeDefined();
    expect(typeof readiness.careerReadiness).toBe("number");
    expect(readiness.careerReadiness).toBeGreaterThanOrEqual(0);
    expect(readiness.careerReadiness).toBeLessThanOrEqual(100);
    expect(readiness.breakdown).toBeDefined();
    expect(readiness.breakdown.topicScore).toBeDefined();
    expect(readiness.breakdown.quizScore).toBeDefined();
    expect(readiness.breakdown.codingScore).toBeDefined();
  });

  // ─────────────────────────────────────────────────────────────────────────
  // 2. 7-Factor Scholarship Matching Engine
  // ─────────────────────────────────────────────────────────────────────────
  it("should accurately score scholarship eligibility matching user profile", () => {
    const mockScholarship = {
      title: "Merit Tech Scholarship",
      provider: "Global Foundation",
      eligibleCourses: ["B.Tech", "Undergraduate"],
      eligibleBranches: ["Computer Science", "Information Technology"],
      minCGPA: 7.5,
      eligibleYears: ["3", "4", "3rd Year"],
      eligibleStates: ["Karnataka", "All India"],
      maxFamilyIncome: 500000,
      targetCareers: ["Software Engineer", "Developer"],
    };

    const match = computeScholarshipMatch(mockScholarship, testUser);

    expect(match).toBeDefined();
    expect(match.matchScore).toBeGreaterThanOrEqual(60);
    expect(match.eligibleReasons.length).toBeGreaterThan(0);
  });

  // ─────────────────────────────────────────────────────────────────────────
  // 3. 6-Factor Career Recommendation Engine
  // ─────────────────────────────────────────────────────────────────────────
  it("should calculate recommendations without crashing on complete and partial user data", async () => {
    const recResult = await generateRecommendations(testUser);

    expect(recResult).toBeDefined();
    expect(Array.isArray(recResult.recommendations)).toBe(true);
    if (recResult.recommendations.length > 0) {
      const topRec = recResult.recommendations[0];
      expect(typeof topRec.finalScore).toBe("number");
      expect(topRec.finalScore).toBeGreaterThanOrEqual(0);
      expect(topRec.finalScore).toBeLessThanOrEqual(100);
      expect(topRec.scoreBreakdown).toBeDefined();
      expect(topRec.scoreBreakdown.skills).toBeDefined();
      expect(topRec.scoreBreakdown.subjects).toBeDefined();
      expect(topRec.scoreBreakdown.academics).toBeDefined();
    }
  });

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Server-Side Quiz Grading Integrity
  // ─────────────────────────────────────────────────────────────────────────
  it("should compute quiz scores strictly on the server", async () => {
    // Create a mock quiz
    const mockQuiz = await Quiz.create({
      title: "Test Unit Quiz",
      topic: testTopic._id,
      description: "Testing server side grading",
      duration: 10,
      passingMarks: 4,
      totalMarks: 2,
      questions: [
        {
          question: "What is the time complexity of Binary Search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          correctAnswer: "O(log n)",
          marks: 1,
        },
        {
          question: "Which data structure uses LIFO order?",
          options: ["Queue", "Stack", "Array", "Graph"],
          correctAnswer: "Stack",
          marks: 1,
        },
      ],
      isPublished: true,
    });

    const res = await request(app)
      .post(`/api/quizzes/${mockQuiz._id}/submit`)
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        answers: {
          "What is the time complexity of Binary Search?": "O(log n)", // correct
          "Which data structure uses LIFO order?": "Queue", // incorrect
        },
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.result.score).toBe(1);
    expect(res.body.result.percentage).toBe(50);

    // Clean up
    await Quiz.findByIdAndDelete(mockQuiz._id);
    if (res.body.result._id) {
      await UserQuizResult.findByIdAndDelete(res.body.result._id);
    }
  });

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Placement Mock Test Server-Side Scoring & Topic Breakdown
  // ─────────────────────────────────────────────────────────────────────────
  it("should compute placement mock test scores server-side with topic breakdown", async () => {
    const q1 = await Question.create({
      subject: testSubject._id,
      topic: testTopic._id,
      question: "SQL SELECT query purpose?",
      options: ["Insert data", "Retrieve data", "Delete data", "Update data"],
      correctAnswer: "Retrieve data",
      type: "mcq",
    });

    const mockTest = await Test.create({
      title: "Mock Placement Test 1",
      subject: testSubject._id,
      topic: testTopic._id,
      description: "Test assessment",
      duration: 15,
      passingScore: 50,
      questions: [q1._id],
    });

    const submitRes = await request(app)
      .post(`/api/tests/${mockTest._id}/submit`)
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        answers: {
          [q1._id.toString()]: "Retrieve data",
        },
        timeTaken: 120,
      });

    expect(submitRes.statusCode).toBe(200);
    expect(submitRes.body.success).toBe(true);
    expect(submitRes.body.result.score).toBe(1);
    expect(submitRes.body.result.percentage).toBe(100);
    expect(submitRes.body.result.passed).toBe(true);
    expect(Array.isArray(submitRes.body.result.topicPerformance)).toBe(true);

    // Cleanup
    await Question.findByIdAndDelete(q1._id);
    await Test.findByIdAndDelete(mockTest._id);
    if (submitRes.body.result._id) {
      await TestResult.findByIdAndDelete(submitRes.body.result._id);
    }
  });

  // ─────────────────────────────────────────────────────────────────────────
  // 6. Student Dashboard Resiliency
  // ─────────────────────────────────────────────────────────────────────────
  it("should load the Student Dashboard without throwing errors", async () => {
    const res = await request(app)
      .get("/api/dashboard")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.dashboard).toBeDefined();
    expect(res.body.dashboard.stats).toBeDefined();
    expect(res.body.dashboard.careerReadiness).toBeDefined();
    expect(res.body.dashboard.placementChecklist).toBeDefined();
  });
});
