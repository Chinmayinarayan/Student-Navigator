import api from "./api";

// Get all careers
export const getCareers = async () => {
  const res = await api.get("/careers");
  return res.data.careers;
};

// Get roadmap for a career
export const getCareerRoadmap = async (careerId) => {
  const res = await api.get(`/roadmap/${careerId}`);
  return res.data;
};