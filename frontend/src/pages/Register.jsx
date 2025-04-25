import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register', form);
    alert('Registered!');
  };

  return (
    <form className="max-w-sm mx-auto p-8 rounded-lg bg-gray-50 shadow-md flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-center text-2xl font-semibold">Register</h2>
      <input
        className="p-3 border border-gray-300 rounded-md"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="p-3 border border-gray-300 rounded-md"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="p-3 border border-gray-300 rounded-md"
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        type="submit"
        className="p-3 bg-gray-800 text-white rounded-md hover:bg-teal-500 transition-colors"
      >
        Register
      </button>
    </form>
  );
}
