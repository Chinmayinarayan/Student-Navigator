import api from "./api";

// Get quiz by topic
export const getQuizByTopic = async (topicId) => {
  const res = await api.get(`/quizzes/topic/${topicId}`);
  return res.data.quiz;
};

// Submit quiz
export const submitQuiz = async (quizId, answers) => {
  const res = await api.post(`/quizzes/submit/${quizId}`, {
    answers,
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