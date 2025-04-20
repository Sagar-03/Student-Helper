import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import ProductCard from '../components/ProductCard';

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/product/all').then((res) => setProducts(res.data));
  }, []);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}