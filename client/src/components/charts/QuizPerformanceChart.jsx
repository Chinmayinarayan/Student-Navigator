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
    <div className="bg-white rounded-2xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Quiz Performance
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500">
          No quiz attempts yet.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="attempt" />

            <YAxis
              domain={[0, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}

export default QuizPerformanceChart;