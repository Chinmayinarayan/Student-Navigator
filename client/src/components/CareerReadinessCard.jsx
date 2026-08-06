function CareerReadinessCard({ readiness }) {
  const getColor = () => {
    if (readiness.careerReadiness >= 80)
      return "bg-green-500";

    if (readiness.careerReadiness >= 60)
      return "bg-blue-500";

    if (readiness.careerReadiness >= 40)
      return "bg-yellow-500";

    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🎯 Career Readiness
      </h2>

      <div className="mb-5">

        <div className="flex justify-between mb-2">

          <span className="font-semibold">
            {readiness.level}
          </span>

          <span className="font-bold">
            {readiness.careerReadiness}%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className={`${getColor()} h-4 rounded-full transition-all duration-500`}
            style={{
              width: `${readiness.careerReadiness}%`,
            }}
          />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Topics
          </p>

          <h3 className="text-xl font-bold">
            {readiness.topicCompletion}%
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Quiz Average
          </p>

          <h3 className="text-xl font-bold">
            {readiness.quizAverage}%
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Coding Solved
          </p>

          <h3 className="text-xl font-bold">
            {readiness.codingSolved}
          </h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">
            Assignments
          </p>

          <h3 className="text-xl font-bold">
            {readiness.assignmentsCompleted}
          </h3>
        </div>

      </div>

      <h3 className="text-lg font-semibold mb-3">
        💡 Recommendations
      </h3>

      {readiness.recommendations.length === 0 ? (

        <p className="text-green-600 font-semibold">
          Excellent! You're on track for placements.
        </p>

      ) : (

        <ul className="list-disc ml-5 space-y-2">

          {readiness.recommendations.map(
            (item, index) => (
              <li key={index}>
                {item}
              </li>
            )
          )}

        </ul>

      )}

    </div>
  );
}

export default CareerReadinessCard;