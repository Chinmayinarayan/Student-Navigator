import api from "./api";

export const toggleTopicCompletion = async (topicId) => {
  const response = await api.post(`/progress/topic/${topicId}`);
  return response.data;
};

export const getTopicProgress = async (topicId) => {
  const response = await api.get(`/progress/topic/${topicId}`);
  return response.data;
};

export const getSubjectProgress = async (subjectId) => {
  const response = await api.get(`/progress/subject/${subjectId}`);
  return response.data;
};

// NEW
export const getAllSubjectsProgress = async () => {
  const response = await api.get("/progress/subjects");
  return response.data;
};