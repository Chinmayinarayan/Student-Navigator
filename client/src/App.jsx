import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// ── Always-eager (tiny, critical-path pages) ─────────────────────────────────
import Login from "./pages/Login";
import Register from "./pages/Register";

// ── Lazy-loaded routes (loaded only when navigated to) ───────────────────────
const Dashboard        = lazy(() => import("./pages/Dashboard"));
const Subjects         = lazy(() => import("./pages/Subjects"));
const SubjectDetails   = lazy(() => import("./pages/SubjectDetails"));
const SubjectQuestions = lazy(() => import("./pages/SubjectQuestions"));
const TopicDetails     = lazy(() => import("./pages/TopicDetails"));
const TopicQuestions   = lazy(() => import("./pages/TopicQuestions"));
const TopicCoding      = lazy(() => import("./pages/TopicCoding"));
const Careers          = lazy(() => import("./pages/Careers"));
const CareerDetails    = lazy(() => import("./pages/CareerDetails"));
const RoadmapPage      = lazy(() => import("./pages/RoadmapPage"));
const Recommendations  = lazy(() => import("./pages/Recommendations"));
const Events           = lazy(() => import("./pages/Events"));
const Profile          = lazy(() => import("./pages/Profile"));
const Tests            = lazy(() => import("./pages/Tests"));
const TakeTest         = lazy(() => import("./pages/TakeTest"));
const TestResult       = lazy(() => import("./pages/TestResult"));
const QuizPage         = lazy(() => import("./pages/QuizPage"));
const QuizResult       = lazy(() => import("./pages/QuizResult"));
const QuizHistory      = lazy(() => import("./pages/QuizHistory"));
const AnalyticsDashboard = lazy(() => import("./pages/AnalyticsDashboard"));
const Achievements     = lazy(() => import("./pages/Achievements"));
const YouTubeResources = lazy(() => import("./pages/YouTubeResources"));
const NotFound         = lazy(() => import("./pages/NotFound"));

// Minimal inline fallback — no extra component needed
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center max-w-xs">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mx-auto" />
      <p className="mt-4 text-sm font-semibold text-slate-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Layout Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard"               element={<Suspense fallback={<PageLoader />}><Dashboard /></Suspense>} />
          <Route path="/subjects"                element={<Suspense fallback={<PageLoader />}><Subjects /></Suspense>} />
          <Route path="/subjects/:id"            element={<Suspense fallback={<PageLoader />}><SubjectDetails /></Suspense>} />
          <Route path="/subjects/:id/questions"  element={<Suspense fallback={<PageLoader />}><SubjectQuestions /></Suspense>} />
          <Route path="/topics/:id"              element={<Suspense fallback={<PageLoader />}><TopicDetails /></Suspense>} />
          <Route path="/topics/:id/questions"    element={<Suspense fallback={<PageLoader />}><TopicQuestions /></Suspense>} />
          <Route path="/topics/:id/coding"       element={<Suspense fallback={<PageLoader />}><TopicCoding /></Suspense>} />
          <Route path="/careers"                 element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
          <Route path="/careers/:id"             element={<Suspense fallback={<PageLoader />}><CareerDetails /></Suspense>} />
          <Route path="/roadmap/:careerId"       element={<Suspense fallback={<PageLoader />}><RoadmapPage /></Suspense>} />
          <Route path="/recommendations"         element={<Suspense fallback={<PageLoader />}><Recommendations /></Suspense>} />
          <Route path="/events"                  element={<Suspense fallback={<PageLoader />}><Events /></Suspense>} />
          <Route path="/profile"                 element={<Suspense fallback={<PageLoader />}><Profile /></Suspense>} />
          <Route path="/tests"                   element={<Suspense fallback={<PageLoader />}><Tests /></Suspense>} />
          <Route path="/tests/:id"               element={<Suspense fallback={<PageLoader />}><TakeTest /></Suspense>} />
          <Route path="/tests/result/:id"        element={<Suspense fallback={<PageLoader />}><TestResult /></Suspense>} />
          <Route path="/quiz/:topicId"           element={<Suspense fallback={<PageLoader />}><QuizPage /></Suspense>} />
          <Route path="/quiz-result/:id"         element={<Suspense fallback={<PageLoader />}><QuizResult /></Suspense>} />
          <Route path="/quiz-history"            element={<Suspense fallback={<PageLoader />}><QuizHistory /></Suspense>} />
          <Route path="/analytics"               element={<Suspense fallback={<PageLoader />}><AnalyticsDashboard /></Suspense>} />
          <Route path="/achievements"            element={<Suspense fallback={<PageLoader />}><Achievements /></Suspense>} />
          <Route path="/youtube-resources"       element={<Suspense fallback={<PageLoader />}><YouTubeResources /></Suspense>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Routes>
    </Suspense>
  );
}

export default App;