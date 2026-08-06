import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Careers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchCareers = async () => {
      try {
        const res = await api.get("/careers");
        if (!isMounted) return;
        setCareers(res.data.careers || []);
      } catch (error) {
        console.error("Failed to fetch careers:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCareers();

    return () => {
      isMounted = false;
    };
  }, []);

  // Extract all unique skills from careers to populate a skill filter
  const allSkills = ["All", ...new Set(careers.flatMap((c) => c.requiredSkills || []))];

  const filteredCareers = careers.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
      
    const matchesSkill =
      selectedSkill === "All" ||
      c.requiredSkills?.includes(selectedSkill);

    return matchesSearch && matchesSkill;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Loading careers...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing the career directory.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Pathways Hub</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Roadmap Directory</h1>
          <p className="mt-2 text-sm text-slate-600">
            Explore industry development pathways, required skill specifications, and academic roadmap guides.
          </p>
        </div>
      </section>

      {/* Search & Filter bar */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Search by pathway title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-10 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 text-sm transition"
          />
          <span className="absolute right-4 top-3.5 text-slate-400">🔍</span>
        </div>

        <div className="w-full md:w-auto flex items-center gap-3">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Required Skill:</label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
          >
            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Careers Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCareers.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800">No careers found</h2>
            <p className="mt-2 text-sm text-slate-500">Try broadening your search query or changing filters.</p>
          </div>
        ) : (
          filteredCareers.map((career) => (
            <div
              key={career._id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900">{career.title}</h2>
                  {career.averageSalary && (
                    <span className="rounded-xl bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 shrink-0">
                      {career.averageSalary}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {career.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Skills Required</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {career.requiredSkills?.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {career.requiredSkills?.length > 5 && (
                      <span className="rounded-lg bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-400 font-semibold">
                        +{career.requiredSkills.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigate(`/careers/${career._id}`)}
                className="mt-6 w-full rounded-2xl bg-slate-900 hover:bg-slate-800 py-3 text-xs font-bold text-white shadow-sm transition"
              >
                Explore Roadmap
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Careers;