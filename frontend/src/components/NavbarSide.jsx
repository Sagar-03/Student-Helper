import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function NavbarSide({ links = [] }) {
  const location = useLocation();

  return (
    <div className="w-[220px] bg-gradient-to-b from-[#12101D] to-[#1D1A32] pt-[20px] pb-[20px] z-10 rounded-2xl ml-4 mt-10 shadow-lg">
      <div className="px-4 pb-4 mb-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Navigation
        </h3>
      </div>
      <ul className="list-none p-0 m-0">
        {links.map(({ to, label, icon }, idx) => {
          const isActive = location.pathname === to;
          
          return (
            <li
              key={idx}
              className={`px-4 py-3 mb-1 mx-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-l-4 border-teal-400" 
                  : "hover:bg-white/10"
              }`}
            >
              <Link
                to={to}
                className={`flex items-center text-[15px] no-underline transition-colors duration-300 ${
                  isActive ? "text-[#00ffcc] font-medium" : "text-gray-200 hover:text-[#00ffcc]"
                }`}
              >
                {icon && <span className="mr-3">{icon}</span>}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
