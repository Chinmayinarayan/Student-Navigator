import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Recommendations from "./pages/Recommendations";
import CareerDetails from "./pages/CareerDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import TopicDetails from "./pages/TopicDetails";
import TopicQuestions from "./pages/TopicQuestions";
import TopicCoding from "./pages/TopicCoding";
import Tests from "./pages/Tests";
import TakeTest from "./pages/TakeTest";
import TestResult from "./pages/TestResult";
import QuizPage from "./pages/QuizPage";
import QuizResult from "./pages/QuizResult";
import QuizHistory from "./pages/QuizHistory";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Achievements from "./pages/Achievements";
import RoadmapPage from "./pages/RoadmapPage";
import SubjectQuestions from "./pages/SubjectQuestions";
import YouTubeResources from "./pages/YouTubeResources";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Standalone Protected Dashboard Portal */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />

      {/* Protected Layout Routes */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:id" element={<SubjectDetails />} />
        <Route path="/subjects/:id/questions" element={<SubjectQuestions />} />
        <Route path="/topics/:id" element={<TopicDetails />} />
        <Route path="/topics/:id/questions" element={<TopicQuestions />} />
        <Route path="/topics/:id/coding" element={<TopicCoding />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetails />} />
        <Route path="/roadmap/:careerId" element={<RoadmapPage />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:id" element={<TakeTest />} />
        <Route path="/tests/result/:id" element={<TestResult />} />
        <Route path="/quiz/:topicId" element={<QuizPage />} />
        <Route path="/quiz-result/:id" element={<QuizResult />} />
        <Route path="/quiz-history" element={<QuizHistory />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/youtube-resources" element={<YouTubeResources />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;