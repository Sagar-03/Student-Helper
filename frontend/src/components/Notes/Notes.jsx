import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import NavbarSide from "../NavbarSide";

export default function Notes() {
  const navigate = useNavigate();

  const courses = ["B.Tech", "MBA", "BA-LLB", "BBA", "BBA-LLB", "BCA"];

  const topLinks = [
    { to: "/login", label: "Login" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  

  // Map course names to route paths
  const courseRoutes = {
    "B.Tech": "/notes/btech",
    "MBA": "/notes/mba",
    "BA-LLB": "/notes/ba-llb",
    "BBA": "/notes/bba",
    "BBA-LLB": "/notes/bba-llb",
    "BCA": "/notes/bca",
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar links={topLinks} />

      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        NOTES SECTION
      </div>

      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold text-[#0d1b4c] mb-6">
          SELECT YOUR COURSE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-4xl mx-auto">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => navigate(courseRoutes[course])}
              className="bg-gradient-to-b from-[#0d1b4c] to-[#1d2e6c] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            >
              {course}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
