import { useEffect, useState, useCallback } from "react";
import api from "../services/api";
import { Trophy, CheckCircle2, Lock, Zap } from "lucide-react";

// ─── Category metadata ────────────────────────────────────────────────────────
const CATEGORY_META = {
  Learning:    { label: "📚 Learning",    order: 1 },
  Assessment:  { label: "🧠 Assessment",  order: 2 },
  Coding:      { label: "💻 Coding",      order: 3 },
  Assignments: { label: "📝 Assignments", order: 4 },
  Career:      { label: "🎯 Career",      order: 5 },
};

// ─── Format earned date: "04 Aug 2026" ───────────────────────────────────────
const formatEarnedDate = (dateStr) => {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ─── Progress bar component ───────────────────────────────────────────────────
function ProgressBar({ percentage, unlocked }) {
  return (
    <div className="relative w-full bg-slate-800 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${
          unlocked
            ? "bg-gradient-to-r from-emerald-500 to-teal-400"
            : "bg-gradient-to-r from-amber-500 to-orange-500"
        }`}
        style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
      />
    </div>
  );
}

// ─── Toast notification ───────────────────────────────────────────────────────
function BadgeToast({ badge, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="flex items-center gap-3 bg-slate-900 border border-emerald-500/40 rounded-2xl px-5 py-4 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
        <span className="text-3xl">{badge.icon}</span>
        <div>
          <p className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">
            🏆 New Badge Unlocked!
          </p>
          <p className="text-sm font-bold text-white mt-0.5">{badge.name}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Single badge card ────────────────────────────────────────────────────────
function BadgeCard({ badge }) {
  const { unlocked, earnedAt, progress, statusDetail, careerInfo } = badge;
  const earnedFormatted = formatEarnedDate(earnedAt);

  // Career badge with no career selected — special state
  const noCareer =
    badge.requirementType === "career_readiness" &&
    careerInfo &&
    !careerInfo.hasCareerSelected;

  return (
    <div
      className={`rounded-3xl p-6 border shadow-lg transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
        unlocked
          ? "bg-slate-950/60 border-emerald-500/30 hover:border-emerald-500/50"
          : "bg-slate-950/40 border-white/5 opacity-80 hover:opacity-100 hover:border-white/10"
      }`}
    >
      {/* Top row: icon + status pill */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-5xl select-none">{unlocked ? badge.icon : "🔒"}</span>
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              unlocked
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-white/5 text-slate-500 border-white/5"
            }`}
          >
            {unlocked ? "✓ Unlocked" : "🔒 Locked"}
          </span>
        </div>

        {/* Badge name + description */}
        <div>
          <h2 className="text-lg font-bold text-white">{badge.name}</h2>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {badge.description}
          </p>
        </div>

        {/* Requirement box */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-xs text-slate-300">
          <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">
            Requirement
          </span>
          <span className="font-semibold text-slate-200 mt-0.5 block">
            {badge.requirement}
          </span>
        </div>

        {/* Progress section — locked badges */}
        {!unlocked && (
          <div className="space-y-2">
            {noCareer ? (
              <p className="text-xs text-slate-500 italic leading-relaxed">
                {statusDetail}
              </p>
            ) : (
              <>
                {/* Career readiness extra info */}
                {badge.requirementType === "career_readiness" && (
                  <div className="space-y-0.5">
                    <p className="text-xs text-slate-300 font-semibold">
                      {statusDetail}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {progress.current} / {progress.target} required
                    </p>
                  </div>
                )}

                {/* Generic progress detail for non-career locked badges */}
                {badge.requirementType !== "career_readiness" && (
                  <p className="text-xs text-slate-300 font-semibold">
                    {statusDetail}
                  </p>
                )}

                {/* Progress bar */}
                <ProgressBar percentage={progress.percentage} unlocked={false} />

                {/* Percentage label */}
                <p className="text-[10px] text-slate-500 font-semibold text-right">
                  {progress.percentage}%{" "}
                  {badge.requirementType === "career_readiness"
                    ? "toward badge"
                    : "complete"}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Bottom divider row */}
      <div className="mt-6 pt-4 border-t border-white/5">
        {unlocked ? (
          <div className="space-y-2">
            {/* Full progress bar for unlocked */}
            <ProgressBar percentage={100} unlocked={true} />

            <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                {statusDetail || "Completed"}
              </span>
              {earnedFormatted && (
                <span className="text-[10px] text-slate-500 font-normal">
                  Earned · {earnedFormatted}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <Lock className="h-3.5 w-3.5" />
            {noCareer ? "No career selected" : "Keep going…"}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
function Achievements() {
  const [badges, setBadges] = useState([]);
  const [summary, setSummary] = useState({ unlocked: 0, total: 0, percentage: 0 });
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((name) => {
    setToasts((prev) => prev.filter((t) => t.name !== name));
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchBadges = async () => {
      try {
        const res = await api.get("/achievements");
        if (!isMounted) return;

        const { badges: fetchedBadges = [], summary: fetchedSummary = {} } = res.data;

        setBadges(fetchedBadges);
        setSummary({
          unlocked: fetchedSummary.unlocked ?? 0,
          total: fetchedSummary.total ?? 0,
          percentage: fetchedSummary.percentage ?? 0,
        });

        // Show toasts for any badges just unlocked this request
        const newlyUnlocked = fetchedBadges.filter((b) => b.justUnlocked);
        if (newlyUnlocked.length > 0) {
          setToasts(newlyUnlocked);
        }
      } catch (error) {
        console.error("Achievement Error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBadges();
    return () => { isMounted = false; };
  }, []);

  // ── Group badges by category ──────────────────────────────────────────────
  const grouped = Object.entries(CATEGORY_META)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([key, meta]) => ({
      key,
      label: meta.label,
      badges: badges.filter((b) => b.category === key),
    }))
    .filter((g) => g.badges.length > 0);

  // ── Loading state ─────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Achievements…</h2>
          <p className="mt-2 text-sm text-slate-400">Verifying unlocked milestone badges.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Toast notifications for newly unlocked badges */}
      {toasts.map((badge) => (
        <BadgeToast
          key={badge.name}
          badge={badge}
          onClose={() => dismissToast(badge.name)}
        />
      ))}

      <div className="space-y-10 animate-fadeIn">
        {/* ── Hero Section ──────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-8 text-white shadow-2xl backdrop-blur-xl">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute right-40 bottom-0 -mb-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Title */}
            <div className="space-y-3">
              <span className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
                Milestone Center
              </span>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                🏆 Achievements &amp; Badges
              </h1>
              <p className="text-sm text-slate-400 max-w-xl">
                Earn badges by completing syllabus topics, acing quizzes, solving coding
                problems, and reaching career readiness milestones.
              </p>
            </div>

            {/* Badge Progress summary card */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 w-full sm:w-64 space-y-3 shrink-0">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-amber-400" />
                  Badge Progress
                </span>
                <span className="text-amber-400 font-extrabold">
                  {summary.unlocked} / {summary.total}
                </span>
              </div>
              <div className="bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${summary.percentage}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-400 text-center font-semibold">
                {summary.percentage}% Milestones Completed
              </p>
            </div>
          </div>
        </div>

        {/* ── Badge Categories ──────────────────────────────────────────── */}
        {grouped.map((group) => (
          <section key={group.key} className="space-y-4">
            {/* Category header */}
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-extrabold text-slate-100 tracking-tight">
                {group.label}
              </h2>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {group.badges.filter((b) => b.unlocked).length} / {group.badges.length} earned
              </span>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.badges.map((badge) => (
                <BadgeCard key={badge.name} badge={badge} />
              ))}
            </div>
          </section>
        ))}

        {/* ── Empty state (should never show with 6 defined badges) ─────── */}
        {grouped.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 text-center">
            <Zap className="h-10 w-10 text-slate-600" />
            <p className="text-slate-500 font-semibold">No badges found.</p>
            <p className="text-xs text-slate-600">
              Start learning topics to earn your first badge!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Achievements;