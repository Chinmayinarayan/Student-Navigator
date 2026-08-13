import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {
  getTestById,
  submitTest,
} from "../services/testApi";

function TakeTest() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [emptyTestError, setEmptyTestError] = useState(false);

  // Track elapsed time from when the test started
  const startTimeRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTest = async () => {
      try {
        const data = await getTestById(id);
        if (!isMounted) return;

        const fetchedTest = data.test;

        // Guard: reject tests with no questions
        if (!fetchedTest.questions || fetchedTest.questions.length === 0) {
          setEmptyTestError(true);
          setLoading(false);
          return;
        }

        setTest(fetchedTest);
        setTimeLeft((fetchedTest.duration ?? 30) * 60);
        startTimeRef.current = Date.now();
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTest();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Countdown timer
  useEffect(() => {
    if (!test || timeLeft <= 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [test, timeLeft]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = useCallback(async () => {
    if (!test || submitting) return;

    try {
      setSubmitting(true);

      // Calculate time taken in seconds
      const timeTaken = startTimeRef.current
        ? Math.round((Date.now() - startTimeRef.current) / 1000)
        : 0;

      const data = await submitTest(id, answers, timeTaken);
      navigate(`/tests/result/${data.result._id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }, [answers, navigate, id, test, submitting]);

  // Auto-submit when timer expires
  useEffect(() => {
    if (!test || timeLeft !== 0 || submitting) return;

    const submitWhenExpired = async () => {
      await handleSubmit();
    };

    submitWhenExpired();
  }, [timeLeft, test, submitting, handleSubmit]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Test...</h2>
          <p className="mt-2 text-sm text-slate-400">Preparing test questions.</p>
        </div>
      </div>
    );
  }

  // Empty test guard
  if (emptyTestError) {
    return (
      <div className="max-w-md mx-auto text-center p-8 bg-slate-950/40 border border-white/5 rounded-[28px] shadow-2xl backdrop-blur-xl space-y-4">
        <span className="text-5xl">⚠️</span>
        <h2 className="text-xl font-bold text-white">Test Not Available</h2>
        <p className="text-sm text-slate-400">
          This test has no questions yet. Questions are currently being prepared.
        </p>
        <Link
          to="/tests"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 text-sm shadow-md transition"
        >
          ← Back to Tests
        </Link>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="text-center p-8 bg-slate-950/40 border border-white/5 rounded-2xl shadow-sm">
        <h2 className="text-xl font-bold text-red-400">Test not found</h2>
        <Link to="/tests" className="mt-3 inline-block text-sm font-bold text-cyan-400 hover:underline">
          ← Back to Tests
        </Link>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isTimeCritical = timeLeft < 120; // last 2 minutes

  const answeredCount = Object.keys(answers).length;
  const totalQ = test.questions.length;

  return (
    <div className="space-y-8 animate-fadeIn text-slate-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/tests"
          className="text-xs font-bold text-slate-400 hover:text-slate-200 transition tracking-wider uppercase flex items-center gap-1.5"
        >
          ← Exit Exam
        </Link>

        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
          Progress: {answeredCount} / {totalQ} Answered
        </span>
      </div>

      {/* Header and Timer */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-bold text-purple-400">
              {test.category || "Mock Placement Test"}
            </span>
            {test.difficulty && (
              <span className="rounded-xl bg-slate-900 border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                {test.difficulty}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-black text-white">{test.title}</h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{test.description}</p>

          {/* Progress indicator */}
          <div className="flex items-center gap-3 pt-2 max-w-md">
            <div className="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / totalQ) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-cyan-400 whitespace-nowrap">
              {answeredCount} / {totalQ} answered
            </span>
          </div>
        </div>

        {/* Timer Card */}
        <div className={`flex flex-col items-center justify-center px-8 py-4 rounded-2xl self-start shrink-0 shadow-sm border ${
          isTimeCritical
            ? "bg-rose-500/15 border-rose-500/30 text-rose-400 animate-pulse"
            : "bg-slate-900/80 border-white/10 text-slate-200"
        }`}>
          <span className={`text-[10px] font-extrabold uppercase tracking-wider ${isTimeCritical ? "text-rose-400" : "text-slate-400"}`}>
            Time Remaining
          </span>
          <span className="text-3xl font-black font-mono mt-1 text-white">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
          {isTimeCritical && (
            <span className="text-[10px] font-bold text-rose-400 mt-1">⚠️ Time running out!</span>
          )}
        </div>
      </section>

      {/* Questions list */}
      <div className="space-y-6">
        {test.questions.map((question, index) => {
          const isAnswered = !!answers[question._id];

          return (
            <div
              key={question._id}
              id={`question-${index + 1}`}
              className={`bg-slate-950/40 rounded-3xl border p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-5 transition duration-300 ${
                isAnswered ? "border-cyan-500/30" : "border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition ${
                  isAnswered ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20" : "bg-slate-900 border border-white/10 text-slate-400"
                }`}>
                  {index + 1}
                </span>
                <h2 className="text-lg font-bold text-white leading-relaxed pt-0.5">
                  {question.question}
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 pt-1 pl-0 sm:pl-12">
                {question.options.map((option) => {
                  const isSelected = answers[question._id] === option;

                  return (
                    <label
                      key={option}
                      className={`flex items-center gap-3.5 cursor-pointer p-4 rounded-2xl border text-sm font-semibold transition duration-200 select-none ${
                        isSelected
                          ? "bg-cyan-500/20 border-cyan-500 text-white shadow-inner"
                          : "bg-slate-900/60 border-white/5 text-slate-300 hover:bg-slate-800/60 hover:border-white/15"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question._id}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswer(question._id, option)}
                        className="sr-only"
                      />
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition ${
                        isSelected ? "border-cyan-400 bg-cyan-400" : "border-slate-600 bg-slate-900"
                      }`}>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Action */}
      <div className="rounded-[28px] border border-white/5 bg-slate-950/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">
          <span className="font-bold text-white">{answeredCount}</span> of{" "}
          <span className="font-bold text-white">{totalQ}</span> questions answered.
          {answeredCount < totalQ && (
            <span className="text-amber-400 font-semibold"> ({totalQ - answeredCount} unanswered)</span>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black px-10 py-4 shadow-lg shadow-emerald-500/20 transition active:scale-[0.99] disabled:opacity-50 whitespace-nowrap"
        >
          {submitting ? "Submitting..." : "Submit Test Answers 🚀"}
        </button>
      </div>
    </div>
  );
}

export default TakeTest;