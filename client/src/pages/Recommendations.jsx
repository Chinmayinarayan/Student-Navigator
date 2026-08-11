import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingUp,
  BookOpen,
  Code2,
  Target,
  Lightbulb,
  Star,
  BarChart3,
  User,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** Circular / pill score badge */
function ScoreBadge({ score, size = "md" }) {
  const color =
    score >= 70
      ? "from-emerald-500 to-green-400 shadow-emerald-500/25"
      : score >= 50
      ? "from-amber-500 to-yellow-400 shadow-amber-500/25"
      : "from-orange-500 to-red-400 shadow-orange-500/25";

  const textSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-base" : "text-xl";
  const ringSize = size === "lg" ? "w-24 h-24" : size === "sm" ? "w-14 h-14" : "w-18 h-18";

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg ${ringSize} shrink-0`}
      style={size === "lg" ? { width: 96, height: 96 } : size === "sm" ? { width: 56, height: 56 } : { width: 72, height: 72 }}
    >
      <div className="flex flex-col items-center leading-none">
        <span className={`${textSize} font-black text-white`}>{score}</span>
        <span className="text-[9px] font-bold text-white/70 uppercase tracking-wider">
          Match
        </span>
      </div>
    </div>
  );
}

/** Mini labelled progress bar */
function BreakdownBar({ label, value, color = "bg-cyan-500" }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
          {label}
        </span>
        <span className="text-[10px] font-black text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/** Checklist with ✓ or ✗ items */
function Checklist({ items, variant = "match" }) {
  const icon =
    variant === "match" ? (
      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
    ) : (
      <XCircle className="h-3.5 w-3.5 text-rose-400 shrink-0" />
    );

  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
          {icon}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Collapsible match breakdown panel */
function MatchBreakdown({ breakdown }) {
  const [open, setOpen] = useState(false);

  const bars = [
    { label: "Skills", value: breakdown.skills, color: "bg-cyan-500" },
    { label: "Subjects", value: breakdown.subjects, color: "bg-indigo-500" },
    { label: "Academics", value: breakdown.academics, color: "bg-violet-500" },
    { label: "Coding", value: breakdown.coding, color: "bg-emerald-500" },
    { label: "Learning", value: breakdown.learningProgress, color: "bg-amber-500" },
    { label: "Interests", value: breakdown.interests, color: "bg-rose-400" },
  ];

  return (
    <div className="bg-white/3 border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition"
      >
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Match Breakdown
          </span>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 text-slate-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-500" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-2.5 border-t border-white/5 pt-3">
          {bars.map((b) => (
            <BreakdownBar key={b.label} {...b} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Career Card — TOP 3 (full detail)
// ─────────────────────────────────────────────────────────────────────────────

function TopCareerCard({ rec, rank, navigate }) {
  const rankColors = [
    "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    "from-slate-400/20 to-slate-400/5 border-slate-400/30",
    "from-orange-400/20 to-orange-400/5 border-orange-400/30",
  ];
  const rankLabels = ["🥇 Best Match", "🥈 2nd Match", "🥉 3rd Match"];

  return (
    <div
      className={`rounded-3xl border bg-gradient-to-br ${rankColors[rank - 1] || "from-white/5 to-transparent border-white/10"} p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6 transition duration-300 hover:shadow-cyan-500/10`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
              {rankLabels[rank - 1] || `#${rank}`}
            </span>
            <span className="text-[10px] text-slate-500">·</span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              {rec.category}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {rec.title}
          </h2>
          <p className="text-xs text-emerald-400 font-bold mt-1">
            {rec.averageSalary && `Avg. ${rec.averageSalary}`}
          </p>
        </div>
        <ScoreBadge score={rec.finalScore} size="lg" />
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">{rec.description}</p>

      {/* Why This Career */}
      <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
            Why This Career?
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed italic">
          "{rec.whyThisCareer}"
        </p>
      </div>

      {/* Three-column info grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Matched Skills */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
              Matched Skills
            </span>
          </div>
          {rec.matchedSkills.length > 0 ? (
            <>
              <Checklist items={rec.matchedSkills.slice(0, 6)} variant="match" />
              {rec.matchedSkills.length > 6 && (
                <p className="text-[10px] text-slate-500 italic">
                  +{rec.matchedSkills.length - 6} more
                </p>
              )}
              <p className="text-[10px] font-black text-emerald-400">
                Skill Match: {rec.scoreBreakdown.skills}%
              </p>
            </>
          ) : (
            <p className="text-xs text-slate-500 italic">
              No matching skills yet. Add skills in your profile.
            </p>
          )}
        </div>

        {/* Matched Interests */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
              Matched Interests
            </span>
          </div>
          {!rec.hasInterestsProvided ? (
            <p className="text-xs text-slate-500 italic">Interests not provided</p>
          ) : rec.matchedInterests.length > 0 ? (
            <>
              <Checklist items={rec.matchedInterests.slice(0, 5)} variant="match" />
              <p className="text-[10px] font-black text-amber-400">
                Interest Match: {rec.scoreBreakdown.interests}%
              </p>
            </>
          ) : (
            <p className="text-xs text-slate-500 italic">
              No interest overlap found for this career.
            </p>
          )}
        </div>

        {/* Matched Subjects */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
              Subjects Progressed
            </span>
          </div>
          {rec.matchedSubjectNames.length > 0 ? (
            <>
              <Checklist items={rec.matchedSubjectNames.slice(0, 5)} variant="match" />
              <p className="text-[10px] font-black text-indigo-400">
                Subject Match: {rec.scoreBreakdown.subjects}%
              </p>
            </>
          ) : (
            <p className="text-xs text-slate-500 italic">
              No subject progress yet. Start a topic to improve this score.
            </p>
          )}
        </div>
      </div>

      {/* Skill Gaps */}
      {rec.skillGaps.length > 0 && (
        <div className="bg-rose-500/5 border border-rose-500/15 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-rose-400" />
              <span className="text-xs font-black text-rose-400 uppercase tracking-wider">
                Skill Gaps
              </span>
            </div>
            <span className="bg-rose-500/20 text-rose-300 text-[10px] font-black px-2 py-0.5 rounded-full">
              {rec.skillGapCount} missing
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {rec.skillGaps.map((gap, i) => (
              <span
                key={i}
                className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[10px] font-bold px-2.5 py-1 rounded-lg"
              >
                {gap}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Match Breakdown (collapsible) */}
      <MatchBreakdown breakdown={rec.scoreBreakdown} />

      {/* Recommended Next Step */}
      <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-indigo-400" />
          <span className="text-xs font-black text-indigo-400 uppercase tracking-wider">
            Recommended Next Step
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {rec.nextRecommendedStep}
        </p>
      </div>

      {/* Roadmap */}
      {rec.roadmap && (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Milestone Roadmap Breakdown
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
              <h4 className="text-xs font-black text-cyan-400 uppercase">🟢 Beginner Track</h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {(rec.roadmap.beginner || []).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-cyan-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
              <h4 className="text-xs font-black text-indigo-400 uppercase">🟡 Intermediate Track</h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {(rec.roadmap.intermediate || []).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-indigo-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
              <h4 className="text-xs font-black text-purple-400 uppercase">🔴 Advanced Track</h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {(rec.roadmap.advanced || []).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-purple-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={() => navigate(`/careers/${rec.careerId}`)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-sm font-black shadow-lg shadow-cyan-500/20 transition flex items-center gap-2"
        >
          <span>{rec.hasStarted ? "Continue Roadmap" : "Explore Career Path"}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Career Card — OTHER OPTIONS (compact)
// ─────────────────────────────────────────────────────────────────────────────

function CompactCareerCard({ rec, rank, navigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-950/40 border border-white/10 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-xl space-y-4 transition duration-300 hover:border-white/20">
      {/* Header */}
      <div className="flex items-start gap-4">
        <ScoreBadge score={rec.finalScore} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] text-slate-500 font-bold">#{rank}</span>
            <span className="text-[10px] text-slate-500">·</span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              {rec.category}
            </span>
          </div>
          <h3 className="text-lg font-black text-white">{rec.title}</h3>
          {rec.averageSalary && (
            <p className="text-xs text-emerald-400 font-bold">{rec.averageSalary}</p>
          )}
        </div>
      </div>

      {/* Quick stats row */}
      <div className="flex flex-wrap gap-2">
        {rec.matchedSkills.slice(0, 3).map((s, i) => (
          <span
            key={i}
            className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1"
          >
            <CheckCircle2 className="h-2.5 w-2.5" /> {s}
          </span>
        ))}
        {rec.matchedSkills.length > 3 && (
          <span className="text-[10px] text-slate-500 self-center">
            +{rec.matchedSkills.length - 3} skills
          </span>
        )}
        {rec.skillGaps.length > 0 && (
          <span className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1">
            <AlertCircle className="h-2.5 w-2.5" /> {rec.skillGaps.length} gaps
          </span>
        )}
      </div>

      {/* Expand / Collapse */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 transition"
      >
        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        {expanded ? "Show less" : "Show roadmap & details"}
      </button>

      {expanded && (
        <div className="space-y-4 animate-fadeIn">
          {/* Breakdown bars */}
          <div className="bg-white/3 border border-white/5 rounded-xl p-4 space-y-2.5">
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
              Score Breakdown
            </span>
            <BreakdownBar label="Skills" value={rec.scoreBreakdown.skills} color="bg-cyan-500" />
            <BreakdownBar label="Subjects" value={rec.scoreBreakdown.subjects} color="bg-indigo-500" />
            <BreakdownBar label="Coding" value={rec.scoreBreakdown.coding} color="bg-emerald-500" />
            <BreakdownBar label="Interests" value={rec.scoreBreakdown.interests} color="bg-rose-400" />
          </div>

          {/* Roadmap */}
          {rec.roadmap && (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Roadmap Breakdown
              </h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 space-y-1">
                  <h5 className="text-[10px] font-black text-cyan-400 uppercase">🟢 Beginner</h5>
                  <ul className="space-y-0.5 text-[10px] text-slate-300">
                    {(rec.roadmap.beginner || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-cyan-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 space-y-1">
                  <h5 className="text-[10px] font-black text-indigo-400 uppercase">🟡 Intermediate</h5>
                  <ul className="space-y-0.5 text-[10px] text-slate-300">
                    {(rec.roadmap.intermediate || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-indigo-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 space-y-1">
                  <h5 className="text-[10px] font-black text-purple-400 uppercase">🔴 Advanced</h5>
                  <ul className="space-y-0.5 text-[10px] text-slate-300">
                    {(rec.roadmap.advanced || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-purple-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => navigate(`/careers/${rec.careerId}`)}
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition flex items-center gap-2"
      >
        <span>{rec.hasStarted ? "Continue Roadmap" : "Explore Career Path"}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Insufficient Data State
// ─────────────────────────────────────────────────────────────────────────────

function InsufficientDataState({ missingData, navigate }) {
  const items = [
    { key: "skills", label: "Skills — add skills to your profile", icon: Code2 },
    { key: "interests", label: "Interests — set your career interests", icon: Star },
    { key: "subjectProgress", label: "Subject progress — complete at least one topic", icon: BookOpen },
    { key: "codingActivity", label: "Coding activity — solve a practice problem", icon: TrendingUp },
    { key: "quizActivity", label: "Quiz activity — take a topic quiz", icon: Target },
  ];

  const missing = items.filter((i) => missingData && missingData[i.key]);

  return (
    <div className="bg-slate-950/40 border border-dashed border-white/15 rounded-3xl p-10 text-center space-y-6 max-w-xl mx-auto">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-cyan-400" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-black text-white">Getting to know your profile</h2>
        <p className="text-sm text-slate-400">
          We need a little more data to generate personalized career recommendations. Here's what's
          missing:
        </p>
      </div>

      {missing.length > 0 && (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2 text-left">
          {missing.map(({ key, label, icon: Icon }) => (
            <div key={key} className="flex items-center gap-2 text-xs text-slate-300">
              <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <Icon className="h-3.5 w-3.5 text-slate-500 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => navigate("/profile")}
          className="px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition flex items-center gap-2"
        >
          <User className="h-4 w-4" />
          Complete Your Profile
        </button>
        <button
          onClick={() => navigate("/subjects")}
          className="px-5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold hover:bg-indigo-500/20 transition flex items-center gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Start Learning
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// User Stats Summary Bar
// ─────────────────────────────────────────────────────────────────────────────

function UserStatsSummary({ userStats }) {
  if (!userStats) return null;
  const { hasSkills, hasInterests, completedTopics, solvedCoding, quizzesTaken } = userStats;

  const stats = [
    { label: "Topics Completed", value: completedTopics, icon: BookOpen, color: "text-indigo-400" },
    { label: "Problems Solved", value: solvedCoding, icon: Code2, color: "text-emerald-400" },
    { label: "Quizzes Taken", value: quizzesTaken, icon: Target, color: "text-amber-400" },
    { label: "Skills Profiled", value: hasSkills ? "Yes" : "No", icon: TrendingUp, color: hasSkills ? "text-cyan-400" : "text-slate-500" },
    { label: "Interests Set", value: hasInterests ? "Yes" : "No", icon: Star, color: hasInterests ? "text-rose-400" : "text-slate-500" },
  ];

  return (
    <div className="rounded-2xl border border-white/5 bg-white/3 px-4 py-3 flex flex-wrap gap-4 items-center">
      <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider shrink-0">
        Your Data Used
      </span>
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="flex items-center gap-1.5 text-xs">
          <Icon className={`h-3.5 w-3.5 ${color}`} />
          <span className="text-slate-400">{label}:</span>
          <span className={`font-black ${color}`}>{value}</span>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

function Recommendations() {
  const navigate = useNavigate();
  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [insufficientData, setInsufficientData] = useState(false);
  const [missingData, setMissingData] = useState(null);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRecs = async () => {
      try {
        const res = await api.get("/recommendations");
        if (!isMounted) return;

        setRecs(res.data.recommendations || []);
        setInsufficientData(res.data.insufficientData || false);
        setMissingData(res.data.missingData || null);
        setUserStats(res.data.userStats || null);
      } catch (err) {
        console.error(err);
        if (!isMounted) return;
        setError(err?.response?.data?.message || "Failed to load recommendations");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRecs();

    return () => {
      isMounted = false;
    };
  }, []);

  const topMatches = recs.slice(0, 3);
  const otherMatches = recs.slice(3);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ── Page Header ───────────────────────────────────────────────── */}
      <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Smart Career Matching
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 flex items-center gap-3">
          <span>🤖</span> AI Career Recommendations
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl mt-2">
          Ranked by a real, multi-dimensional match score derived from your skills, subject
          progress, quiz performance, coding activity, and declared interests. Scores update
          automatically as you learn.
        </p>
      </div>

      {/* ── Loading ───────────────────────────────────────────────────── */}
      {loading && (
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto" />
            <h2 className="text-xl font-bold text-slate-200 mt-6">Analyzing Profile...</h2>
            <p className="mt-2 text-sm text-slate-400">
              Calculating match scores across all career paths.
            </p>
          </div>
        </div>
      )}

      {/* ── Error ─────────────────────────────────────────────────────── */}
      {error && (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-6 rounded-2xl text-sm font-semibold">
          {error}
        </div>
      )}

      {/* ── Insufficient Data State ───────────────────────────────────── */}
      {!loading && !error && insufficientData && (
        <InsufficientDataState missingData={missingData} navigate={navigate} />
      )}

      {/* ── Results ───────────────────────────────────────────────────── */}
      {!loading && !error && !insufficientData && recs.length > 0 && (
        <div className="space-y-10">
          {/* Data context bar */}
          <UserStatsSummary userStats={userStats} />

          {/* ── Top 3 Matches ─────────────────────────────────────── */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
              <h2 className="text-lg font-black text-white flex items-center gap-2 shrink-0">
                <span>🎯</span> Your Top Career Matches
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
            </div>

            <div className="space-y-8">
              {topMatches.map((rec, i) => (
                <TopCareerCard
                  key={rec.careerId}
                  rec={rec}
                  rank={i + 1}
                  navigate={navigate}
                />
              ))}
            </div>
          </section>

          {/* ── Other Career Options ──────────────────────────────── */}
          {otherMatches.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/5" />
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider shrink-0">
                  Other Career Options
                </h2>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {otherMatches.map((rec, i) => (
                  <CompactCareerCard
                    key={rec.careerId}
                    rec={rec}
                    rank={i + 4}
                    navigate={navigate}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* ── No results (unexpected) ───────────────────────────────────── */}
      {!loading && !error && !insufficientData && recs.length === 0 && (
        <div className="bg-slate-950/40 border border-dashed border-white/10 rounded-3xl p-12 text-center text-slate-400 space-y-3">
          <p className="text-base font-semibold">No career data found.</p>
          <p className="text-xs text-slate-500">
            Career data may still be loading. Try refreshing the page.
          </p>
        </div>
      )}
    </div>
  );
}

export default Recommendations;