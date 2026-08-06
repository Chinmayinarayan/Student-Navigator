import api from "./api";

/**
 * Send a question to the AI Study Assistant with conversation history.
 *
 * @param {string} subject            - e.g. "Algorithms"
 * @param {string} topic              - e.g. "Complexity Analysis Basics"
 * @param {string} question           - the student's question
 * @param {Array}  conversationHistory - last N messages [{role, content}]
 * @returns {Promise<{answer: string, followUps: string[]}>}
 */
export const chatWithAssistant = async (subject, topic, question, conversationHistory = [], prerequisites = []) => {
  const response = await api.post("/assistant/chat", {
    subject,
    topic,
    question,
    conversationHistory,
    prerequisites,
  });
  return response.data; // { success, answer, followUps }
};
