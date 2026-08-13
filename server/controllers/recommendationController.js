const User = require("../models/User");
const { generateRecommendations } = require("../services/recommendationService");

const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const result = await generateRecommendations(user);

    res.status(200).json({
      success: true,
      recommendations: result.recommendations,
      insufficientData: result.insufficientData || false,
      missingData: result.missingData || null,
      userStats: result.userStats || null,
    });
  } catch (error) {
    console.error("Error in getRecommendations:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getRecommendations,
};