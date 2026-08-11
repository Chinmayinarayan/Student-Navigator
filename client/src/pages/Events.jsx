import { useEffect, useState, useMemo } from "react";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'recommended', 'closingSoon', 'saved', 'past'
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterMode, setFilterMode] = useState("All");
  const [filterSkill, setFilterSkill] = useState("All");
  const [filterDateRange, setFilterDateRange] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("soonest"); // 'soonest', 'deadline', 'newest', 'relevance'
  const [toastMessage, setToastMessage] = useState(null);
  const [reminderModalEvent, setReminderModalEvent] = useState(null);

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await api.get("/events");
      setEvents(res.data.events || []);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Show transient toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Toggle Save Event
  const handleToggleSave = async (eventId, e) => {
    if (e) e.stopPropagation();

    // Optimistic UI update
    setEvents((prev) =>
      prev.map((ev) =>
        ev._id === eventId ? { ...ev, isSaved: !ev.isSaved } : ev
      )
    );

    try {
      const res = await api.post(`/events/${eventId}/toggle-save`);
      if (res.data.success) {
        showToast(res.data.message);
        // Sync real state
        setEvents((prev) =>
          prev.map((ev) =>
            ev._id === eventId ? { ...ev, isSaved: res.data.isSaved } : ev
          )
        );
      }
    } catch (error) {
      console.error("Failed to toggle save:", error);
      showToast("Error saving event. Please try again.");
      // Rollback
      setEvents((prev) =>
        prev.map((ev) =>
          ev._id === eventId ? { ...ev, isSaved: !ev.isSaved } : ev
        )
      );
    }
  };

  // Set Reminder
  const handleSetReminder = async (eventId, days) => {
    try {
      const res = await api.post(`/events/${eventId}/reminder`, {
        reminderDaysBefore: days,
      });
      if (res.data.success) {
        showToast(res.data.message);
        setEvents((prev) =>
          prev.map((ev) =>
            ev._id === eventId ? { ...ev, reminderDaysBefore: days } : ev
          )
        );
      }
    } catch (error) {
      console.error("Failed to set reminder:", error);
      showToast("Error setting reminder.");
    } finally {
      setReminderModalEvent(null);
    }
  };

  // Date formatting helpers
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getCountdownDisplay = (event) => {
    if (event.deadlineUnknown) {
      return { text: "Deadline: Check official event page", color: "text-slate-400" };
    }

    const now = new Date();
    const eventDate = new Date(event.eventDate);
    const deadline = event.registrationDeadline
      ? new Date(event.registrationDeadline)
      : null;

    if (eventDate < now) {
      return { text: "Event Concluded", color: "text-slate-400" };
    }

    if (!deadline) {
      return { text: "Registration Open", color: "text-emerald-400" };
    }

    const diff = deadline.getTime() - now.getTime();
    if (diff <= 0) {
      return { text: "Registration Closed", color: "text-rose-400" };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (days === 0) {
      return {
        text: `Closing today (${hours}h remaining)`,
        color: "text-amber-400 font-semibold",
      };
    }
    if (days <= 7) {
      return {
        text: `⏳ ${days} day${days > 1 ? "s" : ""} left to register`,
        color: "text-amber-400 font-semibold",
      };
    }
    return {
      text: `Registration open (${days} days left)`,
      color: "text-emerald-400",
    };
  };

  // Type & Mode Badges
  const getTypeBadgeStyles = (type) => {
    switch (type) {
      case "Hackathon":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      case "Coding Contest":
        return "bg-rose-500/15 text-rose-300 border-rose-500/30";
      case "Workshop":
        return "bg-indigo-500/15 text-indigo-300 border-indigo-500/30";
      case "Conference":
        return "bg-purple-500/15 text-purple-300 border-purple-500/30";
      case "Webinar":
        return "bg-teal-500/15 text-teal-300 border-teal-500/30";
      case "Tech Event":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "Certification Event":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
      default:
        return "bg-slate-700/50 text-slate-300 border-slate-600";
    }
  };

  const getModeBadgeStyles = (mode) => {
    switch (mode) {
      case "Online":
        return "bg-sky-500/15 text-sky-300 border-sky-500/30";
      case "Offline":
        return "bg-orange-500/15 text-orange-300 border-orange-500/30";
      case "Hybrid":
        return "bg-teal-500/15 text-teal-300 border-teal-500/30";
      default:
        return "bg-slate-700/50 text-slate-300 border-slate-600";
    }
  };

  const getStatusBadge = (event) => {
    const now = new Date();
    const eventDate = new Date(event.eventDate);
    const deadline = event.registrationDeadline ? new Date(event.registrationDeadline) : null;

    if (eventDate < now) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
          Past Event
        </span>
      );
    }
    if (deadline && deadline < now) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
          Registration Closed
        </span>
      );
    }
    if (deadline && deadline - now <= 7 * 24 * 60 * 60 * 1000) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
          🔥 Closing Soon
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
        Registration Open
      </span>
    );
  };

  // Skill options
  const skillFilterOptions = [
    "All",
    "AI/ML",
    "Cloud",
    "Web Development",
    "Data Science",
    "Cybersecurity",
    "DSA",
    "DevOps",
    "Mobile",
    "General Software Development",
  ];

  // Filtering and Sorting Pipeline
  const filteredAndSortedEvents = useMemo(() => {
    const now = new Date();

    return events
      .filter((e) => {
        // Tab Filter
        if (activeTab === "recommended" && !e.isRecommended) return false;
        if (activeTab === "closingSoon") {
          const dl = e.registrationDeadline ? new Date(e.registrationDeadline) : null;
          const isClosing = dl && dl >= now && dl - now <= 7 * 24 * 60 * 60 * 1000;
          if (!isClosing) return false;
        }
        if (activeTab === "saved" && !e.isSaved) return false;
        if (activeTab === "past" && new Date(e.eventDate) >= now) return false;
        if (activeTab === "all" && filterStatus === "All" && new Date(e.eventDate) < now) {
          // If looking at "All" default tab, past events appear in their own section at the bottom or when filtered
        }

        // Search match
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchTitle = (e.title || "").toLowerCase().includes(q);
          const matchOrganizer = (e.organizer || "").toLowerCase().includes(q);
          const matchDesc = (e.description || "").toLowerCase().includes(q);
          const matchLoc = (e.location || "").toLowerCase().includes(q);
          const matchType = (e.type || "").toLowerCase().includes(q);
          const matchSkills = (e.skills || []).some((s) => s.toLowerCase().includes(q));

          if (!matchTitle && !matchOrganizer && !matchDesc && !matchLoc && !matchType && !matchSkills) {
            return false;
          }
        }

        // Type filter
        if (filterType !== "All" && e.type !== filterType) return false;

        // Mode filter
        if (filterMode !== "All" && e.mode !== filterMode) return false;

        // Skill filter
        if (filterSkill !== "All") {
          const hasSkill = (e.skills || []).some((s) =>
            s.toLowerCase().includes(filterSkill.toLowerCase())
          );
          if (!hasSkill) return false;
        }

        // Registration Status filter
        if (filterStatus !== "All") {
          const eventDate = new Date(e.eventDate);
          const dl = e.registrationDeadline ? new Date(e.registrationDeadline) : null;
          if (filterStatus === "Past" && eventDate >= now) return false;
          if (filterStatus === "Closed" && (eventDate < now || !dl || dl >= now)) return false;
          if (
            filterStatus === "Closing Soon" &&
            (!dl || dl < now || dl - now > 7 * 24 * 60 * 60 * 1000)
          ) {
            return false;
          }
          if (filterStatus === "Open" && (eventDate < now || (dl && dl < now))) return false;
        }

        // Date Range filter
        if (filterDateRange !== "All") {
          const evDate = new Date(e.eventDate);
          const dayDiff = (evDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

          if (filterDateRange === "Today" && (dayDiff < 0 || dayDiff > 1)) return false;
          if (filterDateRange === "This Week" && (dayDiff < 0 || dayDiff > 7)) return false;
          if (filterDateRange === "This Month" && (dayDiff < 0 || dayDiff > 30)) return false;
          if (filterDateRange === "Next 3 Months" && (dayDiff < 0 || dayDiff > 90)) return false;
          if (filterDateRange === "Past" && evDate >= now) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "soonest") {
          const dateA = new Date(a.eventDate);
          const dateB = new Date(b.eventDate);
          return dateA - dateB;
        }
        if (sortBy === "deadline") {
          const dlA = a.registrationDeadline ? new Date(a.registrationDeadline).getTime() : Infinity;
          const dlB = b.registrationDeadline ? new Date(b.registrationDeadline).getTime() : Infinity;
          return dlA - dlB;
        }
        if (sortBy === "newest") {
          return new Date(b.createdAt || b.eventDate) - new Date(a.createdAt || a.eventDate);
        }
        if (sortBy === "relevance") {
          return (b.relevanceScore || 0) - (a.relevanceScore || 0);
        }
        return 0;
      });
  }, [
    events,
    activeTab,
    searchTerm,
    filterType,
    filterMode,
    filterSkill,
    filterDateRange,
    filterStatus,
    sortBy,
  ]);

  // Section categorization (for default all view)
  const now = new Date();
  const recommendedSectionEvents = useMemo(
    () => events.filter((e) => e.isRecommended && new Date(e.eventDate) >= now),
    [events]
  );
  const closingSoonSectionEvents = useMemo(
    () =>
      events.filter((e) => {
        const dl = e.registrationDeadline ? new Date(e.registrationDeadline) : null;
        return dl && dl >= now && dl - now <= 7 * 24 * 60 * 60 * 1000;
      }),
    [events]
  );
  const upcomingSectionEvents = useMemo(
    () => events.filter((e) => new Date(e.eventDate) >= now),
    [events]
  );
  const workshopsSectionEvents = useMemo(
    () =>
      events.filter(
        (e) =>
          ["Workshop", "Conference", "Webinar", "Certification Event"].includes(e.type) &&
          new Date(e.eventDate) >= now
      ),
    [events]
  );
  const codingHackathonsSectionEvents = useMemo(
    () =>
      events.filter(
        (e) =>
          ["Hackathon", "Coding Contest"].includes(e.type) && new Date(e.eventDate) >= now
      ),
    [events]
  );
  const pastSectionEvents = useMemo(
    () => events.filter((e) => new Date(e.eventDate) < now),
    [events]
  );
  const savedCount = useMemo(() => events.filter((e) => e.isSaved).length, [events]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setFilterType("All");
    setFilterMode("All");
    setFilterSkill("All");
    setFilterDateRange("All");
    setFilterStatus("All");
    setSortBy("soonest");
  };

  const isFilteringActive =
    searchTerm !== "" ||
    filterType !== "All" ||
    filterMode !== "All" ||
    filterSkill !== "All" ||
    filterDateRange !== "All" ||
    filterStatus !== "All" ||
    sortBy !== "soonest";

  // Event Card Renderer
  const renderEventCard = (event, isRecommendedCard = false) => {
    const isPast = new Date(event.eventDate) < now;
    const isClosed =
      isPast ||
      (event.registrationDeadline && new Date(event.registrationDeadline) < now);
    const countdown = getCountdownDisplay(event);

    return (
      <div
        key={event._id}
        className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 ${
          isRecommendedCard
            ? "border-cyan-500/40 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 shadow-lg shadow-cyan-950/20 hover:border-cyan-400/60"
            : isPast
            ? "border-slate-800/80 bg-slate-900/40 opacity-80 hover:opacity-100"
            : "border-slate-800 bg-slate-900/80 shadow-md hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
        } p-6`}
      >
        <div>
          {/* Top Row: Type, Mode, Status & Save Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-xl border px-3 py-1 text-xs font-semibold ${getTypeBadgeStyles(
                  event.type
                )}`}
              >
                {event.type}
              </span>
              <span
                className={`rounded-xl border px-3 py-1 text-xs font-semibold ${getModeBadgeStyles(
                  event.mode
                )}`}
              >
                {event.mode}
              </span>
              {getStatusBadge(event)}
            </div>

            {/* Save & Reminder Icon */}
            <div className="flex items-center gap-1.5">
              {event.isSaved && !isPast && (
                <button
                  type="button"
                  title="Set Reminder"
                  onClick={() => setReminderModalEvent(event)}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border text-xs transition ${
                    event.reminderDaysBefore
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                      : "border-slate-700 bg-slate-800/80 text-slate-400 hover:text-white"
                  }`}
                >
                  🔔
                </button>
              )}
              <button
                type="button"
                title={event.isSaved ? "Remove from saved" : "Save opportunity"}
                onClick={(e) => handleToggleSave(event._id, e)}
                className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                  event.isSaved
                    ? "border-rose-500/40 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25"
                    : "border-slate-700 bg-slate-800/80 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
              >
                <span className="text-base">{event.isSaved ? "♥" : "♡"}</span>
              </button>
            </div>
          </div>

          {/* Relevance Match Tag (If Recommended) */}
          {event.relevanceScore > 0 && (
            <div className="mt-3.5 flex items-center justify-between rounded-xl bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5">
              <span className="text-[11px] font-semibold text-cyan-300">
                🎯 {event.relevanceScore}% Profile Relevance
              </span>
              {event.matchedSkills && event.matchedSkills.length > 0 && (
                <span className="text-[10px] text-cyan-400/80">
                  Matches: {event.matchedSkills.slice(0, 2).join(", ")}
                </span>
              )}
            </div>
          )}

          {/* Title & Organizer */}
          <div className="mt-4">
            <h3 className="text-lg font-bold text-slate-100 leading-snug group-hover:text-cyan-300 transition-colors">
              {event.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Organized by{" "}
              <span className="text-slate-300 font-semibold">{event.organizer}</span>
            </p>
          </div>

          {/* Grounded Recommendation Rationale */}
          {event.recommendationReason && isRecommendedCard && (
            <div className="mt-3 rounded-xl bg-slate-950/60 border border-slate-800 p-2.5">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{event.recommendationReason}"
              </p>
            </div>
          )}

          {/* Description */}
          <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
            {event.description || "No description provided."}
          </p>

          {/* Details list */}
          <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-3.5 text-xs text-slate-300">
            {/* Event Date */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400">📅</span>
              <span className="font-semibold text-slate-200">Event Date:</span>
              <span>
                {formatDate(event.eventDate)}
                {event.eventEndDate && ` – ${formatDate(event.eventEndDate)}`}
              </span>
            </div>

            {/* Deadline */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400">⏳</span>
              <span className="font-semibold text-slate-200">Deadline:</span>
              <span className={countdown.color}>
                {event.deadlineUnknown
                  ? "Check official page"
                  : event.registrationDeadline
                  ? formatDate(event.registrationDeadline)
                  : "Open until event date"}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400">📍</span>
              <span className="font-semibold text-slate-200">Location:</span>
              <span className="truncate">{event.location || event.mode}</span>
            </div>

            {/* Skills */}
            {event.skills && event.skills.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-400 font-semibold">🏷️ Skills:</span>
                {event.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 text-[10px] text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Footer: Official Source & Action Button */}
        <div className="mt-5 border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Official Source Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Official Source:</span>
            <a
              href={event.officialSourceUrl || event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium truncate max-w-[150px]"
            >
              {event.officialSourceName || "Organizer Portal"}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {isPast ? (
              <a
                href={event.pastResourcesUrl || event.officialSourceUrl || event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition"
              >
                View Official Details ↗
              </a>
            ) : isClosed ? (
              <button
                disabled
                className="cursor-not-allowed rounded-xl bg-slate-800/60 border border-slate-800 px-4 py-2 text-xs font-semibold text-slate-500"
              >
                Registration Closed
              </button>
            ) : event.registrationUrl ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-cyan-900/30 transition hover:shadow-cyan-500/20"
              >
                Register Now ↗
              </a>
            ) : (
              <a
                href={event.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition"
              >
                View Official Details ↗
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-xl">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
          <h2 className="mt-4 text-lg font-semibold text-slate-100">
            Loading Verified Opportunities...
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Syncing official hackathons, contests, and technical events.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-cyan-500/30 bg-slate-900/95 px-5 py-3 text-xs font-semibold text-cyan-300 shadow-2xl backdrop-blur-md animate-slideUp flex items-center gap-2">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Reminder Preference Modal */}
      {reminderModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100">
                🔔 Set Opportunity Reminder
              </h3>
              <button
                onClick={() => setReminderModalEvent(null)}
                className="rounded-lg p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-300">
              Select when you'd like a deadline reminder for{" "}
              <strong className="text-cyan-300">{reminderModalEvent.title}</strong>:
            </p>

            <div className="mt-4 grid gap-2.5">
              {[
                { days: 7, label: "7 days before registration deadline" },
                { days: 3, label: "3 days before registration deadline" },
                { days: 1, label: "1 day before registration deadline (Urgent)" },
              ].map(({ days, label }) => (
                <button
                  key={days}
                  onClick={() => handleSetReminder(reminderModalEvent._id, days)}
                  className={`flex items-center justify-between rounded-xl border p-3 text-xs font-semibold transition ${
                    reminderModalEvent.reminderDaysBefore === days
                      ? "border-cyan-500 bg-cyan-500/15 text-cyan-300"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span>{label}</span>
                  {reminderModalEvent.reminderDaysBefore === days && <span>✓ Active</span>}
                </button>
              ))}
              {reminderModalEvent.reminderDaysBefore && (
                <button
                  onClick={() => handleSetReminder(reminderModalEvent._id, null)}
                  className="mt-1 text-center text-xs text-rose-400 hover:underline"
                >
                  Clear reminder
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-8 shadow-xl">
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Opportunities Hub
              </span>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <span>✓</span> Official Organizer Verified
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tech Events & Hackathons
            </h1>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Discover audited national hackathons, competitive programming championships,
              and official technical workshops tailored to your career trajectory.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 text-center">
              <p className="text-2xl font-black text-cyan-400">
                {upcomingSectionEvents.length}
              </p>
              <p className="text-[11px] font-medium text-slate-400">Live Events</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 text-center">
              <p className="text-2xl font-black text-amber-400">
                {closingSoonSectionEvents.length}
              </p>
              <p className="text-[11px] font-medium text-slate-400">Closing Soon</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 text-center">
              <p className="text-2xl font-black text-purple-400">
                {recommendedSectionEvents.length}
              </p>
              <p className="text-[11px] font-medium text-slate-400">For You</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 text-center">
              <p className="text-2xl font-black text-rose-400">{savedCount}</p>
              <p className="text-[11px] font-medium text-slate-400">Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: "all", label: "All Opportunities", count: events.length },
          {
            id: "recommended",
            label: "🎯 Recommended for You",
            count: recommendedSectionEvents.length,
          },
          {
            id: "closingSoon",
            label: "🔥 Registration Closing Soon",
            count: closingSoonSectionEvents.length,
          },
          { id: "saved", label: `♡ Saved (${savedCount})`, count: savedCount },
          { id: "past", label: "🕒 Past Events", count: pastSectionEvents.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition ${
              activeTab === tab.id
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </section>

      {/* Search & Multi-Filter Control Panel */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-md space-y-5">
        {/* Search Bar & Sort */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3 text-slate-400">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by event title, organizer, skills, location..."
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 py-2.5 pl-11 pr-10 text-xs text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold text-slate-400">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs font-medium text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="soonest">Soonest Event (Default)</option>
              <option value="deadline">Registration Deadline</option>
              <option value="relevance">Most Relevant</option>
              <option value="newest">Newest Added</option>
            </select>

            {isFilteringActive && (
              <button
                onClick={clearAllFilters}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-800/80 pt-4">
          {/* Event Type Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Event Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Coding Contest">Coding Contest</option>
              <option value="Workshop">Workshop</option>
              <option value="Conference">Conference</option>
              <option value="Webinar">Webinar</option>
              <option value="Tech Event">Tech Event</option>
            </select>
          </div>

          {/* Mode Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Mode
            </label>
            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="All">All Modes</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Skill Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Skill / Tech
            </label>
            <select
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              {skillFilterOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "All Skills" : opt}
                </option>
              ))}
            </select>
          </div>

          {/* Registration Status */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Registration Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Open">Registration Open</option>
              <option value="Closing Soon">Closing Soon (≤ 7 Days)</option>
              <option value="Closed">Registration Closed</option>
              <option value="Past">Past Events</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      {isFilteringActive || activeTab !== "all" ? (
        /* Filtered List View */
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-100">
              {activeTab === "recommended"
                ? "🎯 Recommended Opportunities"
                : activeTab === "closingSoon"
                ? "🔥 Registration Closing Soon"
                : activeTab === "saved"
                ? "♡ Your Saved Opportunities"
                : activeTab === "past"
                ? "🕒 Past Events & Archives"
                : "Filtered Results"}
            </h2>
            <span className="text-xs text-slate-400">
              Showing {filteredAndSortedEvents.length} opportunit
              {filteredAndSortedEvents.length === 1 ? "y" : "ies"}
            </span>
          </div>

          {filteredAndSortedEvents.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800/80 text-2xl">
                🔎
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-200">
                {activeTab === "saved"
                  ? "No saved opportunities yet"
                  : "No opportunities match your filters"}
              </h3>
              <p className="mt-1 text-xs text-slate-400 max-w-md mx-auto">
                {activeTab === "saved"
                  ? "Click the ♡ icon on any event card to save it here and set reminder alerts."
                  : "Try adjusting your keyword search, technology filters, or date constraints."}
              </p>
              {isFilteringActive && (
                <button
                  onClick={clearAllFilters}
                  className="mt-4 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-semibold text-white hover:bg-cyan-500 transition"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {filteredAndSortedEvents.map((event) =>
                renderEventCard(event, activeTab === "recommended" || event.isRecommended)
              )}
            </div>
          )}
        </section>
      ) : (
        /* Structured Categorized Layout */
        <div className="space-y-12">
          {/* 1. 🎯 Recommended for You Section */}
          {recommendedSectionEvents.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-white">
                      🎯 Recommended for You
                    </h2>
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                      Personalized
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Handpicked opportunities matched with your profile skills, career goals, and roadmap.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("recommended")}
                  className="text-xs font-semibold text-cyan-400 hover:underline"
                >
                  View All ({recommendedSectionEvents.length}) →
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {recommendedSectionEvents.slice(0, 4).map((event) =>
                  renderEventCard(event, true)
                )}
              </div>
            </section>
          )}

          {/* 2. 🔥 Registration Closing Soon Section */}
          {closingSoonSectionEvents.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-white">
                      🔥 Registration Closing Soon
                    </h2>
                    <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">
                      ≤ 7 Days Remaining
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Deadlines approaching this week. Secure your registration before spots close.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("closingSoon")}
                  className="text-xs font-semibold text-amber-400 hover:underline"
                >
                  View All ({closingSoonSectionEvents.length}) →
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {closingSoonSectionEvents.map((event) => renderEventCard(event))}
              </div>
            </section>
          )}

          {/* 3. 📅 Upcoming Opportunities Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">
                  📅 Upcoming Opportunities
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Verified technical opportunities open for student registration.
                </p>
              </div>
            </div>

            {upcomingSectionEvents.length === 0 ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center">
                <p className="text-xs text-slate-400">
                  No verified upcoming events available right now. Check back soon.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {upcomingSectionEvents.map((event) => renderEventCard(event))}
              </div>
            )}
          </section>

          {/* 4. 📚 Workshops & Learning Section */}
          {workshopsSectionEvents.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">
                    📚 Workshops & Learning
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Hands-on training, industry conferences, and deep-dive technical webinars.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {workshopsSectionEvents.map((event) => renderEventCard(event))}
              </div>
            </section>
          )}

          {/* 5. 💻 Coding & Hackathons Section */}
          {codingHackathonsSectionEvents.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">
                    💻 Coding & Hackathons
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Championships, university coding cups, and project building sprints.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {codingHackathonsSectionEvents.map((event) => renderEventCard(event))}
              </div>
            </section>
          )}

          {/* 6. 🕒 Past Events Section */}
          {pastSectionEvents.length > 0 && (
            <section className="space-y-4 border-t border-slate-800/80 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-300">
                    🕒 Past Events & Archives
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Concluded events with available recordings, slide decks, and problem statements.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("past")}
                  className="text-xs font-semibold text-slate-400 hover:underline"
                >
                  View All Past Events ({pastSectionEvents.length}) →
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {pastSectionEvents.map((event) => renderEventCard(event))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default Events;