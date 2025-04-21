import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'; // Import Navbar here

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/product/all').then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Welcome to 🛒 MarketPlace</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/upload"><button className="homepage-btn">Upload Product</button></a>
          <a href="/purchases"><button className="homepage-btn">My Purchases</button></a>
          <a href="/login"><button className="homepage-btn">Login</button></a>
          <a href="/sells"><button className="homepage-btn">My Sells</button></a>
          <a href="/register"><button className="homepage-btn">Register</button></a>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}
