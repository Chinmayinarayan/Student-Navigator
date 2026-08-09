import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Terminal, FileText, CheckCircle2, Award, Sparkles, ExternalLink } from "lucide-react";
import { getTopicById } from "../services/topicApi";
import {
  getTopicProgress,
  toggleTopicCompletion,
} from "../services/progressApi";
import { getCodingProblems, getCodingProblemProgress } from "../services/codingProblemApi";
import { getMyQuizResults } from "../services/quizApi";
import api from "../services/api";
import AIStudyAssistant from "../components/AIStudyAssistant";

function TopicDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);

  // Dynamic pillar progress fetched from API endpoints
  const [theoryDone, setTheoryDone] = useState(false);
  const [codingProblems, setCodingProblems] = useState([]);
  const [codingScorePct, setCodingScorePct] = useState(0);
  const [quizScorePct, setQuizScorePct] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // 1. Theory questions progress
    const fetchQuestionsProgress = async () => {
      try {
        const res = await api.get(`/questions/progress/${id}`);
        if (isMounted) setTheoryDone(!!res.data.completed);
      } catch (err) {
        // Fallback silently if no questions endpoint
      }
    };

    // 2. Coding problems solved progress for this topic
    const fetchCodingProgress = async () => {
      try {
        const problems = await getCodingProblems(id);
        if (!isMounted) return;
        if (problems && problems.length > 0) {
          setCodingProblems(problems);
          const progressResults = await Promise.all(
            problems.map((p) => getCodingProblemProgress(p._id).catch(() => false))
          );
          const solvedCount = progressResults.filter(Boolean).length;
          const pct = Math.round((solvedCount / problems.length) * 100);
          if (isMounted) setCodingScorePct(pct);
        } else {
          setCodingProblems([]);
        }
      } catch (err) {
        // Fallback
      }
    };

    // 3. Quiz results — fetch quiz _id for this topic, then check if any result matches
    const fetchQuizProgress = async () => {
      try {
        // First get the quiz for this topic to know its _id
        const quizRes = await api.get(`/quizzes/topic/${id}`);
        const quizId = quizRes.data?.quiz?._id;

        // Then check user's submitted quiz results
        const results = await getMyQuizResults();
        if (!isMounted || !results || results.length === 0) return;

        // Find attempts matching this topic or quiz
        const topicAttempts = results.filter(
          (r) =>
            (r.topic && (r.topic._id === id || r.topic === id)) ||
            (quizId && (r.quiz?._id === quizId || r.quiz === quizId))
        );

        if (topicAttempts.length > 0 && isMounted) {
          // Use the latest or best quiz score percentage
          const latestAttempt = topicAttempts[0];
          const pct = latestAttempt.percentage !== undefined
            ? latestAttempt.percentage
            : Math.round((latestAttempt.score / (latestAttempt.totalMarks || 10)) * 100);
          setQuizScorePct(pct);
        }
      } catch (err) {
        // Fallback
      }
    };

    fetchQuestionsProgress();
    fetchCodingProgress();
    fetchQuizProgress();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const subjectName = topic?.subject?.name || "Subject";
  const hasCodingProblems = codingProblems && codingProblems.length > 0;

  // Pillar scores:
  const theoryScore = completed || theoryDone ? 100 : 0;
  const codingScore = completed ? 100 : codingScorePct;
  const quizScore = quizScorePct;

  // Overall Weighted Placement Readiness Score %
  // When coding problems are NOT present for this topic: Theory 50%, Quiz 50%
  // When coding problems ARE present: Theory 25%, Coding 40%, Quiz 35%
  const overallReadiness = !hasCodingProblems
    ? Math.round(theoryScore * 0.50 + quizScore * 0.50)
    : Math.round(theoryScore * 0.25 + codingScore * 0.40 + quizScore * 0.35);

  const getReadinessLevel = (score) => {
    if (score >= 80) return { label: "High Placement Fit", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" };
    if (score >= 60) return { label: "Good Placement Fit", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" };
    if (score >= 40) return { label: "Moderate Readiness", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" };
    return { label: "Needs Preparation", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" };
  };

  const levelInfo = getReadinessLevel(overallReadiness);

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
        if (isMounted) setLoading(false);
      }
    };

    const fetchProgress = async () => {
      try {
        const data = await getTopicProgress(id);
        if (!isMounted) return;
        setCompleted(data.completed);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoadingProgress(false);
      }
    };

    fetchTopic();
    fetchProgress();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleToggleCompletion = async () => {
    try {
      const data = await toggleTopicCompletion(id);
      setCompleted(data.progress.completed);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading topic details...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing material & practice problems.</p>
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

    const subjectId = topic.subject?._id || "";
    const isAlgoSubject = subjectName.toLowerCase().includes("algorithm") || 
                          subjectName.toLowerCase().includes("data structure") || 
                          subjectName.toLowerCase().includes("data structures");

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Breadcrumb & Mark Completed */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={() => {
              if (subjectId) {
                navigate(`/subjects/${subjectId}`);
              } else {
                navigate(-1);
              }
            }}
            className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase flex items-center gap-1.5 self-start"
          >
            ← Back to {subjectName}
          </button>

          <button
            onClick={handleToggleCompletion}
            disabled={loadingProgress}
            className={`rounded-2xl px-5 py-2.5 text-xs font-extrabold transition-all duration-300 flex items-center justify-center gap-2 border ${
              completed
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 shadow-lg shadow-emerald-500/10"
                : "bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20"
            }`}
          >
            <span>{completed ? "✓ Completed" : "○ Mark as Completed"}</span>
          </button>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"></div>
          <div className="relative z-10 space-y-4">
            <span className="rounded-xl bg-violet-500/10 border border-violet-500/20 px-3 py-1 text-[10px] font-extrabold text-violet-400 uppercase tracking-wider">
              Subject Topic
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {topic.title}
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-4xl">
              {topic.description || "Dive into the details, theory questions, and practice problems below."}
            </p>
          </div>
        </section>

        {/* Full-Width Single Column Layout */}
        <div className="space-y-8">
          {/* 1. Key Sub-topics Covered */}
          <section className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-4">
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2 border-b border-white/5 pb-3">
              <span>📖</span> Key Sub-topics Covered
            </h2>
            {(topic.subTopics && topic.subTopics.length > 0) || (topic.learningObjectives && topic.learningObjectives.length > 0) ? (
              <ul className="grid gap-3 text-xs sm:text-sm text-slate-300 list-inside list-disc pl-2 leading-relaxed">
                {(topic.subTopics && topic.subTopics.length > 0 ? topic.subTopics : topic.learningObjectives).map((sub, i) => (
                  <li key={i} className="text-slate-300 hover:text-cyan-400 transition duration-150">
                    {sub}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-500 italic">No sub-topics specified for this topic yet.</p>
            )}
          </section>

          {/* 2. Topic Placement Readiness Assessment (Percentage-based) */}
          <section className="bg-gradient-to-br from-sky-950/30 via-slate-950/60 to-indigo-950/30 border border-sky-500/20 rounded-3xl p-6 shadow-xl space-y-6">
            {/* Header with Overall Score */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/5 pb-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-xl bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-[10px] font-extrabold text-sky-400 uppercase tracking-widest">
                    Placement Readiness Audit
                  </span>
                  <span className={`rounded-xl border px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${levelInfo.bg} ${levelInfo.color}`}>
                    {levelInfo.label}
                  </span>
                </div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  🎯 Topic Placement Readiness Score
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  Calculated dynamically from your Theory Marking, Coding Practice, Concept Quiz, and Interview Prep scores.
                </p>
              </div>

              {/* Score Display Ring / Meter */}
              <div className="bg-slate-900/90 border border-white/10 p-4 rounded-3xl shrink-0 min-w-[200px] flex items-center gap-4 shadow-lg">
                <div className="relative h-16 w-16 shrink-0 flex items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      stroke="url(#topicReadinessGrad)" strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 40 * (overallReadiness / 100)} ${2 * Math.PI * 40 * (1 - overallReadiness / 100)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="topicReadinessGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-lg font-black text-white">{overallReadiness}%</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Topic Score</span>
                  <span className={`text-xs font-extrabold ${levelInfo.color}`}>{overallReadiness} / 100</span>
                  <span className="text-[9px] text-slate-500 block">
                    {hasCodingProblems ? "3 Pillars Weighted" : "2 Pillars (Theory + Quiz)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Percentage Breakdown */}
            <div className={`grid gap-4 ${!hasCodingProblems ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {/* Pillar 1: Theory Questions */}
              <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-200 flex items-center gap-1.5">
                    ❓ Theory Marking ({hasCodingProblems ? "25%" : "50%"} Wt)
                  </span>
                  <span className={`font-black ${theoryScore > 0 ? "text-emerald-400" : "text-slate-500"}`}>{theoryScore}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${theoryScore}%` }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px] pt-0.5">
                  <span className={theoryScore > 0 ? "text-emerald-400 font-extrabold" : "text-slate-500 font-semibold"}>
                    {theoryScore > 0 ? "✓ Questions Bank Completed" : "○ Pending Questions Review"}
                  </span>
                  <span className="text-slate-500">University Theory</span>
                </div>
              </div>

              {/* Pillar 2: Coding Practice (Only rendered when coding problems exist) */}
              {hasCodingProblems && (
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-slate-200 flex items-center gap-1.5">
                      💻 Coding Practice (40% Wt)
                    </span>
                    <span className={`font-black ${codingScore > 0 ? "text-emerald-400" : "text-slate-500"}`}>{codingScore}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" style={{ width: `${codingScore}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] pt-0.5">
                    <span className={codingScore > 0 ? "text-emerald-400 font-extrabold" : "text-slate-500 font-semibold"}>
                      {codingScore > 0 ? `✓ ${codingScore}% Problems Solved` : "○ Pending Coding Practice"}
                    </span>
                    <span className="text-slate-500">LeetCode / GFG / Practice</span>
                  </div>
                </div>
              )}

              {/* Pillar 3: Concept Check Quiz */}
              <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-200 flex items-center gap-1.5">
                    🏆 Concept Quiz ({hasCodingProblems ? "35%" : "50%"} Wt)
                  </span>
                  <span className={`font-black ${quizScore > 0 ? "text-emerald-400" : "text-slate-500"}`}>{quizScore}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${quizScore}%` }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px] pt-0.5">
                  <span className={quizScore > 0 ? "text-emerald-400 font-extrabold" : "text-slate-500 font-semibold"}>
                    {quizScore > 0 ? `✓ Quiz Score: ${quizScore}%` : "○ Pending Quiz Attempt"}
                  </span>
                  <span className="text-slate-500">Assessment Check</span>
                </div>
              </div>

            </div>
          </section>

          {/* 3. Theory Questions */}
          <section className="bg-gradient-to-br from-indigo-950/20 to-slate-950/40 border border-indigo-500/10 rounded-3xl p-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <span>❓</span> Theory Questions
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                  Access our specialized AI-generated theoretical questions grouped by weightage (2 Marks, 6 Marks, and 10 Marks) for university exams.
                </p>
              </div>
              <Link
                to={`/topics/${id}/questions`}
                className="shrink-0 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-xs font-bold transition shadow-md shadow-indigo-500/10 hover:scale-[1.02] text-center"
              >
                Open Question Bank
              </Link>
            </div>
          </section>

          {/* 4. Concept Assessment */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 text-white rounded-3xl p-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                  Concept Assessment
                </span>
                <h2 className="text-lg font-extrabold flex items-center gap-2">
                  <span>🏆</span> Concept Check Quiz
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                  Take a short quiz to test your understanding of this topic. Your score will update placement readiness scores!
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Link
                  to={`/quiz/${id}`}
                  className="rounded-2xl bg-white hover:bg-slate-100 text-slate-950 px-6 py-3 text-xs font-bold transition shadow-sm text-center"
                >
                  Start Quiz Now
                </Link>
                <Link
                  to="/quiz-history"
                  className="rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 text-xs font-bold transition text-center"
                >
                  View Quiz History
                </Link>
              </div>
            </div>
          </section>

          {/* 5. Coding Challenges / Theoretical Notice */}
          {!hasCodingProblems ? (
            <section className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3.5">
                <span className="text-2xl">📘</span>
                <div>
                  <h2 className="text-sm font-bold text-white">Theoretical & Conceptual Module</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Coding practice is not applicable for this topic as it focuses on conceptual, analytical, and theoretical mastery.
                  </p>
                </div>
              </div>
            </section>
          ) : (
            <section className="bg-gradient-to-br from-emerald-950/20 to-slate-950/40 border border-emerald-500/10 rounded-3xl p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <span>💻</span> Coding Challenges
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                    Test your coding skills with curated practice problems from LeetCode, GeeksforGeeks, and practical lab assignments targeted for this specific topic.
                  </p>
                </div>
                <Link
                  to={`/topics/${id}/coding`}
                  className="shrink-0 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 text-xs font-bold transition shadow-md shadow-emerald-500/10 hover:scale-[1.02] text-center"
                >
                  Start Coding Practice
                </Link>
              </div>
            </section>
          )}

          {/* 6. AI Study Assistant */}
          <AIStudyAssistant
            subject={subjectName}
            topic={topic.title}
            prerequisites={[]}
            resources={{
              videos: topic.youtubeResources || [],
              books: topic.books || [],
            }}
          />
        </div>
    </div>
  );
}

export default TopicDetails;