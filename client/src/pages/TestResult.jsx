import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTestResult } from "../services/testApi";

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
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Loading Result...</h2>
          <p className="mt-2 text-sm text-slate-500">Retrieving test metrics.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-bold text-red-600">Result not found</h2>
        <Link to="/tests" className="mt-4 inline-block text-sm font-semibold text-cyan-600 hover:underline">
          ← Back to Tests
        </Link>
      </div>
    );
  }

  const passed = result.percentage >= 50;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back button */}
      <div>
        <Link to="/tests" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition tracking-wider uppercase">
          ← Back to Tests
        </Link>
      </div>

      {/* Main score details panel */}
      <section className="bg-white rounded-[28px] border border-slate-200 p-8 shadow-sm text-center space-y-6">
        <div className="space-y-2">
          <span className="text-5xl">🏆</span>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">Test Completed!</h1>
          <p className="text-sm font-semibold text-slate-500">{result.test.title}</p>
        </div>

        <div className="max-w-md mx-auto py-6">
          <p className="text-6xl font-black font-mono text-slate-900 leading-none">{result.percentage}%</p>
          <p className={`mt-3 text-lg font-bold ${passed ? "text-emerald-600" : "text-rose-600"}`}>
            {passed ? "Exam Passed Successfully! 🎉" : "Requires Practice 📚"}
          </p>
        </div>

        {/* Detailed Stats cards */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              {result.score} <span className="text-xs font-semibold text-slate-400">/ {result.totalQuestions}</span>
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Questions</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">{result.totalQuestions}</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</span>
            <p className={`text-sm font-bold mt-2 ${passed ? "text-emerald-700" : "text-rose-700"}`}>
              {passed ? "PASSED" : "FAILED"}
            </p>
          </div>
        </div>

        <div className="pt-6">
          <Link
            to="/tests"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 shadow-sm hover:shadow transition text-sm"
          >
            Explore More Tests
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TestResult;