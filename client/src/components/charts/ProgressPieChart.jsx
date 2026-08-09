import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ProgressPieChart({ completed, total }) {
  const remaining = Math.max(total - completed, 0);

  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Remaining",
      value: remaining,
    },
  ];

  const COLORS = ["#06b6d4", "#1e293b"];

  return (
    <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
      <h2 className="text-base font-bold text-white mb-4">
        Topic Completion Ratio
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={65}
            outerRadius={100}
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#334155",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Legend wrapperStyle={{ color: "#94a3b8" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressPieChart;