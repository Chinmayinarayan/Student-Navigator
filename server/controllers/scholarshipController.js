const Scholarship = require("../models/Scholarship");
const UserScholarship = require("../models/UserScholarship");
const User = require("../models/User");

// Helper to normalize strings
const norm = (s = "") => String(s || "").toLowerCase().trim();

/**
 * Calculate dynamic status and countdown based on real date values
 */
const calculateScholarshipLifecycle = (scholarship, now = new Date()) => {
  const nowMs = now.getTime();

  if (scholarship.deadlineUnknown || !scholarship.applicationDeadline) {
    return {
      status: "Open",
      statusBadge: "Open",
      countdownText: "Check official portal for current deadline",
      isClosingSoon: false,
      isClosed: false,
      isDeadlineUnknown: true,
      daysRemaining: null,
    };
  }

  const deadline = new Date(scholarship.applicationDeadline);
  const deadlineMs = deadline.getTime();
  const diffMs = deadlineMs - nowMs;

  if (diffMs <= 0) {
    return {
      status: "Closed",
      statusBadge: "Closed",
      countdownText: "Application Closed",
      isClosingSoon: false,
      isClosed: true,
      isDeadlineUnknown: false,
      daysRemaining: 0,
    };
  }

  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));

  if (days <= 7) {
    let countdownText = "";
    if (days === 1) {
      countdownText = hours <= 24 ? `Closing in ${hours} hours` : "Deadline Tomorrow";
    } else {
      countdownText = `Deadline: ${days} days left`;
    }
    return {
      status: "Closing Soon",
      statusBadge: "Closing Soon",
      countdownText,
      isClosingSoon: true,
      isClosed: false,
      isDeadlineUnknown: false,
      daysRemaining: days,
    };
  }

  return {
    status: "Open",
    statusBadge: "Open",
    countdownText: `Deadline in ${days} days`,
    isClosingSoon: false,
    isClosed: false,
    isDeadlineUnknown: false,
    daysRemaining: days,
  };
};

/**
 * Compute personalized scholarship match score and grounded rationale
 */
const computeScholarshipMatch = (scholarship, user) => {
  if (!user) {
    return {
      matchScore: 0,
      isRecommended: false,
      isLikelyEligible: false,
      eligibleReasons: [],
      unverifiedReasons: [],
      scoreBreakdown: {
        course: 0,
        academic: 0,
        year: 0,
        location: 0,
        category: 0,
        career: 0,
        other: 0,
      },
    };
  }

  const userDegree = norm(user.degree);
  const userBranch = norm(user.branch);
  const userYear = norm(user.year);
  const userState = norm(user.state);
  const userCGPA = typeof user.cgpa === "number" ? user.cgpa : null;
  const userIncome = typeof user.familyIncome === "number" ? user.familyIncome : null;
  const userSkills = (user.skills || []).map(norm);
  const userInterests = (user.interests || []).map(norm);
  const userGoal = norm(user.careerGoals);

  const eligibleReasons = [];
  const unverifiedReasons = [];

  let courseScore = 0;
  let academicScore = 0;
  let yearScore = 0;
  let locationScore = 0;
  let categoryScore = 0;
  let careerScore = 0;
  let otherScore = 0;

  // 1. Course & Branch & Education Level Eligibility (Weight: 25%)
  const courses = (scholarship.eligibleCourses || []).map(norm);
  const branches = (scholarship.eligibleBranches || []).map(norm);
  const levels = (scholarship.eligibleEducationLevel || []).map(norm);

  const isCourseBroad = courses.length === 0 || courses.some((c) => ["all", "undergraduate", "postgraduate", "engineering"].includes(c));
  const isBranchBroad = branches.length === 0 || branches.some((b) => ["all", "all engineering", "all branches", "stem"].includes(b));
  const isLevelBroad = levels.length === 0 || levels.includes("undergraduate");

  let courseMatched = false;
  if (userDegree) {
    if (isCourseBroad || isLevelBroad || courses.some((c) => userDegree.includes(c) || c.includes(userDegree))) {
      courseMatched = true;
    }
  } else {
    courseScore += 12;
  }

  let branchMatched = false;
  if (userBranch) {
    if (isBranchBroad || branches.some((b) => userBranch.includes(b) || b.includes(userBranch) || (userBranch.includes("computer") && (b.includes("cs") || b.includes("it"))))) {
      branchMatched = true;
    }
  } else {
    courseScore += 8;
  }

  if (courseMatched && branchMatched) {
    courseScore = 25;
    eligibleReasons.push(`Matches ${user.degree || "Undergraduate"} & ${user.branch || "Engineering"} profile`);
  } else if (courseMatched) {
    courseScore = 20;
    eligibleReasons.push(`Matches degree level (${user.degree || "Degree"})`);
  } else if (!userDegree && !userBranch) {
    unverifiedReasons.push("Degree & branch not specified in profile");
  } else {
    courseScore = 10;
  }

  // 2. Academic / CGPA / Percentage Eligibility (Weight: 20%)
  const minCGPA = scholarship.minimumCGPA || 0;
  const minPercent = scholarship.minimumPercentage || 0;

  if (minCGPA === 0 && minPercent === 0) {
    academicScore = 20;
    eligibleReasons.push("No minimum CGPA cutoff required");
  } else if (userCGPA !== null) {
    if (userCGPA >= minCGPA || (minPercent > 0 && userCGPA * 9.5 >= minPercent)) {
      academicScore = 20;
      eligibleReasons.push(`Meets academic requirement (${userCGPA} CGPA)`);
    } else {
      academicScore = 5;
      unverifiedReasons.push(`Academic cutoff is ${minCGPA > 0 ? `${minCGPA} CGPA` : `${minPercent}%`} (Your profile: ${userCGPA})`);
    }
  } else {
    // CGPA not provided in user profile
    academicScore = 14;
    unverifiedReasons.push(`Minimum ${minCGPA > 0 ? `${minCGPA} CGPA` : `${minPercent}%`} requirement (Not specified in profile)`);
  }

  // 3. Year / Semester Eligibility (Weight: 15%)
  const years = (scholarship.eligibleYears || []).map(norm);
  const isYearBroad = years.length === 0 || years.some((y) => ["all", "all years", "any year"].includes(y));

  if (isYearBroad) {
    yearScore = 15;
    eligibleReasons.push("Open to all academic years");
  } else if (userYear) {
    if (years.some((y) => userYear.includes(y) || y.includes(userYear))) {
      yearScore = 15;
      eligibleReasons.push(`Eligible for ${user.year} students`);
    } else {
      yearScore = 5;
      unverifiedReasons.push(`Targeted for ${scholarship.eligibleYears.join(", ")}`);
    }
  } else {
    yearScore = 10;
    unverifiedReasons.push("Academic year not specified in profile");
  }

  // 4. Location / State Eligibility (Weight: 10%)
  const locs = (scholarship.eligibleLocations || []).map(norm);
  const states = (scholarship.eligibleStates || []).map(norm);
  const isLocBroad = locs.length === 0 || locs.some((l) => ["all", "all states", "india", "pan-india", "international"].includes(l)) || states.includes("all states");

  if (isLocBroad) {
    locationScore = 10;
    eligibleReasons.push("Open to students across India / All eligible regions");
  } else if (userState) {
    if (locs.some((l) => userState.includes(l) || l.includes(userState)) || states.some((s) => userState.includes(s) || s.includes(userState))) {
      locationScore = 10;
      eligibleReasons.push(`Eligible for resident state: ${user.state}`);
    } else {
      locationScore = 3;
      unverifiedReasons.push(`Location restricted to ${scholarship.eligibleLocations.join(", ")}`);
    }
  } else {
    locationScore = 8;
    unverifiedReasons.push("State/location not specified in profile");
  }

  // 5. Category / Scholarship Type Match (Weight: 10%)
  const schCategory = scholarship.category;
  const schType = scholarship.type;
  if (schCategory === "STEM/Engineering" || schCategory === "Corporate" || schCategory === "Government") {
    categoryScore = 10;
    eligibleReasons.push(`Recognized ${schCategory} scholarship on ${scholarship.sourcePortal || "Official Portal"}`);
  } else if (schCategory === "Merit-Based" || schType === "Merit-Based") {
    categoryScore = 10;
    eligibleReasons.push("High academic merit alignment");
  } else {
    categoryScore = 8;
  }

  // 6. Career / Field / Skills Match (Weight: 10%)
  const schSkills = (scholarship.skills || []).map(norm);
  const schCareers = (scholarship.careerPaths || []).map(norm);

  const matchedSkills = (scholarship.skills || []).filter((s) =>
    userSkills.includes(norm(s))
  );

  let careerMatched = false;
  if (userGoal && schCareers.some((c) => userGoal.includes(c) || c.includes(userGoal))) {
    careerMatched = true;
  }

  if (matchedSkills.length > 0 && careerMatched) {
    careerScore = 10;
    eligibleReasons.push(`Matches career focus and skills (${matchedSkills.slice(0, 2).join(", ")})`);
  } else if (matchedSkills.length > 0 || careerMatched) {
    careerScore = 8;
    if (matchedSkills.length > 0) {
      eligibleReasons.push(`Relevant to your skills (${matchedSkills.slice(0, 2).join(", ")})`);
    }
  } else {
    careerScore = 6;
  }

  // 7. Other Eligibility / Income / Status (Weight: 10%)
  if (scholarship.incomeRequirement) {
    if (userIncome !== null && scholarship.maxAnnualIncome) {
      if (userIncome <= scholarship.maxAnnualIncome) {
        otherScore += 10;
        eligibleReasons.push(`Meets family income limit (<= ₹${scholarship.maxAnnualIncome.toLocaleString("en-IN")})`);
      } else {
        otherScore += 2;
        unverifiedReasons.push(`Income ceiling is ₹${scholarship.maxAnnualIncome.toLocaleString("en-IN")}`);
      }
    } else {
      otherScore += 6;
      unverifiedReasons.push(`Income eligibility not provided in profile (${scholarship.incomeRequirement})`);
    }
  } else {
    otherScore += 10;
  }

  const rawScore = courseScore + academicScore + yearScore + locationScore + categoryScore + careerScore + otherScore;
  const matchScore = Math.min(100, Math.max(15, Math.round(rawScore)));

  const isLikelyEligible = unverifiedReasons.length > 0 && matchScore >= 60;
  const isRecommended = matchScore >= 65;

  return {
    matchScore,
    isRecommended,
    isLikelyEligible,
    eligibleReasons,
    unverifiedReasons,
    scoreBreakdown: {
      course: courseScore,
      academic: academicScore,
      year: yearScore,
      location: locationScore,
      category: categoryScore,
      career: careerScore,
      other: otherScore,
    },
  };
};

/**
 * Get all scholarships with filtering, search, and dynamic status
 */
const getScholarships = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;
    const user = userId ? await User.findById(userId) : null;

    const {
      search,
      category,
      type,
      course,
      educationLevel,
      sourcePortal,
      location,
      awardRange,
      deadlineFilter,
      status,
      sortBy = "recommended",
    } = req.query;

    const query = { isActive: true };

    // Search filter across title, provider, description, eligibility, course, branch, location, portal
    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), "i");
      query.$or = [
        { title: regex },
        { provider: regex },
        { description: regex },
        { eligibilitySummary: regex },
        { eligibleCourses: regex },
        { eligibleBranches: regex },
        { eligibleEducationLevel: regex },
        { category: regex },
        { sourcePortal: regex },
        { eligibleLocations: regex },
      ];
    }

    // Category filter
    if (category && category !== "All") {
      query.category = category;
    }

    // Type filter
    if (type && type !== "All") {
      query.type = { $regex: new RegExp(type, "i") };
    }

    // Education Level filter (10th, 12th, Diploma, Undergraduate, Postgraduate, PhD)
    if (educationLevel && educationLevel !== "All") {
      query.eligibleEducationLevel = { $regex: new RegExp(educationLevel, "i") };
    }

    // Source Portal filter (Buddy4Study, Vidyasaarathi, Government, Official Provider, University)
    if (sourcePortal && sourcePortal !== "All") {
      query.sourcePortal = sourcePortal;
    }

    // Course filter
    if (course && course !== "All") {
      const courseRegex = new RegExp(course, "i");
      query.$or = [
        { eligibleCourses: courseRegex },
        { eligibleBranches: courseRegex },
      ];
    }

    // Location filter
    if (location && location !== "All") {
      query.eligibleLocations = { $regex: new RegExp(location, "i") };
    }

    // Award range filter
    if (awardRange && awardRange !== "All") {
      if (awardRange === "under25k") {
        query.awardAmountValue = { $lte: 25000 };
      } else if (awardRange === "25k-50k") {
        query.awardAmountValue = { $gte: 25000, $lte: 50000 };
      } else if (awardRange === "50k-1lakh") {
        query.awardAmountValue = { $gte: 50000, $lte: 100000 };
      } else if (awardRange === "above1lakh") {
        query.awardAmountValue = { $gte: 100000 };
      }
    }

    // Fetch user tracking records
    let userTrackingMap = {};
    if (userId) {
      const userTrackings = await UserScholarship.find({ user: userId });
      userTrackings.forEach((t) => {
        userTrackingMap[t.scholarship.toString()] = t;
      });
    }

    const rawScholarships = await Scholarship.find(query).lean();
    const now = new Date();

    // Enrich with dynamic lifecycle and match score
    let enriched = rawScholarships.map((sch) => {
      const lifecycle = calculateScholarshipLifecycle(sch, now);
      const match = computeScholarshipMatch(sch, user);
      const tracking = userTrackingMap[sch._id.toString()] || null;

      return {
        ...sch,
        amount: sch.awardAmount,
        deadline: sch.applicationDeadline,
        sourceUrl: sch.sourceUrl || sch.officialSourceUrl,
        lifecycle,
        match,
        isVerified: sch.isVerified !== false,
        lastVerifiedAt: sch.lastVerifiedAt || sch.updatedAt || new Date(),
        isSaved: tracking ? tracking.isSaved : false,
        savedAt: tracking ? tracking.savedAt : null,
        reminderDaysBefore: tracking ? tracking.reminderDaysBefore : null,
        applicationStatus: tracking ? tracking.applicationStatus : null,
        notes: tracking ? tracking.notes : "",
        appliedAt: tracking ? tracking.appliedAt : null,
      };
    });

    // Filter by Dynamic Deadline / Lifecycle Status if requested
    if (status && status !== "All") {
      if (status === "Open") {
        enriched = enriched.filter((s) => s.lifecycle.status === "Open" || s.lifecycle.status === "Closing Soon");
      } else if (status === "Closing Soon") {
        enriched = enriched.filter((s) => s.lifecycle.status === "Closing Soon");
      } else if (status === "Closed") {
        enriched = enriched.filter((s) => s.lifecycle.status === "Closed");
      }
    }

    if (deadlineFilter && deadlineFilter !== "All") {
      if (deadlineFilter === "Closing Soon") {
        enriched = enriched.filter((s) => s.lifecycle.isClosingSoon);
      } else if (deadlineFilter === "This Week") {
        enriched = enriched.filter((s) => s.lifecycle.daysRemaining !== null && s.lifecycle.daysRemaining <= 7 && s.lifecycle.daysRemaining > 0);
      } else if (deadlineFilter === "This Month") {
        enriched = enriched.filter((s) => s.lifecycle.daysRemaining !== null && s.lifecycle.daysRemaining <= 30 && s.lifecycle.daysRemaining > 0);
      } else if (deadlineFilter === "Later") {
        enriched = enriched.filter((s) => s.lifecycle.daysRemaining !== null && s.lifecycle.daysRemaining > 30);
      }
    }

    // Sorting logic
    enriched.sort((a, b) => {
      if (sortBy === "recommended") {
        if (b.match.matchScore !== a.match.matchScore) {
          return b.match.matchScore - a.match.matchScore;
        }
        if (a.lifecycle.isClosed !== b.lifecycle.isClosed) {
          return a.lifecycle.isClosed ? 1 : -1;
        }
        if (a.applicationDeadline && b.applicationDeadline) {
          return new Date(a.applicationDeadline) - new Date(b.applicationDeadline);
        }
        return 0;
      } else if (sortBy === "deadline") {
        if (a.lifecycle.isClosed !== b.lifecycle.isClosed) {
          return a.lifecycle.isClosed ? 1 : -1;
        }
        if (!a.applicationDeadline) return 1;
        if (!b.applicationDeadline) return -1;
        return new Date(a.applicationDeadline) - new Date(b.applicationDeadline);
      } else if (sortBy === "award") {
        return (b.awardAmountValue || 0) - (a.awardAmountValue || 0);
      } else if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    res.status(200).json({
      success: true,
      count: enriched.length,
      scholarships: enriched,
    });
  } catch (error) {
    console.error("Error in getScholarships:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * Get dynamic summary counts for the header metrics
 */
const getScholarshipSummary = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;
    const user = userId ? await User.findById(userId) : null;

    const scholarships = await Scholarship.find({ isActive: true }).lean();
    const now = new Date();

    let userTrackings = [];
    if (userId) {
      userTrackings = await UserScholarship.find({ user: userId });
    }

    const savedCount = userTrackings.filter((t) => t.isSaved).length;
    const appliedCount = userTrackings.filter((t) =>
      ["Application Started", "Submitted", "Shortlisted", "Selected"].includes(t.applicationStatus)
    ).length;

    let availableCount = scholarships.length;
    let openCount = 0;
    let closingSoonCount = 0;
    let recommendedCount = 0;

    scholarships.forEach((sch) => {
      const lifecycle = calculateScholarshipLifecycle(sch, now);
      if (lifecycle.status === "Open" || lifecycle.status === "Closing Soon") {
        openCount++;
      }
      if (lifecycle.status === "Closing Soon") {
        closingSoonCount++;
      }
      if (user) {
        const match = computeScholarshipMatch(sch, user);
        if (match.isRecommended && !lifecycle.isClosed) {
          recommendedCount++;
        }
      }
    });

    res.status(200).json({
      success: true,
      summary: {
        available: availableCount,
        recommended: recommendedCount,
        open: openCount,
        closingSoon: closingSoonCount,
        saved: savedCount,
        applied: appliedCount,
      },
    });
  } catch (error) {
    console.error("Error in getScholarshipSummary:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * Get closing soon scholarships (< 7 days)
 */
const getClosingSoonScholarships = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;
    const user = userId ? await User.findById(userId) : null;

    const scholarships = await Scholarship.find({
      isActive: true,
      deadlineUnknown: { $ne: true },
      applicationDeadline: { $exists: true, $ne: null },
    }).lean();

    const now = new Date();
    const closingSoon = [];

    let userTrackingMap = {};
    if (userId) {
      const userTrackings = await UserScholarship.find({ user: userId });
      userTrackings.forEach((t) => {
        userTrackingMap[t.scholarship.toString()] = t;
      });
    }

    scholarships.forEach((sch) => {
      const lifecycle = calculateScholarshipLifecycle(sch, now);
      if (lifecycle.isClosingSoon) {
        const match = computeScholarshipMatch(sch, user);
        const tracking = userTrackingMap[sch._id.toString()] || null;
        closingSoon.push({
          ...sch,
          amount: sch.awardAmount,
          deadline: sch.applicationDeadline,
          lifecycle,
          match,
          isVerified: sch.isVerified !== false,
          lastVerifiedAt: sch.lastVerifiedAt || sch.updatedAt,
          isSaved: tracking ? tracking.isSaved : false,
          applicationStatus: tracking ? tracking.applicationStatus : null,
        });
      }
    });

    closingSoon.sort((a, b) => new Date(a.applicationDeadline) - new Date(b.applicationDeadline));

    res.status(200).json({
      success: true,
      count: closingSoon.length,
      scholarships: closingSoon,
    });
  } catch (error) {
    console.error("Error in getClosingSoonScholarships:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Get personalized recommended scholarships
 */
const getRecommendedScholarships = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;
    const user = userId ? await User.findById(userId) : null;

    const scholarships = await Scholarship.find({ isActive: true }).lean();
    const now = new Date();

    let userTrackingMap = {};
    if (userId) {
      const userTrackings = await UserScholarship.find({ user: userId });
      userTrackings.forEach((t) => {
        userTrackingMap[t.scholarship.toString()] = t;
      });
    }

    const recommended = [];

    scholarships.forEach((sch) => {
      const lifecycle = calculateScholarshipLifecycle(sch, now);
      if (!lifecycle.isClosed) {
        const match = computeScholarshipMatch(sch, user);
        if (match.matchScore >= 60) {
          const tracking = userTrackingMap[sch._id.toString()] || null;
          recommended.push({
            ...sch,
            amount: sch.awardAmount,
            deadline: sch.applicationDeadline,
            lifecycle,
            match,
            isVerified: sch.isVerified !== false,
            lastVerifiedAt: sch.lastVerifiedAt || sch.updatedAt,
            isSaved: tracking ? tracking.isSaved : false,
            applicationStatus: tracking ? tracking.applicationStatus : null,
          });
        }
      }
    });

    recommended.sort((a, b) => b.match.matchScore - a.match.matchScore);

    res.status(200).json({
      success: true,
      count: recommended.length,
      scholarships: recommended,
    });
  } catch (error) {
    console.error("Error in getRecommendedScholarships:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Get saved scholarships and tracked applications
 */
const getSavedScholarships = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    const trackings = await UserScholarship.find({
      user: userId,
      isSaved: true,
    }).populate("scholarship").lean();

    const now = new Date();

    const saved = trackings
      .filter((t) => t.scholarship && t.scholarship.isActive)
      .map((t) => {
        const sch = t.scholarship;
        const lifecycle = calculateScholarshipLifecycle(sch, now);
        const match = computeScholarshipMatch(sch, user);

        return {
          ...sch,
          amount: sch.awardAmount,
          deadline: sch.applicationDeadline,
          lifecycle,
          match,
          isVerified: sch.isVerified !== false,
          lastVerifiedAt: sch.lastVerifiedAt || sch.updatedAt,
          isSaved: true,
          savedAt: t.savedAt,
          reminderDaysBefore: t.reminderDaysBefore,
          applicationStatus: t.applicationStatus,
          notes: t.notes,
          appliedAt: t.appliedAt,
        };
      });

    res.status(200).json({
      success: true,
      count: saved.length,
      scholarships: saved,
    });
  } catch (error) {
    console.error("Error in getSavedScholarships:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Get all user application tracking records
 */
const getUserApplications = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    const trackings = await UserScholarship.find({
      user: userId,
      applicationStatus: { $ne: null },
    }).populate("scholarship").lean();

    const now = new Date();

    const applications = trackings
      .filter((t) => t.scholarship)
      .map((t) => {
        const sch = t.scholarship;
        const lifecycle = calculateScholarshipLifecycle(sch, now);
        const match = computeScholarshipMatch(sch, user);

        return {
          trackingId: t._id,
          scholarship: {
            ...sch,
            amount: sch.awardAmount,
            deadline: sch.applicationDeadline,
            lifecycle,
            match,
            isVerified: sch.isVerified !== false,
            lastVerifiedAt: sch.lastVerifiedAt || sch.updatedAt,
          },
          isSaved: t.isSaved,
          savedAt: t.savedAt,
          applicationStatus: t.applicationStatus,
          notes: t.notes,
          appliedAt: t.appliedAt,
          reminderDaysBefore: t.reminderDaysBefore,
          updatedAt: t.updatedAt,
        };
      });

    applications.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Error in getUserApplications:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Get single scholarship details by ID
 */
const getScholarshipById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null;
    const user = userId ? await User.findById(userId) : null;

    const scholarship = await Scholarship.findById(id).lean();

    if (!scholarship || !scholarship.isActive) {
      return res.status(404).json({ success: false, message: "Scholarship not found" });
    }

    const now = new Date();
    const lifecycle = calculateScholarshipLifecycle(scholarship, now);
    const match = computeScholarshipMatch(scholarship, user);

    let tracking = null;
    if (userId) {
      tracking = await UserScholarship.findOne({ user: userId, scholarship: id }).lean();
    }

    res.status(200).json({
      success: true,
      scholarship: {
        ...scholarship,
        amount: scholarship.awardAmount,
        deadline: scholarship.applicationDeadline,
        sourceUrl: scholarship.sourceUrl || scholarship.officialSourceUrl,
        lifecycle,
        match,
        isVerified: scholarship.isVerified !== false,
        lastVerifiedAt: scholarship.lastVerifiedAt || scholarship.updatedAt || new Date(),
        isSaved: tracking ? tracking.isSaved : false,
        savedAt: tracking ? tracking.savedAt : null,
        reminderDaysBefore: tracking ? tracking.reminderDaysBefore : null,
        applicationStatus: tracking ? tracking.applicationStatus : null,
        notes: tracking ? tracking.notes : "",
        appliedAt: tracking ? tracking.appliedAt : null,
      },
    });
  } catch (error) {
    console.error("Error in getScholarshipById:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Toggle Save / Unsave scholarship
 */
const toggleSaveScholarship = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    let tracking = await UserScholarship.findOne({ user: userId, scholarship: id });

    if (!tracking) {
      tracking = new UserScholarship({
        user: userId,
        scholarship: id,
        isSaved: true,
        savedAt: new Date(),
        applicationStatus: "Saved",
      });
      await tracking.save();
      return res.status(200).json({
        success: true,
        isSaved: true,
        message: "Scholarship saved to your list ❤️",
        tracking,
      });
    }

    tracking.isSaved = !tracking.isSaved;
    tracking.savedAt = tracking.isSaved ? new Date() : tracking.savedAt;
    if (tracking.isSaved && !tracking.applicationStatus) {
      tracking.applicationStatus = "Saved";
    }
    await tracking.save();

    res.status(200).json({
      success: true,
      isSaved: tracking.isSaved,
      message: tracking.isSaved ? "Scholarship saved ❤️" : "Scholarship removed from saved list",
      tracking,
    });
  } catch (error) {
    console.error("Error in toggleSaveScholarship:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Update application progress status and notes
 */
const updateApplicationStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { applicationStatus, notes } = req.body;

    const validStatuses = [
      "Interested",
      "Saved",
      "Planning to Apply",
      "Application Started",
      "Submitted",
      "Shortlisted",
      "Selected",
      "Rejected",
      "Withdrawn",
    ];

    if (applicationStatus && !validStatuses.includes(applicationStatus)) {
      return res.status(400).json({ success: false, message: "Invalid application status" });
    }

    let tracking = await UserScholarship.findOne({ user: userId, scholarship: id });

    if (!tracking) {
      tracking = new UserScholarship({
        user: userId,
        scholarship: id,
        isSaved: true,
        savedAt: new Date(),
        applicationStatus: applicationStatus || "Planning to Apply",
        notes: notes || "",
        appliedAt: ["Submitted", "Selected", "Shortlisted"].includes(applicationStatus) ? new Date() : null,
      });
    } else {
      if (applicationStatus) {
        tracking.applicationStatus = applicationStatus;
        if (["Submitted", "Selected", "Shortlisted"].includes(applicationStatus) && !tracking.appliedAt) {
          tracking.appliedAt = new Date();
        }
      }
      if (notes !== undefined) {
        tracking.notes = notes;
      }
    }

    await tracking.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      tracking,
    });
  } catch (error) {
    console.error("Error in updateApplicationStatus:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Set deadline reminder
 */
const setScholarshipReminder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { reminderDaysBefore } = req.body;

    let tracking = await UserScholarship.findOne({ user: userId, scholarship: id });

    if (!tracking) {
      tracking = new UserScholarship({
        user: userId,
        scholarship: id,
        isSaved: true,
        savedAt: new Date(),
        reminderDaysBefore,
      });
    } else {
      tracking.reminderDaysBefore = reminderDaysBefore;
      tracking.isSaved = true;
    }

    await tracking.save();

    res.status(200).json({
      success: true,
      message: `Reminder set for ${reminderDaysBefore} days before deadline ⏰`,
      tracking,
    });
  } catch (error) {
    console.error("Error in setScholarshipReminder:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  calculateScholarshipLifecycle,
  computeScholarshipMatch,
  getScholarships,
  getScholarshipSummary,
  getClosingSoonScholarships,
  getRecommendedScholarships,
  getSavedScholarships,
  getUserApplications,
  getScholarshipById,
  toggleSaveScholarship,
  updateApplicationStatus,
  setScholarshipReminder,
};
