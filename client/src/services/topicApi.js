import api from "./api";


// Get topics by subject
export const getTopicsBySubject = async (subjectId) => {
  const response = await api.get(
    `/topics/subject/${subjectId}`
  );

  return response.data;
};


// Get single topic
export const getTopicById = async (topicId) => {
  const response = await api.get(
    `/topics/${topicId}`
  );

  return response.data;
};