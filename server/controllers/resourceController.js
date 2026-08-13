const Resource = require("../models/Resource");

const getResourcesBySubject = async (req, res) => {
  try {
    const resources = await Resource.find({
      subject: req.params.subjectId,
    });

    res.status(200).json({
      success: true,
      count: resources.length,
      resources,
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
  getResourcesBySubject,
};