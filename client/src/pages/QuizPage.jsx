import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import {
  getQuizByTopic,
  submitQuiz,
} from "../services/quizApi";

function QuizPage() {
  const { topicId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isRetry = searchParams.get("retry") === "true";

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadQuiz = async () => {
      try {
        setLoading(true);
        const data = await getQuizByTopic(topicId, { retry: isRetry });
        if (!isMounted) return;

        setQuiz(data);
        setAnswers({});
        setTimeLeft((data.duration ?? 10) * 60);
      } catch (error) {
        console.error("Failed to load quiz:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadQuiz();

    return () => {
      isMounted = false;
    };
  }, [topicId, isRetry]);

  useEffect(() => {
    if (!quiz || timeLeft <= 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [quiz, timeLeft]);

  const handleSubmit = useCallback(async () => {
    if (!quiz || submitting) return;

    try {
      setSubmitting(true);
      const result = await submitQuiz(quiz._id, answers, quiz.attemptId);
      navigate(`/quiz-result/${result._id}`);
    } catch (error) {
      console.error("Failed to submit quiz:", error);
    } finally {
      setSubmitting(false);
    }
  }, [answers, navigate, quiz, submitting]);

  useEffect(() => {
    if (!quiz || timeLeft !== 0 || submitting) return;

    const submitWhenExpired = async () => {
      await handleSubmit();
    };

    submitWhenExpired();
  }, [handleSubmit, quiz, submitting, timeLeft]);

  const handleOptionChange = (questionIdentifier, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIdentifier]: option,
    }));
  };

  const getTypeBadgeStyle = (type) => {
    switch (type) {
      case "logical":
      case "reasoning":
        return "bg-amber-500/10 border-amber-500/30 text-amber-300";
      case "application":
      case "scenario":
        return "bg-cyan-500/10 border-cyan-500/30 text-cyan-300";
      case "coding":
      case "calculation":
      case "debugging":
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
      default:
        return "bg-purple-500/10 border-purple-500/30 text-purple-300";
    }
  };

  const getDifficultyBadgeStyle = (diff) => {
    switch (diff) {
      case "easy":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "hard":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Generating Dynamic 10-Question Quiz...</h2>
          <p className="mt-2 text-sm text-slate-500">Selecting randomized concepts and problem types.</p>
        </div>
      </div>
    );
  }

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
        <h2 className="text-xl font-bold text-red-500">Quiz not available</h2>
        <button onClick={() => navigate(-1)} className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
          ← Go Back
        </button>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const answeredCount = Object.keys(answers).length;
  const totalQuestionsCount = quiz.questions.length;

  return (
    <div className="space-y-8 animate-fadeIn text-slate-200">
      {/* Top navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-xs font-extrabold text-slate-400 hover:text-slate-200 transition tracking-wider uppercase flex items-center gap-1.5"
        >
          ← Back to topic
        </button>

        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
          Progress: {answeredCount} / {totalQuestionsCount} Answered
        </span>
      </div>

      {/* Header and Timer Card */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-extrabold text-purple-400 uppercase">
              Topic Assessment
            </span>
            <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400">
              Exactly {totalQuestionsCount} Questions
            </span>
            {quiz.isResume && (
              <span className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">
                Resumed Active Attempt
              </span>
            )}
          </div>
          <h1 className="text-3xl font-black text-white">{quiz.title || "Concept Check"}</h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{quiz.description}</p>
        </div>

        {/* Timer Box */}
        <div className="flex flex-col items-center justify-center bg-rose-500/10 border border-rose-500/20 text-rose-400 px-8 py-4 rounded-2xl self-start md:self-auto shrink-0 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Time Remaining</span>
          <span className="text-3xl font-extrabold font-mono mt-1">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* 10 Questions List */}
      <div className="space-y-6">
        {quiz.questions.map((question, index) => {
          const questionKey = question.question;
          const isSelected = answers[questionKey] !== undefined;

          return (
            <div
              key={question._id || index}
              className="bg-slate-950/40 rounded-3xl border border-white/5 p-6 shadow-sm space-y-4 hover:border-white/10 transition"
            >
              {/* Question metadata header */}
              <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-white/5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Question {index + 1} of {totalQuestionsCount}
                </span>

                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border ${getTypeBadgeStyle(question.questionType)}`}>
                    {question.questionType || "Theoretical"}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border ${getDifficultyBadgeStyle(question.difficulty)}`}>
                    {question.difficulty || "Medium"}
                  </span>
                </div>
              </div>

              {/* Question text */}
              <h2 className="text-lg font-bold text-white leading-relaxed">
                {question.question}
              </h2>

              {/* 4 Randomized Options */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {question.options.map((option, optionIndex) => {
                  const checked = answers[questionKey] === option;

                  return (
                    <label
                      key={optionIndex}
                      className={`flex items-center gap-3 cursor-pointer p-4 rounded-2xl border text-sm font-semibold transition ${
                        checked
                          ? "bg-slate-100 border-slate-100 text-slate-950 shadow-md"
                          : "bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-900 hover:border-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={checked}
                        onChange={() => handleOptionChange(questionKey, option)}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          checked ? "border-slate-950 bg-slate-950" : "border-slate-700 bg-slate-900"
                        }`}
                      >
                        {checked && <span className="w-2.5 h-2.5 rounded-full bg-white"></span>}
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

      {/* Bottom Submit Action */}
      <div className="sticky bottom-4 z-10 flex items-center justify-between p-4 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
        <span className="text-xs text-slate-400 font-medium">
          {answeredCount === totalQuestionsCount
            ? "✓ All 10 questions answered"
            : `${totalQuestionsCount - answeredCount} questions remaining`}
        </span>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 shadow-md hover:shadow-purple-500/25 transition disabled:opacity-60 text-sm"
        >
          {submitting ? "Submitting Quiz..." : "Submit 10-Question Quiz"}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;