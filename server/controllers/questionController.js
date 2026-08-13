const Question = require("../models/Question");
const UserQuestionProgress = require("../models/UserQuestionProgress");

// Get all questions for a subject
const getQuestionsBySubject = async (req, res) => {
  try {
    const questions = await Question.find({
      subject: req.params.subjectId,
    });

    res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Get progress for theoretical questions in a topic
const getQuestionProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { topicId } = req.params;

    const progress = await UserQuestionProgress.findOne({
      user: userId,
      topic: topicId,
    });

    res.status(200).json({
      success: true,
      completed: progress ? progress.completed : false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Toggle progress for a theoretical question in a topic
const toggleQuestionCompletion = async (req, res) => {
  try {
    const userId = req.user.id;
    const { topicId } = req.params;

    let progress = await UserQuestionProgress.findOne({
      user: userId,
      topic: topicId,
    });

    if (!progress) {
      progress = await UserQuestionProgress.create({
        user: userId,
        topic: topicId,
        completed: true,
        completedAt: new Date(),
      });
    } else {
      progress.completed = !progress.completed;
      progress.completedAt = progress.completed ? new Date() : null;
      await progress.save();
    }

    res.status(200).json({
      success: true,
      completed: progress.completed,
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
  getQuestionsBySubject,
  getQuestionProgress,
  toggleQuestionCompletion,
};