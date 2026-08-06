import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTests } from "../services/testApi";

function Tests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTests = async () => {
      try {
        const data = await getTests();
        if (!isMounted) return;
        setTests(data.tests || []);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTests();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Loading Tests...</h2>
          <p className="mt-2 text-sm text-slate-500">Preparing mock exams.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Assessments</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Placement Mock Exams</h1>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Test your understanding in timed exams designed to mimic real developer recruitment processes.
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tests.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800">No mock tests available yet</h2>
            <p className="mt-2 text-sm text-slate-500">Tests will appear here once seeded by the administrator.</p>
          </div>
        ) : (
          tests.map((test) => (
            <div
              key={test._id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900 leading-snug">{test.title}</h2>
                  <span className="rounded-xl bg-violet-50 border border-violet-100 px-3 py-1 text-[10px] font-bold text-violet-700 uppercase tracking-wider shrink-0">
                    {test.subject?.name || "Subject"}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {test.description || "No description provided for this test."}
                </p>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span>⏱</span>
                    <span>{test.duration} minutes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>❓</span>
                    <span>{test.questions?.length || 0} Questions</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/tests/${test._id}`}
                className="mt-6 block w-full rounded-2xl bg-slate-900 hover:bg-slate-800 py-3 text-center text-xs font-bold text-white shadow-sm transition"
              >
                Start Test
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tests;