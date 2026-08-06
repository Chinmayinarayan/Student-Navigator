import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getQuizByTopic,
  submitQuiz,
} from "../services/quizApi";

function QuizPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadQuiz = async () => {
      try {
        const data = await getQuizByTopic(topicId);
        if (!isMounted) return;

        setQuiz(data);
        setAnswers({});
        setTimeLeft((data.duration ?? 0) * 60);
      } catch (error) {
        console.error(error);
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
  }, [topicId]);

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
      const result = await submitQuiz(quiz._id, answers);
      navigate(`/quiz-result/${result._id}`);
    } catch (error) {
      console.error(error);
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

  const handleOptionChange = (questionText, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionText]: option,
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Quiz...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing test questions.</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-sm">
        <h2 className="text-xl font-bold text-red-500">Quiz not found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
          ← Go Back
        </button>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-8 animate-fadeIn text-slate-200">
      {/* Back button */}
      <div>
        <button onClick={() => navigate(-1)} className="text-xs font-extrabold text-slate-400 hover:text-slate-200 transition tracking-wider uppercase">
          ← Back to topic
        </button>
      </div>

      {/* Header and Timer */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-xl">
        <div className="space-y-2">
          <span className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-extrabold text-purple-400 uppercase">
            Concept Check
          </span>
          <h1 className="text-3xl font-black text-white">{quiz.title}</h1>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{quiz.description}</p>
        </div>

        {/* Timer Card */}
        <div className="flex flex-col items-center justify-center bg-rose-500/10 border border-rose-500/20 text-rose-400 px-8 py-4 rounded-2xl self-start md:self-auto shrink-0 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">Time Remaining</span>
          <span className="text-3xl font-extrabold font-mono mt-1">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Questions list */}
      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <div
            key={index}
            className="bg-slate-950/40 rounded-3xl border border-white/5 p-6 shadow-sm space-y-4 hover:border-white/10 transition"
          >
            <h2 className="text-lg font-bold text-white leading-snug">
              Question {index + 1}. {question.question}
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {question.options.map((option, optionIndex) => {
                const isSelected = answers[question.question] === option;
                
                return (
                  <label
                    key={optionIndex}
                    className={`flex items-center gap-3 cursor-pointer p-4 rounded-2xl border text-sm font-semibold transition ${
                      isSelected
                        ? "bg-slate-100 border-slate-100 text-slate-950"
                        : "bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-900 hover:border-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleOptionChange(question.question, option)}
                      className="sr-only" // hide native input
                    />
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? "border-slate-950 bg-slate-950" : "border-slate-700 bg-slate-900"
                    }`}>
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white"></span>}
                    </span>
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 shadow-sm hover:shadow-lg transition disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Quiz"}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;