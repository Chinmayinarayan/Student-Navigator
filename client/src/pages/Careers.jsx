import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Sparkles,
  Milestone,
  Terminal,
  Layers,
  Layout,
  Server,
  Smartphone,
  Brain,
  LineChart,
  Database,
  Cloud,
  Shield,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  X,
  ChevronDown,
  Scale,
  Check,
  Zap,
  BookOpen,
  FolderGit2,
  Code2,
} from "lucide-react";
import api from "../services/api";

// Icon mapping helper
const getCareerIcon = (iconName, category) => {
  const iconProps = { className: "h-6 w-6" };
  switch (iconName) {
    case "Terminal":
      return <Terminal {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    case "Layout":
      return <Layout {...iconProps} />;
    case "Server":
      return <Server {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "Brain":
      return <Brain {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    case "LineChart":
      return <LineChart {...iconProps} />;
    case "Database":
      return <Database {...iconProps} />;
    case "Cloud":
      return <Cloud {...iconProps} />;
    case "Shield":
      return <Shield {...iconProps} />;
    default:
      if (category === "AI & Data") return <Brain {...iconProps} />;
      if (category === "Cloud & Infrastructure") return <Cloud {...iconProps} />;
      if (category === "Security") return <Shield {...iconProps} />;
      return <Terminal {...iconProps} />;
  }
};

// Category badge color styling
const getCategoryBadgeStyle = (category) => {
  switch (category) {
    case "Software Development":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    case "AI & Data":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "Cloud & Infrastructure":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Security":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    default:
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }
};

// Demand badge color styling
const getDemandBadgeStyle = (demand) => {
  switch (demand) {
    case "Exponential":
      return "bg-rose-500/10 text-rose-400 border-rose-500/30";
    case "Very High":
      return "bg-amber-500/10 text-amber-400 border-amber-500/30";
    case "Critical Growth":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    default:
      return "bg-blue-500/10 text-blue-400 border-blue-500/30";
  }
};

const CATEGORIES = [
  "All Careers",
  "Software Development",
  "AI & Data",
  "Cloud & Infrastructure",
  "Security",
];

function Careers() {
  const [careers, setCareers] = useState([]);
  const [recommendedData, setRecommendedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Careers");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillSearchQuery, setSkillSearchQuery] = useState("");
  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Compare Careers State
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const skillDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchCareers = async () => {
      try {
        setLoading(true);
        const res = await api.get("/careers");
        if (!isMounted) return;
        setCareers(res.data.careers || []);
        if (res.data.recommendedCareer) {
          setRecommendedData(res.data.recommendedCareer);
        }
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

  // Close skill dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        skillDropdownRef.current &&
        !skillDropdownRef.current.contains(event.target)
      ) {
        setIsSkillDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Extract all unique canonical skills across careers
  const allSkills = useMemo(() => {
    const skillsSet = new Set();
    careers.forEach((c) => {
      (c.requiredSkills || []).forEach((s) => skillsSet.add(s));
    });
    return Array.from(skillsSet).sort();
  }, [careers]);

  // Filter skills inside the dropdown based on search
  const filteredDropdownSkills = useMemo(() => {
    if (!skillSearchQuery.trim()) return allSkills;
    return allSkills.filter((s) =>
      s.toLowerCase().includes(skillSearchQuery.toLowerCase().trim())
    );
  }, [allSkills, skillSearchQuery]);

  const toggleSkillSelection = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleCompareCareer = (career) => {
    setCompareList((prev) => {
      const exists = prev.find((c) => c._id === career._id);
      if (exists) {
        return prev.filter((c) => c._id !== career._id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), career];
      }
      return [...prev, career];
    });
  };

  // Filter and sort careers
  const filteredCareers = useMemo(() => {
    return careers
      .filter((c) => {
        // Category filter
        if (
          selectedCategory !== "All Careers" &&
          c.category !== selectedCategory
        ) {
          return false;
        }

        // Search query
        if (search.trim()) {
          const q = search.toLowerCase().trim();
          const matchTitle = c.title.toLowerCase().includes(q);
          const matchDesc = c.description.toLowerCase().includes(q);
          const matchSkills = (c.requiredSkills || []).some((s) =>
            s.toLowerCase().includes(q)
          );
          if (!matchTitle && !matchDesc && !matchSkills) {
            return false;
          }
        }

        // Multi-select Skill filter
        if (selectedSkills.length > 0) {
          const hasSelectedSkills = selectedSkills.some((s) =>
            (c.requiredSkills || []).includes(s)
          );
          if (!hasSelectedSkills) return false;
        }

        // Level filter
        if (selectedLevel !== "All") {
          if (c.level !== selectedLevel) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "progress") {
          return (b.userProgress || 0) - (a.userProgress || 0);
        }
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [careers, search, selectedCategory, selectedSkills, selectedLevel, sortBy]);

  // Compute category counts for tab badges
  const categoryCounts = useMemo(() => {
    const counts = { "All Careers": careers.length };
    CATEGORIES.slice(1).forEach((cat) => {
      counts[cat] = careers.filter((c) => c.category === cat).length;
    });
    return counts;
  }, [careers]);

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-indigo-950/60 p-8 shadow-2xl backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300 shadow-sm">
              <Milestone className="h-3.5 w-3.5 text-cyan-400" />
              Pathways Hub
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Career Roadmaps & Placement Directory
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore step-by-step 6-phase engineering roadmaps, required skills, connected college subjects, practical portfolio projects, and live placement readiness tracking.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Paths</p>
              <p className="mt-1 text-2xl font-black text-white">{careers.length}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phases / Role</p>
              <p className="mt-1 text-2xl font-black text-cyan-400">6 Phases</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Salary Range</p>
              <p className="mt-1 text-lg font-black text-emerald-400">₹6 - ₹40 LPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended for You Banner */}
      {recommendedData && recommendedData.career && (
        <section className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 p-6 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 text-xl shadow-md">
                🎯
              </div>
              <div className="space-y-1">
                <span className="inline-block rounded-md bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-cyan-300">
                  Recommended for You
                </span>
                <h3 className="text-lg font-black text-white">
                  Target Role: {recommendedData.career.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {recommendedData.foundationScore > 0 ? (
                    <>
                      You already have{" "}
                      <span className="font-extrabold text-cyan-300">
                        {recommendedData.foundationScore}%
                      </span>{" "}
                      of the required academic & problem solving foundation.
                    </>
                  ) : (
                    "Recommended foundational engineering pathway based on your curriculum."
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/careers/${recommendedData.career._id}`)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition shrink-0"
            >
              <span>View Recommended Roadmap</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-white/20 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </section>

      {/* Search & Filter Bar */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-xl backdrop-blur-xl flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            placeholder="Search by role, keyword (e.g. React, Docker)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 pl-11 text-xs font-semibold text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition"
          />
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-3.5 text-xs font-bold text-slate-500 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Searchable Multi-Select Skill Dropdown */}
          <div className="relative" ref={skillDropdownRef}>
            <button
              onClick={() => setIsSkillDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-xs font-bold transition ${
                selectedSkills.length > 0
                  ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                  : "bg-slate-900/90 border-white/10 text-slate-300 hover:border-white/20"
              }`}
            >
              <span>
                {selectedSkills.length === 0
                  ? "Filter by Skills"
                  : `Skills (${selectedSkills.length})`}
              </span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>

            {/* Dropdown Popover */}
            {isSkillDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl backdrop-blur-2xl z-50 space-y-2.5 animate-fadeIn">
                {/* Search input inside dropdown */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search skills..."
                    value={skillSearchQuery}
                    onChange={(e) => setSkillSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-1.5 pl-8 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                  <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-500" />
                </div>

                {/* Selected tags quick row */}
                {selectedSkills.length > 0 && (
                  <div className="flex items-center justify-between pt-1 border-t border-white/5">
                    <span className="text-[10px] font-bold text-slate-400">
                      {selectedSkills.length} selected
                    </span>
                    <button
                      onClick={() => setSelectedSkills([])}
                      className="text-[10px] font-bold text-rose-400 hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                )}

                {/* Scrollable skill checklist */}
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
                  {filteredDropdownSkills.map((sk) => {
                    const isSelected = selectedSkills.includes(sk);
                    return (
                      <label
                        key={sk}
                        className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold cursor-pointer transition ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span>{sk}</span>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSkillSelection(sk)}
                          className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              Level:
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-bold text-slate-200 focus:border-cyan-400 focus:outline-none transition"
            >
              <option value="All" className="bg-slate-950 text-white">All Levels</option>
              <option value="Beginner to Advanced" className="bg-slate-950 text-white">Beginner to Advanced</option>
              <option value="Intermediate to Advanced" className="bg-slate-950 text-white">Intermediate to Advanced</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-bold text-slate-200 focus:border-cyan-400 focus:outline-none transition"
            >
              <option value="default" className="bg-slate-950 text-white">Default Sort</option>
              <option value="progress" className="bg-slate-950 text-white">My Progress</option>
              <option value="title" className="bg-slate-950 text-white">Alphabetical</option>
            </select>
          </div>

          {/* Selected Skills Pills */}
          {selectedSkills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 w-full pt-1">
              {selectedSkills.map((sk) => (
                <span
                  key={sk}
                  className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300"
                >
                  {sk}
                  <button
                    onClick={() => toggleSkillSelection(sk)}
                    className="hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Compare Dock */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-3xl border border-cyan-500/40 bg-slate-950/95 px-5 py-3 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <Scale className="h-5 w-5 text-cyan-400" />
          <div>
            <p className="text-xs font-bold text-white">
              {compareList.length} Career{compareList.length > 1 ? "s" : ""} Selected
            </p>
            <p className="text-[10px] text-slate-400">Compare up to 3 roles side-by-side</p>
          </div>

          <div className="flex items-center gap-2 ml-3">
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="rounded-xl bg-cyan-500 px-4 py-2 text-xs font-extrabold text-slate-950 hover:bg-cyan-400 transition"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-3xl border border-white/5 bg-slate-900/40 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-2xl bg-white/10" />
                <div className="h-6 w-24 rounded-xl bg-white/10" />
              </div>
              <div className="h-6 w-3/4 rounded-xl bg-white/10" />
              <div className="h-12 w-full rounded-xl bg-white/5" />
              <div className="flex gap-2">
                <div className="h-6 w-16 rounded-lg bg-white/10" />
                <div className="h-6 w-16 rounded-lg bg-white/10" />
                <div className="h-6 w-16 rounded-lg bg-white/10" />
              </div>
              <div className="h-10 w-full rounded-2xl bg-white/10" />
            </div>
          ))}
        </div>
      ) : filteredCareers.length === 0 ? (
        /* Empty State */
        <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/40 p-12 text-center backdrop-blur-xl">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
            🔍
          </div>
          <h2 className="mt-4 text-lg font-bold text-white">No career paths found</h2>
          <p className="mt-1 text-xs text-slate-400">
            Try adjusting your search keywords or resetting filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("All Careers");
              setSelectedSkills([]);
              setSelectedLevel("All");
            }}
            className="mt-4 rounded-xl bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-500/30 transition"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        /* Career Cards Grid */
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCareers.map((career) => {
            const hasUserProgress =
              career.hasStarted || (career.userProgress && career.userProgress > 0);
            const progressValue = career.userProgress || 0;
            const isCompared = compareList.some((c) => c._id === career._id);

            return (
              <div
                key={career._id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="space-y-4">
                  {/* Top Badges & Icon & Compare Toggle */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-md group-hover:scale-105 transition">
                        {getCareerIcon(career.icon, career.category)}
                      </div>
                      <div>
                        <span
                          className={`inline-block rounded-lg border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${getCategoryBadgeStyle(
                            career.category
                          )}`}
                        >
                          {career.category}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className={`rounded-md border px-2 py-0.5 text-[9px] font-bold ${getDemandBadgeStyle(
                              career.industryDemand
                            )}`}
                          >
                            🔥 {career.industryDemand} Demand
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Compare Button & Salary Tag */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCompareCareer(career);
                        }}
                        className={`rounded-lg border px-2 py-0.5 text-[9px] font-bold transition flex items-center gap-1 ${
                          isCompared
                            ? "bg-cyan-500 text-slate-950 border-cyan-400"
                            : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        <Scale className="h-2.5 w-2.5" />
                        {isCompared ? "Selected" : "Compare"}
                      </button>

                      {career.averageSalary && (
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-right">
                          <p className="text-[9px] font-bold uppercase text-emerald-400/80">
                            Est. Salary (India)
                          </p>
                          <p className="text-xs font-black text-emerald-300">
                            {career.averageSalary}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Career Title */}
                  <div>
                    <h2 className="text-xl font-black text-white group-hover:text-cyan-300 transition">
                      {career.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {career.description}
                    </p>
                  </div>

                  {/* Required Skills - Proper individual responsive chips */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Required Skills
                      </p>
                      <span className="text-[10px] font-bold text-slate-500">
                        {(career.requiredSkills || []).length} Skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {(career.requiredSkills || []).slice(0, 6).map((skill, idx) => (
                        <span
                          key={`${skill}-${idx}`}
                          className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/90 px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}

                      {(career.requiredSkills || []).length > 6 && (
                        <span className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-extrabold text-cyan-400">
                          +{(career.requiredSkills || []).length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick Meta: Phases & Subjects & Projects */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
                    <div className="rounded-xl border border-white/5 bg-slate-900/40 p-2">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Phases</p>
                      <p className="text-xs font-black text-white">
                        {career.roadmapPhases?.length || 6}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-slate-900/40 p-2">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Subjects</p>
                      <p className="text-xs font-black text-cyan-300">
                        {career.relatedSubjects?.length ||
                          (career.relatedSubjectNames?.length || 4)}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-slate-900/40 p-2">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Projects</p>
                      <p className="text-xs font-black text-purple-300">
                        {career.projects?.length || 3}
                      </p>
                    </div>
                  </div>

                  {/* Clean Progress & Separated Status Wording */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-400">
                        Status:{" "}
                        <span className="text-cyan-300 font-extrabold">
                          {career.readinessStatus || "Starting"}
                        </span>
                      </span>
                      <span className="font-black text-white">
                        {progressValue}% Ready
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                        style={{ width: `${Math.max(progressValue, progressValue > 0 ? 5 : 0)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => navigate(`/careers/${career._id}`)}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold transition shadow-lg ${
                    hasUserProgress
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-cyan-500/20"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-cyan-400/40"
                  }`}
                >
                  <span>{hasUserProgress ? "Continue Roadmap" : "Explore Roadmap"}</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* COMPARE CAREERS MODAL */}
      {/* ========================================================================= */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6 scrollbar-thin">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Scale className="h-5 w-5 text-cyan-400" />
                <h2 className="text-xl font-black text-white">Compare Career Paths</h2>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {compareList.map((c) => (
                <div
                  key={c._id}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 space-y-4"
                >
                  <div>
                    <span className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      {c.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">{c.title}</h3>
                    <p className="text-xs text-emerald-400 font-bold mt-1">
                      {c.averageSalary}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs border-t border-white/5 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Demand:</span>
                      <span className="font-bold text-white">{c.industryDemand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Difficulty:</span>
                      <span className="font-bold text-white">{c.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Your Readiness:</span>
                      <span className="font-bold text-cyan-300">{c.userProgress || 0}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target Problems:</span>
                      <span className="font-bold text-white">
                        {c.dsaRequirements?.recommendedProblemsCount || 120} Problems
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    <p className="text-[10px] font-bold uppercase text-slate-400">Core Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {(c.requiredSkills || []).slice(0, 5).map((sk, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsCompareModalOpen(false);
                      navigate(`/careers/${c._id}`);
                    }}
                    className="w-full rounded-xl bg-cyan-500/20 border border-cyan-500/30 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/30 transition"
                  >
                    Open Roadmap
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;