const User = require("../models/User");

// GET USER PROFILE
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// UPDATE USER PROFILE
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    const {
      name,
      degree,
      branch,
      year,
      cgpa,
      state,
      familyIncome,
      skills,
      interests,
      careerGoals,
    } = req.body;

    const updateData = {};

    if (name !== undefined) {
      if (typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Name cannot be empty." });
      }
      updateData.name = name.trim();
    }

    if (degree !== undefined) updateData.degree = typeof degree === "string" ? degree.trim() : "";
    if (branch !== undefined) updateData.branch = typeof branch === "string" ? branch.trim() : "";
    if (year !== undefined) updateData.year = typeof year === "string" ? year.trim() : String(year);
    if (careerGoals !== undefined) updateData.careerGoals = typeof careerGoals === "string" ? careerGoals.trim() : "";
    if (state !== undefined) updateData.state = typeof state === "string" ? state.trim() : "";

    if (skills !== undefined) {
      updateData.skills = Array.isArray(skills) ? skills.filter((s) => typeof s === "string") : [];
    }

    if (interests !== undefined) {
      updateData.interests = Array.isArray(interests) ? interests.filter((i) => typeof i === "string") : [];
    }

    // Validate CGPA
    if (cgpa !== undefined) {
      if (cgpa === "" || cgpa === null) {
        updateData.cgpa = null;
      } else {
        const numCgpa = Number(cgpa);
        if (isNaN(numCgpa) || numCgpa < 0 || numCgpa > 10) {
          return res.status(400).json({
            success: false,
            message: "CGPA must be a valid number between 0.0 and 10.0",
          });
        }
        updateData.cgpa = numCgpa;
      }
    }

    // Validate family income
    if (familyIncome !== undefined) {
      if (familyIncome === "" || familyIncome === null) {
        updateData.familyIncome = null;
      } else {
        const numIncome = Number(familyIncome);
        if (isNaN(numIncome) || numIncome < 0) {
          return res.status(400).json({
            success: false,
            message: "Family income must be a valid positive number",
          });
        }
        updateData.familyIncome = numIncome;
      }
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Profile update failed",
      error: error.message,
    });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};