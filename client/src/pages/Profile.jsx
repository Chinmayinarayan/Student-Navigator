import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    degree: "",
    branch: "",
    year: "",
    skills: "",
    interests: "",
    careerGoals: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile");
        const userData = res.data.user || res.data;

        if (!isMounted) return;

        setUser(userData);
        setForm({
          name: userData.name || "",
          degree: userData.degree || "",
          branch: userData.branch || "",
          year: userData.year || "",
          skills: (userData.skills || []).join(", "),
          interests: (userData.interests || []).join(", "),
          careerGoals: userData.careerGoals || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const parseList = (str) =>
    str
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        name: form.name,
        degree: form.degree,
        branch: form.branch,
        year: form.year,
        skills: parseList(form.skills),
        interests: parseList(form.interests),
        careerGoals: form.careerGoals,
      };

      const res = await api.put("/user/profile", payload);

      const updatedUser = res.data.user || res.data;
      setUser(updatedUser);
      setForm({
        name: updatedUser.name || "",
        degree: updatedUser.degree || "",
        branch: updatedUser.branch || "",
        year: updatedUser.year || "",
        skills: (updatedUser.skills || []).join(", "),
        interests: (updatedUser.interests || []).join(", "),
        careerGoals: updatedUser.careerGoals || "",
      });

      setMessage("Profile updated successfully.");
      setEditing(false);
    } catch (err) {
      console.error(err);
      setMessage(
        err?.response?.data?.message || "Failed to update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">

        <h1 className="text-4xl font-bold mb-4">👤 My Profile</h1>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl">
          {message && (
            <div className="mb-4 text-sm text-green-700">{message}</div>
          )}

          {!editing && (
            <div className="space-y-5">
              <div>
                <h2 className="font-semibold text-gray-500">Name</h2>
                <p className="text-xl">{user.name}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Email</h2>
                <p className="text-xl">{user.email}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Degree</h2>
                <p className="text-xl">{user.degree || "Not Added"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Branch</h2>
                <p className="text-xl">{user.branch || "Not Added"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Year</h2>
                <p className="text-xl">{user.year || "Not Added"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Skills</h2>
                <p className="text-xl">{(user.skills || []).join(", ") || "Not Added"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Interests</h2>
                <p className="text-xl">{(user.interests || []).join(", ") || "Not Added"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-500">Development Goals</h2>
                <p className="text-xl">{user.careerGoals || "Not Added"}</p>
              </div>

              <div className="pt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}

          {editing && (
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Degree</label>
                <input
                  name="degree"
                  value={form.degree}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Branch</label>
                <input
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Year</label>
                <input
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Skills (comma-separated)</label>
                <input
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="e.g. JavaScript, React, Node.js"
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Interests (comma-separated)</label>
                <input
                  name="interests"
                  value={form.interests}
                  onChange={handleChange}
                  placeholder="e.g. AI, Web Development"
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Development Goals</label>
                <textarea
                  name="careerGoals"
                  value={form.careerGoals}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                  rows={4}
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-60"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEditing(false);
                    setMessage(null);
                    setForm({
                      name: user.name || "",
                      degree: user.degree || "",
                      branch: user.branch || "",
                      year: user.year || "",
                      skills: (user.skills || []).join(", "),
                      interests: (user.interests || []).join(", "),
                      careerGoals: user.careerGoals || "",
                    });
                  }}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

    </div>
  );
}

export default Profile;