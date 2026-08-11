import api from "./api";

// Get all careers with optional query filters (category, search, skill)
export const getCareers = async (params = {}) => {
  const res = await api.get("/careers", { params });
  return res.data.careers || [];
};

// Get single career with populated subjects, topics, and metrics
export const getCareerById = async (id) => {
  const res = await api.get(`/careers/${id}`);
  return res.data;
};

// Get roadmap for a career
export const getCareerRoadmap = async (careerId) => {
  const res = await api.get(`/roadmap/${careerId}`);
  return res.data;
};

// Toggle or update roadmap project status
export const toggleCareerProject = async (careerId, projectId, status) => {
  const res = await api.post(`/careers/${careerId}/project-toggle`, {
    projectId,
    status,
  });
  return res.data;
};

// Sync careers with database subjects
export const syncCareers = async () => {
  const res = await api.post("/careers/sync");
  return res.data;
};