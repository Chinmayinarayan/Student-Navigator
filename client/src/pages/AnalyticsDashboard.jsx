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
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <h2 className="text-2xl font-bold">
          Loading Analytics...
        </h2>
      </div>
    );
  }

  const stats = [
    {
      title: "Overall Progress",
      value: `${analytics.topics.percentage}%`,
      color: "text-green-600",
    },
    {
      title: "Quiz Accuracy",
      value: `${analytics.quizzes.averageScore}%`,
      color: "text-blue-600",
    },
    {
      title: "Test Average",
      value: `${analytics.tests.averageScore}%`,
      color: "text-orange-600",
    },
    {
      title: "Coding Solved",
      value: analytics.coding.solved,
      color: "text-purple-600",
    },
    {
      title: "Assignments",
      value: analytics.assignments.completed,
      color: "text-indigo-600",
    },
    {
      title: "Quizzes Attempted",
      value: analytics.quizzes.attempted,
      color: "text-pink-600",
    },
  ];

  return (
    <div className="space-y-6">

        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-8 shadow-lg">

          <h1 className="text-4xl font-bold">
            📊 Learning Analytics
          </h1>

          <p className="mt-3 text-blue-100">
            Track your complete learning journey,
            monitor progress, analyze strengths,
            and receive AI-powered recommendations.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
            >

              <h3 className="text-gray-500 text-sm">
                {item.title}
              </h3>

              <p className={`mt-3 text-4xl font-bold ${item.color}`}>
                {item.value}
              </p>

            </div>

          ))}

        </div>

        {/* Placement Readiness */}

        <div className="mt-8">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl shadow-xl p-8 text-white">

            <div className="flex flex-col lg:flex-row justify-between items-center">

            <div>

                <p className="uppercase tracking-widest text-blue-200 text-sm">
                Placement Readiness
                </p>

                <h2 className="text-3xl font-bold mt-2">
                {analytics.placementReadiness.level}
                </h2>

                <p className="mt-4 text-blue-100 max-w-xl">
                {analytics.placementReadiness.recommendation}
                </p>

                <div className="mt-6">

                <div className="flex justify-between text-sm">

                    <span>Placement Score</span>

                    <span>
                    {analytics.placementReadiness.score}%
                    </span>

                </div>

                <div className="mt-2 h-3 bg-white/20 rounded-full overflow-hidden">

                    <div
                    className="h-3 bg-green-400 transition-all duration-700"
                    style={{
                        width: `${analytics.placementReadiness.score}%`,
                    }}
                    />

                </div>

                </div>

                <div className="grid md:grid-cols-5 gap-4 mt-8">

                <div className="bg-white/10 rounded-xl p-4">

                    <h3 className="text-sm text-blue-200">
                    Topics
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                    {analytics.topics.percentage}%
                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-4">

                    <h3 className="text-sm text-blue-200">
                    Quiz
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                    {analytics.quizzes.averageScore}%
                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-4">

                    <h3 className="text-sm text-blue-200">
                    Tests
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                    {analytics.tests.averageScore}%
                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-4">

                    <h3 className="text-sm text-blue-200">
                    Coding
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                    {analytics.coding.solved}
                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-4">

                    <h3 className="text-sm text-blue-200">
                    Assignments
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                    {analytics.assignments.completed}
                    </p>

                </div>

                </div>

            </div>

            <div className="mt-8 lg:mt-0">

                <div className="relative h-40 w-40 rounded-full border-[10px] border-white/20 flex items-center justify-center">

                <div className="text-center">

                    <h1 className="text-5xl font-bold">
                    {analytics.placementReadiness.score}
                    </h1>

                    <p className="text-sm mt-1">
                    /100
                    </p>

                </div>

                </div>

            </div>

            </div>

        </div>

        </div>

        {/* Learning Streak */}

        <div className="grid lg:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow p-6">

            <h3 className="text-gray-500">
              🔥 Current Streak
            </h3>

            <p className="text-4xl font-bold text-red-500 mt-3">
              {analytics.streak.current}
            </p>

            <p className="text-gray-500 mt-2">
              Days
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h3 className="text-gray-500">
              🏆 Longest Streak
            </h3>

            <p className="text-4xl font-bold text-yellow-500 mt-3">
              {analytics.streak.longest}
            </p>

            <p className="text-gray-500 mt-2">
              Days
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h3 className="text-gray-500">
              📅 Last Active
            </h3>

            <p className="text-xl font-bold mt-4">

              {analytics.streak.lastActive
                ? new Date(
                    analytics.streak.lastActive
                  ).toLocaleDateString()
                : "No Activity"}

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h3 className="text-gray-500">
              📚 Learning Days
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-3">
              {analytics.streak.totalLearningDays}
            </p>

          </div>

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <ProgressPieChart
            completed={analytics.topics.completed}
            total={analytics.topics.total}
          />

          <SubjectProgressChart
            data={analytics.subjectProgress}
          />

        </div>

        <div className="mt-8">

          <QuizPerformanceChart
            data={analytics.quizzes.performance}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <WeeklyActivityChart
            data={analytics.weeklyActivity}
          />

          <MonthlyActivityChart
            data={analytics.monthlyActivity}
          />

        </div>

        {/* Strong / Weak Subjects */}

        <div className="mt-8">

          <StrongWeakSubjects
            strongestSubject={analytics.strongestSubject}
            weakestSubject={analytics.weakestSubject}
          />

        </div>

        {/* AI Insights */}

        <div className="mt-8">

          <AIInsightsCard
            analytics={analytics}
          />

        </div>

    </div>
  );
}

export default AnalyticsDashboard;