import React from "react"; // <-- Add this line
import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import whatsappIcon from "../assets/whatsappIcon.svg";
import Navbar from "../components/Navbar";


export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/product/all').then((res) => setProducts(res.data));
  }, []);

  const topLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/marketplace', label: 'Marketplace' },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* Top Navbar */}
      <div className="w-full bg-gray-100">
        <Navbar links={topLinks} />
      </div>

      {/* Main section */}
      <div className="p-8">
        <h1 className="text-center text-3xl font-semibold">
          Welcome to 🛒 <b>MarketPlace</b>
        </h1>

        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <a href="/upload">
            <button className="homepage-btn">Upload Product</button>
          </a>
          <a href="/purchases">
            <button className="homepage-btn">My Purchases</button>
          </a>
          <a href="/login">
            <button className="homepage-btn">Login</button>
          </a>
          <a href="/sells">
            <button className="homepage-btn">My Sells</button>
          </a>
          <a href="/register">
            <button className="homepage-btn">Register</button>
          </a>
          <a href="/all-products">
            <button className="homepage-btn">Browse Products</button>
          </a>
        </div>

        {/* Products section */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
