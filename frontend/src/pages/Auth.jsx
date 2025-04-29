import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import React from "react";

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true); // toggle between Login/Register
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
    { to: "/sells", label: "My Sells" },
    { to: "/all-products", label: "Browse Products" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post("/auth/login", { email: form.email, password: form.password });
        localStorage.setItem("token", res.data.token);
        alert("Logged in!");

        // Decide redirect
        const redirectTo = location?.state?.from || "/dashboard"; // check if from Seller
        navigate(redirectTo);
      } else {
        await axios.post("/auth/register", form);
        alert("Registered Successfully! Please login now.");
        setIsLogin(true); // After register, switch to login form
      }
    } catch (err) {
      alert((err.response?.data?.msg || err.message));
    }
  };

  const handleGoogleLogin = () => {
    setTimeout(() => {
      const redirectTo = location?.state?.from || "/dashboard";
      navigate(redirectTo);
    }, 500);
  };

  const handleEmailLogin = () => {
    setTimeout(() => {
      const redirectTo = location?.state?.from || "/dashboard";
      navigate(redirectTo);
    }, 500);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 shadow-md">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col bg-gray-100 flex-1">
        {/* Top Navbar */}
        <div className="w-full bg-gray-100">
          <Navbar links={topLinks} />
        </div>

        {/* Form Section */}
        <div className="flex flex-1 justify-center items-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">
              {isLogin ? "Login to Student Portal" : "Register for Student Portal"}
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              )}
              <input
                className="p-3 border border-gray-300 rounded-md"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-md"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="submit"
                className="p-3 bg-gray-800 text-white rounded-md hover:bg-teal-500 transition-colors"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <div className="flex flex-col gap-2 mt-6">
              <button
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </button>
              <button
                className="p-3 bg-gray-800 text-white rounded-md hover:bg-teal-500 transition-colors"
                onClick={handleEmailLogin}
              >
                Continue with Email
              </button>
            </div>

            {/* Toggle Button */}
            <div className="mt-6 text-center">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    Register here
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    Login here
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
