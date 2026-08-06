import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HelpCircle, ChevronLeft } from "lucide-react";
import api from "../services/api";

function SubjectQuestions() {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await api.get(`/subjects/${id}`);
        setSubject(response.data.subject);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading Question Bank...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing exam preparation details.</p>
        </div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold text-rose-500">Subject not found</h2>
          <Link to="/dashboard" className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const qb = subject.questionBank || {};

  return (
    <div className="min-h-screen bg-[#030712] text-[#f8fafc] p-6 lg:p-10 space-y-10 font-sans relative overflow-hidden">
      {/* Glowing Mesh Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <div>
          <Link to={`/subjects/${id}`} className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase flex items-center gap-1.5">
            <ChevronLeft className="h-4 w-4" /> Back to Subject Details
          </Link>
        </div>

        {/* Header Hero */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="relative z-10 space-y-4">
            <span className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider">
              AI Question Bank
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white leading-tight">
              {subject.name} - Exam Question Bank
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Curated conceptual, short, and long-answer theoretical questions for comprehensive end-semester and mid-term exam preparation.
            </p>
          </div>
        </section>

        {/* Questions Grid */}
        <div className="space-y-8">
          {/* Conceptual (2 Marks) */}
          {qb.conceptual && qb.conceptual.length > 0 && (
            <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 space-y-6 shadow-md">
              <h2 className="text-lg font-bold text-cyan-400 flex items-center gap-2 border-b border-white/5 pb-3">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
                Conceptual Questions (2 Marks Each)
              </h2>
              <ul className="space-y-4 text-sm text-slate-300 leading-relaxed list-decimal list-inside pl-2">
                {qb.conceptual.map((q, i) => (
                  <li key={i} className="pl-1">{q}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Analytical (6 Marks) */}
          {qb.sixMarks && qb.sixMarks.length > 0 && (
            <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 space-y-6 shadow-md">
              <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2 border-b border-white/5 pb-3">
                <HelpCircle className="h-5 w-5 text-amber-400" />
                Analytical Problems (6 Marks Each)
              </h2>
              <ul className="space-y-4 text-sm text-slate-300 leading-relaxed list-decimal list-inside pl-2">
                {qb.sixMarks.map((q, i) => (
                  <li key={i} className="pl-1">{q}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Long Answer (10 Marks) */}
          {qb.longAnswer && qb.longAnswer.length > 0 && (
            <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 space-y-6 shadow-md">
              <h2 className="text-lg font-bold text-rose-400 flex items-center gap-2 border-b border-white/5 pb-3">
                <HelpCircle className="h-5 w-5 text-rose-400" />
                Comprehensive Essay Questions (10 Marks Each)
              </h2>
              <ul className="space-y-4 text-sm text-slate-300 leading-relaxed list-decimal list-inside pl-2">
                {qb.longAnswer.map((q, i) => (
                  <li key={i} className="pl-1">{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectQuestions;
