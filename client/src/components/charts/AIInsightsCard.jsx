import { Sparkles } from "lucide-react";

function AIInsightsCard({ analytics }) {
  const insights = [];

  if (analytics.topics.percentage < 30) {
    insights.push(
      "Complete more topics to improve your overall curriculum progress."
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
    <div className="bg-gradient-to-r from-indigo-950/60 via-purple-950/50 to-slate-950/60 border border-white/10 text-white rounded-3xl shadow-xl p-6 sm:p-8 backdrop-blur-xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Sparkles className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold">
          AI Learning Insights & Tips
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 pt-2">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/5 rounded-2xl p-4 text-xs text-slate-300 font-medium leading-relaxed flex items-start gap-2.5"
          >
            <span className="text-cyan-400 font-bold">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsightsCard;