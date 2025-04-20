import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import './Form.css';

export default function PurchaseDashboard() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axios.get('/product/purchased').then(res => setPurchases(res.data));
  }, []);

  return (
    <div className="form-container">
      <h2>My Purchases</h2>
      {purchases.length === 0 ? (
        <p>You haven't purchased anything yet.</p>
      ) : (
        purchases.map((item) => (
          <div key={item._id}>
            <strong>{item.title}</strong> - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}