import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

  useEffect(() => {
    let isMounted = true;

    const fetchTest = async () => {
      try {
        const data = await getTestById(id);
        if (!isMounted) return;

        setTest(data.test);
        setTimeLeft((data.test.duration ?? 0) * 60);
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
      const data = await submitTest(id, answers);
      navigate(`/tests/result/${data.result._id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }, [answers, navigate, id, test, submitting]);

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
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Loading Test...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing test questions.</p>
        </div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-bold text-red-600">Test not found</h2>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-8">
      {/* Header and Timer */}
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="rounded-xl bg-violet-50 border border-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            Mock Placement Test
          </span>
          <h1 className="text-3xl font-semibold text-slate-900">{test.title}</h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{test.description}</p>
        </div>

        {/* Timer Card */}
        <div className="flex flex-col items-center justify-center bg-rose-50 border border-rose-100 text-rose-700 px-8 py-4 rounded-2xl self-start md:self-auto shrink-0 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Time Remaining</span>
          <span className="text-3xl font-extrabold font-mono mt-1">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Questions list */}
      <div className="space-y-6">
        {test.questions.map((question, index) => (
          <div
            key={question._id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-slate-900 leading-snug">
              Question {index + 1}. {question.question}
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {question.options.map((option) => {
                const isSelected = answers[question._id] === option;
                
                return (
                  <label
                    key={option}
                    className={`flex items-center gap-3 cursor-pointer p-4 rounded-2xl border text-sm font-semibold transition ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 text-white"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={question._id}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleAnswer(question._id, option)}
                      className="sr-only" // hide native radio button
                    />
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? "border-white bg-white" : "border-slate-300 bg-white"
                    }`}>
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>}
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
          className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 shadow-sm hover:shadow-lg transition disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Test Answers"}
        </button>
      </div>
    </div>
  );
}

export default TakeTest;