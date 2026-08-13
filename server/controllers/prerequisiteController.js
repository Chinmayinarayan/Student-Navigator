const jwt = require("jsonwebtoken");
const Topic = require("../models/Topic");
const Subject = require("../models/Subject");
const UserTopicProgress = require("../models/UserTopicProgress");

// =============================================
// GET /api/topics/:topicId/prerequisites
// =============================================
const getTopicPrerequisites = async (req, res) => {
  try {
    const { topicId } = req.params;
    const userId = req.user ? req.user._id : null;

    const topic = await Topic.findById(topicId)
      .populate("prerequisites", "title")
      .populate("nextTopics", "title");

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    let completedPrereqIds = new Set();
    if (userId) {
      const prereqIds = topic.prerequisites.map((p) => p._id);
      const completedProgress = await UserTopicProgress.find({
        user: userId,
        topic: { $in: prereqIds },
        completed: true,
      }).select("topic");

      completedPrereqIds = new Set(
        completedProgress.map((p) => p.topic.toString())
      );
    }

    const prerequisites = topic.prerequisites.map((p) => ({
      id: p._id,
      name: p.title,
      completed: completedPrereqIds.has(p._id.toString()),
    }));

    const nextTopics = topic.nextTopics.map((n) => ({
      id: n._id,
      name: n.title,
    }));

    return res.json({
      success: true,
      topic: topic.title,
      prerequisites,
      nextTopics,
    });
  } catch (error) {
    console.error("[Prerequisite Controller Error]:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================================
// GET /api/topics/subject/:subjectId/prerequisites
// =============================================
const getSubjectPrerequisites = async (req, res) => {
  try {
    const { subjectId } = req.params;

    let userId = null;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        console.warn("Invalid/expired token in prerequisites request, treating as guest:", err.message);
      }
    } else if (req.user) {
      userId = req.user._id;
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    const topics = await Topic.find({ subject: subjectId }).sort({ order: 1 });

    let completedTopicIds = new Set();
    if (userId) {
      const topicIds = topics.map((t) => t._id);
      const completedProgress = await UserTopicProgress.find({
        user: userId,
        topic: { $in: topicIds },
        completed: true,
      }).select("topic");

      completedTopicIds = new Set(
        completedProgress.map((p) => p.topic.toString())
      );
    }

    const topicData = topics.map((t) => ({
      id: t._id,
      title: t.title,
      completed: completedTopicIds.has(t._id.toString()),
      prerequisites: t.prerequisites.map((p) => p.toString()),
      nextTopics: t.nextTopics.map((n) => n.toString()),
    }));

    return res.json({
      success: true,
      subject: subject.name,
      topics: topicData,
    });
  } catch (error) {
    console.error("[Subject Prerequisite Error]:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getTopicPrerequisites,
  getSubjectPrerequisites,
};
