import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Milestone,
  Code,
  CheckSquare,
  FileCheck,
  Sparkles,
  FileText,
  UserCheck,
  Briefcase,
  Award,
  TrendingUp,
  Trophy,
  Calendar,
  Bell,
  Sliders,
  LogOut
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Subjects", path: "/subjects", icon: BookOpen },
    { name: "Analytics", path: "/analytics", icon: TrendingUp },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Recommendations", path: "/recommendations", icon: Sparkles },
    { name: "Tests", path: "/tests", icon: FileText },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Profile", path: "/profile", icon: Sliders }
  ];

  return (
    <aside className="w-64 bg-slate-950/60 backdrop-blur-xl border-r border-white/5 flex flex-col shrink-0 z-10 sticky top-0 h-screen hidden lg:flex">
      {/* BRAND / LOGO */}
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
          <span>🚀</span>
        </div>
        <div>
          <h1 className="text-base font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Student Navigator
          </h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Academic & coding coach</p>
        </div>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 scrollbar-thin">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 text-left border ${
                  isActive
                    ? "bg-white/10 text-white border-white/10 shadow-lg shadow-white/5"
                    : "text-slate-400 border-transparent hover:bg-white/5 hover:text-slate-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                  <span>{link.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition border border-transparent hover:border-rose-500/10"
        >
          <LogOut className="h-4.5 w-4.5 text-rose-500 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;