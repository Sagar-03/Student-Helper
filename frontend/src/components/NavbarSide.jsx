import { Link } from "react-router-dom";
import React from "react";

export default function NavbarSide({ links = [] }) {
  return (
    <div className=" w-[220px] h-150 bg-[#12101D] pt-[30px] z-10 rounded-s-2xl rounded-e-2xl ml-4 mt-10">
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
      </ul>
    </div>
  );
}
