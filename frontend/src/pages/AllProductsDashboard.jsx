import { useEffect, useState } from 'react';
import axios from '../axiosConfig';

export default function AllProductsDashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  const handlePurchase = async (productId) => {
    try {
      await axios.patch(`/product/purchase/${productId}`);
      alert('✅ Purchase successful! Seller has been notified.');
      setProducts(products.filter(p => p._id !== productId));
      setSelectedProduct(null);
    } catch (err) {
      alert('❌ Purchase failed: ' + (err.response?.data?.msg || err.message));
    }
  };

  useEffect(() => {
    axios.get('/product/available')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('❌ Error loading products:', err));
  }, []);

  return (
    <div className="form-container">
      <h2>Available Products for Sale</h2>
      {products.length === 0 ? <p>No live products available.</p> : (
        products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button onClick={() => openPopup(product)} style={{ marginTop: '10px', backgroundColor: '#28a745', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: '6px' }}>
              Purchase
            </button>
          </div>
        ))
      )}

      {selectedProduct && (
        <div className="popup" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#00000099', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '350px' }}>
            <h3>Confirm Purchase</h3>
            <p><strong>Seller:</strong> {selectedProduct.sellerName}</p>
            <p><strong>WhatsApp:</strong> {selectedProduct.whatsappNumber}</p>
            <a href={`https://wa.me/${selectedProduct.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" /> Chat on WhatsApp
            </a>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={closePopup}>Cancel</button>
              <button onClick={() => handlePurchase(selectedProduct._id)}>Confirm Purchase</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
