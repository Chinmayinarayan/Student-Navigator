import { useEffect, useState } from "react";
import { getDashboardAnalytics } from "../services/analyticsApi";

import SubjectProgressChart from "../components/charts/SubjectProgressChart";
import ProgressPieChart from "../components/charts/ProgressPieChart";
import QuizPerformanceChart from "../components/charts/QuizPerformanceChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import MonthlyActivityChart from "../components/charts/MonthlyActivityChart";
import StrongWeakSubjects from "../components/charts/StrongWeakSubjects";
import CareerReadinessSection from "../components/charts/CareerReadinessSection";
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
          <p className="mt-2 text-sm text-slate-400">Aggregating subject, quiz, and career metrics.</p>
        </div>
      </div>
    );
  }

  // Key Learning Metrics with Curriculum Progress separated from activity counts
  const stats = [
    {
      title: "Curriculum Progress",
      value: `${analytics.topics.percentage}%`,
      subtitle: `${analytics.topics.completed} of ${analytics.topics.total} Topics`,
      color: "text-emerald-400",
    },
    {
      title: "Quiz Accuracy",
      value: `${analytics.quizzes.averageScore}%`,
      subtitle: `${analytics.quizzes.attempted} Attempted`,
      color: "text-cyan-400",
    },
    {
      title: "Test Average",
      value: `${analytics.tests.averageScore}%`,
      subtitle: `${analytics.tests.attempted} Tests`,
      color: "text-amber-400",
    },
    {
      title: "Coding Solved",
      value: analytics.coding.solved,
      subtitle: `Target ${analytics.coding.target || 50} Problems`,
      color: "text-purple-400",
    },
    {
      title: "Assignments",
      value: analytics.assignments.completed,
      subtitle: `${analytics.assignments.completed} Submitted`,
      color: "text-pink-400",
    },
    {
      title: "Quizzes Attempted",
      value: analytics.quizzes.attempted,
      subtitle: `${analytics.quizzes.attempted} Quizzes`,
      color: "text-indigo-400",
    },
  ];

  // Normalized placement readiness breakdown components
  const prComponents = analytics.placementReadiness?.components || {
    topics: {
      name: "Topic Completion Score",
      score: analytics.topics.percentage,
      percentage: analytics.topics.percentage,
      weight: "30%",
    },
    quiz: {
      name: "Quiz Performance Score",
      score: analytics.quizzes.averageScore,
      percentage: analytics.quizzes.averageScore,
      weight: "20%",
    },
    tests: {
      name: "Test Performance Score",
      score: analytics.tests.averageScore,
      percentage: analytics.tests.averageScore,
      weight: "20%",
    },
    coding: {
      name: "Coding Score",
      score: analytics.coding.score || Math.min(100, Math.round((analytics.coding.solved / 50) * 100)),
      percentage: analytics.coding.score || Math.min(100, Math.round((analytics.coding.solved / 50) * 100)),
      weight: "20%",
    },
    assignments: {
      name: "Assignment Score",
      score: analytics.assignments.score || Math.min(100, Math.round((analytics.assignments.completed / 10) * 100)),
      percentage: analytics.assignments.score || Math.min(100, Math.round((analytics.assignments.completed / 10) * 100)),
      weight: "10%",
    },
  };

  const placementCards = [
    {
      key: "topics",
      label: "Topic Completion",
      score: prComponents.topics?.score ?? analytics.topics.percentage,
      detail: `${analytics.topics.completed}/${analytics.topics.total} Topics`,
      weight: "30%",
      color: "from-emerald-500 to-teal-400",
      textColor: "text-emerald-400",
    },
    {
      key: "quiz",
      label: "Quiz Performance",
      score: prComponents.quiz?.score ?? analytics.quizzes.averageScore,
      detail: `${analytics.quizzes.attempted} Attempted`,
      weight: "20%",
      color: "from-cyan-500 to-blue-400",
      textColor: "text-cyan-400",
    },
    {
      key: "tests",
      label: "Test Performance",
      score: prComponents.tests?.score ?? analytics.tests.averageScore,
      detail: `${analytics.tests.attempted} Tests Taken`,
      weight: "20%",
      color: "from-amber-500 to-orange-400",
      textColor: "text-amber-400",
    },
    {
      key: "coding",
      label: "Coding Score",
      score: prComponents.coding?.score ?? Math.min(100, Math.round((analytics.coding.solved / 50) * 100)),
      detail: `${analytics.coding.solved} Problems Solved`,
      weight: "20%",
      color: "from-purple-500 to-indigo-400",
      textColor: "text-purple-400",
    },
    {
      key: "assignments",
      label: "Assignment Score",
      score: prComponents.assignments?.score ?? Math.min(100, Math.round((analytics.assignments.completed / 10) * 100)),
      detail: `${analytics.assignments.completed} Submitted`,
      weight: "10%",
      color: "from-pink-500 to-rose-400",
      textColor: "text-pink-400",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header */}
      <div className="rounded-[28px] border border-white/10 bg-slate-950/60 backdrop-blur-xl text-white p-8 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Performance Analytics
        </span>
        <h1 className="text-3xl sm:text-4xl font-black mt-2">
          📊 Learning Analytics & Metrics
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
          Track your complete learning journey, monitor curriculum completion, analyze performance strengths, and receive dynamic career readiness insights.
        </p>
      </div>

      {/* 2. Key Learning Metrics */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-slate-950/40 border border-white/5 rounded-2xl shadow-lg p-5 hover:border-white/15 transition backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                {item.title}
              </h3>
              <p className={`mt-2 text-2xl sm:text-3xl font-black ${item.color}`}>
                {item.value}
              </p>
            </div>
            {item.subtitle && (
              <p className="text-[11px] text-slate-500 mt-2 font-medium">
                {item.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 3. Placement Readiness */}
      <div className="bg-slate-950/60 border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 text-white backdrop-blur-xl space-y-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/5 pb-6">
          <div className="space-y-2 flex-1">
            <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">
              Placement Readiness Assessment
            </span>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-black">
                {analytics.placementReadiness.level}
              </h2>
              <span className="text-xs px-3 py-1 rounded-full font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {analytics.placementReadiness.score} / 100
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
              {analytics.placementReadiness.recommendation}
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <div className="relative h-32 w-32 rounded-full border-8 border-cyan-500/20 bg-slate-900/80 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <span className="text-3xl font-black text-cyan-400">
                  {analytics.placementReadiness.score}
                </span>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Score / 100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Placement Score Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Overall Placement Readiness Score</span>
            <span className="text-cyan-400 font-black">
              {analytics.placementReadiness.score} / 100 ({analytics.placementReadiness.score}%)
            </span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(analytics.placementReadiness.score, 2)}%` }}
            />
          </div>
        </div>

        {/* Normalized 0-100 Components */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span>Assessment Components (0–100 Normalized)</span>
            <span className="text-[11px] text-slate-500 normal-case">Weighted Formula Calculation</span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {placementCards.map((card) => (
              <div
                key={card.key}
                className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2.5 hover:border-white/10 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-300 font-bold">
                    {card.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold bg-white/5 px-1.5 py-0.5 rounded">
                    {card.weight}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <p className={`text-xl font-black ${card.textColor}`}>
                    {card.score}%
                  </p>
                  <span className="text-[10px] text-slate-400">{card.detail}</span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${card.color} rounded-full transition-all duration-700`}
                    style={{ width: `${Math.max(card.score, 3)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Learning Streak & Activity */}
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

      {/* 5. Topic Completion & Subject-wise Progress */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ProgressPieChart
          completed={analytics.topics.completed}
          total={analytics.topics.total}
        />
        <SubjectProgressChart
          data={analytics.subjectProgress}
        />
      </div>

      {/* 6. Quiz Performance Trends */}
      <div className="space-y-6">
        <QuizPerformanceChart
          data={analytics.quizzes.performance}
        />
      </div>

      {/* 7. Weekly Activity & Monthly Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <WeeklyActivityChart
          data={analytics.weeklyActivity}
        />
        <MonthlyActivityChart
          data={analytics.monthlyActivity}
        />
      </div>

      {/* 8. Strongest Subject & Subject Needing Focus */}
      <div>
        <StrongWeakSubjects
          strongestSubject={analytics.strongestSubject}
          weakestSubject={analytics.weakestSubject}
        />
      </div>

      {/* 9. Career Readiness & Next Recommended Action */}
      <div>
        <CareerReadinessSection
          careerReadiness={analytics.careerReadiness}
        />
      </div>

      {/* 10. Personalized AI Learning Insights */}
      <div>
        <AIInsightsCard
          analytics={analytics}
        />
      </div>
    </div>
  );
}

export default AnalyticsDashboard;