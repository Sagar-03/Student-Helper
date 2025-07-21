// axiosConfig.js - optimized for performance
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('API Base URL:', baseURL); // Debug log

const instance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use((config) => {
  // Check both localStorage and sessionStorage for token
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for better error handling
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log CORS and other errors for debugging
    if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
      console.error('Network/CORS Error:', {
        message: error.message,
        config: {
          baseURL: error.config?.baseURL,
          url: error.config?.url,
          method: error.config?.method
        }
      });
    }
    
    if (error.response?.status === 401) {
      // Clear invalid token from both storages
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

export default instance;
