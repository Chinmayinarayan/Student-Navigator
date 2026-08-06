import api from "./api";

/**
 * Save an AI response as a study note.
 */
export const saveAINote = async ({ subject, topic, question, answer, difficulty, readingTime }) => {
  const response = await api.post("/ai-notes", {
    subject,
    topic,
    question,
    answer,
    difficulty,
    readingTime,
  });
  return response.data;
};

/**
 * Get all saved AI notes for the logged-in user (grouped by subject/topic).
 */
export const getAINotes = async () => {
  const response = await api.get("/ai-notes");
  return response.data; // { notes, grouped }
};

/**
 * Delete a saved AI note by ID.
 */
export const deleteAINote = async (noteId) => {
  const response = await api.delete(`/ai-notes/${noteId}`);
  return response.data;
};
