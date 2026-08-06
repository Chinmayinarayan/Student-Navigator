import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const [subjectsRes, progressRes] = await Promise.all([
          api.get("/subjects"),
          api.get("/progress")
        ]);
        if (isMounted) {
          setSubjects(subjectsRes.data.subjects || []);
          setProgressMap(progressRes.data.progress || {});
        }
      } catch (error) {
        console.error("Error fetching subjects and progress:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const getIcon = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes("database") || lower.includes("dbms")) return "🗄️";
    if (lower.includes("operating")) return "⚙️";
    if (lower.includes("network")) return "🌐";
    if (lower.includes("math") || lower.includes("calculus") || lower.includes("discrete")) return "📐";
    if (lower.includes("physics")) return "⚛️";
    if (lower.includes("oop") || lower.includes("programming") || lower.includes("computation")) return "💻";
    if (lower.includes("ai") || lower.includes("learning") || lower.includes("intelligence")) return "🧠";
    if (lower.includes("algorithm")) return "📊";
    if (lower.includes("software")) return "🛠️";
    if (lower.includes("architecture") || lower.includes("organization")) return "🔌";
    return "📚";
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/5 bg-slate-900/40 px-10 py-8 text-center shadow-xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading subjects...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing your engineering curriculum.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header Banner */}
      <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Course Catalog</p>
            <h1 className="text-3xl font-black mt-2 text-white">My Subjects</h1>
            <p className="text-sm text-slate-400 mt-2">Browse subject-wise completion, core lectures, study guides, and test roadmaps.</p>
          </div>
          <div className="rounded-2xl bg-cyan-500/10 px-4 py-2 text-xs font-extrabold text-cyan-400 border border-cyan-500/20 uppercase shrink-0">
            {subjects.length} Subjects Available
          </div>
        </div>
      </section>

      {subjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject, idx) => {
            const topicsCount = subject.concepts ? subject.concepts.reduce((acc, c) => acc + (c.topics ? c.topics.length : 0), 0) : 0;
            const resourcesCount = (subject.youtubeResources ? subject.youtubeResources.length : 0) + 
                                   (subject.textbooks ? subject.textbooks.length : 0) + 
                                   (subject.softwareTools ? subject.softwareTools.length : 0);
            const subjectProgress = progressMap[subject._id];
            const completion = subjectProgress ? subjectProgress.percentage : 0;

            return (
              <div key={subject._id || idx} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md flex flex-col justify-between hover:border-white/10 transition duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl select-none">{getIcon(subject.name)}</span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-100 leading-tight">{subject.name}</h2>
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold mt-2">
                      <span>📚 {topicsCount} Topics</span>
                      <span>📄 {resourcesCount} Resources</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-500">Progress</span>
                      <span className="text-cyan-400">{completion}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500" style={{ width: `${completion}%` }}></div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/subjects/${subject._id}`)}
                  className="mt-6 w-full rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-3 border border-white/5 transition"
                >
                  Continue Learning
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/20 p-12 text-center space-y-4">
          <h3 className="text-base font-semibold text-slate-300">No subjects currently loaded</h3>
          <p className="text-xs text-slate-500">Click below to refresh the subject catalog.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition"
          >
            🔄 Refresh Catalog
          </button>
        </div>
      )}
    </div>
  );
}

export default Subjects;