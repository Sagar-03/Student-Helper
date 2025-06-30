// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  // Use sessionStorage instead of localStorage for authentication
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
