import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    degree: "",
    branch: "",
    year: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Clear field error on change
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};

    // Name check
    if (!form.name.trim()) {
      tempErrors.name = "Full name is required";
    } else if (form.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      tempErrors.name = "Name can only contain letters and spaces";
    }

    // Email check
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address with a valid extension (e.g. .com, .edu, .in)";
    }

    // Password check
    if (!form.password) {
      tempErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(form.password)) {
      tempErrors.password = "Must contain at least 1 number and 1 special character";
    }

    // Degree check
    if (!form.degree) {
      tempErrors.degree = "Please select your degree";
    }

    // Branch check
    if (!form.branch.trim()) {
      tempErrors.branch = "Branch is required";
    } else if (!/^[a-zA-Z\s]+$/.test(form.branch)) {
      tempErrors.branch = "Branch name must contain only letters";
    }

    // Year check
    if (!form.year) {
      tempErrors.year = "Please select your current year";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await api.post("/auth/register", form);
      alert("Registration Successful! You can now log in.");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030712] px-4 py-10 relative overflow-hidden">
      {/* Decorative Glowing Mesh */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[150px]"></div>
      </div>

      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl lg:grid lg:grid-cols-[0.95fr_1.05fr] z-10">
        {/* Left Side marketing panel */}
        <div className="bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 p-8 text-white sm:p-10 lg:p-12 border-r border-white/5 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20">
                <span>🌱</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400 font-bold">Start Your Journey</span>
            </div>
            
            <h1 className="text-3xl font-black sm:text-4xl leading-tight text-white pt-6">
              Create your account and begin smart student development planning.
            </h1>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
              Build a profile tailored to your course background and unlock recommendations aligned with your coding and study goals.
            </p>
          </div>
        </div>

        {/* Right Side Form panel */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-slate-900/10">
          <h2 className="text-2xl font-black text-white">Create account</h2>
          <p className="mt-1.5 text-xs text-slate-400 font-semibold">Fill in your details to get started.</p>

          <form onSubmit={registerUser} className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Full name</label>
              <input
                name="name"
                value={form.name}
                placeholder="Enter your full name (letters only)"
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.name ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              />
              {errors.name && <p className="text-[10px] font-semibold text-rose-400">{errors.name}</p>}
            </div>

            {/* Email Address */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                placeholder="Enter your email (e.g. name@domain.com)"
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.email ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              />
              {errors.email && <p className="text-[10px] font-semibold text-rose-400">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                placeholder="Password (min 6 chars, 1 number, 1 symbol)"
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.password ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              />
              {errors.password && <p className="text-[10px] font-semibold text-rose-400">{errors.password}</p>}
            </div>

            {/* Degree Select */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Degree</label>
              <select
                name="degree"
                value={form.degree}
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.degree ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">Select Degree</option>
                <option value="B.Tech" className="bg-slate-900 text-slate-200">B.Tech</option>
                <option value="BE" className="bg-slate-900 text-slate-200">B.E.</option>
                <option value="M.Tech" className="bg-slate-900 text-slate-200">M.Tech</option>
                <option value="MCA" className="bg-slate-900 text-slate-200">MCA</option>
                <option value="BCA" className="bg-slate-900 text-slate-200">BCA</option>
                <option value="B.Sc" className="bg-slate-900 text-slate-200">B.Sc</option>
                <option value="Other" className="bg-slate-900 text-slate-200">Other</option>
              </select>
              {errors.degree && <p className="text-[10px] font-semibold text-rose-400">{errors.degree}</p>}
            </div>

            {/* Branch */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Branch</label>
              <input
                name="branch"
                value={form.branch}
                placeholder="e.g. CSE"
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.branch ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              />
              {errors.branch && <p className="text-[10px] font-semibold text-rose-400">{errors.branch}</p>}
            </div>

            {/* Year Select */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Year</label>
              <select
                name="year"
                value={form.year}
                className={`w-full rounded-2xl border bg-white/5 px-4 py-3 outline-none text-slate-100 placeholder-slate-500 transition focus:bg-white/10 text-xs font-semibold ${
                  errors.year ? "border-rose-500" : "border-white/5 focus:border-emerald-500"
                }`}
                onChange={handleChange}
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">Select Year</option>
                <option value="1st Year" className="bg-slate-900 text-slate-200">1st Year</option>
                <option value="2nd Year" className="bg-slate-900 text-slate-200">2nd Year</option>
                <option value="3rd Year" className="bg-slate-900 text-slate-200">3rd Year</option>
                <option value="4th Year" className="bg-slate-900 text-slate-200">4th Year</option>
              </select>
              {errors.year && <p className="text-[10px] font-semibold text-rose-400">{errors.year}</p>}
            </div>

            <button className="sm:col-span-2 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-95 text-xs uppercase tracking-wider mt-2">
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400 font-semibold">
            Already have an account?
            <Link className="ml-2 font-bold text-emerald-400 hover:text-emerald-300 transition" to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;