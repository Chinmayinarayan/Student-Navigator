import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
  Briefcase,
  Layers,
  ChevronRight,
  Code2,
  FolderGit2,
  BookOpen,
} from "lucide-react";

function CareerReadinessSection({ careerReadiness }) {
  const [selectedCareerId, setSelectedCareerId] = useState(
    careerReadiness?.careerId || ""
  );

  if (!careerReadiness) {
    return (
      <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-white shadow-xl text-center space-y-4">
        <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
          <Compass className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-black">🎯 Career Readiness</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Choose a career roadmap to view career-specific readiness, target skill benchmarks, and personalized milestones.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold text-sm text-white shadow-lg hover:shadow-cyan-500/20 transition hover:scale-105"
        >
          <span>Choose a Career Roadmap</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const {
    careerTitle,
    category,
    readinessScore,
    readinessStatus,
    skillsBreakdown,
    nextRecommendedAction,
    hasUserSelectedCareer,
    availableCareers,
  } = careerReadiness;

  // Category badge color
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "Software Development":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "AI & Data":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Cloud & Infrastructure":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Security":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="bg-slate-950/60 border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 text-white backdrop-blur-xl space-y-6">
      {/* Header & Career Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
              <Target className="h-4 w-4 text-cyan-400" /> Career Navigation
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getCategoryColor(
                category
              )}`}
            >
              {category}
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              🎯 Career Readiness
            </h2>
          </div>

          <p className="text-sm font-semibold text-slate-300 mt-1">
            Current Career:{" "}
            <span className="text-cyan-400 font-bold">{careerTitle}</span>
          </p>
        </div>

        {/* Career switcher / Link */}
        <div className="flex items-center gap-3">
          <Link
            to="/careers"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition flex items-center gap-1.5"
          >
            <span>Browse Roadmaps</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Readiness Gauge & Summary */}
      <div className="grid lg:grid-cols-3 gap-6 items-center">
        {/* Readiness Score Card */}
        <div className="bg-slate-900/80 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-inner space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Career Readiness Score
          </span>
          <div className="relative h-32 w-32 rounded-full border-8 border-cyan-500/20 bg-slate-950 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400">
                {readinessScore}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {readinessStatus}
            </span>
          </div>
        </div>

        {/* Next Recommended Action */}
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-950/50 via-slate-900/70 to-slate-950/80 border border-cyan-500/20 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="h-5 w-5" />
            <h3 className="text-sm font-black uppercase tracking-wider text-cyan-400">
              Next Recommended Action
            </h3>
          </div>

          <div className="bg-slate-950/60 border border-white/10 rounded-xl p-4 flex items-start gap-3.5">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
              ⚡
            </div>
            <div>
              <p className="text-base font-bold text-white leading-snug">
                {nextRecommendedAction}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Prioritized dynamically based on your curriculum gaps and target {careerTitle} prerequisites.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span>
              {hasUserSelectedCareer
                ? "Aligned with your active career profile."
                : "Suggested for your current progress trajectory."}
            </span>
            <Link
              to="/careers"
              className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              View Full Pathway <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Career-Specific Skill & Subject Breakdown */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-400" />
            {careerTitle} Skill & Subject Breakdown
          </h3>
          <span className="text-xs text-slate-500">
            {skillsBreakdown?.length || 0} Target Competencies
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {skillsBreakdown &&
            skillsBreakdown.map((item, index) => {
              const progress = item.progress || 0;
              const isHigh = progress >= 75;
              const isMed = progress >= 40;

              return (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 hover:border-white/15 transition space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white truncate">
                      {item.name}
                    </span>
                    <span
                      className={`text-xs font-black shrink-0 ${
                        isHigh
                          ? "text-emerald-400"
                          : isMed
                          ? "text-cyan-400"
                          : "text-slate-400"
                      }`}
                    >
                      {progress}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isHigh
                          ? "bg-emerald-500"
                          : isMed
                          ? "bg-cyan-500"
                          : "bg-indigo-500/60"
                      }`}
                      style={{ width: `${Math.max(progress, 3)}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CareerReadinessSection;
