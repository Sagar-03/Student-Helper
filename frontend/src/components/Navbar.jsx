import { Link } from "react-router-dom";
import React from "react";
export default function Navbar({ links = [] }) {
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
      </div>
    </nav>
  );
}
