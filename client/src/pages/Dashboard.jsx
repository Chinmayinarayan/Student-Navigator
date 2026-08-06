import { useEffect, useState } from "react";
import api from "../services/api";
import { getCareerReadiness } from "../services/careerReadinessApi";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [careerReadiness, setCareerReadiness] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDashboard = async () => {
      try {
        const [dashboardRes, readiness] = await Promise.all([
          api.get("/dashboard"),
          getCareerReadiness(),
        ]);

        if (!isMounted) return;

        setDashboard(dashboardRes.data.dashboard);
        setCareerReadiness(readiness);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!dashboard || !careerReadiness) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-slate-200 bg-white px-10 py-8 text-center shadow-xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-slate-900 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-800 mt-6">Loading Dashboard...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing your personalized career workspace.</p>
        </div>
      </div>
    );
  }

  // Calculate readiness status styles
  const getReadinessColor = (score) => {
    if (score >= 80) return { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", bar: "bg-emerald-500" };
    if (score >= 60) return { text: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", bar: "bg-indigo-500" };
    if (score >= 40) return { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", bar: "bg-amber-500" };
    return { text: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", bar: "bg-rose-500" };
  };

  const readinessStyle = getReadinessColor(careerReadiness.careerReadiness);

  const stats = [
    {
      title: "Learning Progress",
      value: `${dashboard.stats?.progress || 0}%`,
      subtitle: `${dashboard.stats?.completedTopics || 0} topics done`,
      icon: "📚",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Coding Solved",
      value: dashboard.analytics?.codingSolved || 0,
      subtitle: "Challenges tracking",
      icon: "💻",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Quiz Average",
      value: `${dashboard.analytics?.quizAverage || 0}%`,
      subtitle: `${dashboard.stats?.quizAverage || "Concept checks"}`,
      icon: "📝",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Mock Test Average",
      value: `${dashboard.analytics?.testAverage || 0}%`,
      subtitle: "Placement test bank",
      icon: "📊",
      color: "from-rose-500 to-orange-500",
    },
  ];
  const firstName = dashboard.user.name ? dashboard.user.name.split(" ")[0] : "Student";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner section */}
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        {/* Subtle decorative blurs */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-cyan-100 blur-3xl opacity-60"></div>
        <div className="absolute right-32 bottom-0 -mb-16 h-32 w-32 rounded-full bg-violet-100 blur-3xl opacity-60"></div>

        <div className="relative z-10 space-y-2">
          <span className="rounded-xl bg-slate-900 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
            Workspace Overview
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight pt-2">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Here is your personalized roadmap status. Complete topics, solve challenges, and check recommendations to prepare for placements.
          </p>
        </div>
      </section>

      {/* Grid containing Stats & Career Readiness side-by-side */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Quick Stats cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-lg font-bold text-slate-950">Key Analytics</h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Performance Indicators</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.title}
                className="group relative flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-400">{item.title}</span>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-none">{item.value}</h3>
                  <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                </div>
                
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-xl shadow-md text-white shrink-0`}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Core learning progress bar container */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Overall Subject Progress</h3>
                <p className="text-xs text-slate-500">Track aggregate completed roadmap topics</p>
              </div>
              <span className="rounded-xl bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                {dashboard.stats?.progress || 0}% Complete
              </span>
            </div>
            <div className="h-3.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-700"
                style={{ width: `${dashboard.stats?.progress || 0}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Career Readiness Assessment */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-lg font-bold text-slate-950">Placement Audit</h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metrics</span>
          </div>

          <div className={`rounded-3xl border ${readinessStyle.border} ${readinessStyle.bg} p-6 space-y-6 shadow-sm`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Readiness Category</span>
                <h3 className={`text-xl font-extrabold mt-1 ${readinessStyle.text}`}>{careerReadiness.level}</h3>
              </div>
              <span className={`rounded-2xl px-3 py-1.5 text-lg font-black shrink-0 shadow-sm border ${readinessStyle.text} border-white bg-white`}>
                {careerReadiness.careerReadiness}%
              </span>
            </div>

            <div className="space-y-2">
              <div className="h-3 overflow-hidden rounded-full bg-white/60">
                <div
                  className={`h-full rounded-full ${readinessStyle.bar} transition-all duration-700`}
                  style={{ width: `${careerReadiness.careerReadiness}%` }}
                />
              </div>
            </div>

            {/* Micro stats under readiness */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/60 border border-white/40 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Topics</span>
                <span className="text-base font-extrabold text-slate-800">{careerReadiness.topicCompletion}%</span>
              </div>
              <div className="bg-white/60 border border-white/40 p-3 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Quiz Avg</span>
                <span className="text-base font-extrabold text-slate-800">{careerReadiness.quizAverage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations & Recent Activity row */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left / Center 2 Columns: AI Mentor & Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-lg font-bold text-slate-950">AI Mentor Advice</h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommendations</span>
          </div>

          <div className="bg-slate-900 text-white rounded-[32px] p-6 shadow-md relative overflow-hidden flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="absolute left-0 bottom-0 -ml-10 -mb-10 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl"></div>
            
            <div className="space-y-3 relative z-10 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <h3 className="font-extrabold text-lg tracking-tight">{dashboard.aiRecommendation?.title || "Your Next Steps"}</h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {dashboard.aiRecommendation?.reason || "Complete mock exams, practice coding challenges, and finish roadmap topics to improve audit scores."}
              </p>
            </div>
            
            <span className="rounded-2xl bg-white/10 text-white border border-white/10 px-5 py-3 text-xs font-bold shrink-0 self-stretch md:self-auto flex items-center justify-center text-center">
              🚀 Keep Growing Daily
            </span>
          </div>

          {/* Specific placement readiness tasks list */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Action items</h3>
            {careerReadiness.recommendations && careerReadiness.recommendations.length > 0 ? (
              <div className="space-y-3">
                {careerReadiness.recommendations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-amber-50/50 border border-amber-100/50 rounded-2xl p-3.5 text-xs text-amber-900 font-semibold leading-relaxed">
                    <span className="text-base select-none">💡</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-3 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 text-xs text-emerald-950 font-semibold leading-relaxed">
                <span className="text-base select-none">🎉</span>
                <span>Audit score is outstanding! You are fully on track for upcoming placement exams.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Activity Logs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-lg font-bold text-slate-950">Activities</h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent logs</span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            {/* Recent Topics */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Roadmap Progress</h3>
              <div className="space-y-2">
                {dashboard.recentTopics && dashboard.recentTopics.length > 0 ? (
                  dashboard.recentTopics.map((item) => (
                    <div key={item._id} className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-800 leading-snug">{item.topic?.title}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Completed</p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">
                        {new Date(item.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic">No topics marked as completed yet.</p>
                )}
              </div>
            </div>

            {/* Recent Tests */}
            <div className="space-y-3.5 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Mock Exam Scores</h3>
              <div className="space-y-2">
                {dashboard.recentTests && dashboard.recentTests.length > 0 ? (
                  dashboard.recentTests.map((test) => (
                    <div key={test._id} className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 p-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-800 leading-snug">{test.test?.title}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Latest Attempt</p>
                      </div>
                      <span className="rounded-xl bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 text-[10px] font-bold">
                        {test.percentage}%
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic">No placement tests attempted yet.</p>
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