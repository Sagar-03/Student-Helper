import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import NavbarSide from '../components/NavbarSide';
import React from 'react';

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/product/all').then((res) => setProducts(res.data));
  }, []);
   
  const topLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/marketplace', label: 'Marketplace' },
  ]

  const sideLinks = [
    { to: '/upload', label: 'Upload File' },
    { to: '/purchases', label: 'My Purchases' },
    { to: '/sells', label: 'My Sells' },
    { to: '/all-products', label: 'Browse Products' },
  ]

  return (
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

        {/* Main section */}
        <div className="ml-14 p-8">
          <h1 className="text-center text-3xl font-semibold">Welcome to 🛒 <b>MarketPlace</b></h1>

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
    </div>
  );
}