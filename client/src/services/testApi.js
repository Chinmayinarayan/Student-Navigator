import api from "./api";


// Get all tests (basic list)
export const getTests = async () => {
  const response = await api.get("/tests");
  return response.data;
};


// Get all tests merged with user progress (preferred for Tests page)
export const getTestsWithProgress = async () => {
  const response = await api.get("/tests/with-progress");
  return response.data;
};


// Get placement assessment summary stats
export const getPlacementSummary = async () => {
  const response = await api.get("/tests/summary");
  return response.data;
};


// Get single test (with questions for taking)
export const getTestById = async (id) => {
  const response = await api.get(`/tests/${id}`);
  return response.data;
};


// Submit test answers
export const submitTest = async (id, answers, timeTaken) => {
  const response = await api.post(
    `/tests/${id}/submit`,
    { answers, timeTaken }
  );
  return response.data;
};


// Get result by result ID
export const getTestResult = async (id) => {
  const response = await api.get(`/tests/result/${id}`);
  return response.data;
};


// Get all results for the logged-in user
export const getMyTestResults = async () => {
  const response = await api.get("/tests/my-results");
  return response.data;
};