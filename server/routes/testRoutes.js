const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
  getTests,
  getTestById,
  submitTest,
  getTestResult,
  getMyTestResults,
  getTestsWithProgress,
  getPlacementSummary,
} = require("../controllers/testController");



// Aggregate / summary routes  <-- MUST come before /:id
router.get(
  "/my-results",
  protect,
  getMyTestResults
);

router.get(
  "/with-progress",
  protect,
  getTestsWithProgress
);

router.get(
  "/summary",
  protect,
  getPlacementSummary
);

// Result by result ID  <-- MUST come before /:id
router.get(
  "/result/:id",
  protect,
  getTestResult
);


// Get all tests
router.get(
  "/",
  protect,
  getTests
);


// Get single test
router.get(
  "/:id",
  protect,
  getTestById
);


// Submit test
router.post(
  "/:id/submit",
  protect,
  submitTest
);


module.exports = router;