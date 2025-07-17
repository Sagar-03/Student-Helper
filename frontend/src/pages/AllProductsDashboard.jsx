import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const topLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/marketplace", label: "Marketplace" },
];

// --- ProductCard Component ---
const ProductCard = ({ product, onBuyClick }) => {
  const formattedWhatsAppNumber = product.whatsappNumber
    ? product.whatsappNumber.replace(/[^\d]/g, "")
    : "";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[800px] md:h-[200px] m-4">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Image */}
        <div className="md:w-1/3 h-48 md:h-full">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold mb-2">
              Price: ₹{product.price}
            </p>
            <p className="text-sm text-gray-500">Seller: {product.sellerName}</p>
          </div>

          <div className="flex gap-2 mt-4">
            {/* Contact Seller */}
            <a
              href={`https://api.whatsapp.com/send/?phone=91${formattedWhatsAppNumber}&text=Hello, I'm interested in your product "${product.title}" on Student Helper.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Contact
            </a>

            {/* Buy button */}
            <button
              onClick={() => onBuyClick(product._id)}
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition flex-grow"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main AllProductsDashboard ---
export default function AllProductsDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = async (productId) => {
    try {
      const response = await axios.patch(`/product/purchase/${productId}`);
      const notificationSent = response.data.notification?.sent;
      const directLink = response.data.notification?.directLink;

      if (notificationSent) {
        alert("Purchase successful! A notification has been sent to the seller.");
      } else if (directLink) {
        const clickToContact = confirm(
          "Purchase successful! Would you like to contact the seller directly via WhatsApp?"
        );
        if (clickToContact) {
          window.open(directLink, "_blank", "noopener,noreferrer");
        }
      } else {
        alert(
          "Purchase successful! We couldn't notify the seller automatically. Please contact them directly."
        );
      }

      setProducts((prevProducts) =>
        prevProducts.filter((p) => p._id !== productId)
      );
      setPurchaseSuccess(true);
      fetchProducts();
      // No redirect to purchases page since it might require login
    } catch (err) {
      console.error("Purchase failed:", err.response?.data || err.message);
      alert(
        "Purchase failed: " +
          (err.response?.data?.msg || "Please try again later.")
      );
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/product/available");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err.response?.data || err.message);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Topbar */}
      <div className="w-full bg-black bg-opacity-50 shadow-md sticky top-0 z-10 backdrop-filter backdrop-blur-sm">
        <Navbar links={topLinks} />
      </div>

      {/* Content area */}
      <div className="container mx-auto py-8 px-4">
        {/* Back Button */}
        <div className="mb-4">
          <BackButton />
        </div>

        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Browse Products</h1>
          <p className="text-gray-600">Find and purchase products from other students</p>
        </div>

        {/* Success message */}
        {purchaseSuccess && (
          <div className="mb-6 bg-green-100 p-4 rounded-lg text-green-700">
            Purchase successful! Redirecting to your purchases...
          </div>
        )}

        {/* Loading, error, or content */}
        <div className="flex flex-col items-center">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md w-full max-w-3xl">
              {error}
            </div>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onBuyClick={handlePurchase}
              />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg mb-4">No products are available right now.</p>
              <button
                onClick={() => navigate("/upload")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Be the first to list a product!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}