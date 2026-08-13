const Assignment = require("../models/Assignment");
const UserAssignment = require("../models/UserAssignment");

const {
  unlockAchievement,
} = require("../services/achievementService");


// =======================================
// Get Assignments By Topic
// =======================================

const getAssignmentsByTopic = async (req, res) => {
  try {
    const assignments = await Assignment.find({
      topic: req.params.topicId,
      isPublished: true,
    }).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      assignments,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};



// =======================================
// Get Assignment By Id
// =======================================

const getAssignmentById = async (req, res) => {
  try {

    const assignment = await Assignment.findById(req.params.id);


    if (!assignment) {

      return res.status(404).json({
        success:false,
        message:"Assignment not found",
      });

    }


    res.status(200).json({
      success:true,
      assignment,
    });


  } catch(error){

    console.log(error);


    res.status(500).json({
      success:false,
      message:"Server Error",
    });

  }
};




// =======================================
// Submit Assignment
// =======================================

const submitAssignment = async (req, res) => {

  try {

    const { submissionLink } = req.body;


    const assignment = await Assignment.findById(req.params.id);


    if (!assignment) {

      return res.status(404).json({
        success:false,
        message:"Assignment not found",
      });

    }



    let submission =
      await UserAssignment.findOne({

        user:req.user.id,

        assignment:assignment._id,

      });



    if (!submission) {


      submission =
      await UserAssignment.create({

        user:req.user.id,

        assignment:assignment._id,

        submissionLink,

        submittedAt:new Date(),

        status:"Submitted",

      });



    } else {


      submission.submissionLink = submissionLink;

      submission.submittedAt = new Date();

      submission.status = "Submitted";


      await submission.save();


    }



    // ======================================
    // Achievement: Assignment Hero 📚
    // ======================================


    const completedAssignments = await UserAssignment.countDocuments({
      user: req.user.id,
      status: "Submitted",
    });

    if (completedAssignments >= 20) {


      await unlockAchievement(

        req.user.id,

        "Assignment Hero",

        "📚",

        "Completed 20 assignments."

      );


    }




    res.status(200).json({

      success:true,

      submission,

    });



  } catch(error){


    console.log(error);


    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};




// =======================================
// Get Assignment Status
// =======================================

const getAssignmentStatus = async (req, res) => {

  try {


    const submission =
      await UserAssignment.findOne({

        user:req.user.id,

        assignment:req.params.id,

      });



    if(!submission){

      return res.status(200).json({

        success:true,

        status:"Pending",

      });

    }



    res.status(200).json({

      success:true,

      submission,

    });



  } catch(error){


    console.log(error);



    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};




module.exports = {

  getAssignmentsByTopic,

  getAssignmentById,

  submitAssignment,

  getAssignmentStatus,

};