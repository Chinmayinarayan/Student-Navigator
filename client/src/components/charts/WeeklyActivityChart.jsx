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
      <h2 className="text-base font-bold text-white mb-4">
        Weekly Activity Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
          <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#334155",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Legend wrapperStyle={{ color: "#94a3b8", fontSize: "11px" }} />
          <Bar dataKey="topics" name="Topics" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="quizzes" name="Quizzes" fill="#06B6D4" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tests" name="Tests" fill="#F97316" radius={[4, 4, 0, 0]} />
          <Bar dataKey="coding" name="Coding" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;