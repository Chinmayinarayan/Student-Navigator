const Career = require("../models/Career");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const UserTopicProgress = require("../models/UserTopicProgress");
const UserCodingProgress = require("../models/UserCodingProgress");
const UserQuizResult = require("../models/UserQuizResult");
const TestResult = require("../models/TestResult");

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Normalise a string to lowercase trimmed form for comparison.
 */
const norm = (s = "") => String(s).toLowerCase().trim();

/**
 * Return the number of elements in arrA whose normalised form appears in arrB.
 */
const intersectCount = (arrA = [], arrB = []) => {
  const setB = new Set((arrB || []).map(norm));
  return (arrA || []).filter((a) => setB.has(norm(a))).length;
};

/**
 * Return elements of arrA whose normalised form appears in arrB.
 */
const intersectItems = (arrA = [], arrB = []) => {
  const setB = new Set((arrB || []).map(norm));
  return (arrA || []).filter((a) => setB.has(norm(a)));
};

/**
 * Return elements of arrA whose normalised form does NOT appear in arrB.
 */
const missingItems = (arrA = [], arrB = []) => {
  const setB = new Set((arrB || []).map(norm));
  return (arrA || []).filter((a) => !setB.has(norm(a)));
};

/**
 * Clamp a number to [0, 100].
 */
const clamp = (n) => Math.min(100, Math.max(0, Math.round(n)));

// ─────────────────────────────────────────────────────────────────────────────
// Component Scorers (each returns 0–100)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * COMPONENT 1 — Skill Match (30%)
 *
 * Compares user skills against three tiers of career skills:
 *   Essential  → weight 0.50 of this component
 *   Important  → weight 0.35
 *   Good-to-have → weight 0.15
 *
 * If the career has no skill tiers at all, falls back to flat requiredSkills.
 */
const calcSkillScore = (userSkills, career) => {
  const u = (userSkills || []).map(norm);

  const essential = (career.essentialSkills || []);
  const important = (career.importantSkills || []);
  const goodToHave = (career.goodToHaveSkills || []);
  const required = (career.requiredSkills || []);

  // If tiered skills exist, use weighted tiers
  if (essential.length + important.length + goodToHave.length > 0) {
    const essScore = essential.length
      ? clamp((intersectCount(u, essential) / essential.length) * 100)
      : 0;
    const impScore = important.length
      ? clamp((intersectCount(u, important) / important.length) * 100)
      : 0;
    const gthScore = goodToHave.length
      ? clamp((intersectCount(u, goodToHave) / goodToHave.length) * 100)
      : 0;

    const weights =
      (essential.length ? 0.5 : 0) +
      (important.length ? 0.35 : 0) +
      (goodToHave.length ? 0.15 : 0);

    if (weights === 0) return 0;

    return clamp(
      ((essential.length ? essScore * 0.5 : 0) +
        (important.length ? impScore * 0.35 : 0) +
        (goodToHave.length ? gthScore * 0.15 : 0)) /
        weights
    );
  }

  // Fallback: flat required skills
  if (required.length === 0) return 0;
  return clamp((intersectCount(u, required) / required.length) * 100);
};

/**
 * COMPONENT 2 — Subject Match (25%)
 *
 * Fraction of topics completed by the user across all subjects
 * linked to this career.
 *
 * Returns { score: 0-100, totalTopics, completedTopics, completedSubjectNames }
 */
const calcSubjectScore = async (userId, career, subjectIdToNameMap) => {
  const subjectIds = (career.relatedSubjects || []).map((s) =>
    s._id ? s._id : s
  );

  if (subjectIds.length === 0) {
    return { score: 0, totalTopics: 0, completedTopics: 0, completedSubjectNames: [] };
  }

  const topics = await Topic.find(
    { subject: { $in: subjectIds }, isPublished: true },
    "_id subject"
  );
  const topicIds = topics.map((t) => t._id);
  const totalTopics = topics.length;

  if (totalTopics === 0) {
    return { score: 0, totalTopics: 0, completedTopics: 0, completedSubjectNames: [] };
  }

  const completedProgress = await UserTopicProgress.find({
    user: userId,
    topic: { $in: topicIds },
    completed: true,
  });

  const completedTopics = completedProgress.length;

  // Which subjects have at least one completed topic?
  const completedTopicSet = new Set(
    completedProgress.map((p) => p.topic.toString())
  );

  const subjectCompletionMap = {};
  topics.forEach((t) => {
    const sId = t.subject.toString();
    if (!subjectCompletionMap[sId]) subjectCompletionMap[sId] = { total: 0, done: 0 };
    subjectCompletionMap[sId].total++;
    if (completedTopicSet.has(t._id.toString())) subjectCompletionMap[sId].done++;
  });

  const completedSubjectNames = Object.entries(subjectCompletionMap)
    .filter(([, v]) => v.done > 0)
    .map(([sId]) => subjectIdToNameMap[sId] || sId);

  return {
    score: clamp((completedTopics / totalTopics) * 100),
    totalTopics,
    completedTopics,
    completedSubjectNames,
  };
};

/**
 * COMPONENT 3 — Academic Performance (15%)
 *
 * Average quiz percentage across quizzes tied to career-related subjects.
 * Falls back to all quizzes if no subject-specific results exist.
 *
 * Returns { score: 0-100, hasData: bool }
 */
const calcAcademicsScore = async (userId, career) => {
  const subjectIds = (career.relatedSubjects || []).map((s) =>
    s._id ? s._id : s
  );

  let results = [];

  if (subjectIds.length > 0) {
    results = await UserQuizResult.find(
      { user: userId, subject: { $in: subjectIds }, isCompleted: true },
      "percentage"
    );
  }

  // Fallback to all quiz results if none subject-specific
  if (results.length === 0) {
    results = await UserQuizResult.find(
      { user: userId, isCompleted: true },
      "percentage"
    ).limit(50);
  }

  // Also try test results for this user
  let testResults = [];
  try {
    testResults = await TestResult.find({ user: userId }, "percentage").limit(20);
  } catch (_) {
    // TestResult may not exist in older DB versions
  }

  const allPercentages = [
    ...results.map((r) => r.percentage),
    ...testResults.map((t) => t.percentage),
  ];

  if (allPercentages.length === 0) {
    return { score: 0, hasData: false };
  }

  const avg = allPercentages.reduce((a, b) => a + b, 0) / allPercentages.length;
  return { score: clamp(avg), hasData: true };
};

/**
 * COMPONENT 4 — Coding / Practice Performance (10%)
 *
 * Solved coding problems / target problems for the career.
 *
 * Returns { score: 0-100, solved: number }
 */
const calcCodingScore = async (userId, career) => {
  const solved = await UserCodingProgress.countDocuments({
    user: userId,
    solved: true,
  });

  const target = career.dsaRequirements?.recommendedProblemsCount || 120;
  return {
    score: clamp((solved / target) * 100),
    solved,
    target,
  };
};

/**
 * COMPONENT 5 — Learning Progress (10%)
 *
 * Topic completion across ALL roadmap-phase subjects for the career.
 * Uses the same data as subject match but specifically roadmapPhases.subjects.
 *
 * Returns { score: 0-100 }
 */
const calcLearningProgressScore = async (userId, career) => {
  // Collect all phase subject IDs
  const phaseSubjectIds = [];
  (career.roadmapPhases || []).forEach((phase) => {
    (phase.subjects || []).forEach((sId) => phaseSubjectIds.push(sId));
  });

  // Fall back to relatedSubjects if no phase subjects mapped yet
  const subjectIds =
    phaseSubjectIds.length > 0
      ? phaseSubjectIds
      : (career.relatedSubjects || []).map((s) => (s._id ? s._id : s));

  if (subjectIds.length === 0) return { score: 0 };

  const topics = await Topic.find(
    { subject: { $in: subjectIds }, isPublished: true },
    "_id"
  );
  const totalTopics = topics.length;
  if (totalTopics === 0) return { score: 0 };

  const completed = await UserTopicProgress.countDocuments({
    user: userId,
    topic: { $in: topics.map((t) => t._id) },
    completed: true,
  });

  return { score: clamp((completed / totalTopics) * 100) };
};

/**
 * COMPONENT 6 — Interest Match (10%)
 *
 * Checks user.interests against:
 *   - career.title
 *   - career.category
 *   - career.relatedSubjectNames
 *   - career.requiredSkills
 *   - career.responsibilities
 *
 * Returns { score: 0-100, matchedInterests: string[], hasInterests: bool }
 */
const calcInterestScore = (userInterests, career) => {
  if (!userInterests || userInterests.length === 0) {
    return { score: 0, matchedInterests: [], hasInterests: false };
  }

  // Build a rich corpus from the career
  const corpus = [
    career.title,
    career.category,
    ...(career.relatedSubjectNames || []),
    ...(career.requiredSkills || []),
    ...(career.responsibilities || []),
    ...(career.opportunities || []),
  ]
    .join(" ")
    .toLowerCase();

  const matched = userInterests.filter((interest) =>
    corpus.includes(norm(interest))
  );

  return {
    score: clamp((matched.length / userInterests.length) * 100),
    matchedInterests: matched,
    hasInterests: true,
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// Why-This-Career Generator
// ─────────────────────────────────────────────────────────────────────────────

const buildWhyThisCareer = ({
  career,
  matchedSkills,
  completedSubjectNames,
  scoreBreakdown,
  codingData,
}) => {
  const parts = [];

  if (matchedSkills.length > 0) {
    const skillList = matchedSkills.slice(0, 4).join(", ");
    parts.push(
      `You have demonstrated proficiency in ${skillList}${matchedSkills.length > 4 ? `, and ${matchedSkills.length - 4} more skills` : ""}—core requirements for this path.`
    );
  }

  if (completedSubjectNames.length > 0) {
    const subList = completedSubjectNames.slice(0, 3).join(", ");
    parts.push(
      `Your progress in ${subList} aligns directly with the academic foundation needed for ${career.title}.`
    );
  }

  if (codingData && codingData.solved > 0) {
    parts.push(
      `You have solved ${codingData.solved} coding problem${codingData.solved !== 1 ? "s" : ""}, building the algorithmic thinking this career demands.`
    );
  }

  if (scoreBreakdown.academics > 60) {
    parts.push(
      `Your quiz and test performance (${scoreBreakdown.academics}% avg) shows strong conceptual understanding in related subjects.`
    );
  }

  if (parts.length === 0) {
    parts.push(
      `${career.title} matches your current profile. Build on your existing knowledge to fast-track towards this career.`
    );
  }

  return parts.join(" ");
};

// ─────────────────────────────────────────────────────────────────────────────
// Next Recommended Step Generator
// ─────────────────────────────────────────────────────────────────────────────

const buildNextStep = ({ career, skillGaps, scoreBreakdown, codingData }) => {
  const steps = [];

  // Most impactful action first
  if (scoreBreakdown.subjects < 30 && career.roadmap?.beginner?.length > 0) {
    steps.push(`Start "${career.roadmap.beginner[0]}"`);
  }

  if (skillGaps.length > 0) {
    steps.push(`Learn ${skillGaps.slice(0, 2).join(" → ")}`);
  }

  if (codingData && codingData.solved < 20) {
    steps.push(`Solve ${Math.max(5, 20 - codingData.solved)} DSA problems`);
  }

  if (career.projects && career.projects.length > 0) {
    const firstProject = career.projects[0];
    if (firstProject) {
      steps.push(`Start project: "${firstProject.title}"`);
    }
  }

  if (steps.length === 0) {
    steps.push(
      "Continue your learning roadmap and tackle harder DSA problems to improve placement readiness."
    );
  }

  return steps.slice(0, 3).join(" → ");
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Recommendation Generator
// ─────────────────────────────────────────────────────────────────────────────

const generateRecommendations = async (user) => {
  if (!user) return { recommendations: [], insufficientData: false };

  const userId = user._id;
  const userSkills = user.skills || [];
  const userInterests = user.interests || [];

  // Load all careers with populated subjects
  const careers = await Career.find({}).populate(
    "relatedSubjects",
    "_id name"
  );

  if (careers.length === 0) {
    return { recommendations: [], insufficientData: false };
  }

  // Build a subjectId → name lookup map (used in subject scoring)
  const subjectIdToNameMap = {};
  careers.forEach((career) => {
    (career.relatedSubjects || []).forEach((s) => {
      if (s._id) subjectIdToNameMap[s._id.toString()] = s.name;
    });
  });

  // Check if user has ANY data at all
  const userHasSkills = userSkills.length > 0;
  const userHasInterests = userInterests.length > 0;
  const completedTopicsCount = await UserTopicProgress.countDocuments({
    user: userId,
    completed: true,
  });
  const solvedCount = await UserCodingProgress.countDocuments({
    user: userId,
    solved: true,
  });
  const quizCount = await UserQuizResult.countDocuments({
    user: userId,
    isCompleted: true,
  });

  const dataPoints = [
    userHasSkills,
    userHasInterests,
    completedTopicsCount > 0,
    solvedCount > 0,
    quizCount > 0,
  ].filter(Boolean).length;

  // If absolutely no data, return insufficient data state
  if (dataPoints === 0) {
    return {
      recommendations: [],
      insufficientData: true,
      missingData: {
        skills: !userHasSkills,
        interests: !userHasInterests,
        subjectProgress: completedTopicsCount === 0,
        codingActivity: solvedCount === 0,
        quizActivity: quizCount === 0,
      },
    };
  }

  // Score each career in parallel
  const scoredCareers = await Promise.all(
    careers.map(async (career) => {
      try {
        // --- Run all 6 components ---
        const skillScore = calcSkillScore(userSkills, career);

        const subjectData = await calcSubjectScore(
          userId,
          career,
          subjectIdToNameMap
        );

        const academicsData = await calcAcademicsScore(userId, career);

        const codingData = await calcCodingScore(userId, career);

        const learningData = await calcLearningProgressScore(userId, career);

        const interestData = calcInterestScore(userInterests, career);

        // --- Weighted final score ---
        const weights = {
          skills: 0.30,
          subjects: 0.25,
          academics: 0.15,
          coding: 0.10,
          learningProgress: 0.10,
          interests: 0.10,
        };

        const scoreBreakdown = {
          skills: skillScore,
          subjects: subjectData.score,
          academics: academicsData.score,
          coding: codingData.score,
          learningProgress: learningData.score,
          interests: interestData.score,
        };

        const finalScore = clamp(
          scoreBreakdown.skills * weights.skills +
            scoreBreakdown.subjects * weights.subjects +
            scoreBreakdown.academics * weights.academics +
            scoreBreakdown.coding * weights.coding +
            scoreBreakdown.learningProgress * weights.learningProgress +
            scoreBreakdown.interests * weights.interests
        );

        // Determine if we truly have insufficient data for this career
        // (only skills or interests contributed; no actual activity)
        const activityScore =
          subjectData.score + academicsData.score + codingData.score + learningData.score;
        const hasInsufficientData =
          dataPoints <= 1 &&
          activityScore === 0 &&
          finalScore === 0;

        // --- Matched / gap skill computation ---
        const allCareerSkills = [
          ...(career.essentialSkills || []),
          ...(career.importantSkills || []),
          ...(career.requiredSkills || []),
        ];
        const uniqueCareerSkills = [...new Set(allCareerSkills.map(norm))];
        const userSkillsNorm = userSkills.map(norm);

        const matchedSkills = intersectItems(userSkillsNorm, uniqueCareerSkills).map(
          (s) =>
            // Try to restore original casing from career data
            allCareerSkills.find((cs) => norm(cs) === s) || s
        );

        // Skill gaps: essential skills the user is missing
        const skillGaps = missingItems(
          career.essentialSkills || [],
          userSkills
        ).slice(0, 6);

        // --- Determine hasStarted ---
        const hasStarted =
          subjectData.completedTopics > 0 ||
          codingData.solved > 0;

        // --- Build narrative fields ---
        const whyThisCareer = buildWhyThisCareer({
          career,
          matchedSkills,
          completedSubjectNames: subjectData.completedSubjectNames,
          scoreBreakdown,
          codingData,
        });

        const nextRecommendedStep = buildNextStep({
          career,
          skillGaps,
          scoreBreakdown,
          codingData,
        });

        return {
          careerId: career._id,
          title: career.title,
          description: career.description,
          category: career.category,
          averageSalary: career.averageSalary || "",
          industryDemand: career.industryDemand || "",
          roadmap: career.roadmap || {},
          certifications: career.certifications || [],

          // Score data
          finalScore,
          scoreBreakdown,
          hasInsufficientData,

          // Matched data
          matchedSkills,
          matchedSubjectNames: subjectData.completedSubjectNames,
          matchedInterests: interestData.matchedInterests,
          hasInterestsProvided: interestData.hasInterests,

          // Gap data
          skillGaps,
          skillGapCount: skillGaps.length,

          // Supporting detail
          whyThisCareer,
          nextRecommendedStep,
          hasStarted,

          // Raw component details for transparency
          codingStats: {
            solved: codingData.solved,
            target: codingData.target,
          },
          subjectStats: {
            completedTopics: subjectData.completedTopics,
            totalTopics: subjectData.totalTopics,
          },
        };
      } catch (err) {
        console.error(
          `Error scoring career "${career.title}":`,
          err.message
        );
        return null;
      }
    })
  );

  // Filter nulls, sort by finalScore descending
  const valid = scoredCareers
    .filter(Boolean)
    .sort((a, b) => b.finalScore - a.finalScore);

  return {
    recommendations: valid,
    insufficientData: false,
    userStats: {
      hasSkills: userHasSkills,
      hasInterests: userHasInterests,
      completedTopics: completedTopicsCount,
      solvedCoding: solvedCount,
      quizzesTaken: quizCount,
    },
  };
};

module.exports = {
  generateRecommendations,
};