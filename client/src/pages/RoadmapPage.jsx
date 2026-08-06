import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCareerRoadmap } from "../services/roadmapApi";

function RoadmapPage() {
  const { careerId } = useParams();

  const [career, setCareer] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchRoadmap = async () => {
      try {
        const data = await getCareerRoadmap(careerId);

        if (!isMounted) return;

        setCareer(data.career ?? null);
        setRoadmap(data.roadmap ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRoadmap();

    return () => {
      isMounted = false;
    };
  }, [careerId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="h-6 w-32 rounded-full bg-slate-200" />
          <div className="mt-4 h-10 w-3/4 rounded-xl bg-slate-200" />
          <div className="mt-3 h-4 w-full rounded bg-slate-100" />
          <div className="mt-2 h-4 w-2/3 rounded bg-slate-100" />
        </div>
      </div>
    );
  }

  const totalPhases = roadmap.length;
  const totalWeeks = roadmap.reduce((sum, step) => sum + (step.estimatedWeeks || 0), 0);
  const totalSkills = roadmap.reduce((sum, step) => sum + (step.requiredSkills?.length || 0), 0);
  const totalProjects = roadmap.reduce((sum, step) => sum + (step.projects?.length || 0), 0);
  const spotlightSkills = roadmap
    .flatMap((step) => step.requiredSkills || [])
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-800 p-8 text-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.75)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-100">Development roadmap</p>
            <h1 className="mt-2 text-4xl font-bold">{career?.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-50">{career?.description}</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm text-blue-100">Suggested next step</p>
            <p className="mt-1 font-semibold">Start with the first phase and build one project every week.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-blue-100">Phases</p>
            <p className="mt-1 text-2xl font-semibold">{totalPhases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-blue-100">Weeks</p>
            <p className="mt-1 text-2xl font-semibold">{totalWeeks}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-blue-100">Skills</p>
            <p className="mt-1 text-2xl font-semibold">{totalSkills}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-blue-100">Projects</p>
            <p className="mt-1 text-2xl font-semibold">{totalProjects}</p>
          </div>
        </div>
      </div>

      {spotlightSkills.length > 0 && (
        <div className="mb-8 rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h2 className="text-xl font-semibold text-slate-900">Focus areas</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {spotlightSkills.map((skill, index) => (
              <span key={`${skill}-${index}`} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {roadmap.map((step, index) => (
          <div
            key={step._id}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Phase {index + 1}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
              </div>

              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {step.estimatedWeeks} Weeks
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-slate-700">{step.description}</p>

            <div className="mt-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">💻 Required Skills</h3>
              <div className="flex flex-wrap gap-3">
                {step.requiredSkills?.map((skill, skillIndex) => (
                  <span key={`${skill}-${skillIndex}`} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">🚀 Recommended Projects</h3>
              {step.projects?.length > 0 ? (
                <div className="space-y-3">
                  {step.projects.map((project, projectIndex) => (
                    <div key={`${project.title}-${projectIndex}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No projects available.</p>
              )}
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">🎯 Interview Topics</h3>
              <div className="flex flex-wrap gap-3">
                {step.interviewTopics?.map((topic, topicIndex) => (
                  <span key={`${topic}-${topicIndex}`} className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">📚 Required Subjects</h3>
              {step.requiredSubjects?.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {step.requiredSubjects.map((subject) => (
                    <span key={subject._id} className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                      {subject.name || subject.title || "Subject"}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No required subjects available.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default RoadmapPage;