import { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  GraduationCap,
  Sparkles,
  Clock,
  Heart,
  Search,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Calendar,
  Building,
  Award,
  ChevronRight,
  FileCheck,
  Bell,
  X,
  SlidersHorizontal,
  ChevronDown,
  Info,
  MapPin,
  BookOpen,
  ShieldCheck,
  Globe,
  Layers,
  HelpCircle,
} from "lucide-react";

function Scholarships() {
  const navigate = useNavigate();

  // Main data state
  const [scholarships, setScholarships] = useState([]);
  const [summary, setSummary] = useState({
    available: 0,
    recommended: 0,
    open: 0,
    closingSoon: 0,
    saved: 0,
    applied: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'recommended', 'closingSoon', 'saved', 'applications'

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSourcePortal, setSelectedSourcePortal] = useState("All");
  const [selectedEducationLevel, setSelectedEducationLevel] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedAward, setSelectedAward] = useState("All");
  const [selectedDeadline, setSelectedDeadline] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("recommended"); // 'recommended', 'deadline', 'award', 'newest', 'alphabetical'

  // UI interaction states
  const [toastMessage, setToastMessage] = useState(null);
  const [reminderModalScholarship, setReminderModalScholarship] = useState(null);
  const [statusModalScholarship, setStatusModalScholarship] = useState(null);
  const [statusUpdateValue, setStatusUpdateValue] = useState("Planning to Apply");
  const [statusUpdateNotes, setStatusUpdateNotes] = useState("");
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);
  const [expandedMatchId, setExpandedMatchId] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  // Fetch scholarships & summary
  const fetchData = async () => {
    try {
      setLoading(true);
      const [schRes, sumRes] = await Promise.all([
        api.get("/scholarships", {
          params: {
            search: searchTerm,
            sourcePortal: selectedSourcePortal,
            educationLevel: selectedEducationLevel,
            course: selectedCourse,
            type: selectedType,
            category: selectedCategory,
            location: selectedLocation,
            awardRange: selectedAward,
            deadlineFilter: selectedDeadline,
            status: selectedStatus,
            sortBy,
          },
        }),
        api.get("/scholarships/summary"),
      ]);

      setScholarships(schRes.data.scholarships || []);
      if (sumRes.data.summary) {
        setSummary(sumRes.data.summary);
      }
    } catch (error) {
      console.error("Failed to load scholarships:", error);
      showToast("Error loading scholarships. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    selectedSourcePortal,
    selectedEducationLevel,
    selectedCourse,
    selectedType,
    selectedCategory,
    selectedLocation,
    selectedAward,
    selectedDeadline,
    selectedStatus,
    sortBy,
  ]);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 350);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Toggle Save
  const handleToggleSave = async (scholarshipId, e) => {
    if (e) e.stopPropagation();

    // Optimistic UI update
    setScholarships((prev) =>
      prev.map((sch) => {
        if (sch._id === scholarshipId) {
          const nextSaved = !sch.isSaved;
          return {
            ...sch,
            isSaved: nextSaved,
            applicationStatus: nextSaved && !sch.applicationStatus ? "Saved" : sch.applicationStatus,
          };
        }
        return sch;
      })
    );

    try {
      const res = await api.post(`/scholarships/${scholarshipId}/toggle-save`);
      if (res.data.success) {
        showToast(res.data.message);
        const sumRes = await api.get("/scholarships/summary");
        if (sumRes.data.summary) setSummary(sumRes.data.summary);
      }
    } catch (error) {
      console.error("Failed to toggle save:", error);
      showToast("Error updating saved status.");
      // Rollback
      setScholarships((prev) =>
        prev.map((sch) =>
          sch._id === scholarshipId ? { ...sch, isSaved: !sch.isSaved } : sch
        )
      );
    }
  };

  // Update Application Status
  const handleUpdateStatusSubmit = async (e) => {
    e.preventDefault();
    if (!statusModalScholarship) return;

    const schId = statusModalScholarship._id;
    try {
      const res = await api.post(`/scholarships/${schId}/status`, {
        applicationStatus: statusUpdateValue,
        notes: statusUpdateNotes,
      });

      if (res.data.success) {
        showToast(`Application status updated to "${statusUpdateValue}" 📝`);
        setScholarships((prev) =>
          prev.map((sch) =>
            sch._id === schId
              ? {
                  ...sch,
                  isSaved: true,
                  applicationStatus: statusUpdateValue,
                  notes: statusUpdateNotes,
                }
              : sch
          )
        );
        const sumRes = await api.get("/scholarships/summary");
        if (sumRes.data.summary) setSummary(sumRes.data.summary);
      }
    } catch (error) {
      console.error("Error updating application status:", error);
      showToast("Failed to update application status.");
    } finally {
      setStatusModalScholarship(null);
    }
  };

  // Set Reminder
  const handleSetReminder = async (scholarshipId, days) => {
    try {
      const res = await api.post(`/scholarships/${scholarshipId}/reminder`, {
        reminderDaysBefore: days,
      });
      if (res.data.success) {
        showToast(res.data.message);
        setScholarships((prev) =>
          prev.map((sch) =>
            sch._id === scholarshipId ? { ...sch, reminderDaysBefore: days, isSaved: true } : sch
          )
        );
      }
    } catch (error) {
      console.error("Failed to set reminder:", error);
      showToast("Error setting reminder.");
    } finally {
      setReminderModalScholarship(null);
    }
  };

  // Filter list based on active tab
  const displayedScholarships = useMemo(() => {
    if (activeTab === "recommended") {
      return scholarships.filter((s) => s.match && s.match.isRecommended && !s.lifecycle.isClosed);
    }
    if (activeTab === "closingSoon") {
      return scholarships.filter((s) => s.lifecycle && s.lifecycle.isClosingSoon);
    }
    if (activeTab === "saved") {
      return scholarships.filter((s) => s.isSaved);
    }
    if (activeTab === "applications") {
      return scholarships.filter((s) => s.applicationStatus && s.applicationStatus !== "Saved");
    }
    return scholarships;
  }, [scholarships, activeTab]);

  // Closing soon list for top urgency banner
  const closingSoonList = useMemo(() => {
    return scholarships.filter((s) => s.lifecycle && s.lifecycle.isClosingSoon);
  }, [scholarships]);

  // Source Portals list
  const sourcePortals = [
    { label: "All Sources", value: "All" },
    { label: "🌟 Buddy4Study", value: "Buddy4Study" },
    { label: "🏛️ Vidyasaarathi", value: "Vidyasaarathi" },
    { label: "🇮🇳 Government", value: "Government" },
    { label: "🏢 Official Provider", value: "Official Provider" },
  ];

  // Helper date formatter
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-cyan-200 shadow-2xl backdrop-blur-xl shadow-cyan-950/50 animate-slideUp">
          <Sparkles className="h-5 w-5 text-cyan-400 shrink-0 animate-pulse" />
          <span className="text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-cyan-950/40 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>Verified Scholarships Hub • Buddy4Study • Vidyasaarathi • Govt Portals</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            🎓 Scholarship Finder
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Discover verified scholarships matched to your academic profile, course, eligibility, and career interests.
          </p>

          {/* DYNAMIC SUMMARY METRIC CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            <div
              onClick={() => setActiveTab("all")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-950/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Available
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {summary.available}
              </div>
            </div>

            <div
              onClick={() => setActiveTab("recommended")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "recommended"
                  ? "bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/10"
                  : "bg-slate-950/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Recommended
              </div>
              <div className="text-2xl font-black text-purple-200 mt-1">
                {summary.recommended}
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab("all");
                setSelectedStatus("Open");
              }}
              className="p-3.5 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                🟢 Open
              </div>
              <div className="text-2xl font-black text-emerald-300 mt-1">
                {summary.open}
              </div>
            </div>

            <div
              onClick={() => setActiveTab("closingSoon")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "closingSoon"
                  ? "bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10"
                  : "bg-slate-950/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Clock className="h-3 w-3" /> Closing Soon
              </div>
              <div className="text-2xl font-black text-amber-300 mt-1">
                {summary.closingSoon}
              </div>
            </div>

            <div
              onClick={() => setActiveTab("saved")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "saved"
                  ? "bg-rose-500/20 border-rose-400 shadow-lg shadow-rose-500/10"
                  : "bg-slate-950/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
                <Heart className="h-3 w-3" /> Saved
              </div>
              <div className="text-2xl font-black text-rose-300 mt-1">
                {summary.saved}
              </div>
            </div>

            <div
              onClick={() => setActiveTab("applications")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === "applications"
                  ? "bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/10"
                  : "bg-slate-950/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
                <FileCheck className="h-3 w-3" /> Applied
              </div>
              <div className="text-2xl font-black text-blue-300 mt-1">
                {summary.applied}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ⏰ CLOSING SOON SECTION (Shown prominently when available) */}
      {closingSoonList.length > 0 && activeTab !== "applications" && (
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900/60 to-amber-950/20 border border-amber-500/30 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Clock className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  ⏰ Closing Soon
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-extrabold">
                    {closingSoonList.length} urgent
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  Applications closing within the next 7 days. Submit your dossier before the deadline!
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab("closingSoon")}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 self-start sm:self-auto"
            >
              View all closing soon <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {closingSoonList.slice(0, 3).map((sch) => (
              <div
                key={sch._id}
                onClick={() => navigate(`/scholarships/${sch._id}`)}
                className="group relative p-4 rounded-2xl bg-slate-950/70 border border-amber-500/20 hover:border-amber-400/50 transition-all cursor-pointer space-y-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider">
                      {sch.provider}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {sch.title}
                    </h3>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-black shrink-0">
                    {sch.lifecycle.countdownText}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">
                    {sch.awardAmount}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    Deadline: {formatDate(sch.applicationDeadline)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {[
          { id: "all", label: "📚 All Scholarships", count: summary.available },
          { id: "recommended", label: "🎯 Recommended For You", count: summary.recommended },
          { id: "closingSoon", label: "⏰ Closing Soon", count: summary.closingSoon },
          { id: "saved", label: "❤️ Saved Scholarships", count: summary.saved },
          { id: "applications", label: "📝 My Applications", count: summary.applied },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-black"
                : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-white/5"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                activeTab === tab.id
                  ? "bg-slate-950/30 text-slate-950"
                  : "bg-white/10 text-slate-300"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* SEARCH, PORTAL SELECTOR & MULTI-FILTER BAR */}
      {activeTab !== "applications" && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search scholarship name, provider, course (B.Tech, CSE), eligibility, portal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="recommended">Sort: Recommended First 🎯</option>
                <option value="deadline">Sort: Deadline Soonest ⏰</option>
                <option value="award">Sort: Highest Award 💰</option>
                <option value="newest">Sort: Newest Added ✨</option>
                <option value="alphabetical">Sort: Alphabetical (A-Z)</option>
              </select>

              {/* Advanced Filter Drawer Toggle */}
              <button
                onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
                className={`px-4 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 border transition ${
                  showFiltersDrawer
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                    : "bg-slate-900/80 border-white/10 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Quick Source Portal Filter Pills (Buddy4Study, Vidyasaarathi, Government, Official Provider) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {sourcePortals.map((portal) => (
              <button
                key={portal.value}
                onClick={() => setSelectedSourcePortal(portal.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedSourcePortal === portal.value
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10 font-bold"
                    : "bg-slate-900/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {portal.label}
              </button>
            ))}
          </div>

          {/* EXPANDABLE MULTI-FILTER DRAWER */}
          {showFiltersDrawer && (
            <div className="p-5 rounded-3xl bg-slate-900/90 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn shadow-2xl">
              {/* Education Level */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Education Level
                </label>
                <select
                  value={selectedEducationLevel}
                  onChange={(e) => setSelectedEducationLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Education Levels</option>
                  <option value="10th">10th Passed</option>
                  <option value="12th">12th / PUC</option>
                  <option value="Diploma">Diploma / Polytechnic</option>
                  <option value="Undergraduate">Undergraduate (B.Tech, B.E., BCA, B.Sc)</option>
                  <option value="Postgraduate">Postgraduate (M.Tech, MCA, MS)</option>
                  <option value="PhD">PhD / Research</option>
                </select>
              </div>

              {/* Course */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Course / Branch
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Engineering & Courses</option>
                  <option value="Engineering">Engineering (All Branches)</option>
                  <option value="Computer Science">Computer Science & IT</option>
                  <option value="Electronics">Electronics & Communication</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                </select>
              </div>

              {/* Scholarship Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Scholarship Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Types</option>
                  <option value="Merit">Merit-Based</option>
                  <option value="Need-based">Need-Based / Financial Aid</option>
                  <option value="Women">Women in STEM / Girls</option>
                  <option value="Minority">Minority / Category-Based</option>
                  <option value="Disability">Specially-Abled / Disability</option>
                  <option value="Research">Research & Fellowship</option>
                </select>
              </div>

              {/* Application Status */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Application Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="Open">🟢 Open</option>
                  <option value="Closing Soon">🟡 Closing Soon (&le; 7 days)</option>
                  <option value="Closed">🔴 Closed / Past</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Location / State
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Locations</option>
                  <option value="India">Pan-India</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="International">International</option>
                </select>
              </div>

              {/* Award Range */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Award Amount Range
                </label>
                <select
                  value={selectedAward}
                  onChange={(e) => setSelectedAward(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Amounts</option>
                  <option value="under25k">Under ₹25,000</option>
                  <option value="25k-50k">₹25,000 – ₹50,000</option>
                  <option value="50k-1lakh">₹50,000 – ₹1,00,000</option>
                  <option value="above1lakh">Above ₹1,00,000 / High Value</option>
                </select>
              </div>

              <div className="col-span-full flex justify-end pt-2">
                <button
                  onClick={() => {
                    setSelectedSourcePortal("All");
                    setSelectedEducationLevel("All");
                    setSelectedCourse("All");
                    setSelectedType("All");
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSelectedAward("All");
                    setSelectedDeadline("All");
                    setSelectedStatus("All");
                    setSearchTerm("");
                  }}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                >
                  Reset all filters
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      {loading ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center max-w-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mx-auto" />
            <p className="mt-4 text-sm font-semibold text-slate-300">
              Matching verified scholarships...
            </p>
          </div>
        </div>
      ) : activeTab === "applications" ? (
        /* 📝 MY APPLICATIONS TRACKER VIEW */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-slate-900/50 border border-white/10">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                📝 My Scholarship Applications
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Track your active submissions, application deadlines, and decision statuses.
              </p>
            </div>
            <button
              onClick={() => setActiveTab("all")}
              className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-bold self-start sm:self-auto"
            >
              + Find More Scholarships
            </button>
          </div>

          {displayedScholarships.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/30 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto text-2xl">
                📝
              </div>
              <h3 className="text-base font-bold text-white">No applications tracked yet</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Explore scholarships and update your status to "Planning to Apply" or "Submitted" to monitor your progress here.
              </p>
              <button
                onClick={() => setActiveTab("all")}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
              >
                Browse Scholarships
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-950/60 text-slate-400 uppercase font-black tracking-wider text-[10px]">
                    <th className="py-3.5 px-4">Scholarship</th>
                    <th className="py-3.5 px-4">Source Portal</th>
                    <th className="py-3.5 px-4">Award</th>
                    <th className="py-3.5 px-4">Deadline & Status</th>
                    <th className="py-3.5 px-4">Application Progress</th>
                    <th className="py-3.5 px-4">Notes</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {displayedScholarships.map((sch) => (
                    <tr
                      key={sch._id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Scholarship title & provider */}
                      <td className="py-4 px-4 min-w-[220px]">
                        <div
                          className="font-bold text-white text-sm hover:text-cyan-300 cursor-pointer"
                          onClick={() => navigate(`/scholarships/${sch._id}`)}
                        >
                          {sch.title}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Building className="h-3 w-3 text-cyan-400" />
                          <span>{sch.provider}</span>
                        </div>
                      </td>

                      {/* Source Portal */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-semibold text-[10px]">
                          {sch.sourcePortal || "Official Portal"}
                        </span>
                      </td>

                      {/* Award */}
                      <td className="py-4 px-4 font-bold text-emerald-400 whitespace-nowrap">
                        {sch.awardAmount}
                      </td>

                      {/* Deadline & lifecycle */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="text-slate-300 font-medium">
                          {sch.deadlineUnknown
                            ? "Check Official Portal"
                            : formatDate(sch.applicationDeadline)}
                        </div>
                        <div className="mt-1">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                              sch.lifecycle.status === "Closing Soon"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : sch.lifecycle.status === "Open"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            }`}
                          >
                            {sch.lifecycle.countdownText}
                          </span>
                        </div>
                      </td>

                      {/* Application status selector */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            setStatusModalScholarship(sch);
                            setStatusUpdateValue(sch.applicationStatus || "Planning to Apply");
                            setStatusUpdateNotes(sch.notes || "");
                          }}
                          className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400 text-cyan-300 text-xs font-bold flex items-center gap-1.5"
                        >
                          <span>{sch.applicationStatus || "Update Status"}</span>
                          <ChevronDown className="h-3 w-3 opacity-60" />
                        </button>
                      </td>

                      {/* Notes */}
                      <td className="py-4 px-4 max-w-xs text-slate-400 truncate">
                        {sch.notes || <span className="text-slate-600 italic">No notes</span>}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => navigate(`/scholarships/${sch._id}`)}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                            title="View Details"
                          >
                            <Info className="h-4 w-4" />
                          </button>
                          <a
                            href={sch.applicationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300"
                            title="Apply on Official / Portal Website"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : displayedScholarships.length === 0 ? (
        /* EMPTY STATE */
        <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/30 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="text-base font-bold text-white">No scholarships found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {activeTab === "saved"
              ? "You haven't saved any scholarships yet. Click the heart icon on any card to save it."
              : "Try adjusting your search criteria or resetting filters to view more opportunities."}
          </p>
          <button
            onClick={() => {
              setSelectedSourcePortal("All");
              setSelectedEducationLevel("All");
              setSelectedCourse("All");
              setSelectedType("All");
              setSelectedCategory("All");
              setSelectedLocation("All");
              setSelectedAward("All");
              setSelectedDeadline("All");
              setSelectedStatus("All");
              setSearchTerm("");
              setActiveTab("all");
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* UPGRADED SCHOLARSHIP DIRECTORY CARDS GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedScholarships.map((sch) => {
            const isMatchExpanded = expandedMatchId === sch._id;
            const matchScore = sch.match?.matchScore || 0;
            const isLikely = sch.match?.isLikelyEligible;

            return (
              <div
                key={sch._id}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 backdrop-blur-xl overflow-hidden"
              >
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

                <div className="space-y-4">
                  {/* TOP ROW: Verified Indicator & Source Portal Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-black tracking-wide">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>✓ Verified Scholarship</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Save Button */}
                      <button
                        onClick={(e) => handleToggleSave(sch._id, e)}
                        className={`p-2 rounded-xl transition-all border ${
                          sch.isSaved
                            ? "bg-rose-500/20 border-rose-500/40 text-rose-400 shadow-md shadow-rose-500/20"
                            : "bg-white/5 border-white/10 text-slate-400 hover:text-rose-400 hover:bg-white/10"
                        }`}
                        title={sch.isSaved ? "Saved to your list" : "Save scholarship"}
                      >
                        <Heart
                          className={`h-4 w-4 ${sch.isSaved ? "fill-rose-500" : ""}`}
                        />
                      </button>

                      {/* Reminder Button */}
                      {sch.isSaved && !sch.lifecycle.isClosed && (
                        <button
                          onClick={() => setReminderModalScholarship(sch)}
                          className={`p-2 rounded-xl transition-all border ${
                            sch.reminderDaysBefore
                              ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-amber-300"
                          }`}
                          title={
                            sch.reminderDaysBefore
                              ? `Reminder set for ${sch.reminderDaysBefore} days before deadline`
                              : "Set deadline reminder"
                          }
                        >
                          <Bell className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* SCHOLARSHIP NAME & PROVIDER */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-400/90 mb-1">
                      <span className="flex items-center gap-1 truncate">
                        <Building className="h-3 w-3 shrink-0" />
                        <span className="truncate">{sch.provider}</span>
                      </span>
                      {sch.sourcePortal && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-semibold shrink-0">
                          {sch.sourcePortal}
                        </span>
                      )}
                    </div>
                    <h2
                      onClick={() => navigate(`/scholarships/${sch._id}`)}
                      className="text-base sm:text-lg font-black text-white group-hover:text-cyan-200 transition-colors line-clamp-2 cursor-pointer leading-tight"
                    >
                      {sch.title}
                    </h2>
                  </div>

                  {/* AWARD AMOUNT & DEADLINE ROW */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-900/60 to-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Scholarship Award
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                        {sch.type || "Merit-cum-Means"}
                      </span>
                    </div>
                    <div className="text-sm font-black text-emerald-400">
                      {sch.awardAmount}
                    </div>
                    <div className="text-[11px] text-slate-300 flex items-center justify-between pt-0.5 border-t border-white/5">
                      <span className="text-slate-400">Deadline:</span>
                      <span className="font-bold text-amber-300">
                        {sch.deadlineUnknown
                          ? "Check official portal for current deadline"
                          : formatDate(sch.applicationDeadline)}
                      </span>
                    </div>
                  </div>

                  {/* ELIGIBILITY & EDUCATION LEVEL CHIPS */}
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-300 line-clamp-2 font-normal text-[11px]">
                      {sch.eligibilitySummary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {sch.eligibleEducationLevel?.map((lvl) => (
                        <span
                          key={lvl}
                          className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-bold"
                        >
                          {lvl}
                        </span>
                      ))}
                      {sch.eligibleCourses?.slice(0, 2).map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px]"
                        >
                          {c}
                        </span>
                      ))}
                      {sch.minimumPercentage > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px]">
                          Min: <strong className="text-cyan-400">{sch.minimumPercentage}%</strong>
                        </span>
                      )}
                      {sch.minimumCGPA > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px]">
                          Min: <strong className="text-cyan-400">{sch.minimumCGPA} CGPA</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* DYNAMIC MATCH SCORE & EXPLANATION ACCORDION */}
                  {matchScore > 0 && (
                    <div className="rounded-2xl bg-slate-950/60 border border-white/10 p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex items-center justify-center h-8 w-8 rounded-full text-xs font-black text-white ${
                              matchScore >= 80
                                ? "bg-gradient-to-br from-emerald-500 to-green-600"
                                : matchScore >= 60
                                ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                                : "bg-gradient-to-br from-amber-500 to-orange-600"
                            }`}
                          >
                            {matchScore}%
                          </div>
                          <div>
                            <div className="text-xs font-black text-white flex items-center gap-1">
                              <span>Match Score</span>
                              {isLikely && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                  Likely Eligible
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Based on your profile data
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setExpandedMatchId(isMatchExpanded ? null : sch._id)
                          }
                          className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5"
                        >
                          <span>{isMatchExpanded ? "Hide" : "Why"}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform ${
                              isMatchExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Ground match explanation */}
                      {isMatchExpanded && (
                        <div className="pt-2 border-t border-white/10 space-y-2 text-[11px] animate-fadeIn">
                          {sch.match.eligibleReasons?.length > 0 && (
                            <div className="space-y-1">
                              <div className="font-bold text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" /> Why you're eligible:
                              </div>
                              <ul className="space-y-0.5 pl-4 list-disc text-slate-300">
                                {sch.match.eligibleReasons.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {sch.match.unverifiedReasons?.length > 0 && (
                            <div className="space-y-1 pt-1">
                              <div className="font-bold text-amber-400 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" /> Unverified Criteria:
                              </div>
                              <ul className="space-y-0.5 pl-4 list-disc text-slate-400">
                                {sch.match.unverifiedReasons.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* DYNAMIC APPLICATION STATUS BADGE */}
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          sch.lifecycle.status === "Closing Soon"
                            ? "bg-amber-400 animate-ping"
                            : sch.lifecycle.status === "Open"
                            ? "bg-emerald-400"
                            : "bg-rose-400"
                        }`}
                      />
                      <span
                        className={`font-bold ${
                          sch.lifecycle.status === "Closing Soon"
                            ? "text-amber-400"
                            : sch.lifecycle.status === "Open"
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }`}
                      >
                        {sch.lifecycle.status === "Closing Soon"
                          ? `🟡 ${sch.lifecycle.countdownText}`
                          : sch.lifecycle.status === "Open"
                          ? sch.deadlineUnknown
                            ? "🟢 Open (Check Portal)"
                            : "🟢 Applications Open"
                          : "🔴 Applications Closed"}
                      </span>
                    </div>

                    <div className="text-[10px] text-slate-400 font-medium">
                      Source: <span className="text-slate-300 font-bold">{sch.sourcePortal || "Portal"}</span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BUTTONS */}
                <div className="pt-5 flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/scholarships/${sch._id}`)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition border border-white/10 hover:border-white/20"
                  >
                    View Details
                  </button>

                  {sch.lifecycle.isClosed ? (
                    <a
                      href={sch.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold text-xs transition border border-white/10 flex items-center justify-center gap-1.5"
                    >
                      <span>Closed (View Portal)</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : (
                    <a
                      href={sch.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL: DEADLINE REMINDER */}
      {reminderModalScholarship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 p-6 space-y-5 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Set Deadline Reminder
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {reminderModalScholarship.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setReminderModalScholarship(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-slate-300">
                Choose when you would like to receive an alert before the deadline:
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {[
                  { days: 30, label: "30 Days Before" },
                  { days: 7, label: "7 Days Before" },
                  { days: 3, label: "3 Days Before" },
                  { days: 1, label: "1 Day Before" },
                ].map((opt) => (
                  <button
                    key={opt.days}
                    onClick={() =>
                      handleSetReminder(reminderModalScholarship._id, opt.days)
                    }
                    className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      reminderModalScholarship.reminderDaysBefore === opt.days
                        ? "bg-amber-500/20 border-amber-400 text-amber-300"
                        : "bg-slate-950/60 border-white/10 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setReminderModalScholarship(null)}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-400 hover:text-white text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: UPDATE APPLICATION STATUS */}
      {statusModalScholarship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 p-6 space-y-5 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <FileCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Track Scholarship Application
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {statusModalScholarship.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setStatusModalScholarship(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateStatusSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Application Stage
                </label>
                <select
                  value={statusUpdateValue}
                  onChange={(e) => setStatusUpdateValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500 font-semibold"
                >
                  <option value="Interested">Interested</option>
                  <option value="Saved">Saved</option>
                  <option value="Planning to Apply">Planning to Apply</option>
                  <option value="Application Started">Application Started</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Selected">Selected 🏆</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Withdrawn">Withdrawn</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Personal Notes / Application ID / Reference
                </label>
                <textarea
                  rows={3}
                  value={statusUpdateNotes}
                  onChange={(e) => setStatusUpdateNotes(e.target.value)}
                  placeholder="e.g. Applied via Buddy4Study / Vidyasaarathi on 10 Aug with Application No: 98124..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setStatusModalScholarship(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs hover:bg-cyan-400 transition"
                >
                  Save Tracking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scholarships;
