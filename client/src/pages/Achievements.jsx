import { useEffect, useState } from "react";
import api from "../services/api";
import { Trophy, Award, Lock, CheckCircle2 } from "lucide-react";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  const allBadges = [
    {
      name: "First Topic Completed",
      icon: "🎉",
      description: "Completed your first learning topic.",
      requirement: "Complete 1 topic",
    },
    {
      name: "Quiz Master",
      icon: "📝",
      description: "Scored 100% in a quiz.",
      requirement: "Score full marks in any quiz",
    },
    {
      name: "Coding Champion",
      icon: "💻",
      description: "Solved 50 coding problems.",
      requirement: "Solve 50 coding problems",
    },
    {
      name: "Assignment Hero",
      icon: "📚",
      description: "Completed 20 assignments.",
      requirement: "Submit 20 assignments",
    },
    {
      name: "Placement Ready",
      icon: "🚀",
      description: "Completed placement preparation milestones.",
      requirement: "Reach 80%+ Career Readiness",
    },
    {
      name: "Excellent Learner",
      icon: "🏆",
      description: "Maintained excellent learning performance across subjects.",
      requirement: "Complete all core subjects",
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const fetchAchievements = async () => {
      try {
        const res = await api.get("/achievements");
        if (!isMounted) return;
        setAchievements(res.data.achievements || []);
      } catch (error) {
        console.error("Achievement Error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAchievements();

    return () => {
      isMounted = false;
    };
  }, []);

  const checkUnlocked = (name) => {
    return achievements.find((achievement) => achievement.badgeName === name);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Achievements...</h2>
          <p className="mt-2 text-sm text-slate-400">Verifying unlocked milestone badges.</p>
        </div>
      </div>
    );
  }

  const unlockedCount = achievements.length;
  const progress = Math.round((unlockedCount / allBadges.length) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-8 text-white shadow-2xl backdrop-blur-xl">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="absolute right-40 bottom-0 -mb-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
              Milestone Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              🏆 Achievements & Badges
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              Earn badges by completing syllabus topics, acing mock tests, and solving coding problems.
            </p>
          </div>

          {/* Badge Progress summary card */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 w-full sm:w-64 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-400">Badge Progress</span>
              <span className="text-amber-400 font-extrabold">{unlockedCount} / {allBadges.length}</span>
            </div>
            <div className="bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 text-center font-semibold">
              {progress}% Milestones Completed
            </p>
          </div>
        </div>
      </div>

      {/* Badge Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBadges.map((badge) => {
          const unlocked = checkUnlocked(badge.name);

          return (
            <div
              key={badge.name}
              className={`rounded-3xl p-6 border shadow-lg transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
                unlocked
                  ? "bg-slate-950/60 border-emerald-500/30 hover:border-emerald-500/50"
                  : "bg-slate-950/40 border-white/5 opacity-75 hover:opacity-100 hover:border-white/10"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-5xl select-none">{unlocked ? badge.icon : "🔒"}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      unlocked
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-white/5 text-slate-500 border-white/5"
                    }`}
                  >
                    {unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-white">{badge.name}</h2>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-xs text-slate-300">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">
                    Requirement:
                  </span>
                  <span className="font-semibold text-slate-200 mt-0.5 block">
                    {badge.requirement}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                {unlocked ? (
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> Earned
                    </span>
                    {unlocked.createdAt && (
                      <span className="text-[10px] text-slate-500 font-normal">
                        {new Date(unlocked.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Lock className="h-3.5 w-3.5" /> Incomplete
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievements;