import { useEffect, useState } from "react";
import { getCodingProblemProgress, toggleCodingProblem } from "../services/codingProblemApi";

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

  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md hover:border-white/10 transition duration-300">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-100">
            {problem.title}
          </h3>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            {problem.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2.5 flex-wrap text-[10px] font-bold text-slate-400">
        <span className="bg-white/5 px-2.5 py-1 rounded-xl border border-white/5 uppercase tracking-wider">
          {problem.platform}
        </span>
        <span className="bg-white/5 px-2.5 py-1 rounded-xl border border-white/5">
          ⏱ {problem.estimatedMinutes} Mins
        </span>
      </div>

      <div className="mt-6 flex justify-between items-center gap-4">
        <a
          href={problem.problemUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition text-xs font-bold"
        >
          Solve Challenge →
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