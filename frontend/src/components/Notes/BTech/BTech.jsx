import React from "react";
import { useNavigate } from "react-router-dom"; // required for navigation
import Navbar from "../../Navbar";

export default function BTech() {
  const navigate = useNavigate(); // Hook for navigation

  const branches = ["CSE", "IT", "ECE"];

  const topLinks = [
    { to: "/login", label: "Login" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  // Navigation handler
  const handleNavigate = (branch) => {
    navigate(`/btech/${branch.toLowerCase()}`); // navigates to /btech/cse etc.
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Navbar */}
      <Navbar links={topLinks} />

      {/* Page Title */}
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        B.Tech Branches
      </div>

      {/* Branch Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-4xl min-h-[220px] text-xl font-bold mx-auto mt-6">
        {branches.map((branch) => (
          <button
            onClick={() => handleNavigate(branch)}
            key={branch}
            className="bg-gradient-to-b from-[#0d1b4c] to-[#1d2e6c] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            {branch}
          </button>
        ))}
      </div>
    </div>
  );
}
