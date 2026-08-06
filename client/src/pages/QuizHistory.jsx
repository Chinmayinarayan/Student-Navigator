import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyQuizResults } from "../services/quizApi";

function QuizHistory() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadResults = async () => {
      try {
        const data = await getMyQuizResults();
        if (!isMounted) return;
        setResults(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadResults();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <h2 className="text-xl font-semibold text-slate-200 mt-6">Loading Quiz History...</h2>
          <p className="mt-2 text-sm text-slate-500">Retrieving past quiz attempts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn text-slate-200">
      {/* Breadcrumb */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase text-left"
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 backdrop-blur-xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">History Log</p>
          <h1 className="mt-2 text-3xl font-black text-white">Quiz History</h1>
          <p className="mt-2 text-sm text-slate-400 font-medium">
            Monitor and review your performance across all concept check quizzes.
          </p>
        </div>
        <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-extrabold text-cyan-400 uppercase shrink-0 self-start sm:self-auto">
          {results.length} Attempts
        </div>
      </section>

      {/* History List */}
      <div>
        {results.length === 0 ? (
          <div className="rounded-3xl border border-white/5 bg-slate-950/20 p-12 text-center">
            <h2 className="text-xl font-bold text-slate-400">No quizzes attempted yet</h2>
            <p className="mt-2 text-sm text-slate-500">Practice questions inside topic roadmap items to see logs here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result) => {
              const passed = result.percentage >= 40;
              
              return (
                <div
                  key={result._id}
                  className="bg-slate-950/40 rounded-3xl border border-white/5 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-white/10 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-bold text-white leading-snug">{result.quiz?.title || "Quiz"}</h2>
                      <span className={`rounded-xl px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase border ${
                        passed
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                      }`}>
                        {passed ? "Passed" : "Practice"}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-semibold">
                      <div>
                        Score: <span className="text-white font-bold">{result.score} / {result.totalMarks}</span>
                      </div>
                      <div>
                        Percentage: <span className="text-cyan-400 font-bold">{result.percentage}%</span>
                      </div>
                      <div>
                        Date: <span className="text-slate-400 font-bold">{new Date(result.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => navigate(`/quiz-result/${result._id}`)}
                      className="w-full md:w-auto rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3 text-xs transition shadow-sm"
                    >
                      View Full Analysis
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizHistory;