import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Code, Terminal } from "lucide-react";
import { getTopicById } from "../services/topicApi";
import { getCodingProblems } from "../services/codingProblemApi";
import CodingProblemCard from "../components/CodingProblemCard";

function TopicCoding() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [loadingTopic, setLoadingTopic] = useState(true);
  const [codingProblems, setCodingProblems] = useState([]);
  const [loadingProblems, setLoadingProblems] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTopic = async () => {
      try {
        const data = await getTopicById(id);
        if (!isMounted) return;
        setTopic(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoadingTopic(false);
      }
    };

    const fetchCodingProblems = async () => {
      try {
        const data = await getCodingProblems(id);
        if (!isMounted) return;
        setCodingProblems(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoadingProblems(false);
      }
    };

    fetchTopic();
    fetchCodingProblems();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loadingTopic) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading coding challenges...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing Recommended coding problems.</p>
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
          <div className="relative z-10 space-y-4">
            <span className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
              {subjectName} • Coding Practice
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Recommended Challenges
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-4xl">
              Curated coding problems from LeetCode, GeeksforGeeks, and HackerRank related to <strong className="text-white">{topic.title}</strong> to build interview readiness.
            </p>
          </div>
        </section>

        {/* Problems List Grid */}
        <div className="space-y-6">
          {loadingProblems ? (
            <div className="text-center py-12 bg-slate-950/40 border border-white/5 rounded-3xl">
              <p className="text-sm text-slate-500">Loading recommended practice questions...</p>
            </div>
          ) : codingProblems.length === 0 ? (
            <div className="text-center py-16 bg-slate-950/40 border border-white/5 rounded-3xl space-y-4">
              <Terminal className="mx-auto h-12 w-12 text-slate-700" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-400">No coding challenges found</h3>
                <p className="text-xs text-slate-500">Practice questions are currently being prepared for this module.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              {codingProblems.map((prob) => (
                <CodingProblemCard key={prob._id} problem={prob} />
              ))}
            </div>
          )}
        </div>
    </div>
  );
}

export default TopicCoding;
