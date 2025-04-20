import { useState } from 'react';
import axios from 'axios';
import './Form.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', response.data.token); // in Login.jsx
    alert('Logged in!');
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder='Password' type='password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type='submit'>Login</button>
    </form>
  );
}