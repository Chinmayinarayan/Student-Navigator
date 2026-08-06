import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, { Background, Controls, MarkerType, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import {
  Compass,
  CheckCircle2,
  Lock,
  Sparkles,
  ArrowRight,
  Calendar,
  X,
  Play,
} from "lucide-react";
import { getSubjectPrerequisites } from "../services/prerequisiteApi";

// ─────────────────────────────────────────────────────────────
// Custom Node Component to guarantee perfect visibility and style
// ─────────────────────────────────────────────────────────────
const CustomRoadmapNode = ({ data }) => {
  const { title, completed, isLocked } = data;

  let containerClass = "bg-slate-900 border-white/20 text-slate-100 hover:border-cyan-500/50";
  let titleClass = "text-white font-bold";
  let icon = "⚡";

  if (completed) {
    containerClass = "bg-emerald-900/30 border-emerald-400/80 text-emerald-300 hover:border-emerald-400";
    titleClass = "text-emerald-100 font-bold";
    icon = "✅";
  } else if (isLocked) {
    containerClass = "bg-slate-800/80 border-white/10 text-slate-300";
    titleClass = "text-slate-200 font-medium";
    icon = "🔒";
  } else {
    // Unlocked / Active focus topic
    containerClass = "bg-cyan-950/60 border-cyan-400/90 text-cyan-200 hover:border-cyan-300 ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-900/40";
    titleClass = "text-white font-black";
    icon = "⚡";
  }

  return (
    <div className={`rounded-2xl border px-3.5 py-3 w-[220px] shadow-md transition text-left select-none relative ${containerClass}`}>
      {/* Top Handle for prerequisites incoming */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: completed ? "#10b981" : isLocked ? "#334155" : "#06b6d4",
          width: 8,
          height: 8,
          border: "2px solid #030712",
        }}
      />

      <div className="flex items-center justify-between w-full font-bold">
        <span className={`truncate max-w-[160px] text-xs font-bold leading-normal ${titleClass}`}>
          {title}
        </span>
        <span className="text-sm shrink-0 ml-2">
          {icon}
        </span>
      </div>

      {/* Bottom Handle for next recommended steps */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: completed ? "#10b981" : isLocked ? "#334155" : "#06b6d4",
          width: 8,
          height: 8,
          border: "2px solid #030712",
        }}
      />
    </div>
  );
};

// Register custom node type in React Flow
const nodeTypes = {
  roadmapNode: CustomRoadmapNode,
};

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
const SubjectPrerequisiteGraph = ({ subjectId }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchPath = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await getSubjectPrerequisites(subjectId);
        if (isMounted) {
          setData(res);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("Failed to load subject prerequisite graph.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchPath();
    return () => {
      isMounted = false;
    };
  }, [subjectId]);

  // Overall Subject Progress
  const stats = useMemo(() => {
    if (!data || !data.topics || data.topics.length === 0) {
      return { completed: 0, total: 0, percentage: 0 };
    }
    const total = data.topics.length;
    const completed = data.topics.filter((t) => t.completed).length;
    const percentage = Math.round((completed / total) * 100);
    return { completed, total, percentage };
  }, [data]);

  // Build React Flow nodes and edges
  const flowData = useMemo(() => {
    if (!data || !data.topics) return { nodes: [], edges: [] };

    const nodes = [];
    const edges = [];
    const topics = data.topics;

    const completedMap = {};
    topics.forEach((t) => {
      completedMap[t.id] = t.completed;
    });

    topics.forEach((t, idx) => {
      let isLocked = false;
      if (t.prerequisites && t.prerequisites.length > 0) {
        isLocked = t.prerequisites.some((prereqId) => !completedMap[prereqId]);
      }

      // Zigzag layout: alternate left and right
      const x = idx % 2 === 0 ? -70 : 70;
      const y = idx * 130 + 30;

      nodes.push({
        id: t.id,
        type: "roadmapNode",
        data: {
          title: t.title,
          completed: t.completed,
          isLocked: isLocked,
          topicId: t.id,
        },
        position: { x, y },
      });

      // ONE single zigzag line: connect each node sequentially to the next
      if (idx > 0) {
        const prevTopic = topics[idx - 1];
        const prevCompleted = completedMap[prevTopic.id];
        const currCompleted = completedMap[t.id];
        const bothDone = prevCompleted && currCompleted;

        edges.push({
          id: `edge-seq-${idx}`,
          source: prevTopic.id,
          target: t.id,
          type: "default", // Bezier curved path creates the zigzag arc
          style: {
            stroke: bothDone ? "#10b981" : prevCompleted ? "#22d3ee" : "rgba(255,255,255,0.15)",
            strokeWidth: 2,
          },
          animated: prevCompleted && !currCompleted,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: bothDone ? "#10b981" : prevCompleted ? "#22d3ee" : "rgba(255,255,255,0.2)",
            width: 15,
            height: 15,
          },
        });
      }
    });

    return { nodes, edges };
  }, [data]);

  const onNodeClick = useCallback(
    (event, node) => {
      if (node.data && node.data.topicId) {
        navigate(`/topics/${node.data.topicId}`);
      }
    },
    [navigate]
  );

  const generateSchedule = () => {
    if (!data || !data.topics) return;
    const seq = [];
    let day = 1;

    data.topics.forEach((t) => {
      seq.push({
        day: day++,
        title: t.title,
        status: t.completed ? "Completed" : "Pending",
      });
    });

    setSchedule(seq);
  };

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center bg-slate-950/20 border border-white/5 rounded-3xl animate-pulse">
        <span className="text-xs text-slate-500 font-semibold">Loading syllabus roadmap graph...</span>
      </div>
    );
  }

  if (error || !data || !data.topics || data.topics.length === 0) return null;

  return (
    <section className="bg-slate-950/40 border border-white/5 rounded-3xl p-6 shadow-md space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Compass className="h-5 w-5 text-cyan-500 animate-spin-slow" />
            🗺️ Subject Syllabus Roadmap & Learning Path
          </h2>
          <p className="text-xs text-slate-500">
            Interactive prerequisite roadmap path. Click on any topic node to open its details and start learning.
          </p>
        </div>

        {/* Start button */}
        <button
          onClick={generateSchedule}
          className="shrink-0 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-cyan-500/10 hover:scale-[1.02]"
        >
          <Calendar className="h-4 w-4" />
          🚀 Start Recommended Path
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Stats column */}
        <div className="md:col-span-1 space-y-5 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold">Overall Completion:</span>
              <span className="font-black text-sm text-cyan-400">{stats.percentage}%</span>
            </div>
            <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-500">
              Completed {stats.completed} of {stats.total} total subject modules.
            </p>
          </div>

          {/* Legend / Info */}
          <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-slate-400">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Roadmap Legend
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-emerald-500/20 border border-emerald-500/40 block" />
                <span>🟢 Completed Topic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-cyan-500/20 border border-cyan-500/40 block" />
                <span>⚡ Unlocked / Next Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-slate-900 border border-white/5 block" />
                <span>🔒 Locked (Prerequisites incomplete)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Graph Column */}
        <div className="md:col-span-2 relative h-[450px] bg-[#030712] border border-white/5 rounded-2xl overflow-hidden">
          <ReactFlow
            nodes={flowData.nodes}
            edges={flowData.edges}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            attributionPosition="bottom-right"
          >
            <Background color="rgba(255,255,255,0.05)" gap={16} />
            <Controls className="bg-slate-900 border-white/10 text-white rounded-xl overflow-hidden" />
          </ReactFlow>
        </div>
      </div>

      {/* Schedule Modal */}
      {schedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
                Subject Study Schedule
              </h3>
              <button
                onClick={() => setSchedule(null)}
                className="text-slate-500 hover:text-white rounded-xl p-1 hover:bg-white/5 transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
              {schedule.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-400 text-xs font-black">
                    #{item.day}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white leading-tight truncate">{item.title}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${
                      item.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 animate-pulse"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2 border-t border-white/5">
              <button
                onClick={() => setSchedule(null)}
                className="rounded-xl px-5 py-2.5 text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition flex items-center gap-1.5"
              >
                <Play className="h-3.5 w-3.5 fill-current" /> Let's Start Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubjectPrerequisiteGraph;
