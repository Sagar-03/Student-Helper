// CSE.jsx
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../../Navbar";
import BackButton from "../../../BackButton";
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
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar
            links={[
              { to: "/login", label: "Login" },
              { to: "/marketplace", label: "Marketplace" }
            ]}
          />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Render child routes */}
        <Outlet context={{ semesters }} />

        {/* Default content when no semester is selected */}
        {!window.location.pathname.includes("/btech/cse/") && (
          <div className="flex flex-col items-center justify-center flex-1 py-8 px-6">
            {/* Decorative elements */}
            <div className="absolute top-32 left-1/4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-32 right-1/4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
              <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                COMPUTER SCIENCE ENGINEERING
              </h1>
              <p className="text-gray-600 text-center mb-8">Select a semester to access course materials</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {semesters.map(semester => (
                  <Link
                    key={semester.number}
                    to={`/btech/cse/${semester.number}`}
                    className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-1 shadow-lg hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="bg-white h-full rounded-lg p-6 flex flex-col items-center justify-center">
                      <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-amber-600">{semester.number}</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 text-xl">{semester.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* CSE Info */}
              <div className="mt-8 bg-amber-50 p-4 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-2">CSE Study Resources</h4>
                <ul className="text-sm text-amber-700 ml-5 list-disc">
                  <li>Programming fundamentals and data structures</li>
                  <li>Database management and system architecture</li>
                  <li>Software engineering principles and practices</li>
                  <li>AI, Machine Learning and advanced computing concepts</li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/notes/btech" 
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Back to B.Tech Branches
                </Link>
              </div>
            </div>
          </div>
        )}
        
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>© 2025 Student Helper | All academic materials are for educational purposes only</p>
        </div>
      </div>
    </div>
  );
}
