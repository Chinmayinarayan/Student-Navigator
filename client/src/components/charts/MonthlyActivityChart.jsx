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
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-white">
            Monthly Activity Trends
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Weekly distribution of learning output for the current month
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
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
          <Area
            type="monotone"
            dataKey="topics"
            name="Topics"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.25}
          />
          <Area
            type="monotone"
            dataKey="quizzes"
            name="Quizzes"
            stroke="#06B6D4"
            fill="#06B6D4"
            fillOpacity={0.25}
          />
          <Area
            type="monotone"
            dataKey="coding"
            name="Coding"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="tests"
            name="Tests"
            stroke="#F59E0B"
            fill="#F59E0B"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="assignments"
            name="Assignments"
            stroke="#EC4899"
            fill="#EC4899"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyActivityChart;