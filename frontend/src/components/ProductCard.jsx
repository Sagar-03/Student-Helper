import './ProductCard.css';
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
<img
  src={product.image.startsWith('http') ? product.image : `https://student-helper-b5j4.onrender.com/uploads/${product.image}`}
  alt={product.title}
/>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <span>Seller: {product.postedBy?.name}</span>
    </div>
  );
}