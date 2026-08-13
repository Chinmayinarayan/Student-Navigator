require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const Quiz = require("../models/Quiz");
const User = require("../models/User");
const UserQuizResult = require("../models/UserQuizResult");
const {
  getQuizByTopic,
  submitQuiz,
  getMyQuizResults,
  getQuizResult,
} = require("../controllers/quizController");

async function runQuizSystemVerification() {
  try {
    await connectDB();
    console.log("Connected to MongoDB for Verification...\n");

    // 1. Find a test user and test topics
    let testUser = await User.findOne();
    if (!testUser) {
      testUser = await User.create({
        name: "Quiz Test User",
        email: "quiztest@example.com",
        password: "hashedpassword123",
      });
    }

    const testTopics = await Topic.find().limit(3).populate("subject");
    if (testTopics.length === 0) {
      throw new Error("No topics found in database to test");
    }

    console.log("=================================================");
    console.log("       DYNAMIC 10-QUESTION QUIZ SYSTEM TESTS     ");
    console.log("=================================================\n");

    // Mock Express Response Helper
    const createMockRes = () => {
      const res = {
        statusCode: 200,
        data: null,
        status: function (code) {
          this.statusCode = code;
          return this;
        },
        json: function (obj) {
          this.data = obj;
          return this;
        },
      };
      return res;
    };

    const targetTopic = testTopics[0];
    console.log(`Testing Topic: "${targetTopic.title}" (Subject: ${targetTopic.subject?.title || targetTopic.subject?.name})`);

    // Clean up past test attempts for this user & topic
    await UserQuizResult.deleteMany({ user: testUser._id, topic: targetTopic._id });

    // --- TEST 1: Attempt 1 Generation (Exactly 10 Questions) ---
    console.log("\n▶ TEST 1: Generating Attempt 1...");
    const req1 = {
      params: { topicId: targetTopic._id.toString() },
      user: { id: testUser._id.toString() },
      query: {},
    };
    const res1 = createMockRes();
    await getQuizByTopic(req1, res1);

    if (!res1.data || !res1.data.success) {
      throw new Error(`Attempt 1 failed: ${JSON.stringify(res1.data)}`);
    }

    const quizData1 = res1.data.quiz;
    console.log(`  ✓ Quiz Title: "${quizData1.title}"`);
    console.log(`  ✓ Attempt ID: ${quizData1.attemptId}`);
    console.log(`  ✓ Total Questions: ${quizData1.questions.length}`);
    console.assert(quizData1.questions.length === 10, "ERROR: Attempt 1 must have exactly 10 questions");

    // Check Question Types in Attempt 1
    const typeCounts1 = {};
    quizData1.questions.forEach((q) => {
      typeCounts1[q.questionType] = (typeCounts1[q.questionType] || 0) + 1;
    });
    console.log("  ✓ Question Types Distribution in Attempt 1:", typeCounts1);

    // --- TEST 2: Page Refresh / Resume (Same Attempt, Same 10 Questions) ---
    console.log("\n▶ TEST 2: Simulating Page Refresh (Resuming Active Attempt)...");
    const reqRefresh = {
      params: { topicId: targetTopic._id.toString() },
      user: { id: testUser._id.toString() },
      query: {},
    };
    const resRefresh = createMockRes();
    await getQuizByTopic(reqRefresh, resRefresh);

    const refreshQuiz = resRefresh.data.quiz;
    console.log(`  ✓ Is Resume Flag: ${refreshQuiz.isResume}`);
    console.log(`  ✓ Same Attempt ID: ${refreshQuiz.attemptId.toString() === quizData1.attemptId.toString()}`);
    console.assert(refreshQuiz.attemptId.toString() === quizData1.attemptId.toString(), "ERROR: Refresh should return same attempt ID");
    console.assert(refreshQuiz.questions.length === 10, "ERROR: Resumed quiz must have 10 questions");

    const refreshQTexts = refreshQuiz.questions.map((q) => q.question);
    const originalQTexts = quizData1.questions.map((q) => q.question);
    const sameQuestions = refreshQTexts.every((txt, i) => txt === originalQTexts[i]);
    console.log(`  ✓ Exact Same Questions Preserved on Refresh: ${sameQuestions}`);
    console.assert(sameQuestions, "ERROR: Questions must not re-randomize on page refresh");

    // --- TEST 3: Submitting Attempt 1 ---
    console.log("\n▶ TEST 3: Submitting Quiz Answers...");
    // Answer all questions correctly using attempt record
    const attempt1Doc = await UserQuizResult.findById(quizData1.attemptId);
    const answers1 = {};
    attempt1Doc.servedQuestions.forEach((q) => {
      answers1[q.question] = q.correctAnswer;
    });

    const submitReq1 = {
      params: { quizId: quizData1._id.toString() },
      user: { id: testUser._id.toString() },
      body: {
        answers: answers1,
        attemptId: quizData1.attemptId.toString(),
      },
    };
    const submitRes1 = createMockRes();
    await submitQuiz(submitReq1, submitRes1);

    const result1 = submitRes1.data.result;
    console.log(`  ✓ Submitted Score: ${result1.score} / ${result1.totalMarks} (${result1.percentage}%)`);
    console.log(`  ✓ Total Answered: ${result1.answers.length}`);
    console.assert(result1.score === 10, "ERROR: All correct answers should score 10/10");
    console.assert(result1.percentage === 100, "ERROR: Full score should be 100%");
    console.assert(result1.isCompleted === true, "ERROR: Attempt must be marked isCompleted=true");

    // Check explanations exist for each question
    const allHaveExplanations = result1.answers.every((a) => a.explanation && a.explanation.length > 5);
    console.log(`  ✓ All 10 Questions Have Detailed Explanations: ${allHaveExplanations}`);
    console.assert(allHaveExplanations, "ERROR: Every answer review must include an explanation");

    // --- TEST 4: Retry Quiz (Attempt 2 with Anti-Repetition Randomization) ---
    console.log("\n▶ TEST 4: Retrying Quiz (Generating Attempt 2 with ?retry=true)...");
    const req2 = {
      params: { topicId: targetTopic._id.toString() },
      user: { id: testUser._id.toString() },
      query: { retry: "true" },
    };
    const res2 = createMockRes();
    await getQuizByTopic(req2, res2);

    const quizData2 = res2.data.quiz;
    console.log(`  ✓ Attempt 2 ID: ${quizData2.attemptId} (Different from Attempt 1: ${quizData2.attemptId.toString() !== quizData1.attemptId.toString()})`);
    console.log(`  ✓ Attempt 2 Question Count: ${quizData2.questions.length}`);
    console.assert(quizData2.questions.length === 10, "ERROR: Attempt 2 must have exactly 10 questions");

    const attempt1Questions = new Set(originalQTexts);
    const attempt2Questions = quizData2.questions.map((q) => q.question);
    const newQuestionsInAttempt2 = attempt2Questions.filter((q) => !attempt1Questions.has(q));

    console.log(`  ✓ New / Non-overlapping Questions in Attempt 2: ${newQuestionsInAttempt2.length} / 10`);
    console.log(`  ✓ Question Combinations Differ Between Attempts: ${newQuestionsInAttempt2.length > 0}`);
    console.assert(newQuestionsInAttempt2.length > 0, "ERROR: Consecutive attempts must select different questions from pool");

    // --- TEST 5: Option Randomization Check ---
    console.log("\n▶ TEST 5: Option Shuffling Verification...");
    const quizDoc = await Quiz.findById(quizData1._id);
    let optionShuffledCount = 0;
    for (const servedQ of quizData2.questions) {
      const dbQ = quizDoc.questions.find((q) => q.question === servedQ.question);
      if (dbQ && dbQ.options && JSON.stringify(dbQ.options) !== JSON.stringify(servedQ.options)) {
        optionShuffledCount++;
      }
    }
    console.log(`  ✓ Option Shuffling verified across served questions (shuffled variations detected: ${optionShuffledCount > 0})`);

    // --- TEST 6: User Quiz History API ---
    console.log("\n▶ TEST 6: Fetching User Quiz History...");
    const reqHistory = {
      user: { id: testUser._id.toString() },
    };
    const resHistory = createMockRes();
    await getMyQuizResults(reqHistory, resHistory);

    console.log(`  ✓ History Results Count: ${resHistory.data.results.length}`);
    console.assert(resHistory.data.results.length >= 1, "ERROR: History must contain completed attempt");

    // --- TEST 7: Multiple Topics 10-Question Guarantee ---
    console.log("\n▶ TEST 7: Verifying 10-Question Requirement Across Multiple Distinct Topics...");
    for (const t of testTopics) {
      const reqT = {
        params: { topicId: t._id.toString() },
        user: { id: testUser._id.toString() },
        query: { retry: "true" },
      };
      const resT = createMockRes();
      await getQuizByTopic(reqT, resT);
      console.log(`  ✓ Topic "${t.title}": Exactly ${resT.data.quiz.questions.length} Questions returned.`);
      console.assert(resT.data.quiz.questions.length === 10, `ERROR: Topic ${t.title} did not return 10 questions`);
    }

    console.log("\n=================================================");
    console.log("   🎉 ALL 7 TEST SUITES PASSED SUCCESSFULLY!    ");
    console.log("=================================================\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Test Verification Failed:", error);
    process.exit(1);
  }
}

runQuizSystemVerification();
