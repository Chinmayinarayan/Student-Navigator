import { useEffect, useState } from "react";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("All");
  const [filterMode, setFilterMode] = useState("All");

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");
        if (!isMounted) return;
        setEvents(res.data.events || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const getCountdownText = (deadlineStr) => {
    if (!deadlineStr) return "N/A";
    const diff = new Date(deadlineStr) - new Date();
    if (diff <= 0) return "Registration Closed";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} left to register`;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} left to register`;

    const minutes = Math.floor(diff / (1000 * 60));
    return `${minutes} minute${minutes > 1 ? "s" : ""} left to register`;
  };

  const getTypeBadgeStyles = (type) => {
    switch (type) {
      case "Hackathon":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Coding Contest":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Workshop":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Tech Event":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getModeBadgeStyles = (mode) => {
    switch (mode) {
      case "Online":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Offline":
        return "bg-slate-50 text-slate-700 border-slate-200";
      case "Hybrid":
        return "bg-teal-50 text-teal-700 border-teal-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const filteredEvents = events.filter((e) => {
    const typeMatch = filterType === "All" || e.type === filterType;
    const modeMatch = filterMode === "All" || e.mode === filterMode;
    return typeMatch && modeMatch;
  });

  const eventTypes = ["All", "Hackathon", "Coding Contest", "Workshop", "Tech Event"];
  const eventModes = ["All", "Online", "Offline", "Hybrid"];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Loading events...</h2>
          <p className="mt-2 text-sm text-slate-500">Fetching technical opportunities.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Opportunities</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Tech Events & Hackathons</h1>
          <p className="mt-2 text-sm text-slate-600">
            Expand your network, build real projects, and test your coding skills against peers nationwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Filter by Type</h3>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                    filterType === type
                      ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Filter by Mode</h3>
            <div className="flex flex-wrap gap-2">
              {eventModes.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setFilterMode(mode)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                    filterMode === mode
                      ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {filteredEvents.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800">No events match your criteria</h2>
            <p className="mt-2 text-sm text-slate-500">Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          filteredEvents.map((event) => {
            const isClosed = new Date(event.deadline) < new Date();
            const countdown = getCountdownText(event.deadline);
            
            return (
              <div
                key={event._id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`rounded-xl border px-3 py-1 text-xs font-semibold ${getTypeBadgeStyles(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`rounded-xl border px-3 py-1 text-xs font-semibold ${getModeBadgeStyles(event.mode)}`}>
                      {event.mode}
                    </span>
                  </div>

                  {/* Title & Info */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight">{event.title}</h2>
                    <p className="mt-1 text-xs text-slate-500 font-semibold">Organized by {event.organizer || "Independent"}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {event.description || "No description provided."}
                  </p>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>📅</span>
                      <span>Event Date: {new Date(event.eventDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    {event.location && event.mode !== "Online" && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>📍</span>
                        <span>Location: {event.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer section inside card */}
                <div className="mt-6 border-t border-slate-100 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Deadline</span>
                    <span className={`text-xs font-bold ${isClosed ? "text-red-500" : "text-amber-600"}`}>
                      {isClosed ? "Registration Closed" : countdown}
                    </span>
                  </div>

                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-xs font-bold text-white shadow-sm transition ${
                        isClosed
                          ? "bg-slate-300 pointer-events-none"
                          : "bg-slate-900 hover:bg-slate-800"
                      }`}
                    >
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Events;