import React from "react";
import { useEffect, useState } from 'react';
import axios from '../axiosConfig';

export default function PurchaseDashboard() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axios.get('/product/purchased').then(res => setPurchases(res.data));
  }, []);

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg bg-[#f7f7f7] shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center">My Purchases</h2>

      {purchases.length === 0 ? (
        <p className="text-gray-500 text-center">You haven't purchased anything yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {purchases.map((item) => (
            <div
              key={item._id}
              className="border border-gray-300 p-4 rounded-md bg-white shadow-sm"
            >
              <strong className="block text-lg font-semibold">{item.title}</strong>
              <span className="text-green-600 font-medium">₹{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
