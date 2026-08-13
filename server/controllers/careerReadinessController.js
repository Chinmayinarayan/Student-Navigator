const {
  calculateCareerReadiness,
} = require("../services/careerReadinessService");

// =====================================
// Get Career Readiness
// =====================================

const getCareerReadiness = async (req, res) => {
  try {
    const userId = req.user.id;

    const readiness =
      await calculateCareerReadiness(userId);

    res.status(200).json({
      success: true,
      readiness,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

module.exports = {
  getCareerReadiness,
};