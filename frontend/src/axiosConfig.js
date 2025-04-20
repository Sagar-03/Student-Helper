import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'auth-token': localStorage.getItem('token') },
});
export default instance;
