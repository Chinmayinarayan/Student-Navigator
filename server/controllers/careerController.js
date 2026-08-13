const Career = require("../models/Career");
const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const User = require("../models/User");
const {
  syncCareersWithSubjects,
  calculateUserCareerMetrics,
} = require("../services/careerService");

// Auto-sync check flag
let hasSyncedOnStart = false;

// Get all careers with live progress summary for the user
const getAllCareers = async (req, res) => {
  try {
    // If fewer than 11 careers exist or not synced yet, sync now
    const count = await Career.countDocuments();
    if (count < 11 || !hasSyncedOnStart) {
      await syncCareersWithSubjects();
      hasSyncedOnStart = true;
    }

    const { category, search, skill } = req.query;
    const query = {};

    if (category && category !== "All") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { requiredSkills: { $in: [new RegExp(search, "i")] } },
      ];
    }

    if (skill && skill !== "All") {
      query.requiredSkills = { $in: [skill] };
    }

    const careers = await Career.find(query)
      .populate("relatedSubjects", "name difficulty concepts")
      .sort({ category: 1, title: 1 });

    const userId = req.user?.id || req.user?._id;

    // Attach user progress per career if user is logged in
    let careersWithProgress = careers;
    let recommendedCareer = null;

    if (userId) {
      careersWithProgress = await Promise.all(
        careers.map(async (career) => {
          const careerObj = career.toObject();
          const metrics = await calculateUserCareerMetrics(userId, career);
          return {
            ...careerObj,
            userProgress: metrics.placementReadiness,
            learningProgress: metrics.learningProgress,
            readinessStatus: metrics.readinessStatus,
            hasStarted:
              metrics.completedTopicsCount > 0 ||
              metrics.completedProjectsCount > 0 ||
              metrics.solvedCodingProblems > 0,
          };
        })
      );

      const { getRecommendedCareerForUser } = require("../services/careerService");
      recommendedCareer = await getRecommendedCareerForUser(userId, careers);
    }

    res.status(200).json({
      success: true,
      count: careersWithProgress.length,
      careers: careersWithProgress,
      recommendedCareer,
    });
  } catch (error) {
    console.error("Error in getAllCareers:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get single career by ID with rich details, topics, and metrics
const getCareerById = async (req, res) => {
  try {
    const { id } = req.params;

    let career = await Career.findById(id)
      .populate({
        path: "relatedSubjects",
        select: "name description difficulty concepts softwareTools textbooks youtubeResources practicePlatforms",
      })
      .populate({
        path: "roadmapPhases.subjects",
        select: "name difficulty concepts",
      });

    if (!career) {
      // Try searching by slug or title if not a valid ObjectId
      career = await Career.findOne({
        title: { $regex: new RegExp(id.replace(/-/g, " "), "i") },
      })
        .populate({
          path: "relatedSubjects",
          select: "name description difficulty concepts softwareTools textbooks youtubeResources practicePlatforms",
        })
        .populate({
          path: "roadmapPhases.subjects",
          select: "name difficulty concepts",
        });
    }

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    const userId = req.user?.id || req.user?._id;

    // Fetch topics mapped to this career's subjects
    const subjectIds = (career.relatedSubjects || []).map((s) => s._id);
    const topics = await Topic.find(
      { subject: { $in: subjectIds }, isPublished: true },
      "_id title slug difficulty order estimatedHours subject"
    ).sort({ order: 1 });

    // Fetch user topic completions for these topics
    let completedTopicIds = new Set();
    if (userId) {
      const userProgress = await UserTopicProgress.find({
        user: userId,
        topic: { $in: topics.map((t) => t._id) },
        completed: true,
      });
      completedTopicIds = new Set(userProgress.map((p) => p.topic.toString()));
    }

    // Attach completion flag to topics
    const enrichedTopics = topics.map((t) => ({
      ...t.toObject(),
      isCompleted: completedTopicIds.has(t._id.toString()),
    }));

    // Calculate detailed metrics for user
    let metrics = {
      learningProgress: 0,
      skillsProgress: 0,
      projectProgress: 0,
      codingProgress: 0,
      interviewProgress: 0,
      placementReadiness: 0,
      readinessStatus: "Starting",
      completedTopicsCount: 0,
      totalTopicsCount: topics.length,
      solvedCodingProblems: 0,
      targetProblems: career.dsaRequirements?.recommendedProblemsCount || 120,
      completedProjectsCount: 0,
      totalProjects: career.projects?.length || 3,
      userProjectStatuses: [],
    };

    if (userId) {
      metrics = await calculateUserCareerMetrics(userId, career);
    }

    res.status(200).json({
      success: true,
      career,
      topics: enrichedTopics,
      metrics,
    });
  } catch (error) {
    console.error("Error in getCareerById:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Toggle or update roadmap project status
const toggleProjectStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params; // careerId
    const { projectId, status } = req.body;

    if (!projectId || !status) {
      return res.status(400).json({
        success: false,
        message: "projectId and status are required",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.careerProjectProgress) {
      user.careerProjectProgress = [];
    }

    const existingIndex = user.careerProjectProgress.findIndex(
      (p) =>
        p.career?.toString() === id.toString() &&
        p.projectId === projectId
    );

    if (existingIndex >= 0) {
      user.careerProjectProgress[existingIndex].status = status;
      user.careerProjectProgress[existingIndex].updatedAt = new Date();
    } else {
      user.careerProjectProgress.push({
        career: id,
        projectId,
        status,
        updatedAt: new Date(),
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Project status updated",
      careerProjectProgress: user.careerProjectProgress,
    });
  } catch (error) {
    console.error("Error updating project status:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Trigger manual sync of careers (e.g. for admin or setup)
const syncCareers = async (req, res) => {
  try {
    await syncCareersWithSubjects();
    const careers = await Career.find().populate("relatedSubjects");
    res.status(200).json({
      success: true,
      message: "Careers synced successfully with database subjects",
      count: careers.length,
      careers,
    });
  } catch (error) {
    console.error("Error syncing careers:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllCareers,
  getCareerById,
  toggleProjectStatus,
  syncCareers,
};
