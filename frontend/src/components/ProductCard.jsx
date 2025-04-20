import './ProductCard.css';
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <span>Seller: {product.postedBy?.name}</span>
    </div>
  );
}