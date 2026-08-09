import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Milestone,
  TrendingUp,
  Trophy,
  Sparkles,
  FileText,
  CheckSquare,
  Calendar,
  Sliders,
  LogOut,
  X
} from "lucide-react";

function Sidebar({ onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Subjects", path: "/subjects", icon: BookOpen },
    { name: "Career Paths", path: "/careers", icon: Milestone },
    { name: "Analytics", path: "/analytics", icon: TrendingUp },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Recommendations", path: "/recommendations", icon: Sparkles },
    { name: "Placement Tests", path: "/tests", icon: FileText },
    { name: "Quiz History", path: "/quiz-history", icon: CheckSquare },
    { name: "Campus Events", path: "/events", icon: Calendar },
    { name: "Profile & Settings", path: "/profile", icon: Sliders }
  ];

  return (
    <aside className="w-64 bg-slate-950/80 backdrop-blur-xl border-r border-white/10 flex flex-col shrink-0 z-20 h-screen sticky top-0">
      {/* BRAND / LOGO */}
      <div className="p-5 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
            <span>🚀</span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Student Navigator
            </h1>
            <p className="text-[10px] text-cyan-400/80 font-bold uppercase tracking-wider">
              Academic & Career Hub
            </p>
          </div>
        </div>

        {/* Mobile close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => {
                if (onClose) onClose();
              }}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 text-left border ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-500/30 shadow-md shadow-cyan-500/5 font-bold"
                    : "text-slate-400 border-transparent hover:bg-white/5 hover:text-slate-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-colors ${
                      isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  />
                  <span className="truncate">{link.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition border border-transparent hover:border-rose-500/20"
        >
          <LogOut className="h-4 w-4 text-rose-500 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;