function AIInsightsCard({ analytics }) {

  const insights = [];

  if (analytics.topics.percentage < 30) {
    insights.push(
      "Complete more topics to improve your overall progress."
    );
  }

  if (analytics.quizzes.averageScore < 60) {
    insights.push(
      "Revise recently completed topics before attempting more quizzes."
    );
  }

  if (analytics.tests.averageScore < 60) {
    insights.push(
      "Take additional subject tests to strengthen your concepts."
    );
  }

  if (analytics.coding.solved < 10) {
    insights.push(
      "Solve more coding problems to improve placement readiness."
    );
  }

  if (analytics.assignments.completed < 5) {
    insights.push(
      "Complete pending assignments for better practical understanding."
    );
  }

  if (insights.length === 0) {
    insights.push(
      "Excellent work! Keep maintaining your learning consistency."
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow p-8">

      <h2 className="text-3xl font-bold mb-6">
        🤖 AI Learning Insights
      </h2>

      <div className="space-y-4">

        {insights.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 rounded-xl p-4"
          >
            ✔ {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsightsCard;