import api from "./api";

// ======================================
// Get Career Readiness
// ======================================

export const getCareerReadiness = async () => {
  const res = await api.get("/career-readiness");
  return res.data.readiness;
};