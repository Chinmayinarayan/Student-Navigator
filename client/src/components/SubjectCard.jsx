import { Link } from "react-router-dom";

function SubjectCard({ subject, progress }) {
  const percentage = progress?.percentage || 0;
  const completedTopics = progress?.completedTopics || 0;
  const totalTopics = progress?.totalTopics || 0;

  return (
    <Link to={`/subjects/${subject._id}`} className="group block h-full">
      <div className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Subject</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{subject.name}</h2>
          </div>
          <div className="rounded-2xl bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700">
            {percentage}%
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{subject.description}</p>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-600">
            <span>Progress</span>
            <span>{completedTopics} / {totalTopics}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SubjectCard;