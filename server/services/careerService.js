const Career = require("../models/Career");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserQuizResult = require("../models/UserQuizResult");
const UserAssignment = require("../models/UserAssignment");
const User = require("../models/User");
const careersData = require("../data/careers");

// Sync and link careers data with database subjects
const syncCareersWithSubjects = async () => {
  try {
    const allSubjects = await Subject.find({}, "_id name");
    if (!allSubjects || allSubjects.length === 0) {
      return;
    }

    const subjectMap = new Map();
    allSubjects.forEach((sub) => {
      subjectMap.set(sub.name.toLowerCase().trim(), sub._id);
    });

    // Helper to find best matching subject ID
    const findSubjectId = (name) => {
      const clean = name.toLowerCase().trim();
      if (subjectMap.has(clean)) {
        return subjectMap.get(clean);
      }
      // Fuzzy contains match
      for (const [subName, id] of subjectMap.entries()) {
        if (subName.includes(clean) || clean.includes(subName)) {
          return id;
        }
      }
      return null;
    };

    for (const cData of careersData) {
      // Map related subjects
      const relatedSubjectIds = (cData.relatedSubjectNames || [])
        .map(findSubjectId)
        .filter(Boolean);

      // Map phase subjects
      const mappedPhases = (cData.roadmapPhases || []).map((phase) => {
        const phaseSubIds = (phase.subjectNames || [])
          .map(findSubjectId)
          .filter(Boolean);
        return {
          ...phase,
          subjects: phaseSubIds,
        };
      });

      await Career.findOneAndUpdate(
        { title: cData.title },
        {
          $set: {
            description: cData.description,
            category: cData.category,
            icon: cData.icon,
            level: cData.level,
            averageSalary: cData.averageSalary,
            industryDemand: cData.industryDemand,
            responsibilities: cData.responsibilities,
            opportunities: cData.opportunities,
            requiredSkills: cData.requiredSkills,
            essentialSkills: cData.essentialSkills,
            importantSkills: cData.importantSkills,
            goodToHaveSkills: cData.goodToHaveSkills,
            relatedSubjectNames: cData.relatedSubjectNames,
            relatedSubjects: relatedSubjectIds,
            roadmap: cData.roadmap,
            roadmapPhases: mappedPhases,
            projects: cData.projects,
            dsaRequirements: cData.dsaRequirements,
            interviewTopics: cData.interviewTopics,
            certifications: cData.certifications,
          },
        },
        { upsert: true, new: true }
      );
    }
  } catch (error) {
    console.error("Error syncing careers with subjects:", error);
  }
};

// Calculate career-specific placement readiness & progress for a user dynamically from real records
const calculateUserCareerMetrics = async (userId, careerDoc) => {
  try {
    const subjectIds = (careerDoc.relatedSubjects || []).map((s) =>
      s._id ? s._id : s
    );

    // 1. Get total topics for these subjects
    const topics = await Topic.find(
      { subject: { $in: subjectIds }, isPublished: true },
      "_id title subject"
    );
    const topicIds = topics.map((t) => t._id);
    const totalTopicsCount = topics.length;

    // 2. User Topic Progress
    const completedTopicProgress = await UserTopicProgress.find({
      user: userId,
      topic: { $in: topicIds },
      completed: true,
    });
    const completedTopicsCount = completedTopicProgress.length;
    const learningProgress =
      totalTopicsCount === 0
        ? 0
        : Math.round((completedTopicsCount / totalTopicsCount) * 100);

    // 3. User Coding Progress
    const solvedCodingProblems = await UserCodingProgress.countDocuments({
      user: userId,
      solved: true,
    });
    const targetProblems =
      careerDoc.dsaRequirements?.recommendedProblemsCount || 120;
    const codingProgress = Math.min(
      Math.round((solvedCodingProblems / targetProblems) * 100),
      100
    );

    // 4. Projects Progress from user record
    const userDoc = await User.findById(userId, "careerProjectProgress");
    const userProjectStatuses = (userDoc?.careerProjectProgress || []).filter(
      (p) => p.career?.toString() === careerDoc._id.toString()
    );

    const totalProjects = careerDoc.projects?.length || 3;
    const completedProjectsCount = userProjectStatuses.filter(
      (p) => p.status === "Completed"
    ).length;
    const inProgressProjectsCount = userProjectStatuses.filter(
      (p) => p.status === "In Progress"
    ).length;

    const projectProgress =
      totalProjects === 0
        ? 0
        : Math.min(
            Math.round(
              ((completedProjectsCount + inProgressProjectsCount * 0.5) /
                totalProjects) *
                100
            ),
            100
          );

    // 5. Skills Progress - Derived purely from completed topics and projects
    const totalSkills = careerDoc.requiredSkills?.length || 8;
    const skillsProgress =
      totalSkills === 0
        ? 0
        : Math.min(
            Math.round(learningProgress * 0.6 + projectProgress * 0.4),
            100
          );

    // 6. Quizzes / Interview Progress
    const quizResults = await UserQuizResult.find(
      { user: userId },
      "percentage"
    );
    const quizAvg =
      quizResults.length === 0
        ? 0
        : Math.round(
            quizResults.reduce((acc, q) => acc + q.percentage, 0) /
              quizResults.length
          );
    const interviewProgress =
      quizResults.length === 0
        ? Math.round(learningProgress * 0.5)
        : Math.min(Math.round(quizAvg * 0.6 + learningProgress * 0.4), 100);

    // 7. Overall Placement Readiness Score (Genuinely dynamic)
    // Formula: 30% Learning + 20% Skills + 20% Projects + 20% Coding + 10% Interview
    const placementReadiness = Math.min(
      Math.round(
        learningProgress * 0.3 +
          skillsProgress * 0.2 +
          projectProgress * 0.2 +
          codingProgress * 0.2 +
          interviewProgress * 0.1
      ),
      100
    );

    // Determine status badge
    let readinessStatus = "Starting";
    if (placementReadiness >= 90) {
      readinessStatus = "Placement Ready";
    } else if (placementReadiness >= 75) {
      readinessStatus = "Interview Ready";
    } else if (placementReadiness >= 50) {
      readinessStatus = "Developing";
    } else if (placementReadiness >= 25) {
      readinessStatus = "Learning";
    }

    return {
      learningProgress,
      skillsProgress,
      projectProgress,
      codingProgress,
      interviewProgress,
      placementReadiness,
      readinessStatus,
      completedTopicsCount,
      totalTopicsCount,
      solvedCodingProblems,
      targetProblems,
      completedProjectsCount,
      totalProjects,
      userProjectStatuses,
    };
  } catch (error) {
    console.error("Error calculating career metrics:", error);
    return {
      learningProgress: 0,
      skillsProgress: 0,
      projectProgress: 0,
      codingProgress: 0,
      interviewProgress: 0,
      placementReadiness: 0,
      readinessStatus: "Starting",
      completedTopicsCount: 0,
      totalTopicsCount: 0,
      solvedCodingProblems: 0,
      targetProblems: 100,
      completedProjectsCount: 0,
      totalProjects: 3,
      userProjectStatuses: [],
    };
  }
};

// Calculate best recommended career for the user based on real subject & topic progress
const getRecommendedCareerForUser = async (userId, careersList) => {
  try {
    let bestCareer = null;
    let highestFoundation = -1;

    for (const career of careersList) {
      const metrics = await calculateUserCareerMetrics(userId, career);
      // Foundation score combines learning and coding progress
      const foundationScore = Math.round(
        metrics.learningProgress * 0.7 + metrics.codingProgress * 0.3
      );
      if (foundationScore > highestFoundation) {
        highestFoundation = foundationScore;
        bestCareer = {
          career,
          foundationScore,
          metrics,
        };
      }
    }

    // Default fallback if no progress yet
    if (!bestCareer || highestFoundation === 0) {
      const defaultCareer = careersList.find((c) =>
        c.title.includes("Software Engineer")
      ) || careersList[0];
      return {
        career: defaultCareer,
        foundationScore: 0,
        metrics: {
          placementReadiness: 0,
          readinessStatus: "Starting",
          learningProgress: 0,
        },
      };
    }

    return bestCareer;
  } catch (error) {
    console.error("Error determining recommended career:", error);
    return null;
  }
};

module.exports = {
  syncCareersWithSubjects,
  calculateUserCareerMetrics,
  getRecommendedCareerForUser,
};
