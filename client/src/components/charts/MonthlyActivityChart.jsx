import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

function MonthlyActivityChart({ data }) {
  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <h2 className="text-base font-bold text-white mb-4">
        Monthly Activity Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
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
          <Area
            type="monotone"
            dataKey="topics"
            name="Topics"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="quizzes"
            name="Quizzes"
            stroke="#06B6D4"
            fill="#06B6D4"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyActivityChart;