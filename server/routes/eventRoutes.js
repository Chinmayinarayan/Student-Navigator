const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getAllEvents,
  toggleSaveEvent,
  setEventReminder,
  getSavedEvents,
} = require("../controllers/eventController");

router.get("/", protect, getAllEvents);
router.get("/saved", protect, getSavedEvents);
router.post("/:id/toggle-save", protect, toggleSaveEvent);
router.post("/:id/reminder", protect, setEventReminder);

module.exports = router;