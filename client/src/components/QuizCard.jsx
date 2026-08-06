import { Link } from "react-router-dom";

function QuizCard({ quiz }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold">
        {quiz.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {quiz.description}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-5">

        <div>
          <strong>Questions</strong>

          <p>
            {quiz.questions.length}
          </p>
        </div>

        <div>
          <strong>Duration</strong>

          <p>
            {quiz.duration} mins
          </p>
        </div>

        <div>
          <strong>Passing</strong>

          <p>
            {quiz.passingMarks}%
          </p>
        </div>

      </div>

      <Link
        to={`/quiz/${quiz._id}`}
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Start Quiz
      </Link>

    </div>
  );
}

export default QuizCard;