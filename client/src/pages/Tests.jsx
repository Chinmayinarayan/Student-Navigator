import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { getTestsWithProgress, getPlacementSummary } from "../services/testApi";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  "Programming & DSA",
  "Core CS",
  "Development",
  "Specialized",
  "Placement",
];

const CATEGORY_META = {
  "Programming & DSA": { icon: "💻", label: "Programming & DSA" },
  "Core CS":            { icon: "🗄️", label: "Core CS" },
  "Development":        { icon: "🌐", label: "Development" },
  "Specialized":        { icon: "🤖", label: "Specialized" },
  "Placement":          { icon: "🏆", label: "Placement Mock Tests" },
};

const DIFFICULTY_STYLES = {
  Beginner:     { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400" },
  Intermediate: { bg: "bg-amber-500/10",   text: "text-amber-300",   border: "border-amber-500/20",   dot: "bg-amber-400" },
  Advanced:     { bg: "bg-rose-500/10",    text: "text-rose-400",    border: "border-rose-500/20",     dot: "bg-rose-400" },
};

const STATUS_STYLES = {
  "Not Attempted":    { bg: "bg-slate-800/80", text: "text-slate-400", border: "border-slate-700/50", label: "Not Attempted" },
  "Completed":        { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", label: "Completed" },
  "Retake Available": { bg: "bg-cyan-500/10", text: "text-cyan-300", border: "border-cyan-500/20", label: "Retake Available" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SummaryBar({ summary, loading }) {
  const stats = [
    { label: "Tests Attempted", value: loading ? "—" : summary.testsAttempted, icon: "📋" },
    { label: "Tests Passed",    value: loading ? "—" : summary.testsPassed,    icon: "✅" },
    { label: "Average Score",   value: loading ? "—" : `${summary.averageScore}%`, icon: "📊" },
    { label: "Best Score",      value: loading ? "—" : `${summary.bestScore}%`,    icon: "🏅" },
    { label: "Technical Readiness", value: loading ? "—" : `${summary.technicalReadiness}%`, icon: "🎯" },
  ];

  return (
    <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <h2 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-4">
        Placement Assessment Progress
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/60 border border-white/5 shadow-inner">
            <span className="text-2xl mb-1">{s.icon}</span>
            <span className="text-2xl font-black text-white">{s.value}</span>
            <span className="text-[11px] font-bold text-slate-400 mt-1 leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


function TestCard({ test, onStartClick }) {
  const hasQuestions = test.questionCount > 0;
  const diff = DIFFICULTY_STYLES[test.difficulty] || DIFFICULTY_STYLES.Intermediate;
  const statusStyle = STATUS_STYLES[test.status] || STATUS_STYLES["Not Attempted"];
  const attempted = test.attempts > 0;
  const passed = attempted && test.bestScore >= test.passingScore;

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:border-white/15 hover:-translate-y-1">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white leading-snug line-clamp-2">
              {test.title}
            </h3>
            <p className="text-xs text-cyan-400 font-semibold mt-1">
              {test.subject?.name?.replace(/^#+\s*/, "") || "General"}
            </p>
          </div>
          {/* Status badge */}
          <span className={`shrink-0 rounded-xl px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border || "border-white/5"}`}>
            {statusStyle.label}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
          {test.description || "No description provided."}
        </p>

        {/* Difficulty + Stats row */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1 text-[11px] font-bold ${diff.bg} ${diff.text} ${diff.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
            {test.difficulty}
          </span>

          <span className="inline-flex items-center gap-1 rounded-xl bg-slate-900/80 border border-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
            ⏱ {test.duration} min
          </span>

          {hasQuestions ? (
            <span className="inline-flex items-center gap-1 rounded-xl bg-slate-900/80 border border-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
              ❓ {test.questionCount}Q
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-xl bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[11px] font-bold text-amber-400">
              ⚠️ No questions
            </span>
          )}

          <span className="inline-flex items-center gap-1 rounded-xl bg-slate-900/80 border border-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
            🎯 Pass: {test.passingScore}%
          </span>
        </div>

        {/* Topics row */}
        {test.topics?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {test.topics.slice(0, 4).map((t) => (
              <span key={t} className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
                {t}
              </span>
            ))}
            {test.topics.length > 4 && (
              <span className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-400">
                +{test.topics.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Previous performance */}
        {attempted && (
          <div className="rounded-2xl bg-slate-900/70 border border-white/5 p-3.5 space-y-1.5 mt-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Best Score</span>
              <span className={`font-bold ${passed ? "text-emerald-400" : "text-rose-400"}`}>
                {test.bestScore}% {passed ? "✅" : "❌"}
              </span>
            </div>
            {test.attempts > 1 && (
              <div className="flex justify-between text-xs text-slate-300">
                <span className="text-slate-400">Last Score</span>
                <span className="font-semibold text-white">{test.lastScore}%</span>
              </div>
            )}
            <div className="flex justify-between text-xs text-slate-300">
              <span className="text-slate-400">Attempts</span>
              <span className="font-semibold text-white">{test.attempts}</span>
            </div>
            {test.bestResultId && (
              <Link
                to={`/tests/result/${test.bestResultId}`}
                className="block text-center text-[11px] font-bold text-cyan-400 hover:text-cyan-300 mt-2 transition"
              >
                View Last Result →
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-5">
        {!hasQuestions ? (
          <div className="rounded-2xl bg-slate-900/60 border border-white/5 py-3 text-center text-xs font-bold text-slate-500 cursor-not-allowed">
            Test Unavailable — Questions Being Prepared
          </div>
        ) : test.status === "Completed" && !test.allowRetake ? (
          <div className="rounded-2xl bg-slate-900/60 border border-white/5 py-3 text-center text-xs font-bold text-slate-400 cursor-not-allowed">
            Completed (No Retake)
          </div>
        ) : (
          <button
            onClick={() => onStartClick(test)}
            className={`w-full rounded-2xl py-3 text-center text-xs font-bold text-white shadow-lg transition active:scale-[0.99] ${
              test.status === "Not Attempted"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500"
            }`}
          >
            {test.status === "Not Attempted" ? "Start Test" : "Retake Test"}
          </button>
        )}
      </div>
    </div>
  );
}


function InstructionsModal({ test, onClose, onConfirm }) {
  if (!test) return null;
  const diff = DIFFICULTY_STYLES[test.difficulty] || DIFFICULTY_STYLES.Intermediate;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-slate-950 border border-white/10 rounded-[28px] shadow-2xl w-full max-w-md p-6 sm:p-8 space-y-6 animate-fadeIn text-slate-100">
        {/* Header */}
        <div className="space-y-1">
          <span className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-bold ${diff.bg} ${diff.text} ${diff.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
            {test.difficulty}
          </span>
          <h2 className="text-2xl font-black text-white mt-2 leading-snug">{test.title}</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{test.description}</p>
        </div>

        {/* Test details grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Duration",     value: `${test.duration} minutes` },
            { label: "Questions",    value: `${test.questionCount}` },
            { label: "Total Marks",  value: `${test.totalMarks || test.questionCount}` },
            { label: "Passing Score",value: `${test.passingScore}%` },
          ].map((row) => (
            <div key={row.label} className="rounded-2xl bg-slate-900/80 border border-white/5 p-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{row.label}</p>
              <p className="text-lg font-black text-white mt-0.5">{row.value}</p>
            </div>
          ))}
        </div>

        {/* Topics */}
        {test.topics?.length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Topics Covered</p>
            <div className="flex flex-wrap gap-1.5">
              {test.topics.map((t) => (
                <span key={t} className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 text-xs font-semibold text-purple-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Rules */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 space-y-1.5 text-amber-200">
          <p className="text-xs font-black text-amber-300 mb-2">📋 Test Rules</p>
          <p className="text-xs text-amber-200/90">• {test.negativeMarking ? "Negative marking applies for wrong answers" : "No negative marking"}</p>
          <p className="text-xs text-amber-200/90">• {test.allowRetake ? "Retakes are allowed" : "Only one attempt allowed"}</p>
          <p className="text-xs text-amber-200/90">• Timer starts immediately. Test auto-submits when time expires.</p>
          <p className="text-xs text-amber-200/90">• Do not close or refresh the page during the test.</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border border-white/10 py-3 text-sm font-bold text-slate-300 hover:bg-slate-900 transition"
          >
            Cancel
          </button>
          <Link
            to={`/tests/${test._id}`}
            onClick={onConfirm}
            className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 text-center text-sm font-bold text-white shadow-lg transition"
          >
            Begin Test →
          </Link>
        </div>
      </div>
    </div>
  );
}


function RecommendedSection({ tests, careerGoal }) {
  // Pick tests from subjects relevant to career goal, or low-attempted tests
  const getRecommendations = useCallback(() => {
    if (!tests || tests.length === 0) return [];

    const notAttempted = tests.filter((t) => t.status === "Not Attempted" && t.questionCount > 0);
    const lowScore = tests.filter((t) => t.attempts > 0 && t.bestScore < t.passingScore);
    const retakable = tests.filter((t) => t.status === "Retake Available" && t.attempts > 0 && t.bestScore < 80);

    const recommended = [];

    // 1. Failed tests first
    lowScore.slice(0, 1).forEach((t) => {
      recommended.push({
        test: t,
        reason: `You scored ${t.bestScore}% on your last attempt — below the passing threshold of ${t.passingScore}%.`,
        tag: "Needs Improvement",
      });
    });

    // 2. Retake-worthy tests
    retakable.slice(0, 1).forEach((t) => {
      if (!recommended.find((r) => r.test._id === t._id)) {
        recommended.push({
          test: t,
          reason: `Your best score is ${t.bestScore}%. Aim for 80%+ to unlock the Mock Test Ace badge.`,
          tag: "Score Higher",
        });
      }
    });

    // 3. Not attempted tests based on category relevance
    const priorityCategories = ["Programming & DSA", "Core CS", "Placement"];
    for (const cat of priorityCategories) {
      const catTests = notAttempted.filter((t) => t.category === cat);
      if (catTests.length > 0 && recommended.length < 3) {
        const t = catTests[0];
        if (!recommended.find((r) => r.test._id === t._id)) {
          recommended.push({
            test: t,
            reason: careerGoal
              ? `Recommended for your ${careerGoal} career goal.`
              : `Core placement topic — essential for technical interviews.`,
            tag: "Recommended",
          });
        }
      }
    }

    return recommended.slice(0, 3);
  }, [tests, careerGoal]);

  const recommendations = getRecommendations();

  if (recommendations.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-black text-white">🎯 Recommended for You</h2>
        {careerGoal && (
          <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 text-xs font-bold text-cyan-400">
            {careerGoal}
          </span>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map(({ test, reason, tag }) => (
          <div key={test._id} className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-slate-950/60 p-5 space-y-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-white leading-snug">{test.title}</h3>
              <span className="shrink-0 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 text-[10px] font-black uppercase">
                {tag}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{reason}</p>
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold pt-1 border-t border-white/5">
              <span>⏱ {test.duration}min</span>
              <span>❓ {test.questionCount}Q</span>
              <span className={`font-bold ${DIFFICULTY_STYLES[test.difficulty]?.text}`}>{test.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

function Tests() {
  const [tests, setTests] = useState([]);
  const [summary, setSummary] = useState({
    testsAttempted: 0, testsPassed: 0, averageScore: 0, bestScore: 0, technicalReadiness: 0,
  });
  const [careerGoal, setCareerGoal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState(null); // for instructions modal

  useEffect(() => {
    let isMounted = true;

    const fetchAll = async () => {
      try {
        const [progressData, summaryData] = await Promise.all([
          getTestsWithProgress(),
          getPlacementSummary(),
        ]);

        if (!isMounted) return;

        setTests(progressData.tests || []);
        setCareerGoal(progressData.careerGoal || null);
        setSummary(summaryData.summary || {});
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
          setSummaryLoading(false);
        }
      }
    };

    fetchAll();
    return () => { isMounted = false; };
  }, []);

  // Group tests by category
  const testsByCategory = tests.reduce((acc, t) => {
    const cat = t.category || "Programming & DSA";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(t);
    return acc;
  }, {});

  const handleStartClick = (test) => {
    setSelectedTest(test);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Mock Exams...</h2>
          <p className="mt-2 text-sm text-slate-400">Preparing your placement tests.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn text-slate-200">
      {/* Page Header */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Assessments</p>
        <h1 className="mt-2 text-3xl font-black text-white">🎯 Placement Mock Exams</h1>
        <p className="mt-2 text-sm text-slate-400 font-medium max-w-2xl">
          Timed assessments designed to simulate real developer recruitment processes. Track your progress, identify weak areas, and build placement readiness.
        </p>
      </section>

      {/* Assessment Summary */}
      <SummaryBar summary={summary} loading={summaryLoading} />

      {/* Recommended Section */}
      <RecommendedSection tests={tests} careerGoal={careerGoal} />

      {/* Category Sections */}
      {tests.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/30 p-12 text-center">
          <h2 className="text-xl font-bold text-slate-300">No mock tests available yet</h2>
          <p className="mt-2 text-sm text-slate-500">Tests will appear here once seeded by the administrator.</p>
        </div>
      ) : (
        CATEGORY_ORDER.filter((cat) => testsByCategory[cat]?.length > 0).map((category) => {
          const catMeta = CATEGORY_META[category];
          const catTests = testsByCategory[category] || [];

          return (
            <section key={category} className="space-y-4">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <span>{catMeta.icon}</span>
                <span>{catMeta.label}</span>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5">
                  {catTests.length} {catTests.length === 1 ? "test" : "tests"}
                </span>
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {catTests.map((test) => (
                  <TestCard
                    key={test._id}
                    test={test}
                    onStartClick={handleStartClick}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}

      {/* Instructions Modal */}
      <InstructionsModal
        test={selectedTest}
        onClose={() => setSelectedTest(null)}
        onConfirm={() => setSelectedTest(null)}
      />
    </div>
  );
}

export default Tests;