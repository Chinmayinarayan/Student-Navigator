import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Milestone,
  Briefcase,
  CheckCircle2,
  CircleDot,
  Clock,
  Sparkles,
  BookOpen,
  Code2,
  Layers,
  Terminal,
  Trophy,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  Brain,
  Shield,
  Cloud,
  Check,
  PlayCircle,
  Cpu,
  Target,
  FileCode2,
  FolderGit2,
  Award,
} from "lucide-react";
import { getCareerById, toggleCareerProject } from "../services/roadmapApi";

function CareerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [career, setCareer] = useState(null);
  const [topics, setTopics] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("roadmap"); // "overview" | "skills" | "roadmap" | "subjects" | "projects" | "dsa" | "readiness"
  const [projectDifficultyFilter, setProjectDifficultyFilter] = useState("All");
  const [userProjectStatuses, setUserProjectStatuses] = useState({});
  const [togglingProject, setTogglingProject] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCareerData = async () => {
      try {
        setLoading(true);
        const data = await getCareerById(id);
        if (!isMounted) return;
        setCareer(data.career);
        setTopics(data.topics || []);
        setMetrics(data.metrics || null);

        // Map existing project statuses
        const statusMap = {};
        (data.metrics?.userProjectStatuses || []).forEach((p) => {
          statusMap[p.projectId] = p.status;
        });
        setUserProjectStatuses(statusMap);
      } catch (error) {
        console.error("Failed to load career details:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCareerData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleProjectStatusChange = async (projectId, newStatus) => {
    try {
      setTogglingProject(projectId);
      setUserProjectStatuses((prev) => ({ ...prev, [projectId]: newStatus }));
      await toggleCareerProject(career._id, projectId, newStatus);
      // Refresh career metrics
      const refreshed = await getCareerById(career._id);
      setMetrics(refreshed.metrics);
    } catch (error) {
      console.error("Failed to update project status:", error);
    } finally {
      setTogglingProject(null);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl backdrop-blur-xl max-w-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent mx-auto" />
          <h2 className="mt-4 text-base font-bold text-white">Loading Career Roadmap...</h2>
          <p className="mt-1 text-xs text-slate-400">Mapping subjects, skills & readiness engine.</p>
        </div>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-12 text-center backdrop-blur-xl">
        <h2 className="text-xl font-bold text-rose-400">Career Pathway Not Found</h2>
        <p className="mt-2 text-xs text-slate-400">The career path you requested does not exist or has been moved.</p>
        <Link
          to="/careers"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white border border-white/10 hover:bg-slate-800 transition"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Career Directory
        </Link>
      </div>
    );
  }

  const readinessScore = metrics?.placementReadiness || 0;
  const readinessStatus = metrics?.readinessStatus || "Starting";

  const essentialSkills = career.essentialSkills || career.requiredSkills?.slice(0, 4) || [];
  const importantSkills = career.importantSkills || career.requiredSkills?.slice(4, 8) || [];
  const goodToHaveSkills = career.goodToHaveSkills || career.requiredSkills?.slice(8) || [];

  const phases = career.roadmapPhases || [];
  const relatedSubjects = career.relatedSubjects || [];

  const filteredProjects = (career.projects || []).filter((p) => {
    if (projectDifficultyFilter === "All") return true;
    return p.difficulty === projectDifficultyFilter;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Back to Careers Nav */}
      <div className="flex items-center justify-between">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-cyan-300 transition"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Career Directory
        </Link>

        <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-[11px] font-bold text-slate-300">
          Pathway ID: <span className="text-cyan-400 font-mono">{career._id?.slice(-6)}</span>
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-indigo-950/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                {career.category}
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300">
                🔥 {career.industryDemand} Demand
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                Level: {career.level}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {career.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {career.description}
            </p>

            {/* Key Metrics Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">Avg. Salary in India</p>
                <p className="text-lg font-black text-emerald-300">{career.averageSalary}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Phases</p>
                <p className="text-lg font-black text-white">{phases.length || 6} Structured Phases</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mapped Subjects</p>
                <p className="text-lg font-black text-cyan-300">{relatedSubjects.length} Academic Subjects</p>
              </div>
            </div>
          </div>

          {/* Placement Readiness Circular Widget */}
          <div className="flex flex-col items-center justify-center rounded-3xl border border-cyan-500/30 bg-slate-950/80 p-6 text-center shadow-2xl backdrop-blur-md shrink-0 lg:w-72">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Placement Readiness</p>
            <div className="relative my-4 flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-800 bg-slate-900/90 shadow-inner">
              {/* Radial gradient track */}
              <div
                className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-indigo-400 transition-all duration-700"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${readinessScore > 50 ? "100% 0%, 100% 100%, 0% 100%, 0% 0%" : "100% 0%"})`,
                }}
              />
              <div className="relative z-10 text-center">
                <span className="text-3xl font-black text-white">{readinessScore}%</span>
                <p className="text-[9px] font-bold uppercase text-cyan-400">{readinessStatus}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              {readinessScore >= 90
                ? "Eligible for Placement Drives"
                : readinessScore >= 50
                ? "Mid-Stage Preparation"
                : "Foundations in Progress"}
            </span>
          </div>
        </div>
      </section>

      {/* Navigation Tab Bar */}
      <section className="flex overflow-x-auto gap-2 border-b border-white/10 pb-3 scrollbar-thin">
        {[
          { id: "roadmap", label: "Learning Roadmap (6 Phases)", icon: Milestone },
          { id: "skills", label: "Required Skills", icon: Sparkles },
          { id: "subjects", label: "Connected Subjects & Topics", icon: BookOpen },
          { id: "projects", label: "Recommended Projects", icon: FolderGit2 },
          { id: "dsa", label: "Coding & DSA Practice", icon: Code2 },
          { id: "overview", label: "Career Overview & Roles", icon: Briefcase },
          { id: "readiness", label: "Placement Readiness", icon: Trophy },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-500/40 shadow-md shadow-cyan-500/10"
                  : "bg-slate-950/60 text-slate-400 border-white/5 hover:border-white/20 hover:bg-slate-900/60 hover:text-slate-200"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </section>

      {/* ========================================================================= */}
      {/* TAB 1: LEARNING ROADMAP (6 PHASES) */}
      {/* ========================================================================= */}
      {activeTab === "roadmap" && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Milestone className="h-5 w-5 text-cyan-400" />
                6-Phase Career Learning Roadmap
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Follow this sequential phase structure designed by industry experts to advance from beginner to placement-ready.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 shrink-0">
              <Clock className="h-4 w-4 text-cyan-400" />
              Total Estimated Duration:{" "}
              <span className="font-bold text-white">
                {phases.reduce((acc, p) => acc + (p.estimatedWeeks || 4), 0)} Weeks
              </span>
            </div>
          </div>

          <div className="space-y-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 hidden md:block" />

            {phases.map((phase, idx) => (
              <div
                key={phase._id || idx}
                className="relative md:ml-12 rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-6 transition hover:border-cyan-500/30"
              >
                {/* Phase Node Indicator */}
                <div className="absolute -left-12 top-8 -translate-x-1/2 h-7 w-7 rounded-full bg-slate-950 border-2 border-cyan-400 hidden md:flex items-center justify-center text-[10px] font-black text-cyan-300 shadow-md shadow-cyan-500/20">
                  {idx + 1}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-block rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-300">
                      Phase {idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{phase.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {phase.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-center shrink-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration</p>
                    <p className="text-sm font-black text-cyan-300">{phase.estimatedWeeks || 4} Weeks</p>
                  </div>
                </div>

                {/* Skills & Key Topics Grid */}
                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-white/5">
                  {/* Required Skills in this Phase */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      Key Skills Mastered
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(phase.skills || []).map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                      Core Topics
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(phase.keyTopics || []).map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Learning Milestones Checklist */}
                {phase.learningMilestones && phase.learningMilestones.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Learning Milestones Checklist
                    </h4>
                    <ul className="space-y-2">
                      {phase.learningMilestones.map((ms, mIdx) => (
                        <li
                          key={mIdx}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-900/40 p-3 text-xs text-slate-300"
                        >
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Connected Subjects for this Phase */}
                {phase.subjects && phase.subjects.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      Connected Platform Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.subjects.map((sub) => (
                        <Link
                          key={sub._id || sub}
                          to={`/subjects/${sub._id || sub}`}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>{sub.name || "Subject Details"}</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: REQUIRED SKILLS (ESSENTIAL / IMPORTANT / GOOD TO HAVE) */}
      {/* ========================================================================= */}
      {activeTab === "skills" && (
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Categorized Skill Specifications
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Skills are segmented by priority levels so you know what to master first for technical interviews.
            </p>
          </div>

          {/* Essential Skills */}
          <div className="rounded-3xl border border-cyan-500/30 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-black text-white">Essential Skills (Must Have)</h3>
              </div>
              <span className="rounded-lg bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-cyan-300">
                Highest Priority
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fundamental core skills and conceptual technologies directly tested in 100% of interview rounds for this career.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-2">
              {essentialSkills.map((sk, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 transition hover:bg-cyan-500/10 hover:border-cyan-500/40"
                >
                  <div className="h-8 w-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{sk}</h4>
                    <p className="text-[10px] text-cyan-400/80 font-medium">Core Requirement</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Skills */}
          <div className="rounded-3xl border border-indigo-500/30 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-3 w-3 rounded-full bg-indigo-400" />
                <h3 className="text-lg font-black text-white">Important Skills (High Priority)</h3>
              </div>
              <span className="rounded-lg bg-indigo-500/20 border border-indigo-500/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-indigo-300">
                Key Competency
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Required for building robust production software, system design rounds, and enterprise workflows.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-2">
              {importantSkills.map((sk, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 transition hover:bg-indigo-500/10 hover:border-indigo-500/40"
                >
                  <div className="h-8 w-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{sk}</h4>
                    <p className="text-[10px] text-indigo-400/80 font-medium">Recommended</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Good To Have Skills */}
          {goodToHaveSkills.length > 0 && (
            <div className="rounded-3xl border border-purple-500/30 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-purple-400" />
                  <h3 className="text-lg font-black text-white">Good to Have Skills (Differentiators)</h3>
                </div>
                <span className="rounded-lg bg-purple-500/20 border border-purple-500/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-purple-300">
                  Competitive Advantage
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Advanced bonus tools and modern paradigms that set candidate profiles apart for top-tier tech roles.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                {goodToHaveSkills.map((sk, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 transition hover:bg-purple-500/10 hover:border-purple-500/40"
                  >
                    <div className="h-8 w-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 font-bold text-xs">
                      ★
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{sk}</h4>
                      <p className="text-[10px] text-purple-400/80 font-medium">Bonus Strength</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CONNECTED SUBJECTS & TOPICS SYSTEM */}
      {/* ========================================================================= */}
      {activeTab === "subjects" && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-cyan-400" />
                Connected Academic & Platform Subjects
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Mapped hierarchy: <span className="text-cyan-300 font-semibold">Career → Skills → Subjects → Topics</span>. Study directly from the platform.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-cyan-300 shrink-0">
              {topics.filter((t) => t.isCompleted).length} / {topics.length} Topics Completed
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {relatedSubjects.map((subject) => {
              const subjectTopics = topics.filter(
                (t) => t.subject?.toString() === subject._id?.toString()
              );
              const completedCount = subjectTopics.filter((t) => t.isCompleted).length;
              const subProgress =
                subjectTopics.length === 0
                  ? 0
                  : Math.round((completedCount / subjectTopics.length) * 100);

              return (
                <div
                  key={subject._id}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-xl space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-bold text-indigo-300 uppercase">
                          {subject.difficulty || "Core Subject"}
                        </span>
                        <h3 className="mt-1 text-lg font-bold text-white">{subject.name}</h3>
                      </div>

                      <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-black text-cyan-300">
                        {subProgress}%
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2">{subject.description}</p>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                        style={{ width: `${subProgress}%` }}
                      />
                    </div>

                    {/* Topics Preview List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                        Key Topics ({subjectTopics.length})
                      </p>
                      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                        {subjectTopics.slice(0, 6).map((topic) => (
                          <div
                            key={topic._id}
                            className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2 text-xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {topic.isCompleted ? (
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              ) : (
                                <CircleDot className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                              )}
                              <span className={`truncate ${topic.isCompleted ? "text-slate-300" : "text-slate-400"}`}>
                                {topic.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 shrink-0 ml-2">
                              <Link
                                to={`/topics/${topic._id}`}
                                className="rounded-lg bg-white/5 px-2 py-1 text-[10px] font-bold text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition"
                              >
                                Study
                              </Link>
                              <Link
                                to={`/topics/${topic._id}/coding`}
                                className="rounded-lg bg-white/5 px-2 py-1 text-[10px] font-bold text-indigo-300 hover:bg-indigo-500/20 transition"
                              >
                                Code
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link to Full Subject Page */}
                  <Link
                    to={`/subjects/${subject._id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:border-cyan-400/40 transition"
                  >
                    <span>View Complete Subject Syllabus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: RECOMMENDED PROJECTS (BEGINNER, INTERMEDIATE, ADVANCED) */}
      {/* ========================================================================= */}
      {activeTab === "projects" && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FolderGit2 className="h-5 w-5 text-cyan-400" />
                Portfolio Capstone Projects
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-world full-scale projects to validate your skills and showcase on your technical resume.
              </p>
            </div>

            {/* Difficulty Filter Tabs */}
            <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-slate-950/80 p-1">
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setProjectDifficultyFilter(level)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                    projectDifficultyFilter === level
                      ? "bg-cyan-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((proj) => {
              const currentStatus = userProjectStatuses[proj.id] || "Not Started";

              const difficultyBadgeColor =
                proj.difficulty === "Advanced"
                  ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                  : proj.difficulty === "Intermediate"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

              return (
                <div
                  key={proj.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-xl space-y-4 transition hover:border-cyan-500/30"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-lg border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${difficultyBadgeColor}`}
                      >
                        {proj.difficulty} Project
                      </span>

                      {/* Status Selector Badge */}
                      <select
                        value={currentStatus}
                        disabled={togglingProject === proj.id}
                        onChange={(e) =>
                          handleProjectStatusChange(proj.id, e.target.value)
                        }
                        className={`rounded-xl border px-2.5 py-1 text-[11px] font-extrabold focus:outline-none transition cursor-pointer ${
                          currentStatus === "Completed"
                            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                            : currentStatus === "In Progress"
                            ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                            : "bg-slate-900 border-white/10 text-slate-400"
                        }`}
                      >
                        <option value="Not Started" className="bg-slate-950 text-white">Not Started</option>
                        <option value="In Progress" className="bg-slate-950 text-white">In Progress</option>
                        <option value="Completed" className="bg-slate-950 text-white">Completed</option>
                      </select>
                    </div>

                    <h3 className="text-base font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>

                    {/* Technologies Tag list */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {(proj.technologies || proj.skills || []).map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-white/10 bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expected Outcome */}
                    {proj.expectedOutcome && (
                      <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-3 text-[11px] text-slate-300">
                        <span className="font-bold text-cyan-400 block mb-1">Expected Outcome:</span>
                        {proj.expectedOutcome}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: CODING & DSA PRACTICE */}
      {/* ========================================================================= */}
      {activeTab === "dsa" && (
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code2 className="h-5 w-5 text-cyan-400" />
              Coding & Data Structures Requirements
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Target problem volume, pattern breakdowns, and interview-focused coding topics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Target Distribution Card */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-6 lg:col-span-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Problem Count</p>
                <p className="mt-1 text-3xl font-black text-white">
                  {career.dsaRequirements?.recommendedProblemsCount || 120}{" "}
                  <span className="text-sm font-bold text-cyan-400">Problems</span>
                </p>
              </div>

              {/* Solved Count vs Target */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Solved in Platform</span>
                  <span className="text-white font-bold">{metrics?.solvedCodingProblems || 0} Solved</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                    style={{
                      width: `${Math.min(
                        Math.round(
                          ((metrics?.solvedCodingProblems || 0) /
                            (career.dsaRequirements?.recommendedProblemsCount || 120)) *
                            100
                        ),
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              {/* Easy / Medium / Hard Distribution */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Recommended Problem Distribution
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold">Easy (Fundamentals)</span>
                    <span className="font-bold text-white">
                      {career.dsaRequirements?.difficultyDistribution?.easy || 40} Problems
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-semibold">Medium (Standard Patterns)</span>
                    <span className="font-bold text-white">
                      {career.dsaRequirements?.difficultyDistribution?.medium || 60} Problems
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-rose-400 font-semibold">Hard (Advanced Challenges)</span>
                    <span className="font-bold text-white">
                      {career.dsaRequirements?.difficultyDistribution?.hard || 20} Problems
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/subjects"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition"
              >
                <span>Browse Coding Practice Topics</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Core DSA Topics & Interview Focus */}
            <div className="space-y-6 lg:col-span-2">
              {/* DSA Topics */}
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  High-Priority DSA Topics for {career.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(career.dsaRequirements?.topics || [
                    "Arrays & Strings",
                    "Hash Tables",
                    "Trees & BST",
                    "Graphs",
                    "Dynamic Programming",
                  ]).map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interview Practice Recommendations */}
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-400" />
                  Coding Practice Recommendations
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {(career.dsaRequirements?.practiceRecommendations || [
                    "Focus on pattern recognition rather than memorizing individual solutions.",
                    "Practice writing clean code within a 25-minute timer per problem.",
                    "Explain your thought process aloud before typing code.",
                  ]).map((rec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-900/40 p-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Frequency Interview Problems */}
              {career.dsaRequirements?.interviewFocusedTopics && (
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    High-Frequency Interview Problems
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {career.dsaRequirements.interviewFocusedTopics.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/5 bg-slate-900/60 p-3 text-xs font-medium text-slate-300 flex items-center gap-2"
                      >
                        <Code2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: CAREER OVERVIEW & ROLES */}
      {/* ========================================================================= */}
      {activeTab === "overview" && (
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Responsibilities */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-cyan-400" />
              Typical Role Responsibilities
            </h3>
            <p className="text-xs text-slate-400">
              What you will be doing day-to-day as a professional {career.title}.
            </p>

            <ul className="space-y-3 pt-2">
              {(career.responsibilities || [
                "Architect and write maintainable production software code.",
                "Collaborate with product and engineering teams in agile sprints.",
                "Conduct code reviews and optimize system performance.",
              ]).map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-xs text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              Career Opportunities & Growth Trajectories
            </h3>
            <p className="text-xs text-slate-400">
              Industry hiring roles, promotion tracks, and specializations.
            </p>

            <ul className="space-y-3 pt-2">
              {(career.opportunities || [
                "Software Engineer / Senior Engineer (Tier-1 Tech)",
                "Technical Architect / Lead Developer",
                "Product Engineering Specialist",
              ]).map((opp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-xs text-slate-300 leading-relaxed"
                >
                  <Sparkles className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{opp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interview Topics & Certifications */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-400" />
              Recommended Industry Certifications & Interview Question Domains
            </h3>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              {/* Interview Domains */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Interview Domains
                </h4>
                <div className="space-y-1.5">
                  {(career.interviewTopics || [
                    "System Architecture",
                    "Core Fundamentals",
                    "Algorithms",
                  ]).map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/5 bg-slate-900/60 p-3 text-xs text-slate-300"
                    >
                      • {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Recognized Certifications
                </h4>
                <div className="space-y-1.5">
                  {(career.certifications || [
                    "AWS Certified Developer",
                    "Meta Professional Certificate",
                  ]).map((c, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs font-semibold text-amber-300 flex items-center gap-2"
                    >
                      <Award className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: PLACEMENT READINESS & PROGRESS ENGINE */}
      {/* ========================================================================= */}
      {activeTab === "readiness" && (
        <section className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-xl backdrop-blur-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                  Readiness Status: {readinessStatus}
                </span>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Career Placement Readiness: {readinessScore}%
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Evaluated across 5 core competency pillars: Learning, Skills, Projects, Coding, and Quizzes.
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black text-cyan-400">{readinessScore}%</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">Overall Score</p>
              </div>
            </div>

            {/* 5 Dimensional Progress Bars */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4 border-t border-white/5">
              {/* Learning / Topics */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">1. Learning Topics</span>
                  <span className="font-black text-cyan-300">{metrics?.learningProgress || 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 border border-white/5">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${metrics?.learningProgress || 0}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  {metrics?.completedTopicsCount || 0} of {metrics?.totalTopicsCount || 0} topics completed
                </p>
              </div>

              {/* Skills */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">2. Skills Mastery</span>
                  <span className="font-black text-indigo-300">{metrics?.skillsProgress || 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 border border-white/5">
                  <div
                    className="h-full rounded-full bg-indigo-400"
                    style={{ width: `${metrics?.skillsProgress || 0}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">Derived from completed topic modules</p>
              </div>

              {/* Projects */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">3. Capstone Projects</span>
                  <span className="font-black text-purple-300">{metrics?.projectProgress || 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 border border-white/5">
                  <div
                    className="h-full rounded-full bg-purple-400"
                    style={{ width: `${metrics?.projectProgress || 0}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  {metrics?.completedProjectsCount || 0} of {metrics?.totalProjects || 3} projects completed
                </p>
              </div>

              {/* Coding / DSA */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">4. Coding / DSA</span>
                  <span className="font-black text-emerald-300">{metrics?.codingProgress || 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 border border-white/5">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${metrics?.codingProgress || 0}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  {metrics?.solvedCodingProblems || 0} problems solved
                </p>
              </div>

              {/* Interview / Quizzes */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">5. Quizzes & Tests</span>
                  <span className="font-black text-amber-300">{metrics?.interviewProgress || 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 border border-white/5">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${metrics?.interviewProgress || 0}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500">Concept verification score</p>
              </div>
            </div>

            {/* Personalized Recommendations Box */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Next Recommended Steps for 100% Readiness
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {(metrics?.learningProgress || 0) < 70 && (
                  <p className="flex items-center gap-2">
                    • Complete more subject topics under the{" "}
                    <button
                      onClick={() => setActiveTab("subjects")}
                      className="text-cyan-400 underline font-bold"
                    >
                      Connected Subjects Tab
                    </button>
                    .
                  </p>
                )}
                {(metrics?.projectProgress || 0) < 100 && (
                  <p className="flex items-center gap-2">
                    • Complete and mark your capstone projects under the{" "}
                    <button
                      onClick={() => setActiveTab("projects")}
                      className="text-cyan-400 underline font-bold"
                    >
                      Projects Tab
                    </button>
                    .
                  </p>
                )}
                {(metrics?.codingProgress || 0) < 80 && (
                  <p className="flex items-center gap-2">
                    • Solve more algorithmic coding challenges in the{" "}
                    <button
                      onClick={() => setActiveTab("dsa")}
                      className="text-cyan-400 underline font-bold"
                    >
                      Coding & DSA Tab
                    </button>
                    .
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CareerDetails;
