const Event = require("../models/Event");
const User = require("../models/User");

// Helper to normalize strings for comparison
const norm = (s = "") => String(s).toLowerCase().trim();

/**
 * Calculate dynamic status and countdown based on real date values
 */
const calculateEventLifecycle = (event, now = new Date()) => {
  const eventDate = new Date(event.eventDate);
  const deadline = event.registrationDeadline
    ? new Date(event.registrationDeadline)
    : event.deadline
    ? new Date(event.deadline)
    : null;

  const nowMs = now.getTime();
  const eventMs = eventDate.getTime();

  let status = "Upcoming";
  let countdownText = "";
  let isClosed = false;
  let isPast = false;

  if (eventMs < nowMs) {
    status = "Past Event";
    isPast = true;
    isClosed = true;
    countdownText = "Event Concluded";
  } else if (event.deadlineUnknown) {
    status = "Upcoming";
    countdownText = "Check official event page";
  } else if (deadline) {
    const deadlineMs = deadline.getTime();
    const diffMs = deadlineMs - nowMs;

    if (diffMs <= 0) {
      status = "Registration Closed";
      isClosed = true;
      countdownText = "Registration Closed";
    } else {
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor(diffMs / (1000 * 60));

      if (days <= 7) {
        status = "Registration Closing Soon";
      } else {
        status = "Upcoming";
      }

      if (days > 0) {
        countdownText = `${days} day${days > 1 ? "s" : ""} left to register`;
      } else if (hours > 0) {
        countdownText = `${hours} hour${hours > 1 ? "s" : ""} left to register`;
      } else {
        countdownText = `${Math.max(1, minutes)} min left to register`;
      }
    }
  } else {
    // If no deadline specified, open until event date
    status = "Upcoming";
    countdownText = "Registration Open";
  }

  return {
    status,
    countdownText,
    isClosed,
    isPast,
  };
};

/**
 * Compute personalized relevance score and grounded rationale
 */
const computePersonalizedRelevance = (event, user) => {
  if (!user) {
    return {
      relevanceScore: 0,
      isRecommended: false,
      recommendationReason: "",
      matchedSkills: [],
    };
  }

  const userSkills = (user.skills || []).map(norm);
  const userInterests = (user.interests || []).map(norm);
  const userGoal = norm(user.careerGoals || "");

  const eventSkills = (event.skills || []).map(norm);
  const eventTitle = norm(event.title);
  const eventDesc = norm(event.description);
  const eventType = norm(event.type);

  // 1. Skill Matching (Weight 50%)
  const matchedSkills = (event.skills || []).filter((s) =>
    userSkills.includes(norm(s))
  );
  let skillScore = 0;
  if (eventSkills.length > 0) {
    skillScore = (matchedSkills.length / eventSkills.length) * 100;
  } else if (userSkills.length > 0) {
    // Check if any user skill appears in title/description
    const matchedInText = userSkills.filter(
      (s) => eventTitle.includes(s) || eventDesc.includes(s)
    );
    skillScore = matchedInText.length > 0 ? 60 : 0;
  }

  // 2. Interest / Goal Matching (Weight 35%)
  let interestScore = 0;
  const matchedInterests = [];
  userInterests.forEach((interest) => {
    if (
      eventTitle.includes(interest) ||
      eventDesc.includes(interest) ||
      eventSkills.some((s) => s.includes(interest))
    ) {
      matchedInterests.push(interest);
      interestScore += 40;
    }
  });

  if (userGoal && (eventTitle.includes(userGoal) || eventDesc.includes(userGoal) || eventSkills.some((s) => s.includes(userGoal)))) {
    interestScore += 40;
  }
  interestScore = Math.min(100, interestScore);

  // 3. Category / Type Alignment (Weight 15%)
  let typeScore = 40;
  if (eventType === "hackathon" || eventType === "coding contest" || eventType === "workshop") {
    typeScore = 70;
  }

  const rawScore = Math.round(
    skillScore * 0.5 + interestScore * 0.35 + typeScore * 0.15
  );
  const relevanceScore = Math.min(98, Math.max(15, rawScore));

  // Determine if recommended (relevance score >= 60 or specific matches)
  const isRecommended =
    relevanceScore >= 60 ||
    matchedSkills.length > 0 ||
    matchedInterests.length > 0;

  // Build grounded rationale from actual user data
  let reasons = [];
  if (matchedSkills.length > 0) {
    reasons.push(
      `matches your demonstrated skills in ${matchedSkills.slice(0, 3).join(", ")}`
    );
  }
  if (matchedInterests.length > 0) {
    reasons.push(`aligns with your interest in ${matchedInterests.slice(0, 2).join(", ")}`);
  }
  if (userGoal && (eventTitle.includes(userGoal) || eventDesc.includes(userGoal))) {
    reasons.push(`supports your career goal: "${user.careerGoals}"`);
  }

  let recommendationReason = "";
  if (reasons.length > 0) {
    recommendationReason = `Recommended because this event ${reasons.join(" and ")}.`;
  } else if (isRecommended) {
    recommendationReason = `Recommended to expand your practical experience in ${event.type}.`;
  }

  return {
    relevanceScore,
    isRecommended,
    recommendationReason,
    matchedSkills,
  };
};

/**
 * GET /api/events
 * Fetch all events with calculated lifecycle, relevance, and user saved status
 */
const getAllEvents = async (req, res) => {
  try {
    const now = new Date();

    // Fetch user if authenticated
    let user = null;
    if (req.user && req.user._id) {
      user = await User.findById(req.user._id).select(
        "skills interests careerGoals savedEvents"
      );
    }

    const savedEventMap = new Map();
    if (user && user.savedEvents) {
      user.savedEvents.forEach((item) => {
        if (item && item.event) {
          savedEventMap.set(item.event.toString(), {
            savedAt: item.savedAt,
            reminderDaysBefore: item.reminderDaysBefore,
          });
        }
      });
    }

    // Fetch events sorted by eventDate ascending
    const events = await Event.find().sort({ eventDate: 1 });

    const enrichedEvents = events.map((event) => {
      const plain = event.toObject();
      const lifecycle = calculateEventLifecycle(plain, now);
      const personalization = computePersonalizedRelevance(plain, user);
      const savedInfo = savedEventMap.get(plain._id.toString());

      return {
        ...plain,
        ...lifecycle,
        ...personalization,
        isSaved: Boolean(savedInfo),
        savedAt: savedInfo ? savedInfo.savedAt : null,
        reminderDaysBefore: savedInfo ? savedInfo.reminderDaysBefore : null,
        registrationUrl: plain.registrationUrl || plain.registrationLink || "",
        officialSourceUrl: plain.officialSourceUrl || plain.registrationLink || "",
        registrationDeadline: plain.registrationDeadline || plain.deadline || null,
      };
    });

    res.status(200).json({
      success: true,
      count: enrichedEvents.length,
      events: enrichedEvents,
    });
  } catch (error) {
    console.error("Error in getAllEvents:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

/**
 * POST /api/events/:id/toggle-save
 * Save or unsave an event for the current user
 */
const toggleSaveEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    if (!user.savedEvents) {
      user.savedEvents = [];
    }

    const existingIndex = user.savedEvents.findIndex(
      (item) => item.event && item.event.toString() === id
    );

    let isSaved = false;
    if (existingIndex > -1) {
      // Unsave
      user.savedEvents.splice(existingIndex, 1);
      isSaved = false;
    } else {
      // Save
      user.savedEvents.push({
        event: id,
        savedAt: new Date(),
        reminderDaysBefore: 3, // default 3 days
      });
      isSaved = true;
    }

    await user.save();

    res.status(200).json({
      success: true,
      isSaved,
      savedCount: user.savedEvents.length,
      message: isSaved ? "Event saved to your opportunities" : "Event removed from saved opportunities",
    });
  } catch (error) {
    console.error("Error in toggleSaveEvent:", error);
    res.status(500).json({
      success: false,
      message: "Failed to toggle saved event",
      error: error.message,
    });
  }
};

/**
 * POST /api/events/:id/reminder
 * Update reminder preference (e.g., 7, 3, 1 days before deadline or null)
 */
const setEventReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { reminderDaysBefore } = req.body; // e.g. 7, 3, 1, or null

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.savedEvents) {
      user.savedEvents = [];
    }

    const existing = user.savedEvents.find(
      (item) => item.event && item.event.toString() === id
    );

    if (existing) {
      existing.reminderDaysBefore = reminderDaysBefore;
    } else {
      user.savedEvents.push({
        event: id,
        savedAt: new Date(),
        reminderDaysBefore,
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: reminderDaysBefore
        ? `Reminder set for ${reminderDaysBefore} day${reminderDaysBefore > 1 ? "s" : ""} before deadline`
        : "Reminder cleared",
      reminderDaysBefore,
    });
  } catch (error) {
    console.error("Error in setEventReminder:", error);
    res.status(500).json({
      success: false,
      message: "Failed to set reminder",
      error: error.message,
    });
  }
};

/**
 * GET /api/events/saved
 * Get all saved events for the user
 */
const getSavedEvents = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("savedEvents.event");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const now = new Date();
    const savedEvents = (user.savedEvents || [])
      .filter((item) => item.event != null)
      .map((item) => {
        const plain = item.event.toObject();
        const lifecycle = calculateEventLifecycle(plain, now);
        const personalization = computePersonalizedRelevance(plain, user);

        return {
          ...plain,
          ...lifecycle,
          ...personalization,
          isSaved: true,
          savedAt: item.savedAt,
          reminderDaysBefore: item.reminderDaysBefore,
          registrationUrl: plain.registrationUrl || plain.registrationLink || "",
          officialSourceUrl: plain.officialSourceUrl || plain.registrationLink || "",
          registrationDeadline: plain.registrationDeadline || plain.deadline || null,
        };
      });

    res.status(200).json({
      success: true,
      count: savedEvents.length,
      events: savedEvents,
    });
  } catch (error) {
    console.error("Error in getSavedEvents:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch saved events",
      error: error.message,
    });
  }
};

module.exports = {
  getAllEvents,
  toggleSaveEvent,
  setEventReminder,
  getSavedEvents,
};