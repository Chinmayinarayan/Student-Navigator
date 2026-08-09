import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { getCareerReadiness } from "../services/careerReadinessApi";
import {
  BookOpen,
  Code,
  CheckSquare,
  FileText,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Trophy,
  Award,
  PlayCircle,
  Clock,
  Calendar,
  CheckCircle2
} from "lucide-react";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [careerReadiness, setCareerReadiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    // Step 1: Fetch dashboard stats — renders the page immediately
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard");
        if (!isMounted) return;
        setDashboard(res.data.dashboard || null);
      } catch (error) {
        console.error("Dashboard error:", error);
        if (isMounted) setDashboard({});
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Step 2: Fetch career readiness in background — updates when ready
    const fetchReadiness = async () => {
      try {
        const readiness = await getCareerReadiness();
        if (isMounted) setCareerReadiness(readiness);
      } catch {
        // Silently fail — not critical for page render
      }
    };

    fetchDashboard();
    fetchReadiness(); // runs independently, doesn't block render

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Dashboard...</h2>
          <p className="mt-2 text-sm text-slate-400">Syncing your personalized academic metrics.</p>
        </div>
      </div>
    );
  }

  // Graceful fallbacks if user data is still being created
  const user = dashboard?.user || {};
  const stats = dashboard?.stats || {};
  const recentTopics = dashboard?.recentTopics || [];
  const recentTests = dashboard?.recentTests || [];
  // Use topic progress as an instant fallback while career readiness loads in background
  const readiness = careerReadiness?.careerReadiness ?? stats.progress ?? 0;
  const readinessLevel = careerReadiness?.level ?? (readiness >= 70 ? "Placement Ready" : readiness >= 40 ? "Developing" : "Beginner");
  const recommendations = careerReadiness?.recommendations ?? [];
  const readinessLoading = !careerReadiness; // true while background fetch is in progress

  const firstName = user.name ? user.name.split(" ")[0] : "Student";

  const keyMetricCards = [
    {
      title: "Learning Progress",
      value: `${stats.progress || 0}%`,
      subtitle: `${stats.completedTopics || 0} / ${stats.totalTopics || 0} topics done`,
      icon: BookOpen,
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
      link: "/subjects"
    },
    {
      title: "Coding Solved",
      value: stats.codingSolved || 0,
      subtitle: "Challenges completed",
      icon: Code,
      color: "from-indigo-500 to-purple-600",
      textColor: "text-indigo-400",
      link: "/subjects"
    },
    {
      title: "Quiz Average",
      value: `${stats.quizAverage || 0}%`,
      subtitle: "Topic conceptual checks",
      icon: CheckSquare,
      color: "from-violet-500 to-fuchsia-600",
      textColor: "text-violet-400",
      link: "/quiz-history"
    },
    {
      title: "Mock Test Average",
      value: `${stats.testAverage || 0}%`,
      subtitle: "Placement mock exams",
      icon: FileText,
      color: "from-rose-500 to-amber-500",
      textColor: "text-rose-400",
      link: "/tests"
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Welcome Hero Banner */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-40 bottom-0 -mb-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
              Workspace Overview
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Welcome back, {firstName} 👋
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-bold">
              {user.degree && user.branch && (
                <span>🎓 {user.degree} {user.branch}</span>
              )}
              {user.year && <span>• Year {user.year}</span>}
              {user.careerGoals && (
                <span>• Goal: <span className="text-cyan-400">{user.careerGoals}</span></span>
              )}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/subjects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition hover:scale-105 flex items-center gap-2"
            >
              <span>Continue Learning</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/careers"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold transition"
            >
              Career Paths
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Key Analytics Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetricCards.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.link}
              className="group relative flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/40 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/60"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {item.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-none pt-1">
                  {item.value}
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold">{item.subtitle}</p>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shrink-0 group-hover:scale-110 transition duration-300`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </Link>
          );
        })}
      </section>

      {/* Grid: Learning Progress & Career Readiness */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left 2 Columns: Overall Progress & AI Advice */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Bar Card */}
          <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Curriculum Completion</h3>
                <p className="text-xs text-slate-400 mt-0.5">Aggregate progress across all enrolled subjects</p>
              </div>
              <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400">
                {stats.progress || 0}% Completed
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 transition-all duration-700 shadow-sm"
                style={{ width: `${stats.progress || 0}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pt-1">
              <span>{stats.completedTopics || 0} topics completed</span>
              <span>{stats.totalTopics || 0} total topics in syllabus</span>
            </div>
          </div>

          {/* AI Mentor Insights Box */}
          <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-950/40 p-6 shadow-xl relative overflow-hidden backdrop-blur-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">
                  {dashboard?.aiRecommendation?.title || "AI Placement & Study Advisor"}
                </h3>
                <p className="text-xs text-indigo-300/80">Personalized smart guidance</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {dashboard?.aiRecommendation?.reason ||
                "Maintain your streak by completing theoretical topics, solving coding exercises, and practicing placement mock exams."}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/recommendations"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition"
              >
                <span>View Full Recommendations</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Placement Action Items */}
          <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Placement Readiness Checklist
            </h3>

            {recommendations.length > 0 ? (
              <div className="space-y-2.5">
                {recommendations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-3.5 text-xs text-amber-200 font-medium leading-relaxed"
                  >
                    <span className="text-base select-none">💡</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 text-xs text-emerald-200 font-medium">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Great job! You have satisfied all baseline placement readiness milestones.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Placement Audit & Recent Logs */}
        <div className="space-y-6">
          {/* Career Readiness Score Card */}
          <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Career Readiness
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {readinessLoading ? (
                    <span className="inline-block w-28 h-6 bg-slate-700/60 rounded-lg animate-pulse" />
                  ) : readinessLevel}
                </h3>
              </div>
              <span className="rounded-2xl px-3 py-1.5 text-lg font-black text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {readiness}%
              </span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700 ${readinessLoading ? "animate-pulse" : ""}`}
                style={{ width: `${readiness}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Topic Score</span>
                <span className="text-base font-extrabold text-white">
                  {careerReadiness?.topicCompletion ?? stats.progress ?? 0}%
                </span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Quiz Score</span>
                <span className="text-base font-extrabold text-white">
                  {careerReadiness?.quizAverage ?? stats.quizAverage ?? 0}%
                </span>
              </div>
            </div>

            {readinessLoading && (
              <p className="text-[10px] text-slate-500 text-center animate-pulse">Calculating placement score...</p>
            )}
          </div>

          {/* Recent Activity Logs */}
          <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-6">
            {/* Recent Completed Topics */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Topics Completed
              </h3>
              <div className="space-y-2">
                {recentTopics.length > 0 ? (
                  recentTopics.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 p-3 text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-slate-200 truncate">{item.topic?.title || "Topic"}</p>
                        <p className="text-[10px] text-cyan-400 font-semibold mt-0.5">Completed</p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold shrink-0">
                        {item.completedAt ? new Date(item.completedAt).toLocaleDateString() : "Recent"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic">No topics completed yet.</p>
                )}
              </div>
            </div>

            {/* Recent Mock Tests */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Test Attempts
              </h3>
              <div className="space-y-2">
                {recentTests.length > 0 ? (
                  recentTests.map((test) => (
                    <div
                      key={test._id}
                      className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 p-3 text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-slate-200 truncate">{test.test?.title || "Mock Test"}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Attempt</p>
                      </div>
                      <span className="rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-2 py-0.5 text-[10px] font-bold shrink-0">
                        {test.percentage}%
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic">No test attempts yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;