import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function SubjectProgressChart({ data }) {
  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <h2 className="text-base font-bold text-white mb-4">
        Subject-wise Progress (%)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="subject" stroke="#64748b" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#334155",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Bar
            dataKey="percentage"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SubjectProgressChart;