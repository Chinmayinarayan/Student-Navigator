const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

// Email regex pattern for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Register User
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      degree,
      branch,
      year,
      cgpa,
      skills,
      interests,
      careerGoals,
    } = req.body;

    // Validate name
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Full name is required.",
      });
    }

    // Validate email
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "A valid email address is required.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Validate password
    if (!password || typeof password !== "string" || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password is required and must be at least 6 characters.",
      });
    }

    // Validate CGPA if provided
    let cleanCgpa = null;
    if (cgpa !== undefined && cgpa !== null && cgpa !== "") {
      const numCgpa = Number(cgpa);
      if (isNaN(numCgpa) || numCgpa < 0 || numCgpa > 10) {
        return res.status(400).json({
          success: false,
          message: "CGPA must be a valid number between 0.0 and 10.0",
        });
      }
      cleanCgpa = numCgpa;
    }

    // Check if user with this email already exists
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists. Please log in.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      degree: typeof degree === "string" ? degree.trim() : "",
      branch: typeof branch === "string" ? branch.trim() : "",
      year: typeof year === "string" ? year.trim() : (typeof year === "number" ? String(year) : ""),
      cgpa: cleanCgpa,
      skills: Array.isArray(skills) ? skills.filter((s) => typeof s === "string") : [],
      interests: Array.isArray(interests) ? interests.filter((i) => typeof i === "string") : [],
      careerGoals: typeof careerGoals === "string" ? careerGoals.trim() : "",
    });

    // Send Welcome Email asynchronously
    sendEmail({
      email: user.email,
      subject: "Welcome to Student Navigator - Registration Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #334155;">
          <h2 style="color: #6366f1;">Welcome to Student Navigator, ${user.name}! 🚀</h2>
          <p>Your account has been successfully registered on the Student Career & Development Platform.</p>
          <p>Here is a summary of your profile details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${user.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Registered Email</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${user.email}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Password</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><code>•••••••• (Protected)</code></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Degree</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${user.degree}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Branch</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${user.branch}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Current Year</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${user.year}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">Log in to your workspace at any time to access your subjects catalog, track learning roadmaps, and solve coding challenges.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin-top: 30px;" />
          <p style="font-size: 11px; color: #64748b; text-align: center;">© 2026 Student Career & Development Platform. All rights reserved.</p>
        </div>
      `,
    }).catch((err) => console.error("Async email dispatch failed:", err));

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        degree: user.degree,
        branch: user.branch,
        year: user.year,
      },
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An account with this email address already exists. Please log in.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || typeof email !== "string" || !password || typeof password !== "string") {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        degree: user.degree,
        branch: user.branch,
        year: user.year,
        role: user.role || "student",
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};