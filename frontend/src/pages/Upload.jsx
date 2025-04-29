import React, { useState } from 'react';
import axios from '../axiosConfig';
import Navbar from '../components/Navbar';

export default function Upload() {
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    sellerName: '',
    whatsappNumber: ''
  });
  const [file, setFile] = useState(null);

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);
    formData.append('image', file);

    try {
      await axios.post('/product/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product uploaded successfully!');
    } catch (error) {
      alert('Upload failed: ' + (error.response?.data?.msg || error.message));
      console.error('Upload Error:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="w-full bg-gray-100">
        <Navbar links={topLinks} />
      </div>

      <form className="max-w-sm mx-auto p-8 rounded-lg bg-gray-50 shadow-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-semibold">Upload Product</h2>

        <input
          className="p-3 border border-gray-300 rounded-md"
          placeholder='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          required
        />
        <input
          className="p-3 border border-gray-300 rounded-md"
          placeholder='Description'
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          required
        />
        <input
          className="p-3 border border-gray-300 rounded-md"
          placeholder='Price'
          type='number'
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          required
        />
        <input
          className="p-3 border border-gray-300 rounded-md"
          placeholder='Your Name'
          value={data.sellerName}
          onChange={(e) => setData({ ...data, sellerName: e.target.value })}
          required
        />
        <input
          className="p-3 border border-gray-300 rounded-md"
          placeholder='WhatsApp Number'
          value={data.whatsappNumber}
          onChange={(e) => setData({ ...data, whatsappNumber: e.target.value })}
          required
        />
        <input
          className="p-3 border border-gray-300 rounded-md"
          type='file'
          onChange={(e) => setFile(e.target.files[0])}
          accept='image/*'
          required
        />
        <button
          type='submit'
          className="p-3 bg-gray-800 text-white rounded-md hover:bg-teal-500 transition-colors"
        >
          Upload
        </button>
      </form>
    </>
  );
}
