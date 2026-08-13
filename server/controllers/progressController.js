const UserTopicProgress = require("../models/UserTopicProgress");
const Topic = require("../models/Topic");

const {
  checkFirstTopicCompleted,
  checkExcellentLearner,
} = require("../services/performanceAchievementService");


// ==============================
// Toggle Topic Completion
// ==============================
exports.toggleTopicCompletion = async (req, res) => {
  try {
    const userId = req.user.id;
    const { topicId } = req.params;


    const topic = await Topic.findById(topicId);


    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }



    let progress = await UserTopicProgress.findOne({

      user: userId,

      topic: topicId,

    });



    // ----------------------------------
    // First Time Completion
    // ----------------------------------

    if (!progress) {


      progress = await UserTopicProgress.create({

        user: userId,

        topic: topicId,

        completed: true,

        completedAt: new Date(),

        lastAccessed: new Date(),

      });



      await checkFirstTopicCompleted(userId);

      // Check Excellent Learner 🏆
      await checkExcellentLearner(userId);

      return res.status(201).json({

        success: true,

        progress,

      });

    }




    // ----------------------------------
    // Toggle Completion
    // ----------------------------------


    progress.completed = !progress.completed;



    progress.completedAt = progress.completed

      ? new Date()

      : null;



    progress.lastAccessed = new Date();



    await progress.save();





    // ----------------------------------
    // Achievement
    // ----------------------------------


    if (progress.completed) {

      await checkFirstTopicCompleted(userId);

      // Check Excellent Learner 🏆
      await checkExcellentLearner(userId);

    }





    res.status(200).json({

      success: true,

      progress,

    });



  } catch (error) {


    console.error(error);



    res.status(500).json({

      success: false,

      message: "Server Error",

    });


  }
};




// ==============================
// Get Topic Progress
// ==============================
exports.getTopicProgress = async (req, res) => {

  try {

    const userId = req.user.id;

    const { topicId } = req.params;



    const progress =
      await UserTopicProgress.findOne({

        user: userId,

        topic: topicId,

      });



    res.status(200).json({

      success: true,

      completed:

        progress

          ? progress.completed

          : false,

    });



  } catch (error) {


    console.error(error);



    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};




// ==============================
// Get Single Subject Progress
// ==============================
exports.getSubjectProgress = async (req, res) => {

  try {


    const userId = req.user.id;

    const { subjectId } = req.params;



    const topics = await Topic.find({

      subject: subjectId,

    });



    const topicIds = topics.map(

      (t)=>t._id

    );



    const completedTopics =

      await UserTopicProgress.countDocuments({

        user:userId,

        topic:{
          $in:topicIds,
        },

        completed:true,

      });



    const totalTopics = topics.length;



    const percentage =

      totalTopics === 0

        ? 0

        : Math.round(

          (completedTopics / totalTopics) * 100

        );




    res.status(200).json({

      success:true,

      completedTopics,

      totalTopics,

      percentage,

    });



  } catch(error){


    console.error(error);



    res.status(500).json({

      success:false,

      message:"Server Error",

    });


  }

};




// ==============================
// Get Progress For ALL Subjects
// ==============================
exports.getAllSubjectsProgress = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;

    // Fetch only the subject field — no notes, youtube links, etc.
    const [topics, completed] = await Promise.all([
      Topic.find({}, "subject").lean(),
      UserTopicProgress.find({ user: userId, completed: true }, "topic").lean(),
    ]);

    // Build progressMap from lightweight topic list
    const progressMap = {};
    topics.forEach((topic) => {
      if (topic && topic.subject) {
        const sid = topic.subject.toString();
        if (!progressMap[sid]) progressMap[sid] = { totalTopics: 0, completedTopics: 0, percentage: 0 };
        progressMap[sid].totalTopics++;
      }
    });

    // Build a Set of completed topic IDs for O(1) lookup
    const completedTopicIds = new Set(
      completed.filter((c) => c && c.topic).map((c) => c.topic.toString())
    );

    // Build a map of topicId -> subjectId for fast resolution (no populate)
    const topicSubjectMap = {};
    topics.forEach((t) => {
      if (t && t.subject) {
        topicSubjectMap[t._id.toString()] = t.subject.toString();
      }
    });

    // Count completed per subject
    completedTopicIds.forEach((topicId) => {
      const sid = topicSubjectMap[topicId];
      if (sid && progressMap[sid]) progressMap[sid].completedTopics++;
    });

    // Calculate percentages
    Object.values(progressMap).forEach((s) => {
      s.percentage = s.totalTopics === 0 ? 0 : Math.round((s.completedTopics / s.totalTopics) * 100);
    });

    res.status(200).json({ success: true, progress: progressMap });
  } catch (error) {
    console.error("Error in getAllSubjectsProgress:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};