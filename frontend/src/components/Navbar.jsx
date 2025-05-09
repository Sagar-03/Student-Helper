import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Navbar({ links = [] }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const checkLoginStatus = () => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener("authChange", checkLoginStatus);
    return () => {
      window.removeEventListener("authChange", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
    setIsMobileMenuOpen(false); // Close menu after logout
  };

  const handleLogin = () => {
    navigate("/login");
    setIsMobileMenuOpen(false); // Close menu after login
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#12101D] to-[#1D1A32] text-white m-4 px-6 py-4 flex flex-col md:flex-row justify-between items-center rounded-2xl shadow-lg z-40 relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Student-Helper
          </Link>

          {/* Mobile Menu Button */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center mt-4 md:mt-0 w-full md:w-auto justify-end">
          {links.map(({ to, label }, idx) => (
            <Link
              key={idx}
              to={to}
              className="py-2 md:py-0 md:ml-6 no-underline text-[#ddd] font-medium hover:text-[#00ffcc] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="md:ml-6 mt-3 md:mt-0 bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="md:ml-6 mt-3 md:mt-0 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-[#12101D] to-[#1D1A32] text-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="text-xl font-bold">Menu</div>
            <button onClick={toggleMobileMenu} className="focus:outline-none text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-6 space-y-4">
            {links.map(({ to, label }, idx) => (
              <Link
                key={idx}
                to={to}
                onClick={toggleMobileMenu}
                className="py-2 no-underline text-[#ddd] font-medium hover:text-[#00ffcc] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Auth Button - Bottom Center */}
          <div className="mt-auto px-6 pb-6 flex justify-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-5 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
