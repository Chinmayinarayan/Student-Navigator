import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

function MonthlyActivityChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Monthly Learning Activity
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="week" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="topics"
            stroke="#10B981"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="quizzes"
            stroke="#3B82F6"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="tests"
            stroke="#F97316"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="coding"
            stroke="#8B5CF6"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="assignments"
            stroke="#EC4899"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyActivityChart;