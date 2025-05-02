import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <button 
      onClick={goBack}
      className="flex items-center justify-center w-10 h-10 mx-4 my-2 bg-gray-800 text-white rounded-full hover:bg-teal-500 transition-colors shadow-md"
      aria-label="Go back"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5"
      >
        <path d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z" />
      </svg>
    </button>
  );
}