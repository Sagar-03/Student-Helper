import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import StatusBadge from '../components/StatusBadge';

export default function Sells() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/product/mysells')
      .then((res) => setProducts(res.data))
      .catch(() => alert('Failed to fetch your sells'));
  }, []);

  const markAsSold = async (productId) => {
    try {
      await axios.patch(`/product/markassold/${productId}`);
      setProducts(prev => prev.map(p => p._id === productId ? { ...p, sold: true } : p));
    } catch {
      alert('Failed to update status');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Products for Sale</h2>
      {products.length === 0 ? <p>No products uploaded.</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {products.map((product) => (
            <div key={product._id} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
              <img src={`http://localhost:5000/uploads/${product.image}`} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px' }} />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
              <StatusBadge sold={product.sold} />
              {!product.sold && (
                <button onClick={() => markAsSold(product._id)} style={{ marginTop: '10px', padding: '6px 10px', background: '#f39c12', border: 'none', color: '#fff', borderRadius: '6px' }}>Mark as Sold</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
