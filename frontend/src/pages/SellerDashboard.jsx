import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import BackButton from "../components/BackButton";

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
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white shadow-lg">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar links={topLinks} />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Content area */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-4">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 max-w-xl w-full">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Student Seller Dashboard
            </h1>
            <p className="text-gray-600 text-center mb-8">Sell your academic products to fellow students</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Upload Product Card */}
              <div 
                onClick={() => navigate("/upload")}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-1 shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Upload Product</h3>
                  <p className="text-sm text-gray-500 text-center">List your materials for sale</p>
                </div>
              </div>

              {/* View Products Card */}
              <div 
                onClick={() => navigate("/mysells")}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-1 shadow-lg hover:shadow-green-300/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white h-full rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">My Products</h3>
                  <p className="text-sm text-gray-500 text-center">Manage your uploaded products</p>
                </div>
              </div>
            </div>
            
            {/* Student Success Tips */}
            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Seller Tips for Success</h4>
              <ul className="text-sm text-blue-700 ml-5 list-disc">
                <li>Take clear photos of your products</li>
                <li>Set competitive prices for fellow students</li>
                <li>Provide detailed descriptions of item condition</li>
                <li>Respond quickly to buyer inquiries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
