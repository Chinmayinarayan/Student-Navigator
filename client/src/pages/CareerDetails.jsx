import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import api from "../services/api";

function CareerDetails() {
  const { id } = useParams();

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCareer = async () => {
      try {
        const res = await api.get(`/careers/${id}`);
        if (!isMounted) return;
        setCareer(res.data.career);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCareer();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold">Loading Pathway Details...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing milestones & metrics.</p>
        </div>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
        <div className="text-center p-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl">
          <h2 className="text-xl font-bold text-rose-500">Pathway not found</h2>
          <Link to="/recommendations" className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:underline">
            ← Back to Recommendations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Back Link */}
        <div>
          <Link to="/recommendations" className="text-xs font-bold text-slate-500 hover:text-slate-300 transition tracking-wider uppercase flex items-center gap-1.5">
            <ChevronLeft className="h-4 w-4" /> Back to Recommendations
          </Link>
        </div>

        {/* Hero Header */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="relative z-10 space-y-4">
            <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">
              Student Pathway Profile
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white leading-tight">
              {career.title}
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              {career.description}
            </p>
          </div>
        </section>

        {/* Pathway Details Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Info (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Roadmap */}
            <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 space-y-6 shadow-md">
              <h2 className="text-lg font-bold text-white border-b border-white/5 pb-3">
                🚀 Learning & Development Roadmap
              </h2>

              <div className="space-y-6">
                {/* Stage 1 */}
                {career.roadmap.beginner && career.roadmap.beginner.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Stage 1: Foundation</h3>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5">
                      {career.roadmap.beginner.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stage 2 */}
                {career.roadmap.intermediate && career.roadmap.intermediate.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Stage 2: Core Competencies</h3>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5">
                      {career.roadmap.intermediate.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stage 3 */}
                {career.roadmap.advanced && career.roadmap.advanced.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Stage 3: Specialization</h3>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5">
                      {career.roadmap.advanced.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Info (1/3 width) */}
          <div className="space-y-8">
            {/* Skills & Stats */}
            <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-6">
              <div>
                <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Average Salary Metric</h3>
                <p className="mt-1 text-lg font-black text-emerald-400">{career.averageSalary || "Market Grade A"}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {career.requiredSkills.map((skill) => (
                    <span key={skill} className="rounded-xl bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] font-bold text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {career.certifications && career.certifications.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Recommended Credentials</h4>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                    {career.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default CareerDetails;
