const Topic = require("../models/Topic");
const Subject = require("../models/Subject");

// GET /api/topics
const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find()
      .populate("subject", "name")
      .sort({ order: 1 });

    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/topics/subject/:subjectId
const getTopicsBySubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subjectId);

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    const topics = await Topic.find({
      subject: req.params.subjectId,
      isPublished: true,
    }).sort({ order: 1 });

    res.json(topics);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET /api/topics/:id
const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id).populate(
      "subject",
      "name code"
    );

    if (!topic) {
      return res.status(404).json({
        message: "Topic not found",
      });
    }

    res.json(topic);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// POST /api/topics
const createTopic = async (req, res) => {
  try {
    const topic = await Topic.create(req.body);

    res.status(201).json(topic);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// PUT /api/topics/:id
const updateTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({
        message: "Topic not found",
      });
    }

    Object.assign(topic, req.body);

    const updated = await topic.save();

    res.json(updated);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE /api/topics/:id
const deleteTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({
        message: "Topic not found",
      });
    }

    await topic.deleteOne();

    res.json({
      message: "Topic deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getTopics,
  getTopicsBySubject,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
};