import { useState } from 'react';
import axios from '../axiosConfig';
import './Form.css';

export default function Upload() {
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    sellerName: '',
    whatsappNumber: ''
  });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);
    formData.append('image', file);

    try {
      await axios.post('/product/upload', formData);
      alert('Product uploaded!');
    } catch (error) {
      alert('Upload failed: ' + (error.response?.data?.msg || error.message));
      console.error('❌ Upload Error:', error.response?.data || error.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Upload Product</h2>
      <input placeholder='Title' value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
      <input placeholder='Description' value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
      <input placeholder='Price' type='number' value={data.price} onChange={(e) => setData({ ...data, price: e.target.value })} />
      <input placeholder='Your Name' value={data.sellerName} onChange={(e) => setData({ ...data, sellerName: e.target.value })} />
      <input placeholder='WhatsApp Number' value={data.whatsappNumber} onChange={(e) => setData({ ...data, whatsappNumber: e.target.value })} />
      <input type='file' onChange={(e) => setFile(e.target.files[0])} accept='image/*' />
      <button type='submit'>Upload</button>
    </form>
  );
}
