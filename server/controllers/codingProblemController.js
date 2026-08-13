const CodingProblem = require("../models/CodingProblem");
const UserCodingProgress = require("../models/UserCodingProgress");

const {
  unlockAchievement,
} = require("../services/achievementService");


// ======================================
// Get Coding Problems By Topic
// ======================================

const getProblemsByTopic = async (req, res) => {

  try {

    const { topicId } = req.params;


    const problems = await CodingProblem.find({

      topic: topicId,

      isPublished: true,

    })
    .sort({

      order:1,

    });



    res.status(200).json({

      success:true,

      problems,

    });


  }
  catch(error){

    console.log(error);


    res.status(500).json({

      success:false,

      message:"Server Error",

    });

  }

};




// ======================================
// Toggle Problem Completion
// ======================================

const toggleProblemCompletion = async(req,res)=>{

  try{


    const userId = req.user.id;

    const {problemId}=req.params;



    let progress =
    await UserCodingProgress.findOne({

      user:userId,

      codingProblem:problemId,

    });



    if(!progress){


      progress =
      await UserCodingProgress.create({

        user:userId,

        codingProblem:problemId,

        solved:true,

        solvedAt:new Date(),

      });


    }
    else{


      progress.solved =
      !progress.solved;


      progress.solvedAt =
      progress.solved
      ?
      new Date()
      :
      null;


      await progress.save();

    }





    // ======================================
    // Achievement: Coding Champion 💻
    // ======================================


    if(progress.solved){


      const solvedCount = await UserCodingProgress.countDocuments({
        user: userId,
        solved: true,
      });

      if (solvedCount >= 50) {


        await unlockAchievement(

          userId,

          "Coding Champion",

          "💻",

          "Solved 50 coding problems."

        );


      }


    }





    res.status(200).json({

      success:true,

      completed:progress.solved,

    });



  }
  catch(error){


    console.log(error);


    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};




// ======================================
// Get Coding Progress
// ======================================

const getProblemProgress = async(req,res)=>{

  try{


    const userId=req.user.id;

    const {problemId}=req.params;



    const progress =
    await UserCodingProgress.findOne({

      user:userId,

      codingProblem:problemId,

    });



    res.status(200).json({

      success:true,

      completed:
      progress
      ?
      progress.solved
      :
      false,

    });



  }
  catch(error){


    console.log(error);


    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};



module.exports={

  getProblemsByTopic,

  toggleProblemCompletion,

  getProblemProgress,

};