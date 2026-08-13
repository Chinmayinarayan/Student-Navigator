const Career = require("../models/Career");
const {
  generateRoadmap,
} = require("../services/roadmapGeneratorService");

// ==========================================
// Generate Personalized Roadmap
// ==========================================
const getRoadmap = async (req, res) => {
  try {
    const userId = req.user.id;
    const { careerId } = req.params;

    const roadmapData = await generateRoadmap(userId, careerId);

    if (!roadmapData || !roadmapData.career) {
      return res.status(404).json({
        success: false,
        message: "Career or roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      career: roadmapData.career,
      roadmap: roadmapData.phases || [],
      phases: roadmapData.phases || [],
      projects: roadmapData.projects || [],
      dsaRequirements: roadmapData.dsaRequirements || {},
      interviewTopics: roadmapData.interviewTopics || [],
      certifications: roadmapData.certifications || [],
      metrics: roadmapData.metrics || {},
    });
  } catch (error) {
    console.error("Error in getRoadmap:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getRoadmap,
};
