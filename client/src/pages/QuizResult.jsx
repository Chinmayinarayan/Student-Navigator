import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { getQuizResult } from "../services/quizApi";

function QuizResult() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadResult = async () => {
      try {
        const data = await getQuizResult(id);
        if (!isMounted) return;
        setResult(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadResult();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Result...</h2>
          <p className="mt-2 text-sm text-slate-500">Retrieving quiz metrics.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
        <h2 className="text-xl font-bold text-red-500">Result not found</h2>
        <Link to="/subjects" className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
          ← Back to subjects
        </Link>
      </div>
    );
  }

  const correctAnswers = result.answers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = result.answers.length - correctAnswers;
  const passed = result.percentage >= 40;

  return (
    <div className="max-w-4xl mx-auto space-y-8 text-slate-200 animate-fadeIn">
      {/* Navigation */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-xs font-extrabold text-slate-400 hover:text-slate-200 transition tracking-wider uppercase"
        >
          ← Go Back
        </button>
      </div>

      {/* Main Stats Panel */}
      <section className="bg-slate-950/40 rounded-[28px] border border-white/5 p-8 shadow-sm text-center space-y-6 backdrop-blur-xl">
        <div className="space-y-2">
          <span className="text-5xl">📝</span>
          <h1 className="text-3xl font-black text-white leading-tight">{result.quiz?.title || "Concept Check"}</h1>
          <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Concept Check Result</p>
        </div>

        <div className="max-w-md mx-auto py-4">
          <p className="text-6xl font-black font-mono text-white leading-none">{result.percentage}%</p>
          <p className={`mt-3 text-lg font-bold ${passed ? "text-emerald-400" : "text-rose-400"}`}>
            {passed ? "Concept Quiz Passed! 🎉" : "Requires Revision 📚"}
          </p>
        </div>

        {/* Detailed stats grid */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 border-t border-white/5">
          <div className="bg-slate-900/40 border border-white/5 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Score</span>
            <p className="text-2xl font-bold text-white mt-1">
              {result.score} <span className="text-xs font-semibold text-slate-500">/ {result.totalMarks}</span>
            </p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Correct</span>
            <p className="text-2xl font-bold text-emerald-400 mt-1">{correctAnswers}</p>
          </div>

          <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Incorrect</span>
            <p className="text-2xl font-bold text-rose-400 mt-1">{wrongAnswers}</p>
          </div>
        </div>
      </section>

      {/* Answer Review Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-white/5 pb-3">Answer Review</h2>
        <div className="space-y-4">
          {result.answers.map((answer, index) => (
            <div
              key={index}
              className={`bg-slate-950/40 rounded-3xl border p-6 shadow-sm space-y-4 ${
                answer.isCorrect ? "border-emerald-500/20" : "border-rose-500/20"
              }`}
            >
              <h3 className="font-bold text-white leading-snug">
                Question {index + 1}: {answer.questionText || `Question ID: ${answer.questionIndex}`}
              </h3>
              
              <div className="grid gap-3 sm:grid-cols-2 text-sm font-semibold">
                <div className={`p-4 rounded-2xl border ${
                  answer.isCorrect 
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" 
                    : "bg-rose-500/10 border-rose-500/20 text-rose-300"
                }`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70 mb-1">Your Answer</span>
                  <span>{answer.selectedAnswer || "Not Attempted"}</span>
                </div>

                <div className="p-4 rounded-2xl border bg-slate-900/60 border-white/5 text-slate-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70 mb-1">Correct Answer</span>
                  <span>{answer.correctAnswer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <button
          onClick={() => navigate(-1)}
          className="rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold px-8 py-3.5 shadow-sm text-sm transition"
        >
          Retake Quiz
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-white font-bold px-8 py-3.5 shadow-sm text-sm transition"
        >
          Back To Dashboard
        </button>
      </div>
    </div>
  );
}

export default QuizResult;