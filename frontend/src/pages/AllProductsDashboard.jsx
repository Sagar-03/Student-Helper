// AllProductsDashboard.jsx

import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavbarSide from "../components/NavbarSide";
import React from "react";

const sideLinks = [
  { to: "/upload", label: "Upload File" },
  { to: "/purchases", label: "My Purchases" },
  { to: "/sells", label: "My Sells" },
];

// --- FIXED ProductCard ---
const ProductCard = ({ product, onBuyClick }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-[800px] h-[200px] p-8 m-10">
      {/* Left image */}
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt="Product"
        className="w-1/3 h-full object-cover rounded-l-lg"
      />

      {/* Right content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold mb-1">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 font-semibold mb-2">
            Price: ₹{product.price}
          </p>
        </div>

        <div className="flex gap-2">
          {/* Contact Seller button (dummy link) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Contact Seller
          </a>

          {/* Buy button */}
          <button
            onClick={() => onBuyClick(product._id)}
            className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

// --- AllProductsDashboard ---
export default function AllProductsDashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePurchase = async (productId) => {
    try {
      await axios.patch(`/product/${productId}/buy`);
      alert("✅ Purchase successful!");
      setProducts(products.filter((p) => p._id !== productId)); // note _id not id
      setSelectedProduct(null);
    } catch (err) {
      alert("❌ Purchase failed!" + (err.response?.data?.msg || err.message));
    }
  };

  useEffect(() => {
    // MOCK PRODUCTS
    setProducts([
      {
        _id: "1",
        name: "MacBook Pro",
        description: "High-performance laptop for developers.",
        price: 150000,
        image: "https://images.unsplash.com/photo-1587202372775-b57b36ad39a7",
      },
      {
        _id: "2",
        name: "iPhone 14",
        description: "Brand new iPhone 14 for sale!",
        price: 90000,
        image: "https://images.unsplash.com/photo-1661961112952-69e46cf29c5a",
      },
      {
        _id: "3",
        name: "Gaming Keyboard",
        description: "Mechanical RGB keyboard.",
        price: 5000,
        image: "https://images.unsplash.com/photo-1587202372775-b57b36ad39a7",
      },
    ]);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Content area */}
      <div className="flex flex-col items-center justify-start flex-1 py-8 overflow-auto">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onBuyClick={handlePurchase}
            />
          ))
        ) : (
          <p className="text-gray-600 mt-10">No products available.</p>
        )}
      </div>
    </div>
  );
}
