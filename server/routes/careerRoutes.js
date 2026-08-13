const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAllCareers,
  getCareerById,
  toggleProjectStatus,
  syncCareers,
} = require("../controllers/careerController");

router.get("/", protect, getAllCareers);
router.post("/sync", protect, syncCareers);
router.get("/:id", protect, getCareerById);
router.post("/:id/project-toggle", protect, toggleProjectStatus);

module.exports = router;
