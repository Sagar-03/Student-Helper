import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        className="w-full h-48 object-cover"
        src={product.image || "https://via.placeholder.com/300x200?text=Product+Image"}
        alt={product.name}
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="p-4">
        <button 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
