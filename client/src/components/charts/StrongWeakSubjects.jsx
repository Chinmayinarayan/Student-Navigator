import { Trophy, AlertTriangle, BookOpen } from "lucide-react";

function StrongWeakSubjects({
  strongestSubject,
  weakestSubject,
}) {
  // Helper to sanitize subject name string
  const formatSubjectName = (name) => {
    if (!name) return "General Subject";
    return name.replace(/^#+\s*/, "").trim();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Strongest Subject */}
      <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl hover:border-emerald-500/20 transition group">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-emerald-400" />
            <span>Strongest Subject</span>
          </h2>
          {strongestSubject && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Top Mastery
            </span>
          )}
        </div>

        {strongestSubject ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition">
                {formatSubjectName(strongestSubject.subject)}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                Completed {strongestSubject.completed} of {strongestSubject.total} topics
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400">Completion</span>
                <span className="text-emerald-400 font-black">{strongestSubject.percentage}% Complete</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 shadow-sm"
                  style={{ width: `${Math.max(strongestSubject.percentage, 4)}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic py-6">No subject progress calculated yet.</p>
        )}
      </div>

      {/* Subject Needing Focus */}
      <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl hover:border-amber-500/20 transition group">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            <span>Subject Needing Focus</span>
          </h2>
          {weakestSubject && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Needs Practice
            </span>
          )}
        </div>

        {weakestSubject ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition">
                {formatSubjectName(weakestSubject.subject)}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                Completed {weakestSubject.completed} of {weakestSubject.total} topics
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400">Completion</span>
                <span className="text-amber-400 font-black">{weakestSubject.percentage}% Complete</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-400 rounded-full transition-all duration-700 shadow-sm"
                  style={{ width: `${Math.max(weakestSubject.percentage, 4)}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic py-6">No subject progress calculated yet.</p>
        )}
      </div>
    </div>
  );
}

export default StrongWeakSubjects;