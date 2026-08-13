import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import {
  GraduationCap,
  Building,
  Calendar,
  Clock,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Bell,
  FileText,
  Award,
  Sparkles,
  ArrowLeft,
  BookOpen,
  DollarSign,
  MapPin,
  ShieldCheck,
  Layers,
  ChevronRight,
  Send,
  X,
  FileCheck,
} from "lucide-react";

function ScholarshipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const [statusUpdateValue, setStatusUpdateValue] = useState("");
  const [statusNotes, setStatusNotes] = useState("");
  const [statusUpdating, setStatusUpdating] = useState(false);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const fetchScholarship = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/scholarships/${id}`);
      if (res.data.success && res.data.scholarship) {
        const sch = res.data.scholarship;
        setScholarship(sch);
        setStatusUpdateValue(sch.applicationStatus || "Planning to Apply");
        setStatusNotes(sch.notes || "");
        setReminderDays(sch.reminderDaysBefore);
      }
    } catch (error) {
      console.error("Failed to load scholarship details:", error);
      showToast("Error loading scholarship details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarship();
  }, [id]);

  // Toggle Save
  const handleToggleSave = async () => {
    if (!scholarship) return;
    const prevSaved = scholarship.isSaved;

    // Optimistic UI
    setScholarship((prev) => ({ ...prev, isSaved: !prevSaved }));

    try {
      const res = await api.post(`/scholarships/${id}/toggle-save`);
      if (res.data.success) {
        showToast(res.data.message);
        setScholarship((prev) => ({ ...prev, isSaved: res.data.isSaved }));
      }
    } catch (error) {
      console.error("Error saving:", error);
      showToast("Failed to update save status.");
      setScholarship((prev) => ({ ...prev, isSaved: prevSaved }));
    }
  };

  // Update Application Status
  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    setStatusUpdating(true);
    try {
      const res = await api.post(`/scholarships/${id}/status`, {
        applicationStatus: statusUpdateValue,
        notes: statusNotes,
      });
      if (res.data.success) {
        showToast(`Application tracking updated to "${statusUpdateValue}" 📝`);
        setScholarship((prev) => ({
          ...prev,
          isSaved: true,
          applicationStatus: statusUpdateValue,
          notes: statusNotes,
        }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
      showToast("Failed to update status.");
    } finally {
      setStatusUpdating(false);
    }
  };

  // Set Reminder
  const handleSetReminder = async (days) => {
    try {
      const res = await api.post(`/scholarships/${id}/reminder`, {
        reminderDaysBefore: days,
      });
      if (res.data.success) {
        showToast(res.data.message);
        setReminderDays(days);
        setScholarship((prev) => ({
          ...prev,
          reminderDaysBefore: days,
          isSaved: true,
        }));
      }
    } catch (error) {
      console.error("Error setting reminder:", error);
      showToast("Error setting reminder.");
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-10 py-8 text-center max-w-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mx-auto" />
          <p className="mt-4 text-sm font-semibold text-slate-300">
            Loading scholarship specifications...
          </p>
        </div>
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/30 p-12 text-center space-y-4 max-w-lg mx-auto">
        <div className="text-3xl">⚠️</div>
        <h2 className="text-lg font-bold text-white">Scholarship Not Found</h2>
        <p className="text-xs text-slate-400">
          The requested scholarship could not be found or has been moved.
        </p>
        <Link
          to="/scholarships"
          className="inline-block px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
        >
          Return to Scholarships
        </Link>
      </div>
    );
  }

  const { lifecycle, match } = scholarship;

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto pb-12">
      {/* TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-cyan-200 shadow-2xl backdrop-blur-xl animate-slideUp">
          <Sparkles className="h-5 w-5 text-cyan-400 shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* TOP BACK BUTTON */}
      <button
        onClick={() => navigate("/scholarships")}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Scholarships Directory</span>
      </button>

      {/* HERO HEADER CARD */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/40 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Top badges & Save */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>✓ Verified Scholarship</span>
              </span>

              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wide">
                {scholarship.category}
              </span>

              {scholarship.sourcePortal && (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold">
                  Source: {scholarship.sourcePortal}
                </span>
              )}

              {/* Dynamic Status Badge */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-black border flex items-center gap-1.5 ${
                  lifecycle.status === "Closing Soon"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    : lifecycle.status === "Open"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/30"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    lifecycle.status === "Closing Soon"
                      ? "bg-amber-400 animate-ping"
                      : lifecycle.status === "Open"
                      ? "bg-emerald-400"
                      : "bg-rose-400"
                  }`}
                />
                {lifecycle.status === "Closing Soon"
                  ? `🟡 ${lifecycle.countdownText}`
                  : lifecycle.status === "Open"
                  ? scholarship.deadlineUnknown
                    ? "🟢 Open (Check Portal)"
                    : "🟢 Applications Open"
                  : "🔴 Applications Closed"}
              </span>
            </div>

            {/* Save Button */}
            <button
              onClick={handleToggleSave}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                scholarship.isSaved
                  ? "bg-rose-500/20 border-rose-500/40 text-rose-300 shadow-md shadow-rose-500/10"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${
                  scholarship.isSaved ? "fill-rose-500 text-rose-500" : ""
                }`}
              />
              <span>{scholarship.isSaved ? "Saved ❤️" : "Save Scholarship"}</span>
            </button>
          </div>

          {/* Title & Provider */}
          <div className="space-y-2">
            <div className="text-sm font-bold text-cyan-400 flex items-center gap-1.5">
              <Building className="h-4 w-4" />
              <span>{scholarship.provider}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              {scholarship.title}
            </h1>
          </div>

          {/* Award Banner & Quick CTA */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-slate-900/80 to-emerald-950/20 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Scholarship Award / Grant
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-0.5">
                {scholarship.awardAmount}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {lifecycle.isClosed ? (
                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm shadow-xl transition flex items-center gap-2 border border-white/10"
                >
                  <span>Applications Closed (View Portal)</span>
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
              ) : (
                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/20 transition flex items-center gap-2"
                >
                  <span>Apply On {scholarship.sourcePortal || "Official Portal"}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CLOSED WARNING BANNER */}
      {lifecycle.isClosed && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-xs text-rose-300">
          <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0" />
          <div>
            <span className="font-bold">Applications Closed: </span>
            <span className="text-slate-300">
              The deadline for the current academic cycle has passed ({formatDate(scholarship.applicationDeadline)}). You can review the requirements and documents to prepare for the upcoming intake cycle.
            </span>
          </div>
        </div>
      )}

      {/* OFFICIAL VERIFICATION BANNER */}
      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-emerald-300">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
          <div>
            <span className="font-bold">✓ Verified Scholarship Source: </span>
            <span className="text-slate-300">
              {scholarship.officialSourceName || scholarship.sourcePortal || "Official Portal"}
            </span>
            {scholarship.lastVerifiedAt && (
              <span className="text-[10px] text-emerald-400/80 ml-2">
                (Last verified: {formatDate(scholarship.lastVerifiedAt)})
              </span>
            )}
          </div>
        </div>
        <a
          href={scholarship.sourceUrl || scholarship.officialSourceUrl || scholarship.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center gap-1 self-start sm:self-auto"
        >
          <span>View Source on {scholarship.sourcePortal || "Official Portal"}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* MAIN TWO-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: ABOUT, ELIGIBILITY, BENEFITS, REQUIRED DOCS, PROCESS */}
        <div className="lg:col-span-2 space-y-8">
          {/* ABOUT SECTION */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-400" />
              <span>About this Scholarship</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {scholarship.description}
            </p>
          </div>

          {/* ELIGIBILITY CRITERIA BREAKDOWN */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-5">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
              <span>Eligibility Requirements</span>
            </h2>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 text-sm text-slate-200">
              {scholarship.eligibilitySummary}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Eligible Education Levels */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Education Level
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.eligibleEducationLevel?.join(", ") || "Undergraduate / Degree"}
                </div>
              </div>

              {/* Eligible Courses */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Eligible Courses
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.eligibleCourses?.join(", ") || "All Courses"}
                </div>
              </div>

              {/* Eligible Branches */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Eligible Branches / Streams
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.eligibleBranches?.join(", ") || "All Branches"}
                </div>
              </div>

              {/* Academic Cutoff */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Academic Performance Requirement
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.minimumPercentage > 0
                    ? `Minimum ${scholarship.minimumPercentage}% in qualifying exam`
                    : scholarship.minimumCGPA > 0
                    ? `Minimum ${scholarship.minimumCGPA} CGPA`
                    : "No specific minimum CGPA required"}
                </div>
              </div>

              {/* Eligible Academic Year */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Eligible Academic Years
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.eligibleYears?.join(", ") || "All Years"}
                </div>
              </div>

              {/* Location Eligibility */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Eligible Locations
                </div>
                <div className="text-slate-200 font-semibold flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{scholarship.eligibleLocations?.join(", ") || "Pan-India"}</span>
                </div>
              </div>

              {/* Income Requirement */}
              <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-1.5 sm:col-span-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Income Requirement
                </div>
                <div className="text-slate-200 font-semibold">
                  {scholarship.incomeRequirement || "No specific income ceiling"}
                </div>
              </div>
            </div>
          </div>

          {/* BENEFITS PROVIDED */}
          {scholarship.benefits?.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>Scholarship Benefits & Coverage</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scholarship.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-950/60 border border-emerald-500/20 text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REQUIRED DOCUMENTS */}
          {scholarship.requiredDocuments?.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Required Documents Checklist</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {scholarship.requiredDocuments.map((doc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 flex items-center gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-[10px] font-black shrink-0">
                      {i + 1}
                    </span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP-BY-STEP APPLICATION PROCESS */}
          {scholarship.applicationProcess?.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-5">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>Application Process</span>
              </h2>

              <div className="space-y-4 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
                {scholarship.applicationProcess.map((step) => (
                  <div key={step.stepNumber} className="relative pl-10 space-y-1">
                    <div className="absolute left-1.5 top-0 w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-black shadow-md shadow-cyan-500/30">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-xs font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: MATCH EXPLANATION, DATES, REMINDERS, APPLICATION TRACKER */}
        <div className="space-y-6">
          {/* PERSONALIZED MATCH RATIONALE CARD */}
          {match && (
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">
                    Personalized Match
                  </h3>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-black ${
                    match.matchScore >= 80
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : match.matchScore >= 60
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  {match.matchScore}% Match
                </div>
              </div>

              {match.isLikelyEligible && (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                  <span>Likely Eligible (Some unverified requirements)</span>
                </div>
              )}

              {/* Reasons */}
              <div className="space-y-3 pt-2 text-xs">
                {match.eligibleReasons?.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      ✓ Why You're Eligible:
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-slate-300 text-[11px]">
                      {match.eligibleReasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {match.unverifiedReasons?.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      ⚠️ Unverified Criteria:
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-slate-400 text-[11px]">
                      {match.unverifiedReasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* IMPORTANT DATES CARD */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-400" />
              <span>Important Dates</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Application Opens</span>
                <span className="font-semibold text-slate-200">
                  {formatDate(scholarship.applicationOpenDate)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Application Deadline</span>
                <span className="font-bold text-amber-300">
                  {scholarship.deadlineUnknown
                    ? "Check official portal for current deadline"
                    : formatDate(scholarship.applicationDeadline)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-slate-400">Result / Announcement</span>
                <span className="font-semibold text-slate-200">
                  {scholarship.resultDate || "Check Website"}
                </span>
              </div>
            </div>

            {/* Set Deadline Reminder */}
            {!lifecycle.isClosed && (
              <div className="pt-2 space-y-2 border-t border-white/5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="h-3.5 w-3.5 text-amber-400" />
                  <span>Set Deadline Alert:</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[30, 7, 3, 1].map((d) => (
                    <button
                      key={d}
                      onClick={() => handleSetReminder(d)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold transition ${
                        reminderDays === d
                          ? "bg-amber-500/20 border-amber-400 text-amber-300 font-bold"
                          : "bg-slate-950/60 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {d} days before
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* APPLICATION PROGRESS TRACKER CARD */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">
                My Application Tracking
              </h3>
            </div>

            <form onSubmit={handleStatusSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Current Status
                </label>
                <select
                  value={statusUpdateValue}
                  onChange={(e) => setStatusUpdateValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500 font-bold"
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

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Personal Tracking Notes
                </label>
                <textarea
                  rows={3}
                  value={statusNotes}
                  onChange={(e) => setStatusNotes(e.target.value)}
                  placeholder="e.g. Application ID, documents submitted, interview date..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                disabled={statusUpdating}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1.5"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{statusUpdating ? "Saving..." : "Update Application Status"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipDetails;
