import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import NavbarSide from "../NavbarSide";
import BackButton from "../BackButton";

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
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar links={topLinks} />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Notes section content */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              NOTES SECTION
            </h1>
            <p className="text-gray-600 text-center mb-8">Access academic materials for all courses</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {courses.map((course) => (
                <div
                  key={course}
                  onClick={() => navigate(courseRoutes[course])}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-1 shadow-lg hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-white h-full rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-xl">{course}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Notes Tips */}
            <div className="mt-8 bg-amber-50 p-4 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-2">Study Resources Tips</h4>
              <ul className="text-sm text-amber-700 ml-5 list-disc">
                <li>Download course materials for offline study</li>
                <li>Find semester-wise organized notes for each program</li>
                <li>Prepare for exams with previous year question papers</li>
                <li>Access lecture summaries and key points</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-gray-500 text-sm">
          <p>© 2025 Student Helper | All academic materials are for educational purposes only</p>
        </div>
      </div>
    </div>
  );
}
