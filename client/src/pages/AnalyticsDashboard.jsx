import { useEffect, useState } from "react";
import { getDashboardAnalytics } from "../services/analyticsApi";

import SubjectProgressChart from "../components/charts/SubjectProgressChart";
import ProgressPieChart from "../components/charts/ProgressPieChart";
import QuizPerformanceChart from "../components/charts/QuizPerformanceChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import MonthlyActivityChart from "../components/charts/MonthlyActivityChart";
import StrongWeakSubjects from "../components/charts/StrongWeakSubjects";
import AIInsightsCard from "../components/charts/AIInsightsCard";

function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchAnalytics = async () => {
      try {
        const data = await getDashboardAnalytics();

        if (!isMounted) return;

        setAnalytics(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAnalytics();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Analytics...</h2>
          <p className="mt-2 text-sm text-slate-400">Aggregating subject and quiz benchmarks.</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: "Overall Progress",
      value: `${analytics.topics.percentage}%`,
      color: "text-emerald-400",
    },
    {
      title: "Quiz Accuracy",
      value: `${analytics.quizzes.averageScore}%`,
      color: "text-cyan-400",
    },
    {
      title: "Test Average",
      value: `${analytics.tests.averageScore}%`,
      color: "text-amber-400",
    },
    {
      title: "Coding Solved",
      value: analytics.coding.solved,
      color: "text-purple-400",
    },
    {
      title: "Assignments",
      value: analytics.assignments.completed,
      color: "text-indigo-400",
    },
    {
      title: "Quizzes Attempted",
      value: analytics.quizzes.attempted,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="rounded-[28px] border border-white/10 bg-slate-950/60 backdrop-blur-xl text-white p-8 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Performance Analytics
        </span>
        <h1 className="text-3xl sm:text-4xl font-black mt-2">
          📊 Learning Analytics & Metrics
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
          Track your complete learning journey, monitor curriculum completion, analyze performance strengths, and receive AI insights.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-slate-950/40 border border-white/5 rounded-2xl shadow-lg p-5 hover:border-white/15 transition backdrop-blur-xl"
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
              {item.title}
            </h3>
            <p className={`mt-2 text-2xl sm:text-3xl font-black ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Placement Readiness */}
      <div className="bg-slate-950/60 border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 text-white backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-4 flex-1">
            <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">
              Placement Readiness Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              {analytics.placementReadiness.level}
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xl">
              {analytics.placementReadiness.recommendation}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Placement Score</span>
                <span className="text-cyan-400">{analytics.placementReadiness.score}%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700"
                  style={{ width: `${analytics.placementReadiness.score}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                <h3 className="text-[10px] text-slate-400 uppercase font-bold">Topics</h3>
                <p className="text-lg font-black text-white mt-1">{analytics.topics.percentage}%</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                <h3 className="text-[10px] text-slate-400 uppercase font-bold">Quiz</h3>
                <p className="text-lg font-black text-white mt-1">{analytics.quizzes.averageScore}%</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                <h3 className="text-[10px] text-slate-400 uppercase font-bold">Tests</h3>
                <p className="text-lg font-black text-white mt-1">{analytics.tests.averageScore}%</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                <h3 className="text-[10px] text-slate-400 uppercase font-bold">Coding</h3>
                <p className="text-lg font-black text-white mt-1">{analytics.coding.solved}</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                <h3 className="text-[10px] text-slate-400 uppercase font-bold">Assignments</h3>
                <p className="text-lg font-black text-white mt-1">{analytics.assignments.completed}</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <div className="relative h-36 w-36 rounded-full border-8 border-cyan-500/20 bg-slate-900/80 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <span className="text-3xl font-black text-cyan-400">
                  {analytics.placementReadiness.score}
                </span>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Score / 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Streak */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-xl">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">🔥 Current Streak</h3>
          <p className="text-3xl font-black text-orange-400 mt-2">{analytics.streak.current} Days</p>
        </div>
        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-xl">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">🏆 Longest Streak</h3>
          <p className="text-3xl font-black text-yellow-400 mt-2">{analytics.streak.longest} Days</p>
        </div>
        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-xl">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">📅 Last Active</h3>
          <p className="text-lg font-bold text-slate-200 mt-2">
            {analytics.streak.lastActive
              ? new Date(analytics.streak.lastActive).toLocaleDateString()
              : "Active Today"}
          </p>
        </div>
        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-xl">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">📚 Learning Days</h3>
          <p className="text-3xl font-black text-cyan-400 mt-2">{analytics.streak.totalLearningDays} Days</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ProgressPieChart
          completed={analytics.topics.completed}
          total={analytics.topics.total}
        />
        <SubjectProgressChart
          data={analytics.subjectProgress}
        />
      </div>

      <div className="space-y-6">
        <QuizPerformanceChart
          data={analytics.quizzes.performance}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <WeeklyActivityChart
          data={analytics.weeklyActivity}
        />
        <MonthlyActivityChart
          data={analytics.monthlyActivity}
        />
      </div>

      {/* Strong / Weak Subjects */}
      <div>
        <StrongWeakSubjects
          strongestSubject={analytics.strongestSubject}
          weakestSubject={analytics.weakestSubject}
        />
      </div>

      {/* AI Insights */}
      <div>
        <AIInsightsCard
          analytics={analytics}
        />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;