import React from "react";
import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavbarSide from "../components/NavbarSide";

const sideLinks = [
  { to: "/upload", label: "Upload File" },
  { to: "/purchases", label: "My Purchases" },
  { to: "/mysells", label: "My Sells" },
  { to: "/all-products", label: "Browse Products" },
];

export default function Sells() {
  const [products, setProducts] = useState([]);

  const fetchMySells = async () => {
    try {
      const res = await axios.get("/product/mysells");
      console.log('Fetched products:', res.data);
      setProducts(res.data);
    } catch (err) {
      console.error('❌ Error fetching sells:', err.response?.data || err.message);
      alert("Failed to fetch your products.");
    }
  };
  
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/product/${productId}`);
      setProducts(products.filter((p) => p._id !== productId));
      alert("Product deleted successfully!");
    } catch (err) {
      alert("Delete failed!");
    }
  };

  useEffect(() => {
    fetchMySells();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-900 text-white">
        <NavbarSide links={sideLinks} />
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Your Uploaded Products</h1>
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-6 mb-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-semibold text-green-600">₹{product.price}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
