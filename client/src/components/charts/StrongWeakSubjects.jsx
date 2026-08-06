function StrongWeakSubjects({
  strongestSubject,
  weakestSubject,
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">

      {/* Strongest */}

      <div className="bg-white rounded-2xl shadow border p-6">

        <h2 className="text-2xl font-bold text-green-600 mb-5">
          🏆 Strongest Subject
        </h2>

        {strongestSubject ? (
          <>
            <h3 className="text-xl font-semibold">
              {strongestSubject.subject}
            </h3>

            <p className="mt-2 text-gray-600">
              Completed {strongestSubject.completed} of{" "}
              {strongestSubject.total} topics
            </p>

            <div className="mt-5">

              <div className="w-full h-4 bg-gray-200 rounded-full">

                <div
                  className="h-4 bg-green-600 rounded-full"
                  style={{
                    width: `${strongestSubject.percentage}%`,
                  }}
                />

              </div>

              <p className="mt-2 font-bold text-green-600">
                {strongestSubject.percentage}%
              </p>

            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}

      </div>

      {/* Weakest */}

      <div className="bg-white rounded-2xl shadow border p-6">

        <h2 className="text-2xl font-bold text-red-600 mb-5">
          ⚠ Weakest Subject
        </h2>

        {weakestSubject ? (
          <>
            <h3 className="text-xl font-semibold">
              {weakestSubject.subject}
            </h3>

            <p className="mt-2 text-gray-600">
              Completed {weakestSubject.completed} of{" "}
              {weakestSubject.total} topics
            </p>

            <div className="mt-5">

              <div className="w-full h-4 bg-gray-200 rounded-full">

                <div
                  className="h-4 bg-red-500 rounded-full"
                  style={{
                    width: `${weakestSubject.percentage}%`,
                  }}
                />

              </div>

              <p className="mt-2 font-bold text-red-600">
                {weakestSubject.percentage}%
              </p>

            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}

      </div>

    </div>
  );
}

export default StrongWeakSubjects;