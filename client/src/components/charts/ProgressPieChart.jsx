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

  const COLORS = ["#22c55e", "#e5e7eb"];

  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Topic Completion
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={110}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ProgressPieChart;