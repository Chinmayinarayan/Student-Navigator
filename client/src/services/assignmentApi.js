import api from "./api";

// Get all assignments of a topic
export const getAssignmentsByTopic = async (topicId) => {
  const res = await api.get(`/assignments/topic/${topicId}`);
  return res.data.assignments;
};

// Get assignment details
export const getAssignmentById = async (id) => {
  const res = await api.get(`/assignments/${id}`);
  return res.data.assignment;
};

// Get current user's submission status
export const getAssignmentStatus = async (id) => {
  const res = await api.get(`/assignments/status/${id}`);
  return res.data;
};

// Submit assignment
export const submitAssignment = async (id, submissionLink) => {
  const res = await api.post(`/assignments/submit/${id}`, {
    submissionLink,
  });

  return res.data.submission;
};