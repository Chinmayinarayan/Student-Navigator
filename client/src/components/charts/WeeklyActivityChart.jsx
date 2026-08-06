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
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Weekly Learning Activity
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="topics"
            name="Topics"
            fill="#10B981"
          />

          <Bar
            dataKey="quizzes"
            name="Quizzes"
            fill="#3B82F6"
          />

          <Bar
            dataKey="tests"
            name="Tests"
            fill="#F97316"
          />

          <Bar
            dataKey="coding"
            name="Coding"
            fill="#8B5CF6"
          />

          <Bar
            dataKey="assignments"
            name="Assignments"
            fill="#EC4899"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;