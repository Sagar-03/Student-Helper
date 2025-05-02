import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import BackButton from "../components/BackButton";
import axios from "../axiosConfig";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
    
    // Listen for auth changes
    const handleAuthChange = () => {
      const newToken = sessionStorage.getItem("token");
      setIsLoggedIn(!!newToken);
    };
    
    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar isLoggedIn={isLoggedIn} />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Dashboard content */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Student Helper Dashboard
            </h1>
            <p className="text-gray-600 text-center mb-8">Your complete student resource center</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Marketplace Card */}
              <div 
                onClick={() => navigate("/marketplace")}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-1 shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Marketplace</h3>
                </div>
              </div>

              {/* Notes Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-1 shadow-lg hover:shadow-green-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div onClick={() => navigate("/notes")} className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Notes</h3>
                </div>
              </div>

              {/* Placement Referral */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-1 shadow-lg hover:shadow-purple-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Placement Referral</h3>
                </div>
              </div>

              {/* Selling Drafter */}
              <div 
                onClick={() => navigate("/sells")}
                className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-1 shadow-lg hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Selling Drafter</h3>
                </div>
              </div>

              {/* Nearest PG */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-1 shadow-lg hover:shadow-red-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Nearest PG</h3>
                </div>
              </div>

              {/* Roommate Finder */}
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-1 shadow-lg hover:shadow-cyan-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Roommate Finder</h3>
                </div>
              </div>

              {/* Nearby Mess */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-1 shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Nearby Mess</h3>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-1 shadow-lg hover:shadow-pink-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Calendar</h3>
                </div>
              </div>

              {/* Senior Contact */}
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-1 shadow-lg hover:shadow-indigo-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Senior Contact</h3>
                </div>
              </div>

              {/* Google Classroom */}
              <div 
                onClick={() => navigate("/googleclassroom")}
                className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-1 shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Google Classroom</h3>
                </div>
              </div>

              {/* File Writing Service */}
              <div 
                onClick={() => navigate("/upload")}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-1 shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">File Writing Service</h3>
                </div>
              </div>

              {/* Society Club Info */}
              <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl p-1 shadow-lg hover:shadow-fuchsia-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="bg-white h-full rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fuchsia-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Society Club Info</h3>
                </div>
              </div>
            </div>
            
            {/* Student Helper Tips */}
            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Student Helper Tips</h4>
              <ul className="text-sm text-blue-700 ml-5 list-disc">
                <li>Keep track of assignment deadlines with the Calendar</li>
                <li>Find study notes and materials in the Marketplace</li>
                <li>Connect with seniors for career guidance</li>
                <li>Check Google Classroom for updates from your professors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
