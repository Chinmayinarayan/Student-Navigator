import api from "./api";

// Get Dashboard Analytics
export const getDashboardAnalytics = async () => {
  const res = await api.get("/analytics/dashboard");
  return res.data.analytics;
};