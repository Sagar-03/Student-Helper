import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import BackButton from "../../BackButton";

export default function BTech() {
  const navigate = useNavigate();

  const branches = ["CSE", "IT", "ECE"];

  const topLinks = [
    { to: "/login", label: "Login" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  // Navigation handler
  const handleNavigate = (branch) => {
    navigate(`/btech/${branch.toLowerCase()}`);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar links={topLinks} />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* B.Tech content */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              B.TECH BRANCHES
            </h1>
            <p className="text-gray-600 text-center mb-8">Select your engineering branch to access course materials</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {branches.map((branch) => (
                <div
                  key={branch}
                  onClick={() => handleNavigate(branch)}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-1 shadow-lg hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-white h-full rounded-lg p-8 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-2xl">{branch}</h3>
                    <p className="text-gray-500 mt-1">Bachelor of Technology</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* B.Tech Info */}
            <div className="mt-8 bg-amber-50 p-4 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-2">Engineering Study Resources</h4>
              <ul className="text-sm text-amber-700 ml-5 list-disc">
                <li>Complete semester-wise study materials</li>
                <li>Practice papers and previous year question banks</li>
                <li>Lab manuals and experiment guidelines</li>
                <li>Important formulas and reference sheets</li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => navigate('/notes')} 
                className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Back to All Courses
              </button>
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
