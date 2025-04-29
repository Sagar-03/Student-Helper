import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NavbarSide({ links = [] }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status when component mounts or when token changes
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    // Add event listener for storage changes (in case user logs in/out in another tab)
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
    <div className="w-[220px] h-150 bg-[#12101D] pt-[30px] z-10 rounded-s-2xl rounded-e-2xl ml-4 mt-10">
      <ul className="list-none p-0 m-0">
        {links.map(({ to, label }, idx) => (
          <li
            key={idx}
            className="p-4 border-b border-[#12101D] hover:bg-[#333]"
          >
            <Link
              to={to}
              className="block text-white no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
        
        {/* Auth section - conditionally show login or logout */}
        <li className="p-4 border-b border-[#12101D] hover:bg-[#333] mt-auto">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="block w-full text-left text-red-400 no-underline hover:text-red-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="block w-full text-left text-green-400 no-underline hover:text-green-300"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}