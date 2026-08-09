import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Sparkles, ArrowRight, Briefcase, DollarSign, CheckCircle2 } from "lucide-react";

function Recommendations() {
  const navigate = useNavigate();
  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRecs = async () => {
      try {
        const res = await api.get("/recommendations");
        if (!isMounted) return;
        setRecs(res.data.recommendations || []);
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

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Smart Career Matching
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 flex items-center gap-3">
          <span>🤖</span> AI Career Recommendations
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl mt-2">
          Curated career pathways matched to your profile skills, interests, and academic performance.
        </p>
      </div>

      <div className="space-y-6">
        {loading && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
              <h2 className="text-xl font-bold text-slate-200 mt-6">Analyzing Profile...</h2>
              <p className="mt-2 text-sm text-slate-400">Matching with industry career tracks.</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-6 rounded-2xl text-sm font-semibold">
            {error}
          </div>
        )}

        {!loading && !error && recs.length === 0 && (
          <div className="bg-slate-950/40 border border-dashed border-white/10 rounded-3xl p-12 text-center text-slate-400 space-y-3">
            <p className="text-base font-semibold">No direct career matches found yet.</p>
            <p className="text-xs text-slate-500">Update your skills and interests in your Profile to generate recommendations.</p>
            <button
              onClick={() => navigate("/profile")}
              className="mt-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition"
            >
              Go to Profile
            </button>
          </div>
        )}

        {!loading &&
          recs.map((r) => (
            <div
              key={r.careerId}
              className="bg-slate-950/40 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-6 transition duration-300 hover:border-white/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">{r.title}</h2>
                  <p className="text-xs text-cyan-400 font-bold mt-1">Match Score: {r.score}</p>
                </div>

                <span className="self-start sm:self-auto bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3.5 py-1.5 rounded-full text-xs font-bold">
                  Recommended Path
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{r.description}</p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Matched Skills
                  </span>
                  <p className="text-xs text-white font-semibold mt-1">
                    {r.matchedSkills?.length > 0 ? r.matchedSkills.join(", ") : "General profile match"}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Matched Interests
                  </span>
                  <p className="text-xs text-white font-semibold mt-1">
                    {r.matchedInterests?.length > 0 ? r.matchedInterests.join(", ") : "General interest match"}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Average Industry Compensation
                  </span>
                  <p className="text-xs text-emerald-400 font-extrabold mt-1">
                    {r.averageSalary || "Market Standard"}
                  </p>
                </div>
              </div>

              {r.roadmap && (
                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Milestone Roadmap Breakdown
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
                      <h4 className="text-xs font-black text-cyan-400 uppercase">🟢 Beginner Track</h4>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {(r.roadmap.beginner || []).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-cyan-500">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
                      <h4 className="text-xs font-black text-indigo-400 uppercase">🟡 Intermediate Track</h4>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {(r.roadmap.intermediate || []).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-indigo-500">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-900/60 rounded-xl p-4 border border-white/5 space-y-2">
                      <h4 className="text-xs font-black text-purple-400 uppercase">🔴 Advanced Track</h4>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {(r.roadmap.advanced || []).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-purple-500">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => navigate(`/careers/${r.careerId}`)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition flex items-center gap-2"
                >
                  <span>Explore Career Path</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recommendations;