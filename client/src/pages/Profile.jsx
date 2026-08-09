import { useEffect, useState } from "react";
import api from "../services/api";
import { User, Mail, GraduationCap, Briefcase, Sparkles, Check, Edit3, X } from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    degree: "",
    branch: "",
    year: "",
    skills: "",
    interests: "",
    careerGoals: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile");
        const userData = res.data.user || res.data;

        if (!isMounted) return;

        setUser(userData);
        setForm({
          name: userData.name || "",
          degree: userData.degree || "",
          branch: userData.branch || "",
          year: userData.year || "",
          skills: (userData.skills || []).join(", "),
          interests: (userData.interests || []).join(", "),
          careerGoals: userData.careerGoals || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const parseList = (str) =>
    str
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        name: form.name,
        degree: form.degree,
        branch: form.branch,
        year: form.year,
        skills: parseList(form.skills),
        interests: parseList(form.interests),
        careerGoals: form.careerGoals,
      };

      const res = await api.put("/user/profile", payload);

      const updatedUser = res.data.user || res.data;
      setUser(updatedUser);
      setForm({
        name: updatedUser.name || "",
        degree: updatedUser.degree || "",
        branch: updatedUser.branch || "",
        year: updatedUser.year || "",
        skills: (updatedUser.skills || []).join(", "),
        interests: (updatedUser.interests || []).join(", "),
        careerGoals: updatedUser.careerGoals || "",
      });

      setMessage("Profile updated successfully.");
      setEditing(false);
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center shadow-2xl max-w-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-200 mt-6">Loading Profile...</h2>
          <p className="mt-2 text-sm text-slate-400">Fetching student details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl">
      {/* Header */}
      <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-cyan-500/20">
            {user.name ? user.name[0].toUpperCase() : "U"}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">{user.name}</h1>
            <p className="text-xs text-cyan-400 font-semibold">{user.email}</p>
          </div>
        </div>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition flex items-center gap-2"
          >
            <Edit3 className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        ) : (
          <button
            onClick={() => setEditing(false)}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs font-bold transition flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            <span>Cancel</span>
          </button>
        )}
      </div>

      {message && (
        <div
          className={`p-4 rounded-2xl text-xs font-bold border ${
            message.includes("success")
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
              : "bg-rose-500/10 border-rose-500/20 text-rose-300"
          }`}
        >
          {message}
        </div>
      )}

      {/* Profile Form / View */}
      <div className="bg-slate-950/40 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        {!editing ? (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Academic Degree
              </span>
              <p className="text-sm font-bold text-white mt-1">{user.degree || "Not Added"}</p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Department / Branch
              </span>
              <p className="text-sm font-bold text-white mt-1">{user.branch || "Not Added"}</p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Current Year of Study
              </span>
              <p className="text-sm font-bold text-white mt-1">{user.year ? `Year ${user.year}` : "Not Added"}</p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Target Career Goal
              </span>
              <p className="text-sm font-bold text-cyan-400 mt-1">{user.careerGoals || "Not Added"}</p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 sm:col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Technical Skills
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {(user.skills || []).length > 0 ? (
                  user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">No skills listed yet</span>
                )}
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 sm:col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Interests & Domains
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {(user.interests || []).length > 0 ? (
                  user.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
                    >
                      {interest}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">No interests listed yet</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Degree (e.g. B.Tech / B.E.)
                </label>
                <input
                  name="degree"
                  value={form.degree}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Branch (e.g. Computer Science)
                </label>
                <input
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Year of Study (e.g. 3)
                </label>
                <input
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Skills (comma separated, e.g. React, Node.js, Python, SQL)
                </label>
                <input
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Interests (comma separated, e.g. Full Stack, AI, Cloud Computing)
                </label>
                <input
                  name="interests"
                  value={form.interests}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Career Goal (e.g. Full Stack Developer)
                </label>
                <input
                  name="careerGoals"
                  value={form.careerGoals}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Profile"}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;