import { Link } from "react-router-dom";
import { ChevronRight, Clock } from "lucide-react";

function TopicCard({ topic, index }) {
  const orderNumber = String(topic.order || (index !== undefined ? index + 1 : 1)).padStart(2, "0");

  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Advanced: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  };

  const diffClass = difficultyColors[topic.difficulty] || difficultyColors.Beginner;

  return (
    <Link
      to={`/topics/${topic._id}`}
      className="group flex items-center justify-between bg-slate-950/40 hover:bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 rounded-2xl p-4 transition-all duration-200 shadow-sm hover:shadow-cyan-500/5"
    >
      <div className="flex items-center gap-4 min-w-0">
        <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
          {orderNumber}
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
            {topic.title}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400">
            {topic.estimatedHours && (
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3 h-3 text-slate-500" />
                {topic.estimatedHours} hrs
              </span>
            )}
            {topic.difficulty && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${diffClass}`}>
                {topic.difficulty}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0">
        <span className="hidden sm:inline">View Module</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default TopicCard;