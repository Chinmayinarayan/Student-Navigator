require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = require("../app");
const User = require("../models/User");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const Quiz = require("../models/Quiz");
const Test = require("../models/Test");
const UserQuizResult = require("../models/UserQuizResult");
const TestResult = require("../models/TestResult");
const generateToken = require("../utils/generateToken");

let studentA, studentB, adminUser;
let tokenA, tokenB, adminToken;
let testSubject, testTopic, testQuiz, testMockTest, quizResultA, testResultA;

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const hashedPassword = await bcrypt.hash("Password123!", 10);

  // Create Student A
  studentA = await User.create({
    name: "Student A",
    email: `student_a_${Date.now()}@example.com`,
    password: hashedPassword,
    role: "student",
  });
  tokenA = generateToken(studentA._id);

  // Create Student B
  studentB = await User.create({
    name: "Student B",
    email: `student_b_${Date.now()}@example.com`,
    password: hashedPassword,
    role: "student",
  });
  tokenB = generateToken(studentB._id);

  // Create Admin
  adminUser = await User.create({
    name: "Admin User",
    email: `admin_${Date.now()}@example.com`,
    password: hashedPassword,
    role: "admin",
  });
  adminToken = generateToken(adminUser._id);

  // Create test subject & topic & quiz & test
  testSubject = await Subject.create({
    name: "Test Subject",
    code: `SUB_${Date.now()}`,
    description: "Security test subject",
  });

  testTopic = await Topic.create({
    title: "Test Topic",
    slug: `test-topic-${Date.now()}`,
    description: "Test Topic Description",
    subject: testSubject._id,
    order: 1,
  });

  testQuiz = await Quiz.create({
    title: "Test Security Quiz",
    topic: testTopic._id,
    questions: [
      {
        question: "Security test question 1?",
        options: ["A", "B"],
        correctAnswer: "A",
      },
    ],
  });

  testMockTest = await Test.create({
    title: "Test Security Mock Test",
    subject: testSubject._id,
    topic: testTopic._id,
    description: "Security placement test",
  });

  // Create a Quiz result belonging to Student A
  quizResultA = await UserQuizResult.create({
    user: studentA._id,
    quiz: testQuiz._id,
    topic: testTopic._id,
    isCompleted: true,
    score: 9,
    totalMarks: 10,
    percentage: 90,
  });

  // Create a Mock Test result belonging to Student A
  testResultA = await TestResult.create({
    user: studentA._id,
    test: testMockTest._id,
    score: 8,
    totalQuestions: 10,
    percentage: 80,
    passed: true,
  });
});

afterAll(async () => {
  // Cleanup test users and records
  if (studentA) await User.findByIdAndDelete(studentA._id);
  if (studentB) await User.findByIdAndDelete(studentB._id);
  if (adminUser) await User.findByIdAndDelete(adminUser._id);
  if (quizResultA) await UserQuizResult.findByIdAndDelete(quizResultA._id);
  if (testResultA) await TestResult.findByIdAndDelete(testResultA._id);
  if (testMockTest) await Test.findByIdAndDelete(testMockTest._id);
  if (testQuiz) await Quiz.findByIdAndDelete(testQuiz._id);
  if (testTopic) await Topic.findByIdAndDelete(testTopic._id);
  if (testSubject) await Subject.findByIdAndDelete(testSubject._id);
  await mongoose.connection.close();
});

describe("Security, Authorization & RBAC Suite", () => {
  it("should reject unauthenticated request with 401 Unauthorized", async () => {
    const res = await request(app).get("/api/user/profile");
    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should reject invalid JWT token with 401 Unauthorized", async () => {
    const res = await request(app)
      .get("/api/user/profile")
      .set("Authorization", "Bearer invalid.token.payload");
    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should allow student to view their own profile", async () => {
    const res = await request(app)
      .get("/api/user/profile")
      .set("Authorization", `Bearer ${tokenA}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id || res.body.id).toBe(studentA._id.toString());
  });

  it("should prevent IDOR: Student B cannot view Student A's Quiz Result", async () => {
    const res = await request(app)
      .get(`/api/quizzes/result/${quizResultA._id}`)
      .set("Authorization", `Bearer ${tokenB}`);
    expect(res.statusCode).toBe(403);
    expect(res.body.success).toBe(false);
  });

  it("should allow Student A to view their own Quiz Result", async () => {
    const res = await request(app)
      .get(`/api/quizzes/result/${quizResultA._id}`)
      .set("Authorization", `Bearer ${tokenA}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should prevent IDOR: Student B cannot view Student A's Mock Test Result", async () => {
    const res = await request(app)
      .get(`/api/tests/result/${testResultA._id}`)
      .set("Authorization", `Bearer ${tokenB}`);
    expect(res.statusCode).toBe(403);
    expect(res.body.success).toBe(false);
  });

  it("should allow Student A to view their own Mock Test Result", async () => {
    const res = await request(app)
      .get(`/api/tests/result/${testResultA._id}`)
      .set("Authorization", `Bearer ${tokenA}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should deny non-admin student from accessing admin-only topic creation (403)", async () => {
    const res = await request(app)
      .post("/api/topics")
      .set("Authorization", `Bearer ${tokenA}`)
      .send({ title: "Hacked Topic", order: 99 });
    expect(res.statusCode).toBe(403);
    expect(res.body.success).toBe(false);
  });

  it("should block path traversal on /api/local-file (rejecting .env or forbidden files with 403)", async () => {
    const res = await request(app).get("/api/local-file?path=../.env");
    expect(res.statusCode).toBe(403);
    expect(res.body.success).toBe(false);
  });

  it("should validate and reject oversized AI assistant prompts (>1000 chars)", async () => {
    const hugeQuestion = "a".repeat(1050);
    const res = await request(app)
      .post("/api/assistant/chat")
      .set("Authorization", `Bearer ${tokenA}`)
      .send({
        subject: "Data Structures",
        topic: "Arrays",
        question: hugeQuestion,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toMatch(/exceeds the maximum length/i);
  });

  it("should reject AI assistant requests with missing required fields", async () => {
    const res = await request(app)
      .post("/api/assistant/chat")
      .set("Authorization", `Bearer ${tokenA}`)
      .send({
        subject: "Data Structures",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
