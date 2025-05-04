import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Navbar({ links = [] }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check login status
  const checkLoginStatus = () => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    // Check login status on component mount
    checkLoginStatus();

    // Listen for authChange events from login/logout actions
    window.addEventListener("authChange", checkLoginStatus);

    // Clean up event listener
    return () => {
      window.removeEventListener("authChange", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);

    // Dispatch authChange event to update other components
    window.dispatchEvent(new Event("authChange"));

    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#12101D] to-[#1D1A32] text-white m-4 px-6 py-4 flex flex-col md:flex-row justify-between items-center rounded-2xl shadow-lg">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          <Link to="/dashboard" className="text-xl font-bold ">
            Student-Helper
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <div className="flex flex-col md:flex-row items-center">
          {links.map(({ to, label }, idx) => (
            <Link
              key={idx}
              to={to}
              className="py-2 md:py-0 md:ml-6 no-underline text-[#ddd] font-medium hover:text-[#00ffcc] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="mt-3 md:mt-0 md:ml-6 bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="mt-3 md:mt-0 md:ml-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
