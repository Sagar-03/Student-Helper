import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Navbar({ links = [] }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-[#12101D] text-white m-4 px-5 py-5 flex justify-between items-center rounded-e-full rounded-s-full">
      <div className="text-xl font-semibold">Student-helper</div>

      <div className="flex items-center">
        {links.map(({ to, label }, idx) => (
          <Link
            key={idx}
            to={to}
            className="ml-4 no-underline text-[#ddd] font-medium hover:text-[#00ffcc]"
          >
            {label}
          </Link>
        ))}
        
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="ml-6 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}