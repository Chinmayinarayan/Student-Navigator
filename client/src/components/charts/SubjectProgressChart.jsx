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
    <div className="bg-white rounded-2xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Subject Progress
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="subject" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Bar
            dataKey="percentage"
            fill="#3b82f6"
            radius={[5, 5, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default SubjectProgressChart;