const Subject = require("../models/Subject");

// Get all subjects
const getAllSubjects = async (req, res) => {
  try {
    // Only return fields needed by the subject list page
    const subjects = await Subject.find(
      { isPublished: true },
      "name description youtubeResources textbooks softwareTools concepts _id"
    )
      .lean()
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: subjects.length,
      subjects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get subject by ID
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    res.status(200).json({
      success: true,
      subject,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Search subjects
const searchSubjects = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const subjects = await Subject.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      count: subjects.length,
      subjects,
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
  getAllSubjects,
  getSubjectById,
  searchSubjects,
};