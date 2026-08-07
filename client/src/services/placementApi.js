/**
 * placementApi.js
 * Generates company-specific topic placement importance data
 * from the subject's topics without a backend endpoint.
 */

// Company focus keyword maps - topics matching these keywords get boosted importance
const COMPANY_FOCUS = {
  Google: {
    keywords: ["graph", "dp", "dynamic", "divide", "greedy", "backtrack", "search", "sort", "hash", "tree", "bfs", "dfs", "array", "string", "recursion", "bit", "segment"],
    boostKeywords: ["graph", "dp", "dynamic", "string", "tree"],
    fallbackImportance: ["Very High", "High", "High", "Medium", "Medium", "Low", "Very High", "High"],
  },
  Amazon: {
    keywords: ["array", "sort", "hash", "string", "tree", "graph", "dp", "greedy", "queue", "stack", "sliding", "two pointer", "recursion", "backtrack"],
    boostKeywords: ["array", "hash", "tree", "string"],
    fallbackImportance: ["High", "Very High", "High", "Medium", "High", "Medium", "Low", "High"],
  },
  Microsoft: {
    keywords: ["tree", "dp", "dynamic", "graph", "string", "array", "recursion", "sort", "search", "linked", "stack", "queue"],
    boostKeywords: ["tree", "dp", "string"],
    fallbackImportance: ["High", "High", "Very High", "Medium", "High", "Low", "Medium", "High"],
  },
  "Product Companies": {
    keywords: ["sort", "search", "hash", "array", "string", "greedy", "dp", "tree", "queue", "stack"],
    boostKeywords: ["sort", "search", "greedy"],
    fallbackImportance: ["Medium", "High", "High", "Very High", "Medium", "High", "Medium", "Low"],
  },
  Startups: {
    keywords: ["array", "string", "hash", "sort", "greedy", "recursion", "search", "dp", "graph"],
    boostKeywords: ["array", "string", "hash"],
    fallbackImportance: ["High", "Medium", "High", "Medium", "Very High", "High", "Medium", "Low"],
  },
};

const IMPORTANCE_LEVELS = ["Low", "Medium", "High", "Very High"];

function getImportanceForTopic(topicName, companyConfig, companyName) {
  const lower = topicName.toLowerCase();
  const isBoost = companyConfig.boostKeywords.some((k) => lower.includes(k));
  const isMatch = companyConfig.keywords.some((k) => lower.includes(k));

  if (isBoost) return "Very High";
  if (isMatch) return "High";

  // Fallback: use a stable deterministic value based on topic name and company name
  // to ensure different companies show different importance levels for non-algo subjects
  const combined = topicName + companyName;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  const idx = Math.abs(hash) % IMPORTANCE_LEVELS.length;
  return IMPORTANCE_LEVELS[idx];
}

/**
 * Generates placement importance data for each company from a list of topic names.
 * @param {string[]} topicNames - Array of topic title strings
 * @returns {{ companiesData: object }}
 */
export function generatePlacementData(topicNames) {
  const companiesData = {};

  Object.entries(COMPANY_FOCUS).forEach(([company, config]) => {
    companiesData[company] = {
      topics: topicNames.map((name) => ({
        name,
        importance: getImportanceForTopic(name, config, company),
      })),
    };
  });

  return { companiesData };
}

/**
 * Legacy async wrapper — kept for API compatibility with SubjectCompanyPrep.
 * Accepts optional topicNames to generate data locally.
 */
export async function getSubjectPlacement(subjectId, topicNames = []) {
  // If topicNames provided, generate locally
  if (topicNames.length > 0) {
    return generatePlacementData(topicNames);
  }
  // Return empty if no topics
  return { companiesData: null };
}
