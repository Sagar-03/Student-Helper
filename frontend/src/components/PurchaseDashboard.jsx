import axios from '../axiosConfig';
import './PurchaseButton.css';

export default function PurchaseButton({ productId }) {
  const handlePurchase = async () => {
    try {
      await axios.post(`/product/purchase/${productId}`);
      alert('Purchase successful!');
    } catch (err) {
      alert('Purchase failed.');
    }
  };

  return <button className="purchase-btn" onClick={handlePurchase}>Buy Now</button>;
}
