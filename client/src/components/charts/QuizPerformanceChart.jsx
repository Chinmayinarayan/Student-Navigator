import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Calendar, BookOpen, Award, CheckCircle2 } from "lucide-react";

// Custom rich tooltip for quiz points
const CustomQuizTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl text-white space-y-2 min-w-[210px]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
            {data.attempt}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {data.score}%
          </span>
        </div>

        {data.quizTitle && data.quizTitle !== data.attempt && (
          <p className="text-xs font-semibold text-slate-200 truncate">
            {data.quizTitle}
          </p>
        )}

        <div className="space-y-1.5 text-xs text-slate-300">
          {data.subject && (
            <div className="flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span className="text-slate-400">Subject:</span>
              <span className="font-semibold text-white truncate">
                {data.subject}
              </span>
            </div>
          )}

          {data.topic && (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-400">Topic:</span>
              <span className="font-semibold text-white truncate">
                {data.topic}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span className="text-slate-400">Date:</span>
            <span className="font-medium text-slate-200">{data.date}</span>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-white/5">
            <Award className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            <span className="text-slate-400">Score:</span>
            <span className="font-black text-cyan-400">{data.score}%</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

function QuizPerformanceChart({ data }) {
  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-white">
            Quiz Performance Trends
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Chronological performance trajectory across all completed quizzes
          </p>
        </div>
        {data && data.length > 0 && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {data.length} {data.length === 1 ? "Quiz" : "Quizzes"} Recorded
          </span>
        )}
      </div>

      {!data || data.length === 0 ? (
        <div className="py-12 text-center text-slate-500">
          <p className="text-xs italic">No quiz attempts recorded yet.</p>
          <p className="text-[11px] text-slate-600 mt-1">
            Complete subject quizzes to generate performance trends.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="attempt" stroke="#64748b" tick={{ fontSize: 11 }} />
            <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
            <Tooltip content={<CustomQuizTooltip />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: "#06b6d4", r: 5, stroke: "#0f172a", strokeWidth: 2 }}
              activeDot={{ r: 7, fill: "#38bdf8", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default QuizPerformanceChart;