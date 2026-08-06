import api from "./api";


// Get all tests
export const getTests = async () => {
  const response = await api.get("/tests");

  return response.data;
};


// Get single test
export const getTestById = async (id) => {
  const response = await api.get(`/tests/${id}`);

  return response.data;
};


// Submit test
export const submitTest = async (id, answers) => {
  const response = await api.post(
    `/tests/${id}/submit`,
    {
      answers,
    }
  );

  return response.data;
};

export const getTestResult = async (id)=>{

  const response =
    await api.get(`/tests/result/${id}`);

  return response.data;

};

export const getMyTestResults = async () => {

  const response =
    await api.get("/tests/my-results");

  return response.data;

};