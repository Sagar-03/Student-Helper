import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import NavbarSide from "../components/NavbarSide";
import { useNavigate } from "react-router-dom";

const sideLinks = [
  { to: "/upload", label: "Upload File" },
  { to: "/purchases", label: "My Purchases" },
  { to: "/mysells", label: "My Sells" },
  { to: "/all-products", label: "Browse Products" },
];

export default function Sells() {
  const [products, setProducts] = useState([]);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  const fetchMySells = async () => {
    try {
      const res = await axios.get("/product/mysells");
      console.log("Fetched products:", res.data);
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Error fetching sells:", err.response?.data || err.message);
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

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsEditPopupVisible(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        title: editingProduct.title,
        description: editingProduct.description,
        price: editingProduct.price
      };
      
      const response = await axios.patch(`/product/${editingProduct._id}`, updatedData);
      
      // Update product in the local state
      setProducts(
        products.map((p) => (p._id === editingProduct._id ? {...p, ...updatedData} : p))
      );
      
      setIsEditPopupVisible(false);
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Update failed!");
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
        {products.length === 0 ? (
          <p>No products uploaded yet.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-6 mb-4 flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-semibold text-green-600">₹{product.price}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        {/* Edit Popup */}
        {isEditPopupVisible && editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
              
              <form onSubmit={handleUpdateProduct} className="flex flex-col gap-4">
                <input
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Title"
                  value={editingProduct.title}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      title: e.target.value,
                    })
                  }
                  required
                />
                <input
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Description"
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  required
                />
                <input
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Price"
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: e.target.value,
                    })
                  }
                  required
                />
                
                <div className="flex space-x-2 mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 flex-1"
                    onClick={() => setIsEditPopupVisible(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
