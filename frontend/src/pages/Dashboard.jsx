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
  const [userType, setUserType] = useState("non-hosteller"); // Default to non-hosteller
  
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

  // Hosteller cards
  const hostellerCards = [
    {
      title: "Hostel Complaints",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      onClick: () => navigate("/hostel-complaints")
    },
    {
      title: "Mess Menu",
      color: "green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 5a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      onClick: () => navigate("/mess-menu")
    },
    {
      title: "Roommate Finder",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      onClick: () => navigate("/roommate-finder")
    },
    {
      title: "Laundry Service",
      color: "amber",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      onClick: () => navigate("/laundry-service")
    }
  ];

  // Non-hosteller cards
  const nonHostellerCards = [
    {
      title: "Nearest PG",
      color: "teal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      onClick: () => navigate("/nearest-pg")
    },
    {
      title: "Roommate Finder",
      color: "emerald",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      onClick: () => navigate("/roommate-finder")
    },
    {
      title: "Nearby Mess",
      color: "cyan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
        </svg>
      ),
      onClick: () => navigate("/nearby-mess")
    },
    {
      title: "Transportation",
      color: "lime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      onClick: () => navigate("/transportation")
    }
  ];

  // Common cards for both user types
  const commonCards = [
    {
      title: "Night Market",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      onClick: () => navigate("/hostellor/night-market")
    },
    {
      title: "Notes",
      color: "green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
          <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      ),
      onClick: () => navigate("/notes")
    },
    {
      title: "Placement Referral",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      onClick: () => navigate("/placement-referral")
    },
    {
      title: "Google Classroom",
      color: "yellow",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      onClick: () => navigate("/googleclassroom")
    }
  ];

  // Render card component - different styles for hosteller and non-hosteller
  const renderCard = (card) => {
    if (userType === "hosteller") {
      return (
        <div 
          key={card.title}
          onClick={card.onClick}
          className={`relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg hover:shadow-indigo-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="bg-white m-1 h-full rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              {card.icon}
            </div>
            <h3 className="font-semibold text-gray-800">{card.title}</h3>
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full m-2"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div 
          key={card.title}
          onClick={card.onClick}
          className={`relative overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="bg-white m-1 h-full rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3">
              {card.icon}
            </div>
            <h3 className="font-semibold text-gray-800">{card.title}</h3>
            <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full m-2"></div>
          </div>
        </div>
      );
    }
  };

  // Get active cards based on user type
  const activeCards = userType === "hosteller" 
    ? [...hostellerCards, ...commonCards] 
    : [...nonHostellerCards, ...commonCards];

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
            
            {/* User type selector - Enhanced version */}
            <div className="flex justify-center mb-10">
              <div className="flex gap-4 w-full max-w-md">
                <button
                  type="button"
                  onClick={() => setUserType("non-hosteller")}
                  className={`w-1/2 py-4 px-5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                    userType === "non-hosteller"
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-emerald-200"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="font-medium">Non-Hosteller</span>
                  {userType === "non-hosteller" && (
                    <div className="h-1 w-12 bg-white rounded-full mt-2"></div>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("hosteller")}
                  className={`w-1/2 py-4 px-5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                    userType === "hosteller"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="font-medium">Hosteller</span>
                  {userType === "hosteller" && (
                    <div className="h-1 w-12 bg-white rounded-full mt-2"></div>
                  )}
                </button>
              </div>
            </div>
            
            {/* Category title with different styling based on user type */}
            <div className={`mb-6 px-4 py-2 rounded-lg ${
              userType === "hosteller" 
                ? "bg-blue-50 border-l-4 border-blue-500" 
                : "bg-teal-50 border-l-4 border-teal-500"
            }`}>
              <h2 className={`text-lg font-semibold ${
                userType === "hosteller" ? "text-blue-700" : "text-teal-700"
              }`}>
                {userType === "hosteller" ? "Hosteller Services" : "Non-Hosteller Services"}
              </h2>
              <p className="text-sm">
                {userType === "hosteller" 
                  ? "Access hostel-specific resources and services" 
                  : "Find accommodation and services for off-campus living"
                }
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Render active cards based on selected user type */}
              {activeCards.map(card => renderCard(card))}
            </div>
            
            {/* Student Helper Tips */}
            <div className={`mt-8 p-4 rounded-lg ${
              userType === "hosteller" ? "bg-blue-50" : "bg-teal-50"
            }`}>
              <h4 className={`font-medium mb-2 ${
                userType === "hosteller" ? "text-blue-800" : "text-teal-800"
              }`}>Student Helper Tips</h4>
              <ul className={`text-sm ml-5 list-disc ${
                userType === "hosteller" ? "text-blue-700" : "text-teal-700"
              }`}>
                <li>Keep track of assignment deadlines with the Calendar</li>
                <li>Find study notes and materials in the Marketplace</li>
                <li>Connect with seniors for career guidance</li>
                <li>Check Google Classroom for updates from your professors</li>
                {userType === "hosteller" && (
                  <li>Report any hostel issues through the Hostel Complaints section</li>
                )}
                {userType === "non-hosteller" && (
                  <li>Find affordable accommodations near campus in the Nearest PG section</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}