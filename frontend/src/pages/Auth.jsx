import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true); // toggle between Login/Register
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/StudySwap", label: "StudySwap" },
  ];

  // After successful login/registration - optimized for performance
  const handleSuccess = (token, userData) => {
    // Use localStorage instead of sessionStorage for better performance
    localStorage.setItem("token", token);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }

    // Dispatch authChange event asynchronously to avoid blocking
    setTimeout(() => window.dispatchEvent(new Event("authChange")), 0);

    // Navigate immediately for better UX
    const redirectPath = sessionStorage.getItem("redirectAfterLogin");
    if (redirectPath) {
      sessionStorage.removeItem("redirectAfterLogin");
      navigate(redirectPath, { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  };

  // Optimized OAuth callback handling
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const error = query.get('error');
    
    if (token) {
      // Clean URL immediately for better UX
      window.history.replaceState({}, document.title, '/auth');
      // Handle success asynchronously to avoid blocking
      requestIdleCallback(() => {
        handleSuccess(token, { name: "Google User" });
      });
    } else if (error) {
      window.history.replaceState({}, document.title, '/auth');
      setError(decodeURIComponent(error));
      setIsGoogleLoading(false);
    }
  }, [location.search]);

  // Removed the Google OAuth message listener since we're using direct redirect now

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isLogin) {
        const res = await axios.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        // Use sessionStorage instead of localStorage to make auth expire when browser closes
        handleSuccess(res.data.data.token, res.data.data);
      } else {
        const res = await axios.post("/auth/register", form);
        // Automatically log in the user after successful registration
        handleSuccess(res.data.data.token, res.data.data);
      }    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.msg || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Optimized Google login handler for better performance
  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    setError("");
    
    // Use environment variable for faster detection
    const isDevelopment = import.meta.env.DEV;
    const apiUrl = isDevelopment 
      ? 'http://localhost:5000'
      : 'https://student-helper-b5j4.onrender.com';
    
    // Pre-construct URL for immediate redirect
    const authUrl = `${apiUrl}/api/google/auth?source=auth`;
    
    // Immediate redirect without try-catch for faster response
    window.location.href = authUrl;
  };

  const handleEmailLogin = () => {
    // This is a placeholder for single-click email login
    handleSuccess("email-login-token", { name: "Email User" });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      {/* Main Content - Now takes full width */}
      <div className="flex flex-col bg-transparent flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar links={topLinks} />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Form Section */}
        <div className="flex flex-1 justify-center items-center p-4">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h2>

            {error && (
              <div
                className={`p-3 rounded-lg mb-4 text-center ${
                  error.includes("successful")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {error}
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Password"
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : isLogin ? (
                  "Sign In"
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading}
              >
                {isGoogleLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span>Redirecting to Google...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </button>

              <button
                className="p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                onClick={handleEmailLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                Continue with Email
              </button>
            </div>

            {/* Toggle Button */}
            <div className="mt-6 text-center">
              {isLogin ? (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Register here
                  </span>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Sign in here
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
