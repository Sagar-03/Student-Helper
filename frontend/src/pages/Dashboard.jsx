import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import axios from "../axiosConfig";

export default function Dashboard() {
  const navigate = useNavigate();

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];
  
  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
  ];

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar on the left */}
        <div className="w-64 bg-gray-100">
          <NavbarSide links={sideLinks} />
        </div>

        {/* Main content area */}
        <div className="flex flex-col flex-1">
          {/* Top Navbar */}
          <div className="w-full bg-gray-100">
            <Navbar links={topLinks} />
          </div>

          {/* Dashboard content */}
          <div className="p-6 flex-1 ">
            <h1 className="text-2xl font-bold mb-4 align-middle">Welcome to Your Dashboard</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm"
                onClick={() => navigate("/marketplace")}
              >
                Marketplace
              </div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Notes</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Placement Referral</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm" onClick={() => navigate("/sells")}>
                Selling Drafter etc
              </div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Nearest PG</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Roommate Finder</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Nearby Mess or Caterers</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Calendar</div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Senior Contact</div>
              <div 
                className="p-4 flex-1 flex items-center justify-center bg-white rounded-lg shadow max-v-sm hover:bg-gray-50 cursor-pointer" 
                onClick={() => navigate("/googleclassroom")}
              >
                Google Classroom API
              </div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm" onClick={() => navigate("/upload")}>
                File Writing Service
              </div>
              <div className="p-4 flex-1 items-center bg-white rounded-lg shadow max-v-sm">Society  Club Info</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}