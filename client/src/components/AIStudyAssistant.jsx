import { useState, useRef, useCallback, useEffect } from "react";
import {
  Bot, Send, Copy, RotateCcw, Trash2, Zap, ChevronDown,
  Code2, X, Sparkles, BookMarked, Clock,
} from "lucide-react";
import { chatWithAssistant } from "../services/assistantApi";
import { saveAINote } from "../services/aiNotesApi";

// ─────────────────────────────────────────────────────────────
// Quick Actions (improved prompts)
// ─────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  {
    label: "Explain Simply",
    emoji: "💡",
    color: "amber",
    prompt: "Explain this topic in the simplest possible English for a second-year engineering student. Use a daily-life analogy and include one easy example.",
  },
  {
    label: "Give Examples",
    emoji: "🔍",
    color: "cyan",
    prompt: "Provide three practical, real-world examples that clearly illustrate how this topic is applied in software engineering or industry.",
  },
  {
    label: "Revision Notes",
    emoji: "📝",
    color: "violet",
    prompt: "Generate concise revision notes including: Definition, Key Concepts, Formulae (if applicable), Important Points, and Exam Tips. Maximum 250 words.",
  },
  {
    label: "Interview Prep",
    emoji: "🎯",
    color: "rose",
    prompt: "Generate interview questions: 5 Beginner, 3 Intermediate, and 2 Advanced. List only the questions — do not reveal answers yet.",
  },
  {
    label: "Real-world Use",
    emoji: "🌐",
    color: "emerald",
    prompt: "Explain where and how this concept is used in real-world software engineering, industry, and major tech companies.",
  },
  {
    label: "Common Mistakes",
    emoji: "⚠️",
    color: "orange",
    prompt: "List the most common mistakes students make while learning this topic. Explain how to avoid each mistake.",
  },
];

// Colour map for quick action buttons
const ACTION_STYLE = {
  amber:   "border-amber-500/20 hover:border-amber-400/40 hover:bg-amber-500/8 hover:text-amber-300",
  cyan:    "border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/8 hover:text-cyan-300",
  violet:  "border-violet-500/20 hover:border-violet-400/40 hover:bg-violet-500/8 hover:text-violet-300",
  rose:    "border-rose-500/20 hover:border-rose-400/40 hover:bg-rose-500/8 hover:text-rose-300",
  emerald: "border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/8 hover:text-emerald-300",
  orange:  "border-orange-500/20 hover:border-orange-400/40 hover:bg-orange-500/8 hover:text-orange-300",
};

// Difficulty badge config
const DIFFICULTY_CONFIG = {
  Beginner:     { label: "🟢 Beginner",     cls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  Intermediate: { label: "🟡 Intermediate",  cls: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  Advanced:     { label: "🔴 Advanced",      cls: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
};

// ─────────────────────────────────────────────────────────────
// Inline Markdown formatter (bold, italic, inline code)
// ─────────────────────────────────────────────────────────────
const inlineFormat = (text) => {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`|\*(.+?)\*)/g;
  let last = 0; let match; let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(<span key={idx++}>{text.slice(last, match.index)}</span>);
    if (match[2])      parts.push(<strong key={idx++} className="text-white font-bold">{match[2]}</strong>);
    else if (match[3]) parts.push(<code key={idx++} className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded text-[10px] font-mono border border-emerald-900/30">{match[3]}</code>);
    else if (match[4]) parts.push(<em key={idx++} className="text-cyan-300 italic">{match[4]}</em>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(<span key={idx++}>{text.slice(last)}</span>);
  return parts.length > 0 ? parts : text;
};

// ─────────────────────────────────────────────────────────────
// Full Markdown Renderer
// ─────────────────────────────────────────────────────────────
const renderMarkdown = (text) => {
  const lines = text.split("\n");
  const els = []; let i = 0; let k = 0; const key = () => k++;

  while (i < lines.length) {
    const raw = lines[i];
    const t = raw.trim();

    // Code block
    if (t.startsWith("```")) {
      const lang = t.slice(3).trim();
      const code = []; i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) { code.push(lines[i]); i++; }
      i++;
      els.push(
        <div key={key()} className="my-3 rounded-2xl overflow-hidden border border-white/10 shadow-md">
          {lang && <div className="bg-slate-900 border-b border-white/10 px-4 py-1.5 flex items-center gap-2"><Code2 className="h-3 w-3 text-slate-500" /><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{lang}</span></div>}
          <pre className="bg-[#0a0f1a] p-4 overflow-x-auto text-[11px] text-emerald-300 font-mono leading-relaxed"><code>{code.join("\n")}</code></pre>
        </div>
      ); continue;
    }
    // H1
    if (t.startsWith("# ") && !t.startsWith("## ")) {
      els.push(<h2 key={key()} className="text-sm font-black text-white mt-5 mb-2 pb-1.5 border-b border-white/8">{inlineFormat(t.slice(2))}</h2>);
      i++; continue;
    }
    // H2
    if (t.startsWith("## ")) {
      const isExam = t.toLowerCase().includes("exam");
      els.push(<h3 key={key()} className={`text-xs font-extrabold mt-4 mb-1.5 flex items-center gap-1 ${isExam ? "text-amber-400" : "text-violet-300"}`}>{inlineFormat(t.slice(3))}</h3>);
      i++; continue;
    }
    // H3
    if (t.startsWith("### ")) {
      els.push(<h4 key={key()} className="text-xs font-bold text-cyan-300 mt-3 mb-1">{inlineFormat(t.slice(4))}</h4>);
      i++; continue;
    }
    // Blockquote
    if (t.startsWith("> ")) {
      els.push(<blockquote key={key()} className="border-l-2 border-violet-500/40 pl-3 my-2 text-xs text-slate-400 italic leading-relaxed">{inlineFormat(t.slice(2))}</blockquote>);
      i++; continue;
    }
    // HR
    if (/^---+$/.test(t)) {
      els.push(<hr key={key()} className="border-white/8 my-3" />); i++; continue;
    }
    // Unordered list
    if (/^[-*•] /.test(t)) {
      const items = [];
      while (i < lines.length && /^[-*•] /.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^[-*•] /, "")); i++; }
      els.push(
        <ul key={key()} className="space-y-1.5 my-2 ml-1">
          {items.map((item, xi) => (
            <li key={xi} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <span className="text-violet-400 mt-0.5 shrink-0 text-[10px]">▸</span>
              <span>{inlineFormat(item)}</span>
            </li>
          ))}
        </ul>
      ); continue;
    }
    // Numbered list
    if (/^\d+[.)]\s/.test(t)) {
      const items = [];
      while (i < lines.length && /^\d+[.)]\s/.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^\d+[.)]\s/, "")); i++; }
      els.push(
        <ol key={key()} className="space-y-1.5 my-2 ml-1">
          {items.map((item, xi) => (
            <li key={xi} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
              <span className="shrink-0 flex items-center justify-center h-4 w-4 rounded-full bg-violet-500/20 text-violet-400 text-[9px] font-black mt-0.5">{xi + 1}</span>
              <span>{inlineFormat(item)}</span>
            </li>
          ))}
        </ol>
      ); continue;
    }
    // Table
    if (t.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) { tableLines.push(lines[i].trim()); i++; }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split("|").filter(Boolean).map(c => c.trim());
        const rows = tableLines.slice(2).map(r => r.split("|").filter(Boolean).map(c => c.trim()));
        els.push(
          <div key={key()} className="my-3 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-xs">
              <thead><tr className="bg-slate-900 border-b border-white/10">{headers.map((h, hi) => <th key={hi} className="px-3 py-2 text-left font-bold text-slate-300">{inlineFormat(h)}</th>)}</tr></thead>
              <tbody>{rows.map((row, ri) => <tr key={ri} className={ri % 2 === 0 ? "bg-slate-950/30" : ""}>{row.map((cell, ci) => <td key={ci} className="px-3 py-2 text-slate-400 border-t border-white/5">{inlineFormat(cell)}</td>)}</tr>)}</tbody>
            </table>
          </div>
        ); continue;
      }
    }
    // Blank
    if (t === "") { els.push(<div key={key()} className="h-1.5" />); i++; continue; }
    // Paragraph
    els.push(<p key={key()} className="text-xs text-slate-300 leading-relaxed my-0.5">{inlineFormat(raw)}</p>);
    i++;
  }
  return els;
};

// ─────────────────────────────────────────────────────────────
// Animated Typing Indicator
// ─────────────────────────────────────────────────────────────
const TypingIndicator = () => (
  <div className="flex items-center gap-2 px-4 py-3">
    <span className="text-[10px] text-slate-500 font-medium">Generating explanation</span>
    {[0, 1, 2].map(i => (
      <span key={i} className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────
// Copy button
// ─────────────────────────────────────────────────────────────
const CopyBtn = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })}
      className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-300 font-semibold rounded-lg px-2 py-1 hover:bg-white/5 transition"
    >
      <Copy className="h-3 w-3" />
      {copied ? <span className="text-emerald-400">Copied!</span> : "Copy"}
    </button>
  );
};

// ─────────────────────────────────────────────────────────────
// Explain Code Modal
// ─────────────────────────────────────────────────────────────
const ExplainCodeModal = ({ onSubmit, onClose, loading }) => {
  const [code, setCode] = useState("");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-white/10 shadow-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-white flex items-center gap-2"><Code2 className="h-4 w-4 text-emerald-400" />Explain Code</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white rounded-xl p-1 hover:bg-white/5 transition"><X className="h-4 w-4" /></button>
        </div>
        <p className="text-xs text-slate-500">Paste your code. AI will explain it line-by-line with time & space complexity analysis.</p>
        <textarea
          value={code} onChange={e => setCode(e.target.value)}
          placeholder="Paste your code here..."
          rows={10}
          className="w-full resize-none rounded-2xl bg-slate-950 border border-white/10 focus:border-emerald-500/40 focus:outline-none px-4 py-3 text-xs text-emerald-300 font-mono placeholder:text-slate-700 transition"
        />
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="rounded-xl px-4 py-2 text-xs font-bold text-slate-400 hover:text-white border border-white/10 hover:bg-white/5 transition">Cancel</button>
          <button
            onClick={() => { if (code.trim()) { onSubmit(`Explain the following code:\n\`\`\`\n${code.trim()}\n\`\`\`\nProvide: line-by-line explanation, overall logic, time complexity, space complexity, and any possible improvements.`); onClose(); } }}
            disabled={!code.trim() || loading}
            className="rounded-xl px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition disabled:opacity-40 flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5" />Explain with AI
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Save Note Toast
// ─────────────────────────────────────────────────────────────
const SaveToast = ({ status }) => {
  if (!status) return null;
  return (
    <div className={`fixed bottom-6 right-6 z-50 rounded-2xl px-4 py-3 text-xs font-bold shadow-xl transition-all ${
      status === "saving" ? "bg-slate-800 text-slate-300 border border-white/10" :
      status === "saved"  ? "bg-emerald-600 text-white" :
                            "bg-rose-600 text-white"
    }`}>
      {status === "saving" ? "💾 Saving note…" : status === "saved" ? "✅ Note saved!" : "❌ Save failed"}
    </div>
  );
};

// Default suggested questions (empty state)
const SUGGESTED = [
  "What is this topic about?",
  "Explain with a real-world example",
  "What are the key concepts?",
  "How is this used in industry?",
  "What should I remember for exams?",
];

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
/**
 * AIStudyAssistant
 * Props:
 *   subject   {string}  – Subject name
 *   topic     {string}  – Topic name
 *   resources {object}  – { videos: [], books: [] }
 */
const AIStudyAssistant = ({ subject, topic, resources = {} }) => {
  const [question, setQuestion]         = useState("");
  const [messages, setMessages]         = useState([]);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [collapsed, setCollapsed]       = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [saveStatus, setSaveStatus]     = useState(null); // null | "saving" | "saved" | "error"

  const bottomRef   = useRef(null);
  const inputRef    = useRef(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
  }, []);

  useEffect(() => { if (messages.length) scrollToBottom(); }, [messages, scrollToBottom]);

  // Reset chat on topic change
  useEffect(() => {
    setMessages([]); setError(""); setLastQuestion(""); setQuestion("");
  }, [topic]);

  // Core send
  const sendQuestion = useCallback(async (q) => {
    const trimmed = (q || question).trim();
    if (!trimmed || loading) return;

    setError("");
    setLastQuestion(trimmed);
    setQuestion("");
    setMessages(prev => [...prev, { role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const history = messages.slice(-10);
      const data = await chatWithAssistant(subject, topic, trimmed, history);

      setMessages(prev => [...prev, {
        role: "ai",
        text: data.answer,
        difficulty: data.difficulty || "Beginner",
        followUps: data.followUps || [],
        readingTime: data.readingTime || 1,
        question: trimmed,
      }]);
    } catch (err) {
      const msg = err?.response?.data?.message || "AI Assistant is temporarily unavailable. Please try again later.";
      setError(msg);
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [question, loading, subject, topic, messages]);

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendQuestion(); }
  };

  const handleRegenerate = () => {
    if (!lastQuestion) return;
    setMessages(prev => {
      const lastAi = [...prev].reverse().findIndex(m => m.role === "ai");
      return lastAi === -1 ? prev : prev.slice(0, prev.length - 1 - lastAi);
    });
    sendQuestion(lastQuestion);
  };

  const handleClear = () => {
    setMessages([]); setError(""); setLastQuestion(""); setQuestion("");
    inputRef.current?.focus();
  };

  // Save note
  const handleSaveNote = async (msg) => {
    setSaveStatus("saving");
    try {
      await saveAINote({
        subject, topic,
        question: msg.question || lastQuestion,
        answer: msg.text,
        difficulty: msg.difficulty,
        readingTime: msg.readingTime,
      });
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    } finally {
      setTimeout(() => setSaveStatus(null), 2500);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <>
      {showCodeModal && (
        <ExplainCodeModal onSubmit={p => sendQuestion(p)} onClose={() => setShowCodeModal(false)} loading={loading} />
      )}
      <SaveToast status={saveStatus} />

      <section id="ai-study-assistant" className="relative rounded-[28px] border border-violet-500/20 bg-gradient-to-br from-[#0d0b1e] via-slate-950/90 to-slate-950/80 shadow-2xl shadow-violet-900/10 overflow-hidden">

        {/* Decorative glows */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-600/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/6 blur-2xl" />

        {/* ── Rich Header ── */}
        <div className="relative z-10 border-b border-white/5">
          <div className="flex items-start justify-between px-5 py-4 gap-4">
            {/* Left: Icon + info */}
            <div className="flex items-start gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 mt-0.5">
                <Bot className="h-5 w-5 text-violet-400" />
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
                  🤖 AI Study Assistant
                </h2>
                <div className="mt-1 space-y-0.5">
                  <p className="text-[10px] text-slate-500">
                    <span className="text-slate-600 uppercase tracking-widest font-bold text-[9px]">Subject</span>{" "}
                    <span className="text-slate-400 font-semibold">{subject}</span>
                  </p>
                  <p className="text-[10px] text-slate-500">
                    <span className="text-slate-600 uppercase tracking-widest font-bold text-[9px]">Topic</span>{" "}
                    <span className="text-violet-400 font-bold">{topic}</span>
                  </p>
                  <p className="text-[9px] text-slate-700 mt-0.5">Ask questions related to this topic.</p>
                </div>
              </div>
            </div>

            {/* Right: action buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setShowCodeModal(true)} disabled={loading}
                title="Explain Code"
                className="hidden sm:flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-bold text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/20 transition disabled:opacity-40"
              >
                <Code2 className="h-3 w-3" />Explain Code
              </button>

              {hasMessages && (
                <button
                  onClick={handleClear}
                  className="flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-[10px] font-bold text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition"
                >
                  <Trash2 className="h-3 w-3" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              )}
              <button
                onClick={() => setCollapsed(c => !c)}
                className="flex h-7 w-7 items-center justify-center rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition"
              >
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        {!collapsed && (
          <div className="relative z-10 flex flex-col">

            {/* ── Chat area ── */}
            <div className="px-5 pt-4 pb-2 space-y-4 max-h-[520px] overflow-y-auto">

              {/* Empty state */}
              {!hasMessages && (
                <div className="space-y-5 py-3">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-violet-600/15 border border-violet-500/20 mb-3">
                      <Sparkles className="h-6 w-6 text-violet-400" />
                    </div>
                    <p className="text-sm font-bold text-white">Need help?</p>
                    <p className="text-xs text-slate-500 mt-1">Try asking:</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTED.map(q => (
                      <button
                        key={q} onClick={() => sendQuestion(q)} disabled={loading}
                        className="rounded-2xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/15 hover:border-violet-400/40 px-3 py-1.5 text-[11px] font-semibold text-slate-400 hover:text-violet-300 transition disabled:opacity-40"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((msg, idx) => (
                <div key={idx} className="space-y-2">
                  <div className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "ai" && (
                      <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/20 mt-0.5">
                        <Bot className="h-3.5 w-3.5 text-violet-400" />
                      </div>
                    )}

                    <div className={`max-w-[92%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-violet-600/15 border border-violet-500/20"
                        : "bg-slate-900/70 border border-white/5"
                    }`}>
                      {msg.role === "user" ? (
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">{msg.text}</p>
                      ) : (
                        <>
                          {/* Metadata row: difficulty + reading time */}
                          {(msg.difficulty || msg.readingTime) && (
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              {msg.difficulty && DIFFICULTY_CONFIG[msg.difficulty] && (
                                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold ${DIFFICULTY_CONFIG[msg.difficulty].cls}`}>
                                  {DIFFICULTY_CONFIG[msg.difficulty].label}
                                </span>
                              )}
                              {msg.readingTime && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-600">
                                  <Clock className="h-2.5 w-2.5" />
                                  {msg.readingTime} min read
                                </span>
                              )}
                            </div>
                          )}

                          {/* Markdown content */}
                          {renderMarkdown(msg.text)}

                          {/* Action row — only on last AI message */}
                          {idx === messages.length - 1 && (
                            <div className="flex items-center gap-1 mt-3 pt-2 border-t border-white/5 flex-wrap">
                              <CopyBtn text={msg.text} />
                              <button
                                onClick={handleRegenerate} disabled={loading}
                                className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-violet-400 font-semibold rounded-lg px-2 py-1 hover:bg-white/5 transition disabled:opacity-40"
                              >
                                <RotateCcw className="h-3 w-3" />Regenerate
                              </button>
                              <button
                                onClick={() => handleSaveNote(msg)} disabled={loading || saveStatus === "saving"}
                                className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-amber-400 font-semibold rounded-lg px-2 py-1 hover:bg-white/5 transition disabled:opacity-40"
                              >
                                <BookMarked className="h-3 w-3" />Save Note
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {msg.role === "user" && (
                      <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-800/60 border border-white/5 mt-0.5">
                        <span className="text-[11px]">👤</span>
                      </div>
                    )}
                  </div>

                  {/* Follow-up chips */}
                  {msg.role === "ai" && msg.followUps?.length > 0 && idx === messages.length - 1 && !loading && (
                    <div className="pl-10 flex flex-wrap gap-1.5">
                      {msg.followUps.map((fq, fi) => (
                        <button
                          key={fi} onClick={() => sendQuestion(fq)} disabled={loading}
                          className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/15 hover:border-cyan-400/40 px-3 py-1 text-[10px] font-semibold text-cyan-500 hover:text-cyan-300 transition disabled:opacity-40"
                        >
                          ↳ {fq}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex gap-3 justify-start">
                  <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/20 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-violet-400 animate-pulse" />
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 border border-white/5">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="flex items-start gap-2 rounded-2xl bg-rose-500/10 border border-rose-500/20 px-4 py-3">
                  <span className="text-rose-400 text-sm shrink-0">⚠️</span>
                  <p className="text-xs text-rose-400 font-medium">{error}</p>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* ── Sticky Input + Controls ── */}
            <div className="sticky bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent px-5 pt-2 pb-5 space-y-3">

              {/* Input row */}
              <div className="flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask about ${topic}… (Enter to send)`}
                  rows={2}
                  disabled={loading}
                  className="flex-1 resize-none rounded-2xl bg-slate-900/90 border border-white/10 focus:border-violet-500/40 focus:outline-none px-4 py-3 text-xs text-white placeholder:text-slate-700 transition disabled:opacity-50 leading-relaxed"
                />
                <button
                  onClick={() => sendQuestion()} disabled={loading || !question.trim()}
                  className="shrink-0 flex items-center justify-center h-11 w-11 rounded-2xl bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 disabled:text-slate-600 text-white transition shadow-lg shadow-violet-600/20 hover:scale-[1.05] active:scale-100 disabled:scale-100 disabled:shadow-none"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Explain Code (mobile) */}
              <div className="flex sm:hidden justify-end">
                <button
                  onClick={() => setShowCodeModal(true)} disabled={loading}
                  className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/20 transition disabled:opacity-40"
                >
                  <Code2 className="h-3 w-3" />Explain Code
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-[9px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1">
                  <Zap className="h-2.5 w-2.5 text-yellow-600" />Quick Actions
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {QUICK_ACTIONS.map(action => (
                    <button
                      key={action.label}
                      onClick={() => sendQuestion(action.prompt)} disabled={loading}
                      className={`group flex items-center gap-2 rounded-2xl bg-white/[0.02] border px-3 py-2 text-left transition disabled:opacity-40 disabled:cursor-not-allowed text-slate-500 ${ACTION_STYLE[action.color]}`}
                    >
                      <span className="text-sm leading-none">{action.emoji}</span>
                      <span className="text-[11px] font-semibold leading-tight">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>


            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AIStudyAssistant;
