import { useState } from 'react';
import axios from '../axiosConfig';
import './Form.css';

export default function Upload() {
  const [data, setData] = useState({ title: '', description: '', price: '' });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', file);
    await axios.post('/product/upload', formData);
    alert('Product uploaded!');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Upload Product</h2>
      <input placeholder='Title' onChange={(e) => setData({ ...data, title: e.target.value })} />
      <input placeholder='Description' onChange={(e) => setData({ ...data, description: e.target.value })} />
      <input placeholder='Price' onChange={(e) => setData({ ...data, price: e.target.value })} />
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button type='submit'>Upload</button>
    </form>
  );
}
