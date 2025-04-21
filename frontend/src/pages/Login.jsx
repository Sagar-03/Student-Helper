import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import './Form.css';
import '../App.css';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Logged in!');
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.msg || err.message));
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  const handleEmaillogin = () => {
    // Simulate Email login
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Portal Login</h2>

        <form className="form-container" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="login-options">
          <button className="login-button google" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          <button className="login-button email" onClick={handleEmaillogin}>
            Continue with Email
          </button>
        </div>
      </div>
    </div>
  );
}
