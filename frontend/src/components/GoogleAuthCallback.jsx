import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function GoogleAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Extract token from URL query parameters
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    
    if (token) {
      // Store the token in localStorage
      localStorage.setItem('googleToken', token);
      
      // Close the window if it's a popup, or redirect if it's the main window
      if (window.opener) {
        // This is a popup window
        window.opener.postMessage({ type: 'GOOGLE_AUTH_SUCCESS', token }, '*');
        window.close();
      } else {
        // This is the main window
        navigate('/googleclassroom');
      }
    } else {
      // No token found, redirect to Google Classroom page
      navigate('/googleclassroom', { 
        state: { error: 'Authentication failed. Please try again.' }
      });
    }
  }, [navigate, location]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Authentication Successful!</h1>
        <p className="text-gray-600">Connecting to Google Classroom...</p>
      </div>
    </div>
  );
}
