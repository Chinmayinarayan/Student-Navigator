import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Recommendations() {
  const navigate = useNavigate();

  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRecs = async () => {
      try {
        const res = await api.get("/recommendations");

        if (!isMounted) return;

        setRecs(res.data.recommendations || []);
      } catch (err) {
        console.error(err);
        if (!isMounted) return;

        setError(
          err?.response?.data?.message ||
            "Failed to load recommendations"
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRecs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6">
          🤖 Development Recommendations
        </h1>

        <div className="max-w-5xl space-y-4">
          {loading && (
            <div className="text-lg font-medium">
              Loading recommendations...
            </div>
          )}

          {error && (
            <div className="text-red-600 font-medium">
              {error}
            </div>
          )}

          {!loading && !error && recs.length === 0 && (
            <div className="bg-white p-6 rounded-xl shadow">
              No recommendations available yet.
            </div>
          )}

          {!loading &&
            recs.map((r) => (
              <div
                key={r.careerId}
                className="bg-white p-6 rounded-xl shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {r.title}
                    </h2>

                    <p className="text-sm text-gray-600">
                      Score: {r.score}
                    </p>
                  </div>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>

                <p className="mt-3 text-gray-700">
                  {r.description}
                </p>

                <div className="mt-4">
                  <strong>Matched Skills:</strong>{" "}
                  {r.matchedSkills?.length > 0
                    ? r.matchedSkills.join(", ")
                    : "—"}
                </div>

                <div className="mt-2">
                  <strong>Matched Interests:</strong>{" "}
                  {r.matchedInterests?.length > 0
                    ? r.matchedInterests.join(", ")
                    : "—"}
                </div>

                <div className="mt-2">
                  <strong>Average Salary:</strong>{" "}
                  {r.averageSalary || "Not Available"}
                </div>

                {r.roadmap && (
                  <div className="mt-4">
                    <details>
                      <summary className="cursor-pointer font-semibold">
                        View Roadmap
                      </summary>

                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-bold">
                            Beginner
                          </h4>

                          <ul className="list-disc list-inside text-sm">
                            {(r.roadmap.beginner || []).map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold">
                            Intermediate
                          </h4>

                          <ul className="list-disc list-inside text-sm">
                            {(r.roadmap.intermediate || []).map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold">
                            Advanced
                          </h4>

                          <ul className="list-disc list-inside text-sm">
                            {(r.roadmap.advanced || []).map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                )}

                <div className="mt-5">
                  <button
                    onClick={() =>
                      navigate(`/careers/${r.careerId}`)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Recommendations;