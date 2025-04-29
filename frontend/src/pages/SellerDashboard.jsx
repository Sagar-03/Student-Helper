import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";

const sideLinks = [
  { to: "/upload", label: "Upload Product" },
  { to: "/mysells", label: "My Uploaded Products" },
];

export default function SellerDashboard() {
  const navigate = useNavigate();

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full bg-gray-100">
          <Navbar links={topLinks} />
        </div>

        {/* Content area */}
        <div className="flex flex-col items-center justify-center flex-1 py-8">
          <h1 className="text-3xl font-bold text-gray-700 mb-8">Seller Dashboard</h1>

          <div className="flex flex-col gap-6">
            <button
              onClick={() => navigate("/upload")}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 text-lg"
            >
              Upload New Product
            </button>

            <button
              onClick={() => navigate("/mysells")}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 text-lg"
            >
              View My Uploaded Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
