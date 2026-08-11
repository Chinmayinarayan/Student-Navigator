import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  BookOpen,
  Code,
  CheckSquare,
  FileText,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  RefreshCw,
  Award,
  ChevronRight,
  Layers
} from "lucide-react";

// Format date safely as DD/MM/YYYY
const formatDate = (dateStr) => {
  if (!dateStr) return "Recently";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Recently";
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
};

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/dashboard");
      setDashboard(res.data?.dashboard || null);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setError("Unable to load dashboard data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // ── Skeleton Loader ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        {/* Hero Banner Skeleton */}
        <div className="rounded-[28px] border border-white/10 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="h-4 w-32 bg-slate-800 rounded-lg"></div>
          <div className="h-8 w-72 bg-slate-800 rounded-xl"></div>
          <div className="h-4 w-48 bg-slate-800/60 rounded-md"></div>
        </div>

        {/* 4 Quick Stat Cards Skeleton */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-28 rounded-2xl border border-white/5 bg-slate-900/40 p-5 flex justify-between items-center"
            >
              <div className="space-y-2">
                <div className="h-3 w-24 bg-slate-800 rounded"></div>
                <div className="h-7 w-20 bg-slate-800 rounded-lg"></div>
                <div className="h-3 w-28 bg-slate-800/60 rounded"></div>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-slate-800 shrink-0"></div>
            </div>
          ))}
        </div>

        {/* Main Grid Skeleton */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-40 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
            <div className="h-36 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
            <div className="h-64 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
          </div>
          <div className="space-y-6">
            <div className="h-52 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
            <div className="h-60 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
            <div className="h-64 rounded-3xl border border-white/5 bg-slate-900/40 p-6"></div>
          </div>
        </div>
      </div>
    );
  }

  // ── Error State ────────────────────────────────────────────────────────────
  if (error || !dashboard) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="rounded-3xl border border-rose-500/20 bg-slate-950/80 backdrop-blur-xl px-8 py-10 text-center shadow-2xl max-w-md space-y-4">
          <div className="h-12 w-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Unable to Load Dashboard</h2>
          <p className="text-sm text-slate-400">
            {error || "We encountered an issue syncing your academic metrics."}
          </p>
          <button
            onClick={fetchDashboard}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-black transition shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Retry Connection</span>
          </button>
        </div>
      </div>
    );
  }

  // Data Extraction
  const user = dashboard?.user || {};
  const stats = dashboard?.stats || {};
  const careerReadiness = dashboard?.careerReadiness || {};
  const checklist = dashboard?.placementChecklist || careerReadiness?.checklist || [];
  const aiRecommendation = dashboard?.aiRecommendation || {};
  const recommendedScholarships = dashboard?.recommendedScholarships || [];
  const recentTopics = dashboard?.recentTopics || [];
  const recentTests = dashboard?.recentTests || [];

  const firstName = user.name ? user.name.split(" ")[0] : "Student";
  const readiness = careerReadiness?.careerReadiness ?? stats.progress ?? 0;
  const readinessLevel =
    careerReadiness?.level ||
    (readiness >= 90
      ? "Placement Ready"
      : readiness >= 75
      ? "Advanced"
      : readiness >= 50
      ? "Intermediate"
      : readiness >= 25
      ? "Developing"
      : "Beginner");

  // 4 Top Key Analytics Cards
  const keyMetricCards = [
    {
      title: "Learning Progress",
      value: `${stats.completedTopics || 0} / ${stats.totalTopics || 0}`,
      subtitle: "Topics completed",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
      link: "/subjects",
    },
    {
      title: "Coding Problems Solved",
      value: `${stats.codingSolved || 0}`,
      subtitle: "Problems completed",
      icon: Code,
      color: "from-indigo-500 to-purple-600",
      textColor: "text-indigo-400",
      link: "/subjects",
    },
    {
      title: "Quiz Average",
      value: `${stats.quizAverage || 0}%`,
      subtitle: "Topic conceptual checks",
      icon: CheckSquare,
      color: "from-violet-500 to-fuchsia-600",
      textColor: "text-violet-400",
      link: "/quiz-history",
    },
    {
      title: "Mock Test Average",
      value: `${stats.testAverage || 0}%`,
      subtitle: "Placement mock exams",
      icon: FileText,
      color: "from-rose-500 to-amber-500",
      textColor: "text-rose-400",
      link: "/tests",
    },
  ];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn">
      {/* ── Level 1: Top Welcome Hero Banner (Full Width) ─────────────────── */}
      <section className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute right-40 bottom-0 -mb-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col justify-between items-start gap-4">
          <div className="space-y-2.5 max-w-4xl">
            <span className="inline-flex items-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
              Workspace Overview
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Welcome back, {firstName} 👋
            </h1>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {user.degree && user.branch && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  <span>🎓</span>
                  <span>{user.degree} {user.branch}</span>
                </span>
              )}
              {user.year && (
                <span className="inline-flex items-center px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  Year {user.year}
                </span>
              )}
              {user.careerGoals && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
                  <span>🎯 Goal:</span>
                  <span>{user.careerGoals}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Level 1: 4 Quick Analytics Metric Cards (Full Horizontal Row) ───── */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {keyMetricCards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/40 p-5 shadow-lg backdrop-blur-xl min-h-[104px]"
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
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shrink-0`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Level 2: Curriculum Completion & Next Best Action (Horizontal Row) ── */}
      <section className="grid gap-6 lg:grid-cols-2 w-full items-stretch">
        {/* Curriculum Completion Card */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white">Curriculum Completion</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Aggregate progress across all enrolled subjects
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400">
                  {stats.progress || 0}% Overall Progress
                </span>
              </div>
            </div>

            {/* Primary Headline */}
            <div className="pt-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {stats.completedTopics || 0} / {stats.totalTopics || 0}{" "}
                <span className="text-slate-400 font-semibold text-base sm:text-lg">
                  Topics Completed
                </span>
              </h2>
            </div>

            {/* Dynamic Progress Bar */}
            <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 transition-all duration-700 shadow-sm"
                style={{ width: `${Math.min(100, Math.max(0, stats.progress || 0))}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pt-2 border-t border-white/5">
            <span>{stats.completedTopics || 0} completed</span>
            <span>{stats.totalTopics || 0} total syllabus topics</span>
          </div>
        </div>

        {/* Your Next Best Action 🚀 */}
        <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-950/40 p-6 shadow-xl relative overflow-hidden backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">
                  {aiRecommendation.title || "Your next best action 🚀"}
                </h3>
                <p className="text-xs text-indigo-300/80">Personalized smart guidance</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {aiRecommendation.reason ||
                "Maintain your streak by completing theoretical topics, solving coding exercises, and practicing placement mock exams."}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-white/5">
            {aiRecommendation.actionLink && (
              <Link
                to={aiRecommendation.actionLink}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>{aiRecommendation.actionText || "Get Started"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
            <Link
              to="/recommendations"
              className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition py-2 px-1"
            >
              <span>View Full Recommendations</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Level 3: Placement Checklist & Career Readiness (Horizontal Row) ─ */}
      <section className="grid gap-6 lg:grid-cols-2 w-full items-stretch">
        {/* Placement Readiness Checklist */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Placement Readiness Checklist
              </h3>
              <span className="text-[11px] font-bold text-slate-500">
                Data-driven milestones
              </span>
            </div>

            {checklist.length > 0 ? (
              <div className="space-y-2.5">
                {checklist.map((item, idx) => {
                  const isMet = item.status === "met";
                  return (
                    <Link
                      key={item.id || idx}
                      to={item.link || "/subjects"}
                      className={`group flex items-center justify-between gap-3 rounded-2xl p-3 text-xs transition border ${
                        isMet
                          ? "bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-emerald-200"
                          : "bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/30 text-amber-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-base shrink-0 select-none">
                          {isMet ? "✓" : "⚠"}
                        </span>
                        <div className="space-y-0.5 min-w-0">
                          <p className="font-bold text-white group-hover:text-cyan-300 transition truncate">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium truncate">
                            {item.detail || item.message || ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 text-[11px] font-bold opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition pl-2">
                        <span>{item.actionText || "View"}</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 text-xs text-emerald-200 font-medium">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Great job! You have satisfied all baseline placement readiness milestones.</span>
              </div>
            )}
          </div>
        </div>

        {/* Career Readiness Score Card */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Career Readiness
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {readinessLevel}
                </h3>
              </div>
              <span className="rounded-2xl px-3 py-1.5 text-lg font-black text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {readiness}%
              </span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                style={{ width: `${readiness}%` }}
              />
            </div>

            {/* Compact Breakdown */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Learning</span>
                <span className="text-sm font-extrabold text-white">
                  {careerReadiness?.topicCompletion ?? stats.progress ?? 0}%
                </span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Coding</span>
                <span className="text-sm font-extrabold text-white">
                  {careerReadiness?.codingSolved ?? stats.codingSolved ?? 0} solved
                </span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Quizzes</span>
                <span className="text-sm font-extrabold text-white">
                  {careerReadiness?.quizAverage ?? stats.quizAverage ?? 0}%
                </span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Mock Tests</span>
                <span className="text-sm font-extrabold text-white">
                  {careerReadiness?.testsAverage ?? stats.testAverage ?? 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Level 4: 🎓 SCHOLARSHIP OPPORTUNITIES WIDGET (Full Horizontal Width) */}
      <section className="w-full rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-cyan-950/30 p-6 sm:p-7 shadow-xl backdrop-blur-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Scholarship Opportunities
              </h3>
              <p className="text-[10px] text-cyan-300/80 uppercase tracking-wider font-bold">
                Verified Grants & Funding
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-300 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{stats.scholarshipsClosingSoon || 0} Closing Soon</span>
            </span>
            <Link
              to="/scholarships"
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <span>Explore All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Real Counts in Horizontal Row */}
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 text-xs">
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-200 flex items-center gap-2 font-medium">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>Closing within 7 days:</span>
            </span>
            <span className="font-black text-amber-300">
              {stats.scholarshipsClosingSoon || 0} closing soon
            </span>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-slate-300 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>Verified Scholarships:</span>
            </span>
            <span className="font-black text-cyan-300">
              {stats.totalVerifiedScholarships ?? stats.totalScholarships ?? 0} Active
            </span>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-slate-300 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>Match Your Profile:</span>
            </span>
            <span className="font-black text-purple-300">
              {stats.scholarshipsMatchingProfile || 0} Matched 🎯
            </span>
          </div>
        </div>

        {/* ── Closing Soon Scholarships Subsection (Horizontal Grid of Cards) ── */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>Closing Soon ⏰</span>
            </span>
            <Link
              to="/scholarships"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
            >
              View All Opportunities →
            </Link>
          </div>

          {recommendedScholarships.length > 0 ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedScholarships.map((sch) => (
                <div
                  key={sch._id}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-white truncate">
                          {sch.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate">
                          {sch.provider} • <span className="text-cyan-400 font-semibold">{sch.sourcePortal || "Official"}</span>
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-extrabold text-emerald-400 shrink-0">
                        ✓ Verified
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="font-black text-amber-300">
                        {sch.awardAmount || "Grant"}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-[10px]">
                        {sch.lifecycle?.countdownText || (sch.applicationDeadline ? formatDate(sch.applicationDeadline) : "Closing Soon")}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/5">
                    <span className="text-[10px] font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-lg">
                      {sch.match?.matchScore ? `${sch.match.matchScore}% Match` : "Matches Profile"}
                    </span>
                    <Link
                      to="/scholarships"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[11px] transition inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Apply</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center space-y-2">
              <p className="text-xs text-slate-400">
                No scholarships closing within 7 days right now.
              </p>
              <Link
                to="/scholarships"
                className="inline-block text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
              >
                Explore All Scholarships →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Level 5: Recent Activity Logs (Horizontal 2-Column Grid) ──────── */}
      <section className="grid gap-6 lg:grid-cols-2 w-full items-stretch">
        {/* Card 1: Recent Topics Completed */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Topics Completed
              </h3>
              {recentTopics.length > 0 && (
                <Link
                  to="/subjects"
                  className="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  View All
                </Link>
              )}
            </div>

            <div className="space-y-2">
              {recentTopics.length > 0 ? (
                recentTopics.map((item) => {
                  const topicTitle =
                    item.title && item.title !== "Topic"
                      ? item.title
                      : item.topic?.title && item.topic?.title !== "Topic"
                      ? item.topic.title
                      : "Topic information unavailable";

                  return (
                    <Link
                      key={item._id}
                      to="/subjects"
                      className="group flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 p-3 text-xs transition"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-slate-200 group-hover:text-cyan-300 transition truncate">
                          {topicTitle}
                        </p>
                        <p className="text-[10px] text-cyan-400 font-semibold mt-0.5">
                          Completed
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold shrink-0">
                        {formatDate(item.completedAt)}
                      </span>
                    </Link>
                  );
                })
              ) : (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center space-y-2">
                  <p className="text-xs text-slate-400">No topics completed yet.</p>
                  <Link
                    to="/subjects"
                    className="inline-block text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Start Learning →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Recent Test Attempts */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Test Attempts
              </h3>
              {recentTests.length > 0 && (
                <Link
                  to="/tests"
                  className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition"
                >
                  View Tests
                </Link>
              )}
            </div>

            <div className="space-y-2">
              {recentTests.length > 0 ? (
                recentTests.map((test) => {
                  const testTitle =
                    test.title && test.title !== "Mock Test"
                      ? test.title
                      : test.test?.title || "Placement Mock Test";

                  return (
                    <Link
                      key={test._id}
                      to="/tests"
                      className="group flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 p-3 text-xs transition"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-slate-200 group-hover:text-indigo-300 transition truncate">
                          {testTitle}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Attempted: {formatDate(test.attemptedAt || test.createdAt)}
                        </p>
                      </div>
                      <span className="rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-2 py-0.5 text-[10px] font-bold shrink-0">
                        {test.percentage}%
                      </span>
                    </Link>
                  );
                })
              ) : (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center space-y-2">
                  <p className="text-xs text-slate-400">No test attempts yet.</p>
                  <Link
                    to="/tests"
                    className="inline-block text-xs font-bold text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Take a Test →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;