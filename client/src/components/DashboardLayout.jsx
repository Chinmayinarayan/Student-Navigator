import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import YouTubeResources from "../pages/YouTubeResources";
import {
  LayoutDashboard,
  BookOpen,
  Milestone,
  Code,
  CheckSquare,
  FileText,
  UserCheck,
  Briefcase,
  HelpCircle,
  Award,
  TrendingUp,
  Sliders,
  LogOut,
  Search,
  Bell,
  MessageSquare,
  Sun,
  User,
  Settings,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUpIcon,
  Flame,
  Terminal,
  Trophy,
  Filter,
  CheckCircle2,
  Clock,
  Video,
  FileCheck,
  Send,
  Plus,
  PlayCircle
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Cell,
  Pie
} from "recharts";

// Mock Data
const studyData = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 2 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 6 },
  { day: "Sun", hours: 3 }
];

const progressData = [
  { month: "Jan", progress: 20 },
  { month: "Feb", progress: 35 },
  { month: "Mar", progress: 48 },
  { month: "Apr", progress: 58 },
  { month: "May", progress: 68 }
];

const codingDistribution = [
  { name: "Easy", value: 65, color: "#10b981" },
  { name: "Medium", value: 45, color: "#6366f1" },
  { name: "Hard", value: 18, color: "#f43f5e" }
];

function DashboardLayout() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectsList, setSubjectsList] = useState([]);
  const [loadingSubjects, setLoadingSubjects] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setLoadingSubjects(true);
        const res = await api.get("/subjects");
        setSubjectsList(res.data.subjects || []);
      } catch (err) {
        console.error("Error fetching subjects:", err);
      } finally {
        setLoadingSubjects(false);
      }
    };
    fetchSubjects();
  }, []);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAiChat, setShowAiChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", text: "Hello Chinmayi! I am your AI Mentor. How can I guide you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages((prev) => [...prev, { sender: "user", text: inputMessage }]);
    const userMsg = inputMessage.toLowerCase();
    setInputMessage("");

    setTimeout(() => {
      let reply = "I'm analyzing your profile to generate specialized advice.";
      if (userMsg.includes("resume")) {
        reply = "I suggest highlighting your Full Stack Projects (e.g. React & Node.js). Would you like to check the AI Resume Builder tab?";
      } else if (userMsg.includes("roadmap")) {
        reply = "For Full Stack Developer roles, you should focus on mastering REST APIs and Docker next. Click on the Learning Roadmap tab to see your semester-wise progress!";
      } else if (userMsg.includes("study") || userMsg.includes("schedule")) {
        reply = "You are currently maintaining a 27-day streak. To hit your placement target, try maintaining 4 hours of coding daily.";
      }
      setChatMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 800);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "subjects", label: "My Subjects", icon: BookOpen },
    { id: "roadmap", label: "Learning Roadmap", icon: Milestone },
    { id: "coding", label: "Coding Practice", icon: Code },
    { id: "quizzes", label: "Quizzes", icon: CheckSquare },
    { id: "assignments", label: "Assignments", icon: FileCheck },
    { id: "advisor", label: "Student Advisor", icon: Sparkles },
    { id: "resume", label: "Resume Builder", icon: FileText },
    { id: "interview", label: "Interview Preparation", icon: UserCheck },
    { id: "placement", label: "Placement Readiness", icon: TrendingUpIcon },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Sliders },
    { id: "youtube", label: "YouTube Resources", icon: PlayCircle }
  ];

  return (
    <div className="flex min-h-screen bg-[#030712] text-[#f8fafc] font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Glowing mesh */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/5 blur-[150px]"></div>
      </div>

      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-slate-950/60 backdrop-blur-xl border-r border-white/5 flex flex-col shrink-0 z-10 sticky top-0 h-screen hidden lg:flex">
        {/* LOGO */}
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
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 text-left ${
                  isActive
                    ? "bg-white/10 text-white border border-white/10 shadow-lg shadow-white/5"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent"
                }`}
              >
                <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                <span>{item.label}</span>
              </button>
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

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* TOP NAVBAR */}
        <header className="sticky top-0 bg-slate-950/30 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between z-20">
          {/* SEARCH BAR */}
          <div className="w-96 relative hidden md:block">
            <input
              type="text"
              placeholder="Search subjects, topics, roadmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* AI Assistant Button */}
            <button
              onClick={() => setShowAiChat(!showAiChat)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white text-xs font-extrabold shadow-lg shadow-indigo-500/20 hover:scale-105 transition"
            >
              <Sparkles className="h-4 w-4" />
              <span>AI Mentor</span>
            </button>

            {/* Notifications Bell */}
            <button
              onClick={() => setActiveTab("notifications")}
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200 relative transition"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500"></span>
            </button>

            {/* Messages */}
            <button
              onClick={() => setShowAiChat(true)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200 transition"
            >
              <MessageSquare className="h-4 w-4" />
            </button>

            {/* Theme Toggle */}
            <button className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200 transition">
              <Sun className="h-4 w-4" />
            </button>

            {/* User Avatar */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="h-9 w-9 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400 transition"
              >
                <div className="h-full w-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-white font-extrabold text-sm shadow">
                  C
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-slate-900 border border-white/10 p-2 shadow-2xl animate-fadeIn">
                  <button
                    onClick={() => {
                      setActiveTab("profile");
                      setShowProfileMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 hover:text-white text-left transition"
                  >
                    <User className="h-4 w-4 text-slate-500" />
                    <span>My Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("settings");
                      setShowProfileMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 hover:text-white text-left transition"
                  >
                    <Settings className="h-4 w-4 text-slate-500" />
                    <span>Settings</span>
                  </button>
                  <div className="border-t border-white/5 my-1.5"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 text-left transition"
                  >
                    <LogOut className="h-4 w-4 text-rose-500" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT PANELS CONTAINER */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 space-y-8 max-w-7xl w-full mx-auto">
          {/* TAB 1: DASHBOARD VIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* HERO SECTION */}
              <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
                <div className="absolute right-40 bottom-0 -mb-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3">
                    <span className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
                      Welcome Back
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                      Welcome back, Chinmayi 👋
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-bold">
                      <div>
                        Goal: <span className="text-cyan-400 font-extrabold">Become a Full Stack Developer</span>
                      </div>
                      <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                      <div>
                        Track: <span className="text-indigo-400 font-extrabold">3rd Year CSE</span>
                      </div>
                      <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                      <div>
                        Overall CGPA: <span className="text-emerald-400 font-extrabold">9.1</span>
                      </div>
                    </div>
                  </div>

                  {/* Student Progress Mini Indicator */}
                  <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl shrink-0 w-full sm:w-64 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-400">Student Readiness</span>
                      <span className="text-cyan-400">68%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-semibold text-center">Upcoming target: Complete React Advanced</p>
                  </div>
                </div>

                {/* Hero Gradient Buttons */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveTab("subjects")}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-extrabold shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
                  >
                    Continue Learning
                  </button>
                  <button
                    onClick={() => setActiveTab("roadmap")}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-extrabold shadow-lg shadow-indigo-500/20 hover:scale-105 transition"
                  >
                    Generate AI Roadmap
                  </button>
                  <button
                    onClick={() => setShowAiChat(true)}
                    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-extrabold transition"
                  >
                    Ask AI Mentor
                  </button>
                </div>
              </section>

              {/* QUICK STATS */}
              <section className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {[
                  { title: "Subjects Completed", value: "5 / 8", color: "text-cyan-400" },
                  { title: "Topics Learned", value: "24 / 32", color: "text-indigo-400" },
                  { title: "Coding Problems Solved", value: "128 Problems", color: "text-emerald-400" },
                  { title: "Quiz Average", value: "88.5%", color: "text-violet-400" },
                  { title: "Assignments Submitted", value: "14 Submitted", color: "text-amber-400" },
                  { title: "Projects Built", value: "3 Active", color: "text-rose-400" },
                  { title: "Certificates Earned", value: "2 Earned", color: "text-teal-400" },
                  { title: "Academic Readiness Score", value: "74 / 100", color: "text-fuchsia-400" },
                  { title: "Placement Readiness", value: "High Fit", color: "text-sky-400" },
                  { title: "Interview Readiness", value: "Medium", color: "text-orange-400" },
                  { title: "Weekly Study Hours", value: "18 Hours", color: "text-purple-400" },
                  { title: "Daily Streak", value: "27 Days 🔥", color: "text-pink-400" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-950/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between shadow transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.title}</span>
                    <h3 className={`text-xl sm:text-2xl font-black mt-2 ${stat.color}`}>{stat.value}</h3>
                  </div>
                ))}
              </section>

              {/* CONTINUE LEARNING & TIMELINE ROADMAP */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Continue Learning card */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h2 className="text-base font-bold text-slate-200">Continue Learning</h2>
                    <button onClick={() => setActiveTab("subjects")} className="text-xs font-bold text-cyan-400 hover:underline">
                      See Catalog
                    </button>
                  </div>

                  <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow">
                    <div className="h-24 w-full sm:w-36 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-4xl border border-white/5 shrink-0 select-none">
                      ⚛️
                    </div>
                    <div className="space-y-3 flex-1 w-full">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Course</span>
                        <h3 className="text-lg font-bold text-white mt-0.5">Advanced React Frameworks</h3>
                        <p className="text-xs text-slate-400">Mastering Vite, Rolldown plugins, and SSR architectures.</p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span className="text-slate-500">Progress</span>
                          <span className="text-cyan-400">75% (6 / 8 Topics)</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <span className="text-xs text-slate-500 font-bold">⏱ Est. 2.5 hours remaining</span>
                        <button
                          onClick={() => setActiveTab("subjects")}
                          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-extrabold border border-white/5 transition"
                        >
                          Resume Session
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Roadmap side widget */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h2 className="text-base font-bold text-slate-200">Development Roadmap</h2>
                    <button onClick={() => setActiveTab("roadmap")} className="text-xs font-bold text-cyan-400 hover:underline">
                      Full View
                    </button>
                  </div>

                  <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-4">
                    {[
                      { step: "Semester 1", status: "Done", icon: "✓", active: false },
                      { step: "Semester 2", status: "Done", icon: "✓", active: false },
                      { step: "Semester 3 (Current)", status: "Active", icon: "⏳", active: true },
                      { step: "Semester 4 & Projects", status: "Upcoming", icon: "🔒", active: false },
                      { step: "Internship & Job Placement", status: "Upcoming", icon: "🔒", active: false }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`h-8 w-8 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                          row.active 
                            ? "bg-cyan-500/20 border-cyan-500 text-cyan-400" 
                            : row.status === "Done"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-slate-900 border-white/5 text-slate-500"
                        }`}>
                          {row.icon}
                        </div>
                        <div className="text-xs font-bold">
                          <p className={row.active ? "text-cyan-400" : row.status === "Done" ? "text-slate-300" : "text-slate-500"}>
                            {row.step}
                          </p>
                          <span className="text-[9px] uppercase tracking-wider text-slate-500">{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SUBJECTS & CODING GRID */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Subjects Grid panel */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h2 className="text-base font-bold text-slate-200">Subjects Library</h2>
                    <button onClick={() => setActiveTab("subjects")} className="text-xs font-bold text-cyan-400 hover:underline">
                      See All
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { name: "Database Systems", icon: "🗄️", completion: 80, diff: "Medium" },
                      { name: "Operating Systems", icon: "⚙️", completion: 60, diff: "Medium" },
                      { name: "Computer Networks", icon: "🌐", completion: 45, diff: "Hard" },
                      { name: "Web Development", icon: "💻", completion: 90, diff: "Easy" }
                    ].map((subject, idx) => (
                      <div key={idx} className="bg-slate-950/40 border border-white/5 rounded-3xl p-5 shadow flex flex-col justify-between hover:border-white/10 transition">
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-3xl select-none">{subject.icon}</span>
                          <span className="rounded-xl bg-slate-900 px-2 py-0.5 text-[9px] font-bold text-slate-400 border border-white/5">
                            {subject.diff}
                          </span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <h3 className="font-bold text-slate-200 text-sm">{subject.name}</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold text-slate-500">
                              <span>Completed</span>
                              <span>{subject.completion}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500" style={{ width: `${subject.completion}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coding distribution side widget */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h2 className="text-base font-bold text-slate-200">Coding Practice</h2>
                    <button onClick={() => setActiveTab("coding")} className="text-xs font-bold text-cyan-400 hover:underline">
                      Practices
                    </button>
                  </div>

                  <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="h-32 w-full flex items-center justify-center">
                      {/* Interactive Pie Chart widget */}
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={codingDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={50}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {codingDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-2 text-xs font-bold">
                      {codingDistribution.map((entry, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
                            <span className="text-slate-400">{entry.name}</span>
                          </div>
                          <span>{entry.value} Solved</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* STUDY RECOMMENDATIONS */}
              <section className="space-y-4">
                <div className="border-b border-white/5 pb-2">
                  <h2 className="text-base font-bold text-slate-200">Study Recommendations</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { rec: "Learn Docker & Containers", cat: "Infrastructure", time: "Est. 3 hours" },
                    { rec: "Complete REST APIs module", cat: "Web Dev", time: "Est. 2 hours" },
                    { rec: "Practice Dynamic Programming", cat: "DSA", time: "Est. 5 hours" },
                    { rec: "Enhance Resume metrics", cat: "Student Prep", time: "Est. 1 hour" }
                  ].map((rec, i) => (
                    <div key={i} className="bg-slate-950/40 border border-white/5 rounded-3xl p-5 shadow space-y-3 flex flex-col justify-between hover:border-cyan-500/20 transition">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400">{rec.cat}</span>
                        <h3 className="font-bold text-sm text-slate-200 leading-snug">{rec.rec}</h3>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">{rec.time}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* TAB 2: MY SUBJECTS */}
          {activeTab === "subjects" && (
            <div className="space-y-8">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Course Catalog</p>
                <h1 className="text-3xl font-black mt-2 text-white">My Subjects</h1>
                <p className="text-sm text-slate-400 mt-2">Browse subject-wise completion, core lectures, study guides, and test roadmaps.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {loadingSubjects ? (
                  <div className="col-span-full py-20 text-center text-slate-500 font-bold text-sm">
                    Loading your engineering curriculum...
                  </div>
                ) : subjectsList.length === 0 ? (
                  <div className="col-span-full py-20 text-center text-slate-500 font-bold text-sm">
                    No subjects found. Run database seeder to populate.
                  </div>
                ) : (
                  subjectsList.map((subject, idx) => {
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

                    const topicsCount = subject.concepts ? subject.concepts.reduce((acc, c) => acc + (c.topics ? c.topics.length : 0), 0) : 0;
                    const resourcesCount = (subject.youtubeResources ? subject.youtubeResources.length : 0) + 
                                           (subject.textbooks ? subject.textbooks.length : 0) + 
                                           (subject.softwareTools ? subject.softwareTools.length : 0);
                    const completion = Math.max(15, (subject.name.length * 3) % 95);

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
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 3: LEARNING ROADMAP */}
          {activeTab === "roadmap" && (
            <div className="space-y-8">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Academic Roadmap</p>
                <h1 className="text-3xl font-black mt-2 text-white">Full Stack Engineering Path</h1>
                <p className="text-sm text-slate-400 mt-2">Complete semester goals, projects, external credentials, and audit requirements to qualify for placements.</p>
              </section>

              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 shadow relative overflow-hidden">
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-slate-800"></div>

                <div className="space-y-10 relative">
                  {[
                    { term: "Semester 1", status: "Completed", icon: "✓", color: "border-emerald-500 text-emerald-400 bg-emerald-500/10", details: "Academics: C Programming, basic electricals, physics, fundamentals. Earned 9.0 GPA." },
                    { term: "Semester 2", status: "Completed", icon: "✓", color: "border-emerald-500 text-emerald-400 bg-emerald-500/10", details: "Academics: OOPs with C++, basic electronics, math matrices. Built student database system." },
                    { term: "Semester 3 (Current)", status: "Active", icon: "⏳", color: "border-cyan-500 text-cyan-400 bg-cyan-500/20", details: "Academics: Data structures, DBMS, Operating systems. Primary Goal: Advanced React & Node.js API development." },
                    { term: "Semester 4 & Internship Prep", status: "Upcoming", icon: "🔒", color: "border-white/5 text-slate-500 bg-slate-900", details: "Audits: Mock placement tests, dynamic programming practice. Goal: Earn AWS Cloud Practitioner credential." },
                    { term: "Job Placements & Portfolio Build", status: "Upcoming", icon: "🔒", color: "border-white/5 text-slate-500 bg-slate-900", details: "Academics: System Design, HR behavior preparation. Build Student Navigator portfolio project." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-8 items-start pl-4">
                      <div className={`h-10 w-10 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 relative z-10 ${step.color}`}>
                        {step.icon}
                      </div>
                      <div className="space-y-1.5 pt-1 max-w-xl">
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-extrabold text-white">{step.term}</h3>
                          <span className={`rounded-xl px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                            step.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : step.status === "Active"
                              ? "bg-cyan-500/10 text-cyan-400"
                              : "bg-slate-900 text-slate-500"
                          }`}>
                            {step.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CODING PRACTICE */}
          {activeTab === "coding" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Practice Hub</p>
                <h1 className="text-3xl font-black mt-2 text-white">Coding Practice</h1>
                <p className="text-sm text-slate-400 mt-2">Track coding statistics across external competitive platforms and practice recommended challenges.</p>
              </section>

              {/* Progress Rows */}
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { difficulty: "Easy Problems", solved: 65, total: 100, color: "bg-emerald-500" },
                  { difficulty: "Medium Problems", solved: 45, total: 80, color: "bg-indigo-500" },
                  { difficulty: "Hard Problems", solved: 18, total: 35, color: "bg-rose-500" }
                ].map((row, idx) => (
                  <div key={idx} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-300">{row.difficulty}</span>
                      <span className="text-white">{row.solved} / {row.total}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full`} style={{ width: `${(row.solved / row.total) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm space-y-6">
                <h2 className="text-base font-bold text-slate-200">Linked Coding Accounts</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { platform: "LeetCode", score: "Score: 1820", solved: "88 solved", rank: "Top 12%" },
                    { platform: "CodeChef", score: "3 Star (1650)", solved: "24 solved", rank: "Top 20%" },
                    { platform: "HackerRank", score: "5 Star Problem Solving", solved: "Gold Badge", rank: "Top 5%" },
                    { platform: "Codeforces", score: "Pupil (1240)", solved: "16 solved", rank: "Top 35%" }
                  ].map((plat, i) => (
                    <div key={i} className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 shadow space-y-2">
                      <h3 className="font-extrabold text-sm text-cyan-400">{plat.platform}</h3>
                      <p className="text-xs font-bold text-slate-200">{plat.score}</p>
                      <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                        <span>{plat.solved}</span>
                        <span>{plat.rank}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: QUIZZES */}
          {activeTab === "quizzes" && (
            <div className="space-y-8">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">Concept Verification</p>
                <h1 className="text-3xl font-black mt-2 text-white">Quizzes</h1>
                <p className="text-sm text-slate-400 mt-2">Verify subject concepts with short check quizzes and track weak/strong topics.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Accuracy meter */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Quiz Accuracy</h3>
                    <p className="text-4xl font-extrabold text-cyan-400 mt-3">88.5%</p>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Concept accuracy is high. Keep maintaining above 80% to audit qualification criteria for placements.
                  </p>
                </div>

                {/* Weak and Strong Topics lists */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Strong Topics</h3>
                  <ul className="text-xs space-y-2 text-slate-300 font-semibold list-inside list-disc">
                    <li>React Components & State management</li>
                    <li>Database Normalization (1NF, 2NF, 3NF)</li>
                    <li>SQL Joins & Indexing mechanisms</li>
                  </ul>
                </div>

                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">Weak Topics</h3>
                  <ul className="text-xs space-y-2 text-slate-300 font-semibold list-inside list-disc">
                    <li>Dynamic Programming algorithms</li>
                    <li>Operating System Deadlock avoidance (Banker's)</li>
                    <li>Network TCP Congestion Control algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ASSIGNMENTS */}
          {activeTab === "assignments" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Classwork</p>
                <h1 className="text-3xl font-black mt-2 text-white">Assignments</h1>
                <p className="text-sm text-slate-400 mt-2">Track upcoming, completed, and pending assignments due today.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { status: "Completed", count: 14, color: "text-emerald-400" },
                  { status: "Pending review", count: 2, color: "text-amber-400" },
                  { status: "Due Today", count: 1, color: "text-rose-400" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-950/40 border border-white/5 p-6 rounded-3xl flex flex-col justify-between shadow">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{item.status}</span>
                    <h3 className={`text-3xl font-extrabold mt-3 ${item.color}`}>{item.count}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: AI STUDENT ADVISOR */}
          {activeTab === "advisor" && (
            <div className="space-y-8">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">AI Intelligence</p>
                <h1 className="text-3xl font-black mt-2 text-white">AI Student Advisor</h1>
                <p className="text-sm text-slate-400 mt-2">Explore matching academic tracks based on your skills, interests, and development goals.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: "Frontend Developer", salary: "₹8 LPA - ₹15 LPA", demand: "High", skills: "React, CSS, Vite, REST APIs", companies: "Vercel, Razorpay, Zeta" },
                  { title: "Full Stack Engineer", salary: "₹10 LPA - ₹20 LPA", demand: "Very High", skills: "Node.js, Express, React, SQL", companies: "Atlassian, Microsoft, Groww" },
                  { title: "DevOps Engineer", salary: "₹12 LPA - ₹22 LPA", demand: "High", skills: "Docker, AWS, Linux, CI/CD", companies: "RedHat, AWS, TCS R&D" },
                  { title: "AI Research Scientist", salary: "₹15 LPA - ₹30 LPA", demand: "Trending", skills: "Python, PyTorch, Linear Algebra", companies: "Google DeepMind, OpenAI" }
                ].map((career, i) => (
                  <div key={i} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4 hover:border-white/10 transition">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="text-lg font-bold text-slate-100">{career.title}</h2>
                        <span className="rounded-xl bg-cyan-500/10 px-2 py-0.5 text-[9px] font-bold text-cyan-400 border border-cyan-500/20 uppercase shrink-0">
                          {career.demand} Demand
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-200">Avg Salary: {career.salary}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">Required: {career.skills}</p>
                    </div>
                    <div className="border-t border-white/5 pt-3 text-[10px] text-slate-500 font-bold">
                      Hiring: {career.companies}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: AI RESUME BUILDER */}
          {activeTab === "resume" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">Resume Metrics</p>
                <h1 className="text-3xl font-black mt-2 text-white">AI Resume Builder</h1>
                <p className="text-sm text-slate-400 mt-2">Generate resume metrics, review template matches, and get automated improvements.</p>
              </section>

              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-8 shadow space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text-white">Active Resume</h2>
                    <p className="text-xs text-slate-400">Chinmayi_Resume_CSE_2026.pdf</p>
                  </div>
                  <span className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                    ATS Score: 78%
                  </span>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Suggested Enhancements</h3>
                  <div className="space-y-3 text-xs text-slate-300 font-semibold leading-relaxed">
                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-amber-200">
                      💡 Expand on your Cloud Practitioner Training. Mention how you deployed React code to AWS S3.
                    </div>
                    <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-200">
                      💡 Include statistics (e.g. "Solved 120+ DSA problems, ranked in top 12% on LeetCode") to improve credibility.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: INTERVIEW PREPARATION */}
          {activeTab === "interview" && (
            <div className="space-y-8">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Interview Readiness</p>
                <h1 className="text-3xl font-black mt-2 text-white">Interview Preparation</h1>
                <p className="text-sm text-slate-400 mt-2">Practice mock behavioral templates, review coding platforms, and read interviews logs.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { topic: "Behavioral (STAR Method)", desc: "Prepare answers to typical behavioral questions (e.g. leadership, handling conflicts, teamwork)." },
                  { topic: "System Design Prep", desc: "Learn system scalability, microservices vs monolith, cache mechanisms, databases selection." },
                  { topic: "React Mock Interviews", desc: "Practice state hooks questions, virtual DOM explanations, and performance optimizations." },
                  { topic: "Database Queries Mock", desc: "Write raw SQL queries on Joins, sub-queries, normal forms definitions, indexing." }
                ].map((prep, i) => (
                  <div key={i} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-base font-bold text-slate-100">{prep.topic}</h2>
                      <p className="text-xs text-slate-400 leading-relaxed">{prep.desc}</p>
                    </div>
                    <button className="rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold py-2 border border-white/5 text-xs transition">
                      Start Prep Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Product Portfolio</p>
                <h1 className="text-3xl font-black mt-2 text-white">Projects</h1>
                <p className="text-sm text-slate-400 mt-2">Manage portfolio repositories, technological stacks, and live links.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: "AI Student Development Portal", stack: "React, Express, Node.js, MongoDB, Recharts", progress: 85, github: "https://github.com/chinmayi/student-nav", demo: "https://student-nav.vercel.app" },
                  { title: "Cloud Storage Command Line Tool", stack: "Go, AWS S3 SDK, Cryptography API", progress: 100, github: "https://github.com/chinmayi/cloud-cli", demo: null },
                  { title: "Decentralized Library Database System", stack: "Solidity, Web3.js, React, Hardhat", progress: 40, github: "https://github.com/chinmayi/lib-db", demo: null }
                ].map((project, idx) => (
                  <div key={idx} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="text-base font-bold text-slate-100 leading-snug">{project.title}</h2>
                        <span className="rounded-xl bg-slate-900 border border-white/5 px-2.5 py-0.5 text-[9px] font-bold text-slate-400">
                          {project.progress}% Complete
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-semibold leading-relaxed">Stack: {project.stack}</p>
                      
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 border border-white/5 text-center text-xs transition"
                      >
                        GitHub Link
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 text-center text-xs transition shadow-sm"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Qualifications</p>
                <h1 className="text-3xl font-black mt-2 text-white">Certifications</h1>
                <p className="text-sm text-slate-400 mt-2">Manage verified credentials, certifications, and licenses.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "June 2026", status: "Verified" },
                  { title: "Advanced React & Redux", issuer: "Udemy Credential", date: "April 2026", status: "Verified" }
                ].map((cert, i) => (
                  <div key={i} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow flex flex-col justify-between hover:border-white/10 transition">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="text-base font-bold text-slate-100">{cert.title}</h2>
                        <span className="rounded-xl bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-500/20 uppercase shrink-0">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-semibold">{cert.issuer} • Issued {cert.date}</p>
                    </div>
                    <button className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold py-2 border border-white/5 text-xs transition">
                      View Credential <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Metrics Hub</p>
                <h1 className="text-3xl font-black mt-2 text-white">Analytics</h1>
                <p className="text-sm text-slate-400 mt-2">Review study patterns, monthly completions, and placement audit metrics.</p>
              </section>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Area Chart: Study time */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-4">
                  <h3 className="text-sm font-bold text-slate-200">Weekly Learning Hours</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={studyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                        <XAxis dataKey="day" stroke="#ffffff40" fontSize={11} />
                        <YAxis stroke="#ffffff40" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", border: "1px solid rgba(255,255,255,0.05)" }} />
                        <Area type="monotone" dataKey="hours" stroke="#06b6d4" fillOpacity={0.1} fill="url(#colorHours)" />
                        <defs>
                          <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bar Chart: Progress */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-4">
                  <h3 className="text-sm font-bold text-slate-200">Monthly Progress</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                        <XAxis dataKey="month" stroke="#ffffff40" fontSize={11} />
                        <YAxis stroke="#ffffff40" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", border: "1px solid rgba(255,255,255,0.05)" }} />
                        <Bar dataKey="progress" fill="#6366f1" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 13: ACHIEVEMENTS */}
          {activeTab === "achievements" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Milestones</p>
                <h1 className="text-3xl font-black mt-2 text-white">Achievements</h1>
                <p className="text-sm text-slate-400 mt-2">Unlock progress badges by completing learning tracks and quizzes.</p>
              </section>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { badge: "100 Solved", desc: "100+ coding challenges solved", icon: "💻", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
                  { badge: "30-Day Streak", desc: "Maintained streak for 30 days", icon: "🔥", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                  { badge: "Quiz Master", desc: "100% score on concept checks", icon: "📝", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                  { badge: "First Project", desc: "Deploys first live project", icon: "🚀", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow text-center space-y-4 hover:border-white/10 transition">
                    <div className={`h-16 w-16 rounded-full border flex items-center justify-center text-3xl mx-auto shadow ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm text-white">{item.badge}</h3>
                      <p className="text-[10px] text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 14: CALENDAR */}
          {activeTab === "calendar" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Schedule</p>
                <h1 className="text-3xl font-black mt-2 text-white">Calendar</h1>
                <p className="text-sm text-slate-400 mt-2">Manage test dates, assignment deadlines, and coding contests.</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Lists of Events */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-200">Upcoming deadlines</h3>
                  <div className="space-y-3">
                    {[
                      { event: "React Advanced homework", date: "July 24, 2026", type: "Assignment", color: "text-amber-400 bg-amber-500/10" },
                      { event: "Mock Placement Test 2", date: "July 27, 2026", type: "Mock Exam", color: "text-rose-400 bg-rose-500/10" },
                      { event: "Google KickStart Contest", date: "August 5, 2026", type: "Contest", color: "text-cyan-400 bg-cyan-500/10" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center rounded-2xl bg-slate-900/60 p-4 border border-white/5 text-xs font-semibold">
                        <div>
                          <p className="text-white">{item.event}</p>
                          <span className="text-[10px] text-slate-500">Date: {item.date}</span>
                        </div>
                        <span className={`rounded-xl px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${item.color}`}>
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-sm flex items-center justify-center min-h-[300px]">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Timeline scheduler loader</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 15: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Inbox</p>
                <h1 className="text-3xl font-black mt-2 text-white">Notifications</h1>
                <p className="text-sm text-slate-400 mt-2">Stay updated with class reminders, deadlines, and AI recommendation notices.</p>
              </section>

              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-4">
                {[
                  { text: "Upcoming Quiz: Advanced React components is scheduled for tomorrow.", time: "2 hours ago", unread: true },
                  { text: "Assignment Reminder: DBMS normalizations submission is due today by 11:59 PM.", time: "6 hours ago", unread: true },
                  { text: "AI Recommendation: Learn Docker & Containers pathway generated by AI Advisor.", time: "1 day ago", unread: false }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-2xl border flex justify-between items-center text-xs font-semibold leading-relaxed ${
                    item.unread ? "bg-cyan-500/5 border-cyan-500/20 text-cyan-200" : "bg-slate-900 border-white/5 text-slate-300"
                  }`}>
                    <div>
                      <p>{item.text}</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">{item.time}</span>
                    </div>
                    {item.unread && (
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shrink-0 ml-4 shadow shadow-cyan-400/25"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 16: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Preferences</p>
                <h1 className="text-3xl font-black mt-2 text-white">Settings</h1>
                <p className="text-sm text-slate-400 mt-2">Manage notifications configurations, profile settings, and language preferences.</p>
              </section>

              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow max-w-2xl space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-200 border-b border-white/5 pb-2">Profile Preferences</h3>
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="space-y-1.5">
                      <label className="text-slate-400">First Name</label>
                      <input type="text" defaultValue="Chinmayi" className="w-full rounded-xl bg-white/5 border border-white/5 p-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-slate-400">Academic & Coding Goal</label>
                      <input type="text" defaultValue="Full Stack Developer" className="w-full rounded-xl bg-white/5 border border-white/5 p-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-200 border-b border-white/5 pb-2">Notification Configuration</h3>
                  <div className="space-y-2 text-xs font-semibold text-slate-300">
                    {[
                      "Email notifications on upcoming mock tests",
                      "AI advisor recommendations pushes",
                      "Quiz deadline reminders alerts"
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded border-white/10 bg-slate-950 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 17: PROFILE */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-fadeIn">
              <section className="rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Student Profile</p>
                <h1 className="text-3xl font-black mt-2 text-white">My Academic Profile</h1>
                <p className="text-sm text-slate-400 mt-2">Manage branch options, skills, and portfolio credentials.</p>
              </section>

              <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow max-w-3xl space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-white font-extrabold text-3xl shadow">
                    C
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-slate-100">Chinmayi Kumbalavati</h2>
                    <p className="text-xs text-slate-400 font-semibold">3rd Year Computer Science Student • CGPA: 9.1</p>
                    <p className="text-xs text-cyan-400 font-bold mt-1">Full Stack Developer Pathway</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 grid gap-6 sm:grid-cols-2 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Skills</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {["React", "Node.js", "Express", "Vite", "SQL", "Go", "Git"].map((s) => (
                        <span key={s} className="rounded-lg bg-slate-900 border border-white/5 px-2.5 py-1 text-slate-300 font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Interests</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {["Cloud Computing", "AI Research", "Web3 Systems", "API Design"].map((i) => (
                        <span key={i} className="rounded-lg bg-slate-900 border border-white/5 px-2.5 py-1 text-slate-300 font-semibold">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: YOUTUBE RESOURCES */}
          {activeTab === "youtube" && (
            <YouTubeResources />
          )}

          {/* TAB: PLACEMENT READINESS */}
          {activeTab === "placement" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Hero Header */}
              <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"></div>
                <div className="absolute left-40 bottom-0 -mb-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3">
                    <span className="rounded-xl bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-[10px] font-extrabold text-sky-400 uppercase tracking-widest">
                      SWE Placement Hub
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Placement Readiness</h1>
                    <p className="text-sm text-slate-400 max-w-lg">Track your SWE placement score, DSA & System Design readiness, company fit, and get AI-powered action items.</p>
                  </div>
                  {/* Circular Score */}
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <div className="relative h-32 w-32">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#placementGrad)" strokeWidth="10"
                          strokeDasharray={`${2 * Math.PI * 42 * 0.72} ${2 * Math.PI * 42 * 0.28}`}
                          strokeLinecap="round" />
                        <defs>
                          <linearGradient id="placementGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-white">72</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">/100</span>
                      </div>
                    </div>
                    <span className="rounded-xl bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-bold text-sky-400">High Fit</span>
                  </div>
                </div>

                {/* Score Breakdown Bar */}
                <div className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { label: "DSA", score: 78, color: "from-cyan-500 to-blue-500" },
                    { label: "System Design", score: 55, color: "from-indigo-500 to-purple-500" },
                    { label: "Behavioral", score: 80, color: "from-emerald-500 to-teal-500" },
                    { label: "Resume", score: 70, color: "from-amber-500 to-orange-500" },
                    { label: "Core CS", score: 82, color: "from-rose-500 to-pink-500" }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-slate-400 uppercase tracking-wider">{item.label}</span>
                        <span className="text-white">{item.score}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-700`} style={{ width: `${item.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SWE Readiness Checklist + Company Fit Grid */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* SWE Placement Checklist */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h2 className="text-sm font-bold text-slate-200">SWE Placement Checklist</h2>
                    <span className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[9px] font-bold text-emerald-400 uppercase">7 / 10 Done</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { task: "Solve 100+ LeetCode problems (Easy + Medium)", done: true },
                      { task: "Practice 20+ Hard DSA problems", done: false },
                      { task: "Complete System Design basics (HLD/LLD)", done: false },
                      { task: "Write STAR method behavioral answers", done: true },
                      { task: "ATS-optimized resume with metrics", done: true },
                      { task: "2+ portfolio projects with live demos", done: true },
                      { task: "Mock interview (peer or platform)", done: true },
                      { task: "Practice OS, DBMS, Networks core concepts", done: true },
                      { task: "Complete AWS Cloud Practitioner cert", done: true },
                      { task: "Attend at least 1 coding contest weekly", done: false }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-xs font-semibold transition ${
                        item.done
                          ? "bg-emerald-500/5 border border-emerald-500/10 text-emerald-300"
                          : "bg-slate-900/60 border border-white/5 text-slate-400"
                      }`}>
                        <span className={`text-base shrink-0 mt-0.5 ${item.done ? "text-emerald-400" : "text-slate-600"}`}>
                          {item.done ? "✓" : "○"}
                        </span>
                        <span className={item.done ? "line-through opacity-70" : ""}>{item.task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Readiness Cards */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h2 className="text-sm font-bold text-slate-200">Company Fit Analysis</h2>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Top Matches</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { company: "Atlassian", role: "Software Engineer", fit: 88, badge: "Strong Fit", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5", bar: "bg-emerald-500" },
                      { company: "Razorpay", role: "Full Stack SDE-1", fit: 82, badge: "Strong Fit", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5", bar: "bg-emerald-500" },
                      { company: "Microsoft", role: "New Grad SWE", fit: 68, badge: "Good Fit", color: "text-sky-400 border-sky-500/20 bg-sky-500/5", bar: "bg-sky-500" },
                      { company: "Google", role: "L3 SWE", fit: 52, badge: "Needs Work", color: "text-amber-400 border-amber-500/20 bg-amber-500/5", bar: "bg-amber-500" },
                      { company: "Amazon", role: "SDE-1", fit: 74, badge: "Good Fit", color: "text-sky-400 border-sky-500/20 bg-sky-500/5", bar: "bg-sky-500" }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-950/40 border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-white/10 transition">
                        <div className="h-10 w-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-lg shrink-0 select-none">
                          🏢
                        </div>
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-200 truncate">{item.company} — {item.role}</span>
                            <span className={`rounded-xl border px-2 py-0.5 text-[9px] font-bold uppercase shrink-0 ml-2 ${item.color}`}>{item.badge}</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${item.bar} rounded-full`} style={{ width: `${item.fit}%` }}></div>
                          </div>
                          <span className="text-[9px] font-bold text-slate-500">{item.fit}% match score</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mock Test Performance + AI Action Items */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Mock Test Logs */}
                <div className="lg:col-span-2 bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h2 className="text-sm font-bold text-slate-200">Mock Test Performance</h2>
                    <button onClick={() => setActiveTab("quizzes")} className="text-xs font-bold text-cyan-400 hover:underline">View All</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { test: "Full Stack SWE Mock #2", date: "Jul 27, 2026", score: 84, total: 100, color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/20" },
                      { test: "DSA Aptitude Round #1", date: "Jul 20, 2026", score: 71, total: 100, color: "text-sky-400 bg-sky-500/5 border-sky-500/20" },
                      { test: "Core CS Fundamentals", date: "Jul 14, 2026", score: 91, total: 100, color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/20" },
                      { test: "System Design Basics", date: "Jul 8, 2026", score: 58, total: 100, color: "text-amber-400 bg-amber-500/5 border-amber-500/20" },
                      { test: "HR & Behavioral Round", date: "Jun 30, 2026", score: 88, total: 100, color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/20" }
                    ].map((t, i) => (
                      <div key={i} className="flex items-center justify-between rounded-2xl bg-slate-900/60 border border-white/5 px-4 py-3 text-xs font-semibold hover:border-white/10 transition">
                        <div>
                          <p className="text-slate-200 font-bold">{t.test}</p>
                          <span className="text-[10px] text-slate-500">{t.date}</span>
                        </div>
                        <span className={`rounded-xl border px-3 py-1 text-xs font-extrabold ${t.color}`}>{t.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Action Items */}
                <div className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-5">
                  <div className="border-b border-white/5 pb-3">
                    <h2 className="text-sm font-bold text-slate-200">AI Action Items</h2>
                    <p className="text-[10px] text-slate-500 mt-1">Personalized by AI Placement Coach</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { priority: "High", action: "Practice 5 Hard DP problems this week", color: "text-rose-400 bg-rose-500/5 border-rose-500/20" },
                      { priority: "High", action: "Complete System Design: URL shortener + Cache", color: "text-rose-400 bg-rose-500/5 border-rose-500/20" },
                      { priority: "Medium", action: "Attend Google Kickstart contest on Aug 5", color: "text-amber-400 bg-amber-500/5 border-amber-500/20" },
                      { priority: "Medium", action: "Update resume with AWS deployment metrics", color: "text-amber-400 bg-amber-500/5 border-amber-500/20" },
                      { priority: "Low", action: "Add Codeforces div.3 contest to calendar", color: "text-slate-400 bg-slate-900 border-white/5" }
                    ].map((item, i) => (
                      <div key={i} className={`rounded-2xl border px-4 py-3 text-xs font-semibold space-y-1 ${item.color}`}>
                        <span className="text-[9px] uppercase tracking-wider opacity-70">{item.priority} Priority</span>
                        <p className="leading-snug">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skill Gap Analysis */}
              <section className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow space-y-5">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <h2 className="text-sm font-bold text-slate-200">SWE Skill Gap Analysis</h2>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">vs Industry Benchmark</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { skill: "Data Structures", yours: 78, benchmark: 85, icon: "📊" },
                    { skill: "Algorithms", yours: 70, benchmark: 80, icon: "🔁" },
                    { skill: "System Design", yours: 55, benchmark: 75, icon: "🏗️" },
                    { skill: "Database / SQL", yours: 85, benchmark: 80, icon: "🗄️" },
                    { skill: "OS Concepts", yours: 80, benchmark: 78, icon: "⚙️" },
                    { skill: "Computer Networks", yours: 60, benchmark: 72, icon: "🌐" },
                    { skill: "OOP & Design Patterns", yours: 74, benchmark: 80, icon: "🧩" },
                    { skill: "Communication Skills", yours: 88, benchmark: 75, icon: "🗣️" }
                  ].map((s, i) => (
                    <div key={i} className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-3 hover:border-white/10 transition">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{s.icon}</span>
                        <span className="text-xs font-bold text-slate-300">{s.skill}</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px] font-bold text-slate-500">
                          <span>You</span><span>{s.yours}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${s.yours >= s.benchmark ? 'bg-emerald-500' : 'bg-sky-500'}`} style={{ width: `${s.yours}%` }}></div>
                        </div>
                        <div className="flex justify-between text-[9px] font-bold text-slate-500">
                          <span>Benchmark</span><span>{s.benchmark}%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-slate-600" style={{ width: `${s.benchmark}%` }}></div>
                        </div>
                      </div>
                      <span className={`text-[9px] font-bold ${s.yours >= s.benchmark ? 'text-emerald-400' : 'text-sky-400'}`}>
                        {s.yours >= s.benchmark ? '✓ Above benchmark' : `Gap: ${s.benchmark - s.yours}%`}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-950/20 border-t border-white/5 px-8 py-6 text-center text-xs text-slate-500 font-bold mt-12 z-10 relative">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 AI Student Development Platform. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="hover:text-slate-300 transition">About</a>
              <a href="#support" className="hover:text-slate-300 transition">Support</a>
              <a href="#privacy" className="hover:text-slate-300 transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-300 transition">Terms</a>
            </div>
          </div>
        </footer>
      </div>

      {/* AI ASSISTANT CHAT DRAWER */}
      {showAiChat && (
        <div className="fixed right-6 bottom-6 w-96 max-w-full rounded-[28px] border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-4 flex flex-col z-50 h-[500px] animate-slideIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-xl select-none">🤖</span>
              <div>
                <h3 className="font-extrabold text-sm text-white">AI Placement Coach</h3>
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Online Advisor
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowAiChat(false)}
              className="p-1 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-thin">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3.5 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-gradient-to-tr from-cyan-500 to-blue-600 text-white rounded-tr-none"
                    : "bg-white/5 border border-white/5 text-slate-200 rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="flex flex-wrap gap-1.5 pb-3">
            {[
              "Review my resume",
              "Next roadmap goal",
              "Coding stats check"
            ].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInputMessage(q);
                }}
                className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 text-[10px] font-bold transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input block */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask for resume feedback, interview tips..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              className="flex-1 rounded-xl bg-white/5 border border-white/5 px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <button
              onClick={handleSendMessage}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2.5 flex items-center justify-center shadow-lg shadow-cyan-500/20"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;
