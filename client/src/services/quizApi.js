import api from "./api";

// Get quiz by topic with optional retry / newAttempt flag
export const getQuizByTopic = async (topicId, options = {}) => {
  const params = {};
  if (options.retry || options.newAttempt) {
    params.retry = "true";
  }
  const res = await api.get(`/quizzes/topic/${topicId}`, { params });
  return res.data.quiz;
};

// Submit quiz with attempt ID
export const submitQuiz = async (quizId, answers, attemptId) => {
  const res = await api.post(`/quizzes/submit/${quizId}`, {
    answers,
    attemptId,
  });

  return res.data.result;
};

// Get all my quiz results
export const getMyQuizResults = async () => {
  const res = await api.get("/quizzes/my-results");
  return res.data.results;
};

// Get one quiz result
export const getQuizResult = async (id) => {
  const res = await api.get(`/quizzes/result/${id}`);
  return res.data.result;
};