import { useEffect, useState } from "react";
import { getCodingProblemProgress, toggleCodingProblem } from "../services/codingProblemApi";
import { Terminal, Code, Database, Server, Wrench } from "lucide-react";

function CodingProblemCard({ problem }) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadProgress = async () => {
      try {
        const data = await getCodingProblemProgress(problem._id);
        if (!isMounted) return;
        setCompleted(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadProgress();
    return () => {
      isMounted = false;
    };
  }, [problem._id]);

  const handleToggle = async () => {
    try {
      const status = await toggleCodingProblem(problem._id);
      setCompleted(status);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return null;

  const difficultyColor = {
    Easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Hard: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  }[problem.difficulty] || "text-slate-400 bg-slate-500/10 border-slate-500/20";

  const importanceBadge = {
    Essential: { label: "⭐ Essential", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
    Important: { label: "🔹 Important", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    Optional: { label: "⚪ Optional / Advanced", color: "text-slate-400 bg-slate-800 border-slate-700" },
  }[problem.placementImportance || "Essential"];

  const typeConfig = {
    coding: { label: "Coding", icon: Code, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    implementation: { label: "Implementation", icon: Terminal, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    SQL: { label: "SQL Query", icon: Database, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    lab: { label: "Lab Task", icon: Server, color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
    debugging: { label: "Debugging", icon: Wrench, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" }
  }[problem.problemType || "coding"] || { label: "Practice", icon: Code, color: "text-slate-400 bg-slate-800 border-slate-700" };

  const TypeIcon = typeConfig.icon;

  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md hover:border-white/10 transition duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="text-base font-bold text-slate-100">
              {problem.title}
            </h3>

            {/* Type badge */}
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-lg border flex items-center gap-1 ${typeConfig.color}`}>
              <TypeIcon className="w-3 h-3" />
              {typeConfig.label}
            </span>

            {/* Placement Importance */}
            {importanceBadge && (
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-lg border ${importanceBadge.color}`}>
                {importanceBadge.label}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {problem.description}
          </p>
        </div>

        <div className="flex sm:flex-col items-end gap-2 shrink-0">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-xl border uppercase tracking-wider ${difficultyColor}`}>
            {problem.difficulty}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap text-[10px] font-bold text-slate-400">
        <span className="bg-white/5 px-2.5 py-1 rounded-xl border border-white/5 uppercase tracking-wider text-slate-300">
          {problem.platform}
        </span>

        {problem.language && (
          <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-xl border border-cyan-500/20 font-mono">
            {problem.language}
          </span>
        )}

        {problem.environment && (
          <span className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded-xl border border-white/5">
            ⚙ {problem.environment}
          </span>
        )}

        <span className="bg-white/5 px-2.5 py-1 rounded-xl border border-white/5">
          ⏱ {problem.estimatedMinutes} Mins
        </span>

        {problem.tags && problem.tags.slice(0, 3).map((tag, idx) => (
          <span key={idx} className="bg-slate-900 px-2 py-1 rounded-xl border border-white/5 text-slate-500">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center gap-4">
        <a
          href={problem.problemUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition text-xs font-bold flex items-center gap-1"
        >
          Solve Challenge <span className="text-sm">↗</span>
        </a>

        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition ${
            completed
              ? "bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/15"
              : "bg-slate-800 hover:bg-slate-700 border border-white/5"
          }`}
        >
          {completed ? "Solved ✓" : "Mark Solved"}
        </button>
      </div>
    </div>
  );
}

export default CodingProblemCard;