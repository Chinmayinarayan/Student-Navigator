import api from "./api";

/**
 * Fetch prerequisite and next topic data for the current topic, including completion status.
 *
 * @param {string} topicId - The ID of the current topic
 * @returns {Promise<object>} - Prerequisite learning path data
 */
export const getTopicPrerequisites = async (topicId) => {
  const response = await api.get(`/topics/${topicId}/prerequisites`);
  return response.data;
};

/**
 * Fetch learning path prerequisites and connections for the entire subject, including topic completion statuses.
 *
 * @param {string} subjectId - The ID of the subject
 * @returns {Promise<object>} - Learning path structure with all topics in the subject
 */
export const getSubjectPrerequisites = async (subjectId) => {
  const response = await api.get(`/topics/subject/${subjectId}/prerequisites`);
  return response.data; // { success: true, subject: "...", topics: [] }
};
