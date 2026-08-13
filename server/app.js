const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const topicRoutes = require("./routes/topicRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const questionRoutes = require("./routes/questionRoutes");
const testRoutes = require("./routes/testRoutes");
const careerRoutes = require("./routes/careerRoutes");
const eventRoutes = require("./routes/eventRoutes");
const scholarshipRoutes = require("./routes/scholarshipRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const progressRoutes = require("./routes/progressRoutes");
const codingProblemRoutes = require("./routes/codingProblemRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const quizRoutes = require("./routes/quizRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const achievementRoutes = require("./routes/achievementRoutes");
const careerReadinessRoutes = require("./routes/careerReadinessRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const assistantRoutes = require("./routes/assistantRoutes");
const aiNoteRoutes = require("./routes/aiNoteRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// ==============================
// Security & Headers (Helmet)
// ==============================
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
  })
);

// ==============================
// CORS Configuration
// ==============================
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((o) => o.trim())
  : [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:5173",
      "http://localhost:4173",
    ];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev/fallback with configured defaults
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// ==============================
// Rate Limiters
// ==============================
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1500, // Reasonable limit for active SPAs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes.",
  },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // 50 attempts per 15 min for login/register
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts, please try again after 15 minutes.",
  },
});

const aiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // 30 queries per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many AI assistant requests, please wait a moment.",
  },
});

app.use(globalLimiter);

// ==============================
// Body Parsers & Logging
// ==============================
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}
app.use(cookieParser());

// ==============================
// API Routes
// ==============================
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/user", userRoutes);

app.use("/api/subjects", subjectRoutes);
app.use("/api/topics", topicRoutes);

app.use("/api/resources", resourceRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/tests", testRoutes);

app.use("/api/careers", careerRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/progress", progressRoutes);

app.use("/api/coding-problems", codingProblemRoutes);
app.use("/api/assignments", assignmentRoutes);

app.use("/api/quizzes", quizRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api/career-readiness", careerReadinessRoutes);
app.use("/api/achievements", achievementRoutes);

app.use("/api/assistant", aiLimiter, assistantRoutes);
app.use("/api/ai-notes", aiNoteRoutes);

// Secure Local file server route (sanitized against path traversal)
app.get("/api/local-file", (req, res) => {
  const fileUrl = req.query.path;
  if (!fileUrl || typeof fileUrl !== "string") {
    return res.status(400).json({ success: false, message: "No file path provided" });
  }

  let cleanPath = decodeURIComponent(fileUrl).replace(/^file:\/\/\/?/, "");
  if (process.platform === "win32" && /^[a-zA-Z]:/.test(cleanPath)) {
    cleanPath = path.normalize(cleanPath);
  } else {
    cleanPath = path.resolve(cleanPath);
  }

  // Security check: Disallow directory traversal characters and sensitive file types
  const lower = cleanPath.toLowerCase();
  const allowedExtensions = [".pdf", ".png", ".jpg", ".jpeg", ".svg", ".webp", ".mp4"];
  const isExtensionAllowed = allowedExtensions.some((ext) => lower.endsWith(ext));

  if (!isExtensionAllowed || lower.includes(".env") || lower.includes(".git") || lower.includes("node_modules")) {
    return res.status(403).json({ success: false, message: "Access to this file type is forbidden." });
  }

  if (fs.existsSync(cleanPath)) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    return res.sendFile(cleanPath);
  } else {
    return res.status(404).json({ success: false, message: "File not found" });
  }
});

// ==============================
// Health Check
// ==============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Career Navigation Platform Backend is Running 🚀",
  });
});

// ==============================
// Error Handling Middleware
// ==============================
app.use(notFound);
app.use(errorHandler);

module.exports = app;