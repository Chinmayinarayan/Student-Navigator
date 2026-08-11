import { Sparkles, CheckCircle2, Lightbulb } from "lucide-react";

function AIInsightsCard({ analytics }) {
  // If backend provided rich personalized insights, use them
  const backendInsights = analytics?.insights || [];

  const dynamicInsights = [];

  if (backendInsights.length > 0) {
    dynamicInsights.push(...backendInsights);
  } else {
    // Client-side dynamic fallback using real analytics metrics
    const curriculum = analytics?.topics?.percentage || 0;
    const quizAvg = analytics?.quizzes?.averageScore || 0;
    const codingSolved = analytics?.coding?.solved || 0;
    const streak = analytics?.streak?.current || 0;
    const strongest = analytics?.strongestSubject;
    const weakest = analytics?.weakestSubject;

    if (quizAvg >= 60 && curriculum < 20) {
      dynamicInsights.push(
        `Your quiz accuracy is ${quizAvg}%, but curriculum completion is ${curriculum}%. Focus on completing topics before attempting more quizzes.`
      );
    } else {
      dynamicInsights.push(
        `Curriculum progress is at ${curriculum}%. Completing 2-3 topics weekly will build consistent foundational knowledge.`
      );
    }

    if (codingSolved > 0) {
      dynamicInsights.push(
        `You have solved ${codingSolved} coding problems. Increase consistency by solving 3–5 problems per week.`
      );
    } else {
      dynamicInsights.push(
        `Begin solving coding problems in foundational topics (Arrays, Strings) to boost technical interview readiness.`
      );
    }

    if (weakest && weakest.percentage < 50) {
      dynamicInsights.push(
        `${weakest.subject} has ${weakest.percentage}% completion. Prioritize revising its core topics.`
      );
    }

    if (strongest && strongest.percentage > 0) {
      dynamicInsights.push(
        `Your strongest subject is ${strongest.subject} with ${strongest.percentage}% completion.`
      );
    }

    if (streak >= 3) {
      dynamicInsights.push(
        `🔥 You are on a ${streak}-day learning streak! Keep up the momentum today.`
      );
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-950/60 via-purple-950/50 to-slate-950/60 border border-white/10 text-white rounded-3xl shadow-xl p-6 sm:p-8 backdrop-blur-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              AI Learning Insights & Tips
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Personalized observations and actionable tips based on your real performance
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hidden sm:inline-block">
          Personalized Engine
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 pt-2">
        {dynamicInsights.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/5 rounded-2xl p-4 text-xs text-slate-200 font-medium leading-relaxed flex items-start gap-3 hover:border-cyan-500/20 transition"
          >
            <div className="h-5 w-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsightsCard;