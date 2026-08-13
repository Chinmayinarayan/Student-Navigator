require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/User");

const TEST_EMAIL = `test_auth_${Date.now()}@example.com`;
const TEST_PASSWORD = "Password123!";

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
});

afterAll(async () => {
  // Clean up created test user
  await User.deleteMany({ email: { $regex: /^test_auth_/ } });
  await mongoose.connection.close();
});

describe("Authentication & Registration Suite", () => {
  it("should successfully register a new student user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test Student",
        email: TEST_EMAIL,
        password: TEST_PASSWORD,
        degree: "B.Tech",
        branch: "Computer Science",
        year: "2",
        cgpa: 8.5,
        skills: ["JavaScript", "Python"],
        interests: ["AI", "Web Development"],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toBeDefined();
    expect(res.body.user.email).toBe(TEST_EMAIL.toLowerCase());
  });

  it("should reject duplicate email registration with 409 Conflict", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Duplicate User",
        email: TEST_EMAIL,
        password: TEST_PASSWORD,
      });

    expect(res.statusCode).toBe(409);
    expect(res.body.success).toBe(false);
  });

  it("should reject registration with invalid email format", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Invalid Email",
        email: "not-an-email",
        password: TEST_PASSWORD,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should reject registration with short password (< 6 characters)", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Short Pass",
        email: `shortpass_${Date.now()}@example.com`,
        password: "123",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should reject registration with missing name", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "",
        email: `noname_${Date.now()}@example.com`,
        password: TEST_PASSWORD,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should reject registration with out-of-bound CGPA (> 10)", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Bad CGPA",
        email: `badcgpa_${Date.now()}@example.com`,
        password: TEST_PASSWORD,
        cgpa: 15.0,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should successfully log in with valid credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: TEST_EMAIL,
        password: TEST_PASSWORD,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(TEST_EMAIL.toLowerCase());
  });

  it("should reject login with incorrect password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: TEST_EMAIL,
        password: "WrongPassword!",
      });

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should reject login with nonexistent email", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "nonexistent_9999999@example.com",
        password: TEST_PASSWORD,
      });

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should reject login with empty/missing credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
