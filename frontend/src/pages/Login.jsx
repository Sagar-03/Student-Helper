import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import "../App.css";
import React from "react";
export default function Login() {
  const navigate = useNavigate();
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
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in!");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.msg || err.message));
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  const handleEmaillogin = () => {
    // Simulate Email login
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64  shadow-md">
          <NavbarSide links={sideLinks} />
        </div>

        {/* Main content area */}
        <div className="flex flex-col bg-gray-100 flex-1">
          {/* Top Navbar */}
          <div className="w-full bg-gray-100">
            <Navbar links={topLinks} />
          </div>

          {/* Page Content (Login Form) */}
          <div className="flex flex-1 justify-center items-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Student Portal Login
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="p-3 bg-gray-800 text-white rounded-md hover:bg-teal-500 transition-colors"
                >
                  Login
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
                  onClick={handleEmaillogin}
                >
                  Continue with Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
