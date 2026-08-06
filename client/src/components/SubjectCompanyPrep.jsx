import { useState, useMemo } from "react";
import { Target } from "lucide-react";
import { generatePlacementData } from "../services/placementApi";

const COMPANIES = ["Google", "Amazon", "Microsoft", "Product Companies", "Startups"];

const IMPORTANCE_CONFIG = {
  "Very High": { label: "Very High", pct: 100, color: "bg-rose-500",   text: "text-rose-400",   badge: "bg-rose-500/10 border-rose-500/20 text-rose-400",   dot: "bg-rose-500",   stars: 5 },
  "High":      { label: "High",      pct: 80,  color: "bg-orange-500", text: "text-orange-400", badge: "bg-orange-500/10 border-orange-500/20 text-orange-400", dot: "bg-orange-500", stars: 4 },
  "Medium":    { label: "Medium",    pct: 60,  color: "bg-amber-500",  text: "text-amber-400",  badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",   dot: "bg-amber-500",  stars: 3 },
  "Low":       { label: "Low",       pct: 40,  color: "bg-slate-500",  text: "text-slate-400",  badge: "bg-slate-500/10 border-slate-500/20 text-slate-400",   dot: "bg-slate-500",  stars: 2 },
};

const StarIcon = ({ filled }) => (
  <svg width="11" height="11" viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={filled ? "text-amber-400" : "text-slate-700"}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Stars = ({ count }) => (
  <span className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <StarIcon key={i} filled={i <= count} />
    ))}
  </span>
);

/**
 * SubjectCompanyPrep
 * @param {{ topics: Array<{title: string}> }} props
 */
const SubjectCompanyPrep = ({ topics = [] }) => {
  const [targetCompany, setTargetCompany] = useState("Google");

  // Generate placement data from topics passed as prop
  const placementData = useMemo(() => {
    const names = topics.map((t) => t.title || t.name || "");
    if (names.length === 0) return null;
    return generatePlacementData(names);
  }, [topics]);

  const companyTopics = placementData?.companiesData?.[targetCompany]?.topics || [];
  const hasData = companyTopics.length > 0;

  return (
    <section className="bg-gradient-to-br from-[#090b1e] via-[#040610] to-[#010206] border border-white/[0.07] rounded-3xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-6 pt-6 pb-0 space-y-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 mt-0.5">
            <Target className="h-4 w-4 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-sm font-black text-white tracking-wide">🎯 SDE Company Prep Focus Paths</h2>
            <p className="text-[10px] text-slate-500 mt-1 leading-snug max-w-xl">
              Filter topic syllabus requirements by major tech target interview paths.
            </p>
          </div>
        </div>

        {/* Company Filter Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {COMPANIES.map((c) => (
            <button
              key={c}
              onClick={() => setTargetCompany(c)}
              className={`rounded-xl px-4 py-2 text-[10px] font-extrabold tracking-widest uppercase transition-all duration-200 ${
                targetCompany === c
                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/10"
                  : "text-slate-500 border border-white/[0.06] hover:text-slate-300 hover:border-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-4 border-b border-white/[0.05]">
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Focus Rating:</span>
          {Object.values(IMPORTANCE_CONFIG).map((cfg) => (
            <span key={cfg.label} className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
              <span className={`text-[9px] font-bold ${cfg.text}`}>{cfg.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Topic List */}
      <div className="p-6 space-y-2">
        {!hasData ? (
          <div className="py-10 text-center space-y-3">
            <p className="text-sm font-bold text-slate-400">Target topics for {targetCompany} screening</p>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              No specific path mapping loaded for {targetCompany} in this subject.
              Target screening topics are selected based on analysis of SDE interview feedback logs from the past 24 months.
              Focusing on high priority topics will build maximum placement readiness.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] text-slate-500 font-semibold mb-4 leading-relaxed">
              Target topics for <span className="text-cyan-400 font-bold">{targetCompany}</span> screening · 
              <span className="text-slate-600"> Selected based on analysis of SDE interview feedback logs from the past 24 months. Focusing on high priority topics will build maximum placement readiness.</span>
            </p>
            {companyTopics.map((topic, i) => {
              const cfg = IMPORTANCE_CONFIG[topic.importance] || IMPORTANCE_CONFIG["Medium"];
              return (
                <div
                  key={i}
                  className="group flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-200"
                >
                  <span className="text-[10px] font-black text-slate-600 font-mono w-6 shrink-0 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[13px] font-extrabold text-slate-200 group-hover:text-white transition-colors min-w-0 truncate">
                    {topic.name}
                  </span>
                  <Stars count={cfg.stars} />
                  <div className="hidden sm:block w-20 h-1.5 rounded-full bg-slate-900 border border-white/[0.04] overflow-hidden shrink-0">
                    <div
                      className={`h-full ${cfg.color} rounded-full transition-all duration-700`}
                      style={{ width: `${cfg.pct}%` }}
                    />
                  </div>
                  <span className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-lg border shrink-0 ${cfg.badge}`}>
                    {cfg.label}
                  </span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default SubjectCompanyPrep;
