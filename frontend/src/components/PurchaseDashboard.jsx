import { useEffect, useState } from 'react';
import axios from '../axiosConfig';

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/product/mysells');
        setProducts(res.data);
      } catch (err) {
        console.error('❌ Fetch Error:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="form-container">
      <h2>My Uploaded Products</h2>
      {products.length === 0 ? (
        <p>No products uploaded yet.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.title}
              style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <p>Status: <strong>{product.sold ? 'Sold' : 'Live'}</strong></p>
          </div>
        ))
      )}
    </div>
  );
}