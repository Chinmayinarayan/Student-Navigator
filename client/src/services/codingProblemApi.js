import api from "./api";

// Get all coding problems for a topic
export const getCodingProblems = async (topicId) => {
  const res = await api.get(`/coding-problems/topic/${topicId}`);
  return res.data.problems;
};

// Get solved status
export const getCodingProblemProgress = async (problemId) => {
  const res = await api.get(`/coding-problems/progress/${problemId}`);
  return res.data.completed;
};

// Toggle solved / unsolved
export const toggleCodingProblem = async (problemId) => {
  const res = await api.post(`/coding-problems/progress/${problemId}`);
  return res.data.completed;
};