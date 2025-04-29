import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MarketplaceHome() {
  const navigate = useNavigate();

  const handleSellClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Not logged in → redirect to login first
      navigate("/login", { state: { from: "/seller-dashboard" } });
    } else {
      // Already logged in → go to Seller Dashboard
      navigate("/seller-dashboard");
    }
  };

  const handleBuyClick = () => {
    navigate("/all-products");
  };

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  return (
    <>
      <div className="w-full bg-gray-100">
        <Navbar links={topLinks} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-3xl font-bold text-gray-700">Welcome to the Marketplace</h1>
        
        <div className="flex gap-8">
          <button
            onClick={handleSellClick}
            className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition text-xl"
          >
            I want to Sell
          </button>

          <button
            onClick={handleBuyClick}
            className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition text-xl"
          >
            I want to Buy
          </button>
        </div>
      </div>
    </>
  );
}
