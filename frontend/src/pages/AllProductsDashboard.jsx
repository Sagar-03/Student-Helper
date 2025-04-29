import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavbarSide from "../components/NavbarSide";
import React from "react";

const sideLinks = [
  { to: "/upload", label: "Upload File" },
  { to: "/purchases", label: "My Purchases" },
  { to: "/sells", label: "My Sells" },
  { to: "/all-products", label: "Browse Products" },
];

// --- ProductCard Component ---
const ProductCard = ({ product, onBuyClick }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-[800px] h-[200px] p-8 m-10">
      {/* Left Image */}
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt="Product"
        className="w-1/3 h-full object-cover rounded-l-lg"
      />

      {/* Right Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold mb-1">{product.title}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 font-semibold mb-2">
            Price: ₹{product.price}
          </p>
        </div>

        <div className="flex gap-2">
          {/* Contact Seller */}
          <a
            href={`https://wa.me/91${product.whatsappNumber}`}
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

// --- Main AllProductsDashboard ---
export default function AllProductsDashboard() {
  const [products, setProducts] = useState([]);

  const handlePurchase = async (productId) => {
    try {
      await axios.patch(`/product/purchase/${productId}`); // note correct PATCH URL
      alert(" Purchase successful!");
      setProducts(products.filter((p) => p._id !== productId));
    } catch (err) {
      alert(" Purchase failed: " + (err.response?.data?.msg || err.message));
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/product/available'); // Fetch from real API
      setProducts(res.data); // Save real products in state
    } catch (err) {
      console.error(' Failed to fetch products:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
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
