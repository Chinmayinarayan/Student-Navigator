import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

function WeeklyActivityChart({ data }) {
  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-white">
            Weekly Activity Breakdown
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Activity counts by day across all learning categories
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
          <YAxis stroke="#64748b" tick={{ fontSize: 11 }} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#334155",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Legend wrapperStyle={{ color: "#94a3b8", fontSize: "11px", paddingTop: "8px" }} />
          <Bar dataKey="topics" name="Topics" fill="#10B981" radius={[3, 3, 0, 0]} />
          <Bar dataKey="quizzes" name="Quizzes" fill="#06B6D4" radius={[3, 3, 0, 0]} />
          <Bar dataKey="tests" name="Tests" fill="#F59E0B" radius={[3, 3, 0, 0]} />
          <Bar dataKey="coding" name="Coding" fill="#8B5CF6" radius={[3, 3, 0, 0]} />
          <Bar dataKey="assignments" name="Assignments" fill="#EC4899" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;