import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030712] px-4 py-10 relative overflow-hidden">
      {/* Decorative Glowing Mesh */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
      </div>

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl lg:grid-cols-[1.1fr_0.9fr] z-10">
        {/* Left marketing panel */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 p-8 text-white sm:p-10 lg:p-12 border-r border-white/5 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
                <span>🚀</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Student Development Platform</span>
            </div>
            
            <h1 className="text-3xl font-black sm:text-4xl leading-tight text-white pt-4">
              Empower your academic journey and career growth.
            </h1>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
              Master your engineering curriculum with structured subjects, hands-on coding practice, roadmap milestones, and career readiness tools.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Platform Features</p>
            <ul className="mt-3 space-y-2.5 text-xs text-slate-300 font-semibold">
              <li className="flex items-center gap-2"><span>📚</span> Comprehensive Subject Curriculums & Resources</li>
              <li className="flex items-center gap-2"><span>💻</span> Hands-on Coding Practice & Problem Solving</li>
              <li className="flex items-center gap-2"><span>🗺️</span> Structured Learning Roadmaps & Progress Tracking</li>
              <li className="flex items-center gap-2"><span>💼</span> Placement Readiness, Quizzes & Career Pathways</li>
            </ul>
          </div>
        </div>

        {/* Right Form panel */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-black text-white">Welcome back</h2>
          <p className="mt-1.5 text-xs text-slate-400 font-semibold">Sign in to access your student dashboard and courses.</p>

          {errorMessage && (
            <div className="mt-4 rounded-xl bg-rose-500/10 border border-rose-500/20 p-3 text-xs font-semibold text-rose-400">
              {errorMessage}
            </div>
          )}

          <form onSubmit={loginUser} className="mt-6 space-y-5">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter your registered email address"
                required
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:bg-white/10 text-xs font-semibold"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter your password"
                required
                className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:bg-white/10 text-xs font-semibold"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95 text-xs uppercase tracking-wider disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400 font-semibold">
            Don’t have an account?
            <Link to="/register" className="ml-2 font-bold text-cyan-400 hover:text-cyan-300 transition">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;