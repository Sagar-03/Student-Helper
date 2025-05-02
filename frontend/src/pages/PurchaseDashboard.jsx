import React from "react";
import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import BackButton from "../components/BackButton";
import { useNavigate } from 'react-router-dom';
import NavbarSide from "../components/NavbarSide";
import whatsappIcon from '../assets/whatsappIcon.svg';

export default function PurchaseDashboard() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
    { to: "/sells", label: "My Sells" },
    { to: "/all-products", label: "Browse Products" },
  ];

  useEffect(() => {
    // Check if user is logged in
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login', { state: { from: '/purchases' } });
      return;
    }

    const fetchPurchases = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/product/purchased');
        setPurchases(res.data);
      } catch (err) {
        console.error("Failed to fetch purchases:", err.response?.data || err.message);
        setError('Failed to load your purchases. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, [navigate]);

  // Format the purchase date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Back Button */}
        <BackButton />
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Purchases</h2>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        ) : purchases.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg mb-4">You haven't purchased anything yet.</p>
            <button 
              onClick={() => navigate('/all-products')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-600 font-semibold">₹{item.price}</span>
                    {item.purchaseDate && (
                      <span className="text-xs text-gray-500">
                        Purchased on: {formatDate(item.purchaseDate)}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-700">Seller: {item.sellerName}</p>
                    {item.whatsappNumber && (
                      <a
                        href={`https://api.whatsapp.com/send/?phone=91${item.whatsappNumber.replace(/[^\d]/g, '')}&text=Hello, I purchased your product "${item.title}" on Student Helper.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center text-sm text-green-600 hover:text-green-700"
                      >
                        <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-1" />
                        Contact Seller
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
