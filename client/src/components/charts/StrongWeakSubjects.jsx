function StrongWeakSubjects({
  strongestSubject,
  weakestSubject,
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Strongest */}
      <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
        <h2 className="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
          <span>🏆</span> Strongest Subject
        </h2>

        {strongestSubject ? (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              {strongestSubject.subject}
            </h3>
            <p className="text-xs text-slate-400">
              Completed {strongestSubject.completed} of {strongestSubject.total} topics
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${strongestSubject.percentage}%` }}
                />
              </div>
              <p className="text-xs font-bold text-emerald-400 text-right">
                {strongestSubject.percentage}% Complete
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">No subject data calculated yet.</p>
        )}
      </div>

      {/* Weakest */}
      <div className="bg-slate-950/40 border border-white/5 rounded-3xl shadow-xl p-6 backdrop-blur-xl">
        <h2 className="text-base font-bold text-amber-400 mb-3 flex items-center gap-2">
          <span>⚠️</span> Subject Needing Focus
        </h2>

        {weakestSubject ? (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              {weakestSubject.subject}
            </h3>
            <p className="text-xs text-slate-400">
              Completed {weakestSubject.completed} of {weakestSubject.total} topics
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-700"
                  style={{ width: `${weakestSubject.percentage}%` }}
                />
              </div>
              <p className="text-xs font-bold text-amber-400 text-right">
                {weakestSubject.percentage}% Complete
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">No subject data calculated yet.</p>
        )}
      </div>
    </div>
  );
}

export default StrongWeakSubjects;