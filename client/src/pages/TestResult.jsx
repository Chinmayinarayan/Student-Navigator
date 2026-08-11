import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTestResult } from "../services/testApi";

// Format seconds to "Xm Ys"
function formatTime(seconds) {
  if (!seconds || seconds <= 0) return "—";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function TestResult() {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchResult = async () => {
      try {
        const data = await getTestResult(id);
        if (!isMounted) return;
        setResult(data.result);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchResult();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Result...</h2>
          <p className="mt-2 text-sm text-slate-400">Retrieving test metrics.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center p-8 bg-slate-950/40 border border-white/5 rounded-2xl shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-red-400">Result not found</h2>
        <Link to="/tests" className="inline-block text-sm font-semibold text-cyan-400 hover:underline">
          ← Back to Tests
        </Link>
      </div>
    );
  }

  const passingScore  = result.test?.passingScore ?? 60;
  const passed        = result.passed ?? result.percentage >= passingScore;
  const correctAns    = result.correctAnswers ?? result.score ?? 0;
  const incorrectAns  = result.incorrectAnswers ?? (result.totalQuestions - correctAns - (result.unanswered ?? 0));
  const unanswered    = result.unanswered ?? 0;
  const timeTaken     = result.timeTaken ?? 0;
  const topicPerf     = result.topicPerformance || [];

  // Identify weak topics (< 50% correct)
  const weakTopics = topicPerf.filter(
    (t) => t.total > 0 && (t.correct / t.total) < 0.5
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn text-slate-200">
      {/* Back */}
      <Link to="/tests" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-200 transition tracking-wider uppercase">
        ← Back to Tests
      </Link>

      {/* Main result panel */}
      <section className="bg-slate-950/40 rounded-[28px] border border-white/5 p-8 shadow-2xl backdrop-blur-xl text-center space-y-6">
        <div className="space-y-2">
          <span className="text-5xl">{passed ? "🏆" : "📚"}</span>
          <h1 className="text-3xl font-black text-white leading-tight">
            {passed ? "Test Passed!" : "Keep Practicing!"}
          </h1>
          <p className="text-sm font-semibold text-cyan-400">{result.test?.title}</p>
          {result.test?.category && (
            <span className="inline-block rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-bold text-purple-400">
              {result.test.category}
            </span>
          )}
        </div>

        {/* Score big display */}
        <div className="max-w-sm mx-auto py-2">
          <p className="text-7xl font-black font-mono text-white leading-none">
            {result.percentage}%
          </p>
          <p className={`mt-3 text-base font-bold ${passed ? "text-emerald-400" : "text-rose-400"}`}>
            {passed ? "🎉 Passed — above the passing threshold!" : `❌ Below passing threshold (${passingScore}%)`}
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-4 border-t border-white/5">
          {[
            { label: "Score", value: `${result.score} / ${result.totalQuestions}`, color: "text-white" },
            { label: "Correct", value: correctAns, color: "text-emerald-400" },
            { label: "Incorrect", value: incorrectAns, color: "text-rose-400" },
            { label: "Unanswered", value: unanswered, color: "text-amber-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">{stat.label}</span>
              <p className={`text-2xl font-black mt-1 ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Time Taken</span>
            <p className="text-xl font-bold text-white mt-1">{formatTime(timeTaken)}</p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Passing Score</span>
            <p className="text-xl font-bold text-cyan-400 mt-1">{passingScore}%</p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Status</span>
            <p className={`text-lg font-black mt-1 ${passed ? "text-emerald-400" : "text-rose-400"}`}>
              {passed ? "PASSED ✅" : "FAILED ❌"}
            </p>
          </div>
        </div>
      </section>

      {/* Topic-wise Performance */}
      {topicPerf.length > 0 && (
        <section className="bg-slate-950/40 rounded-[28px] border border-white/5 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
          <h2 className="text-lg font-black text-white">📊 Topic-wise Performance</h2>
          <div className="space-y-4">
            {topicPerf.map((tp) => {
              const pct = tp.total > 0 ? Math.round((tp.correct / tp.total) * 100) : 0;
              const isWeak = pct < 50;
              return (
                <div key={tp.topic} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300 truncate mr-4">{tp.topic}</span>
                    <span className={isWeak ? "text-rose-400" : "text-emerald-400"}>
                      {tp.correct}/{tp.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${isWeak ? "bg-gradient-to-r from-rose-500 to-amber-500" : "bg-gradient-to-r from-emerald-500 to-teal-400"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Weak Topics & Recommendations */}
      {weakTopics.length > 0 && (
        <section className="bg-amber-500/10 rounded-[28px] border border-amber-500/20 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
          <h2 className="text-lg font-black text-amber-300">⚠️ Topics to Revise</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {weakTopics.map((t) => {
              const pct = Math.round((t.correct / t.total) * 100);
              return (
                <div key={t.topic} className="bg-slate-900/80 rounded-2xl border border-amber-500/20 p-4 space-y-1">
                  <p className="text-sm font-bold text-white truncate">{t.topic}</p>
                  <p className="text-xs text-amber-300 font-semibold">
                    Only {pct}% correct ({t.correct}/{t.total}) — needs revision
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-amber-200/80 font-medium">
            💡 Review these topics in the study materials before retaking the test.
          </p>
        </section>
      )}

      {/* Covered Topics from test */}
      {result.test?.topics?.length > 0 && (
        <section className="bg-slate-950/40 rounded-[28px] border border-white/5 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-3">
          <h2 className="text-lg font-black text-white">📚 Topics Covered in This Test</h2>
          <div className="flex flex-wrap gap-2">
            {result.test.topics.map((t) => (
              <span key={t} className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 text-xs font-bold text-purple-300">
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 justify-center pb-4">
        {result.test?.allowRetake && (
          <Link
            to={`/tests/${result.test?._id}`}
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold px-8 py-3.5 shadow-lg shadow-violet-500/20 transition text-sm active:scale-[0.99]"
          >
            🔄 Retake Test
          </Link>
        )}
        <Link
          to="/tests"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 shadow-lg shadow-cyan-500/20 transition text-sm active:scale-[0.99]"
        >
          Explore More Tests
        </Link>
        <Link
          to="/analytics"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-bold px-8 py-3.5 shadow-sm transition text-sm"
        >
          📈 View Analytics
        </Link>
      </div>
    </div>
  );
}

export default TestResult;