const Roadmap = require("../models/Roadmap");
const Career = require("../models/Career");
const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const { calculateUserCareerMetrics } = require("./careerService");

// =============================================
// Generate Personalized Roadmap
// =============================================
const generateRoadmap = async (userId, careerId) => {
  const career = await Career.findById(careerId)
    .populate({
      path: "relatedSubjects",
      select: "name description difficulty concepts softwareTools textbooks youtubeResources practicePlatforms",
    })
    .populate({
      path: "roadmapPhases.subjects",
      select: "name difficulty concepts",
    });

  if (!career) {
    return null;
  }

  // Get user completed topics
  const completedTopics = await UserTopicProgress.find({
    user: userId,
    completed: true,
  }).populate({
    path: "topic",
    select: "title subject",
  });

  const completedTopicIdSet = new Set(
    completedTopics.map((p) => p.topic?._id?.toString()).filter(Boolean)
  );

  const completedSubjectIdSet = new Set(
    completedTopics
      .map((p) => p.topic?.subject?.toString())
      .filter(Boolean)
  );

  // If career has roadmapPhases defined, map them with rich live completion metrics
  if (career.roadmapPhases && career.roadmapPhases.length > 0) {
    const phasesWithMetrics = await Promise.all(
      career.roadmapPhases.map(async (phase, idx) => {
        const subIds = (phase.subjects || []).map((s) => (s._id ? s._id : s));
        const phaseTopics = await Topic.find(
          { subject: { $in: subIds }, isPublished: true },
          "_id title subject order"
        );

        const totalPhaseTopics = phaseTopics.length;
        const completedPhaseTopics = phaseTopics.filter((t) =>
          completedTopicIdSet.has(t._id.toString())
        ).length;

        const percentage =
          totalPhaseTopics === 0
            ? 0
            : Math.round((completedPhaseTopics / totalPhaseTopics) * 100);

        return {
          _id: phase._id || `phase-${phase.phaseNumber || idx + 1}`,
          order: phase.phaseNumber || idx + 1,
          title: phase.title,
          description: phase.description,
          estimatedWeeks: phase.estimatedWeeks || 4,
          requiredSkills: phase.skills || [],
          keyTopics: phase.keyTopics || [],
          learningMilestones: phase.learningMilestones || [],
          requiredSubjects: phase.subjects || [],
          totalTopics: totalPhaseTopics,
          completedTopics: completedPhaseTopics,
          percentage,
          completed: percentage === 100 && totalPhaseTopics > 0,
        };
      })
    );

    const metrics = await calculateUserCareerMetrics(userId, career);

    return {
      career,
      phases: phasesWithMetrics,
      projects: career.projects || [],
      dsaRequirements: career.dsaRequirements || {},
      interviewTopics: career.interviewTopics || [],
      certifications: career.certifications || [],
      metrics,
    };
  }

  // Fallback to legacy Roadmap collection if needed
  const legacyRoadmap = await Roadmap.find({
    career: careerId,
    isPublished: true,
  })
    .populate("requiredSubjects")
    .sort({ order: 1 });

  const metrics = await calculateUserCareerMetrics(userId, career);

  const personalizedRoadmap = legacyRoadmap.map((step) => {
    const totalSubjects = step.requiredSubjects?.length || 0;
    const completedSubjects = (step.requiredSubjects || []).filter((subject) =>
      completedSubjectIdSet.has(subject._id.toString())
    ).length;

    const percentage =
      totalSubjects === 0
        ? 100
        : Math.round((completedSubjects / totalSubjects) * 100);

    return {
      _id: step._id,
      title: step.title,
      description: step.description,
      order: step.order,
      estimatedWeeks: step.estimatedWeeks,
      requiredSkills: step.requiredSkills,
      projects: step.projects,
      interviewTopics: step.interviewTopics,
      requiredSubjects: step.requiredSubjects,
      completedSubjects,
      totalSubjects,
      percentage,
      completed: percentage === 100,
    };
  });

  return {
    career,
    phases: personalizedRoadmap,
    projects: career.projects || [],
    dsaRequirements: career.dsaRequirements || {},
    interviewTopics: career.interviewTopics || [],
    certifications: career.certifications || [],
    metrics,
  };
};

module.exports = {
  generateRoadmap,
};
