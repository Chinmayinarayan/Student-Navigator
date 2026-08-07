import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Sparkles, HelpCircle } from "lucide-react";
import { getTopicById } from "../services/topicApi";
import api from "../services/api";

function TopicQuestions() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTopicAndProgress = async () => {
      try {
        const [topicData, progressRes] = await Promise.all([
          getTopicById(id),
          api.get(`/questions/progress/${id}`).catch((err) => {
            console.warn("Could not fetch theoretical questions progress, defaulting to false:", err);
            return { data: { completed: false } };
          })
        ]);
        if (!isMounted) return;
        setTopic(topicData);
        setCompleted(progressRes.data.completed || false);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchTopicAndProgress();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleToggleCompletion = async () => {
    try {
      const res = await api.post(`/questions/progress/${id}`);
      setCompleted(res.data.completed || false);
    } catch (err) {
      console.error("Error toggling question progress:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading questions...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing marks-wise theoretical exam bank.</p>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold text-rose-500">Topic not found</h2>
          <Link to="/dashboard" className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const subjectName = topic.subject?.name || "Subject";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Breadcrumb */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase text-left"
          >
            ← Back to {topic.title}
          </button>
        </div>

        {/* Hero Header */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4">
              <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">
                {subjectName} • Exam Preparation
              </span>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Theoretical Question Bank
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed max-w-4xl">
                Comprehensive review questions for <strong className="text-white">{topic.title}</strong>, grouped by exam weightage and complexity.
              </p>
            </div>
            <button
              onClick={handleToggleCompletion}
              className={`px-6 py-3 rounded-2xl text-xs font-bold text-white transition tracking-wide shrink-0 border uppercase ${
                completed
                  ? "bg-emerald-600 hover:bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/15"
                  : "bg-slate-800 hover:bg-slate-700 border-white/5"
              }`}
            >
              {completed ? "Theory Completed ✓" : "Mark Theory Completed"}
            </button>
          </div>
        </section>

        {/* Question Lists Card */}
        <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 shadow-2xl space-y-8">
          {topic.questionBank ? (
            <div className="space-y-8">
              {/* Conceptual (2 Marks) */}
              {topic.questionBank.conceptual && topic.questionBank.conceptual.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold text-cyan-400 flex items-center gap-2 uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow shadow-cyan-400/20"></span>
                    Conceptual Questions (2 Marks)
                  </h3>
                  <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed pl-1.5">
                    {topic.questionBank.conceptual.map((q, idx) => (
                      <li key={idx} className="pl-1 border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">{q}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Short/Analytical (6 Marks) */}
              {topic.questionBank.sixMarks && topic.questionBank.sixMarks.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <h3 className="text-sm font-extrabold text-amber-400 flex items-center gap-2 uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-amber-400 shadow shadow-amber-400/20"></span>
                    Analytical Problems (6 Marks)
                  </h3>
                  <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed pl-1.5">
                    {topic.questionBank.sixMarks.map((q, idx) => (
                      <li key={idx} className="pl-1 border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">{q}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Comprehensive Essay (10 Marks) */}
              {topic.questionBank.longAnswer && topic.questionBank.longAnswer.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <h3 className="text-sm font-extrabold text-rose-400 flex items-center gap-2 uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-rose-400 shadow shadow-rose-400/20"></span>
                    Comprehensive Essay Questions (10 Marks)
                  </h3>
                  <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed pl-1.5">
                    {topic.questionBank.longAnswer.map((q, idx) => (
                      <li key={idx} className="pl-1 border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">{q}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <HelpCircle className="mx-auto h-12 w-12 text-slate-700 mb-4" />
              <p className="text-sm">No theoretical questions generated for this topic yet.</p>
            </div>
          )}
        </div>
    </div>
  );
}

export default TopicQuestions;
