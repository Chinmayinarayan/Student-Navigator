import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function QuizPerformanceChart({ data }) {
  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <h2 className="text-base font-bold text-white mb-4">
        Quiz Performance Trends
      </h2>

      {!data || data.length === 0 ? (
        <p className="text-xs text-slate-500 italic py-8 text-center">
          No quiz attempts recorded yet.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="attempt" stroke="#64748b" tick={{ fontSize: 11 }} />
            <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#334155",
                borderRadius: "12px",
                color: "#f8fafc",
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: "#06b6d4", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default QuizPerformanceChart;