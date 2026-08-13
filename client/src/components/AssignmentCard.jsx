import { useEffect, useState } from "react";

import {
  getAssignmentStatus,
  submitAssignment,
} from "../services/assignmentApi";

function AssignmentCard({ assignment }) {
  const [status, setStatus] = useState("Pending");
  const [submissionLink, setSubmissionLink] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadStatus = async () => {
      try {
        const data = await getAssignmentStatus(assignment._id);

        if (!isMounted) return;

        if (data.submission) {
          setStatus(data.submission.status);
          setSubmissionLink(data.submission.submissionLink || "");
        } else {
          setStatus("Pending");
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadStatus();

    return () => {
      isMounted = false;
    };
  }, [assignment._id]);

  const handleSubmit = async () => {
    if (!submissionLink.trim()) {
      alert("Please enter a submission link.");
      return;
    }

    try {
      const result = await submitAssignment(
        assignment._id,
        submissionLink
      );

      setStatus(result.status);

      alert("Assignment submitted successfully.");
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 border">

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-bold">
          {assignment.title}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "Submitted"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>

      <p className="mt-3 text-gray-600">
        {assignment.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4">

        <div>
          <strong>Difficulty:</strong> {assignment.difficulty}
        </div>

        <div>
          <strong>Marks:</strong> {assignment.maxMarks}
        </div>

        <div>
          <strong>Estimated Time:</strong>{" "}
          {assignment.estimatedMinutes} mins
        </div>

      </div>

      <div className="mt-6">

        <label className="font-semibold block mb-2">
          Submission Link
        </label>

        <input
          type="text"
          value={submissionLink}
          onChange={(e) => setSubmissionLink(e.target.value)}
          placeholder="Paste GitHub / Drive / ZIP Link"
          className="w-full border rounded-lg px-4 py-2"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
      >
        Submit Assignment
      </button>

    </div>
  );
}

export default AssignmentCard;