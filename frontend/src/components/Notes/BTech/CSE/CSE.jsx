// CSE.jsx
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../../Navbar";
import React from "react";

export default function CSE() {
  const semesters = [
    { number: 1, name: "Semester 1" },
    { number: 2, name: "Semester 2" },
    { number: 3, name: "Semester 3" },
    { number: 4, name: "Semester 4" },
    { number: 5, name: "Semester 5" },
    { number: 6, name: "Semester 6" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar
        links={[
          { to: "/login", label: "Login" },
          { to: "/marketplace", label: "Marketplace" }
        ]}
      />

      {/* Render child routes */}
      <Outlet context={{ semesters }} />

      {/* Default content when no semester is selected */}
      {!window.location.pathname.includes("/btech/cse/") && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-[#0d1b4c] mb-8 text-center">
            Select Semester
          </h2>

          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {/* Top Row: Semesters 1 to 3 */}
            <Link
              to="/btech/cse/1"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 1
            </Link>
            <Link
              to="/btech/cse/2"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 2
            </Link>
            <Link
              to="/btech/cse/3"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 3
            </Link>
            <Link
              to="/btech/cse/4"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 4
            </Link>

            {/* Spacer to center Sem 5 and 6 under Sem 1 & 2 */}
            
            <Link
              to="/btech/cse/5"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 5
            </Link>
            <Link
              to="/btech/cse/6"
              className="bg-[#0d1b4c] text-white p-6 rounded-xl shadow-lg 
                         hover:bg-[#1d2e6c] transition-all duration-300 
                         flex items-center justify-center text-center 
                         h-32 w-full text-xl font-semibold"
            >
              Semester 6
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
