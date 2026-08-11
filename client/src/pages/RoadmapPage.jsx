import { useParams, Navigate } from "react-router-dom";
import CareerDetails from "./CareerDetails";

function RoadmapPage() {
  const { careerId } = useParams();

  // If a careerId is provided, render the comprehensive Career Roadmap page
  if (careerId) {
    return <CareerDetails />;
  }

  return <Navigate to="/careers" replace />;
}

export default RoadmapPage;