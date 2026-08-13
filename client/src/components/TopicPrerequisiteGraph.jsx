import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import {
  Compass,
  CheckCircle2,
  AlertCircle,
  Lock,
  Sparkles,
  ArrowRight,
  Calendar,
  X,
} from "lucide-react";
import { getTopicPrerequisites } from "../services/prerequisiteApi";

/**
 * TopicPrerequisiteGraph – Visual learning path using React Flow.
 *
 * Props:
 *   topicId {string} – The ID of the active topic
 */
const TopicPrerequisiteGraph = ({ topicId }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [schedule, setSchedule] = useState(null); // Array of days when active

  useEffect(() => {
    let isMounted = true;
    const fetchPath = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await getTopicPrerequisites(topicId);
        if (isMounted) {
          setData(res);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("Failed to load learning path graph.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchPath();
    return () => {
      isMounted = false;
    };
  }, [topicId]);

  // Calculate Learning Readiness Score
  const readiness = useMemo(() => {
    if (!data || !data.prerequisites || data.prerequisites.length === 0) {
      return 100;
    }
    const completed = data.prerequisites.filter((p) => p.completed).length;
    return Math.round((completed / data.prerequisites.length) * 100);
  }, [data]);

  // Build React Flow nodes and edges
  const flowData = useMemo(() => {
    if (!data) return { nodes: [], edges: [] };

    const nodes = [];
    const edges = [];

    const prereqs = data.prerequisites || [];
    const nexts = data.nextTopics || [];
    const currentTitle = data.topic || "Current Topic";

    // 1. Prerequisites Nodes (Row 1: Y = 40)
    const prereqWidth = 180;
    const prereqSpacing = 200;
    const prereqStartX = -((prereqs.length - 1) * prereqSpacing) / 2;

    prereqs.forEach((p, idx) => {
      const x = prereqStartX + idx * prereqSpacing;
      nodes.push({
        id: `prereq-${p.id}`,
        type: "default",
        data: { label: `${p.completed ? "✅" : "⚠"} ${p.name}`, topicId: p.id },
        position: { x, y: 40 },
        style: {
          background: p.completed ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
          color: p.completed ? "#34d399" : "#fbbf24",
          border: p.completed ? "1px solid rgba(16, 185, 129, 0.5)" : "1px solid rgba(245, 158, 11, 0.5)",
          borderRadius: "16px",
          padding: "10px 14px",
          fontSize: "11px",
          fontWeight: "bold",
          width: prereqWidth,
          cursor: "pointer",
        },
      });

      // Edge from Prerequisite to Current
      edges.push({
        id: `edge-prereq-${p.id}`,
        source: `prereq-${p.id}`,
        target: "current-topic",
        style: { stroke: p.completed ? "#10b981" : "#f59e0b", strokeWidth: 1.5 },
        animated: !p.completed,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: p.completed ? "#10b981" : "#f59e0b",
          width: 15,
          height: 15,
        },
      });
    });

    // 2. Current Topic Node (Row 2: Y = 180)
    nodes.push({
      id: "current-topic",
      type: "input", // Input type to block inputs from drawing to itself
      data: { label: `🔵 Current: ${currentTitle}` },
      position: { x: -100, y: 180 },
      style: {
        background: "rgba(6, 182, 212, 0.25)",
        color: "#ffffff",
        border: "2px solid rgba(6, 182, 212, 0.7)",
        borderRadius: "20px",
        padding: "12px 18px",
        fontSize: "12px",
        fontWeight: "extrabold",
        width: 200,
        boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.15)",
      },
    });

    // 3. Next Topics Nodes (Row 3: Y = 320)
    const nextWidth = 190;
    const nextSpacing = 210;
    const nextStartX = -((nexts.length - 1) * nextSpacing) / 2;

    nexts.forEach((n, idx) => {
      const x = nextStartX + idx * nextSpacing;
      nodes.push({
        id: `next-${n.id}`,
        type: "output",
        data: { label: `🔒 ${n.name}`, topicId: n.id },
        position: { x, y: 320 },
        style: {
          background: "rgba(255, 255, 255, 0.03)",
          color: "#94a3b8",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "10px 14px",
          fontSize: "11px",
          fontWeight: "bold",
          width: nextWidth,
          cursor: "pointer",
        },
      });

      // Edge from Current to Next Recommended
      edges.push({
        id: `edge-next-${n.id}`,
        source: "current-topic",
        target: `next-${n.id}`,
        style: { stroke: "rgba(255, 255, 255, 0.1)", strokeWidth: 1.5 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(255, 255, 255, 0.1)",
          width: 15,
          height: 15,
        },
      });
    });

    return { nodes, edges };
  }, [data]);

  // Click handler to navigate on node click
  const onNodeClick = useCallback(
    (event, node) => {
      if (node.data && node.data.topicId) {
        navigate(`/topics/${node.data.topicId}`);
      }
    },
    [navigate]
  );

  const handleStartRecommendedPath = () => {
    if (!data) return;
    // If there are incomplete prerequisites, go to the first incomplete prerequisite
    const firstIncompletePrereq = (data.prerequisites || []).find((p) => !p.completed);
    if (firstIncompletePrereq && firstIncompletePrereq.id) {
      navigate(`/topics/${firstIncompletePrereq.id}`);
      return;
    }
    // If current topic has next topic, or start current
    if (topicId) {
      navigate(`/topics/${topicId}`);
    }
  };

  // Generate learning sequence schedule
  const generateSchedule = () => {
    if (!data) return;
    const seq = [];
    let day = 1;
    let targetTopic = null;

    // First list incomplete prerequisites
    const incomplete = (data.prerequisites || []).filter((p) => !p.completed);
    incomplete.forEach((p) => {
      if (!targetTopic) targetTopic = { id: p.id, title: p.name };
      seq.push({
        id: p.id,
        day: day++,
        title: p.name,
        desc: "Required Prerequisite (Incomplete)",
        badge: "Incomplete",
      });
    });

    // Then list completed prerequisites
    const completed = (data.prerequisites || []).filter((p) => p.completed);
    completed.forEach((p) => {
      seq.push({
        id: p.id,
        day: day++,
        title: p.name,
        desc: "Required Prerequisite (Completed)",
        badge: "Completed",
      });
    });

    // Current Topic
    if (!targetTopic) targetTopic = { id: topicId, title: data.topic };
    seq.push({
      id: topicId,
      day: day++,
      title: data.topic,
      desc: "Current Focus Topic",
      badge: "Current",
    });

    // Next Topics
    (data.nextTopics || []).forEach((n) => {
      seq.push({
        id: n.id,
        day: day++,
        title: n.name,
        desc: "Recommended Next Steps",
        badge: "Next",
      });
    });

    setSchedule({ list: seq, targetTopic });
  };

  if (loading) {
    return (
      <div className="h-48 flex items-center justify-center bg-slate-950/20 border border-white/5 rounded-3xl animate-pulse">
        <span className="text-xs text-slate-500 font-semibold">Loading learning path...</span>
      </div>
    );
  }

  if (error || !data) return null;

  const hasPrereqs = data.prerequisites && data.prerequisites.length > 0;

  return (
    <section className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Compass className="h-5 w-5 text-cyan-500 animate-spin-slow" />
            🧩 Learning Path & Prerequisite Graph
          </h2>
          <p className="text-xs text-slate-500">
            Click on any linked topic nodes inside the visual graph to navigate directly to them.
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={handleStartRecommendedPath}
          className="shrink-0 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2.5 text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          🚀 Start Recommended Path
        </button>
      </div>

      {/* Grid: Stats and Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Readiness Score and Prerequisites List */}
        <div className="md:col-span-1 space-y-5 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
          {/* Readiness Score */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold">Ready to Learn:</span>
              <span className={`font-black text-sm ${readiness === 100 ? "text-emerald-400" : "text-amber-400"}`}>
                {readiness}%
              </span>
            </div>
            <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  readiness === 100 ? "bg-emerald-500" : "bg-amber-500"
                }`}
                style={{ width: `${readiness}%` }}
              />
            </div>
          </div>

          {/* List Tracker */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Prerequisites Tracker
            </h3>
            {hasPrereqs ? (
              <div className="space-y-2.5">
                {data.prerequisites.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/topics/${p.id}`)}
                    className="space-y-1 p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition cursor-pointer border border-transparent hover:border-white/5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                        {p.completed ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        ) : (
                          <AlertCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        )}
                        {p.name}
                      </span>
                      <span className={`text-[10px] font-bold ${p.completed ? "text-emerald-400" : "text-slate-500"}`}>
                        {p.completed ? "100%" : "0%"}
                      </span>
                    </div>
                    <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${p.completed ? "bg-emerald-500" : "bg-slate-800"}`}
                        style={{ width: p.completed ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No prerequisites required. You're ready to learn!</p>
            )}
          </div>

          {/* Next Recommended List */}
          {data.nextTopics && data.nextTopics.length > 0 && (
            <div className="space-y-2.5 pt-4 border-t border-white/5">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Next Recommended
              </h3>
              <div className="space-y-2">
                {data.nextTopics.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => navigate(`/topics/${n.id}`)}
                    className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition cursor-pointer"
                  >
                    <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                      <Lock className="h-3 w-3 text-slate-500 shrink-0" />
                      {n.name}
                    </span>
                    <span className="text-slate-500">↗</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Visual Graph Container */}
        <div className="md:col-span-2 relative h-[380px] bg-[#030712] border border-white/5 rounded-2xl overflow-hidden">
          <ReactFlow
            nodes={flowData.nodes}
            edges={flowData.edges}
            onNodeClick={onNodeClick}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            attributionPosition="bottom-right"
          >
            <Background color="rgba(255,255,255,0.05)" gap={16} />
            <Controls className="bg-slate-900 border-white/10 text-white rounded-xl overflow-hidden" />
          </ReactFlow>
        </div>
      </div>

      {/* Recommended Learning Path Schedule Modal */}
      {schedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 shadow-2xl p-6 space-y-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
                  Recommended Learning Path
                </h3>
                <p className="text-[11px] text-slate-400">Click any step to open that topic directly</p>
              </div>
              <button
                onClick={() => setSchedule(null)}
                className="text-slate-500 hover:text-white rounded-xl p-1 hover:bg-white/5 transition cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Schedule List */}
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {schedule.list?.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSchedule(null);
                    if (item.id) navigate(`/topics/${item.id}`);
                  }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition cursor-pointer group"
                >
                  <span className="shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 text-xs font-black group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    Day {item.day}
                  </span>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p className="text-xs font-bold text-white leading-tight truncate group-hover:text-cyan-300 transition">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-500">{item.desc}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${
                      item.badge === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : item.badge === "Current"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 animate-pulse"
                        : item.badge === "Incomplete"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition shrink-0 mt-1" />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <button
                onClick={() => setSchedule(null)}
                className="text-xs font-medium text-slate-400 hover:text-white px-3 py-2 transition cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const targetId = schedule.targetTopic?.id || topicId;
                  setSchedule(null);
                  if (targetId) navigate(`/topics/${targetId}`);
                }}
                className="rounded-xl px-5 py-2.5 text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition flex items-center gap-1.5 shadow-lg shadow-cyan-600/30 cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                {schedule.targetTopic?.title
                  ? `Start: ${schedule.targetTopic.title.slice(0, 20)}...`
                  : "Let's Do It"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TopicPrerequisiteGraph;
