import { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import NavbarSide from '../components/NavbarSide';
import "../components/Navbar.css";
import "../components/NavbarSide.css";

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/product/all').then((res) => setProducts(res.data));
  }, []);
   
  const topLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/marketplace', label: 'Marketplace' },
  ]

  const sideLinks = [
    { to: '/upload', label: 'Upload File' },
    { to: '/purchases', label: 'My Purchases' },
    { to: '/sells', label: 'My Sells' },
    { to: '/all-products', label: 'Browse Products' },
  ]

  return (
    <>
      <Navbar  links={topLinks} />
      <NavbarSide links={sideLinks} />

      <div style={{ marginLeft: '220px', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Welcome to 🛒 <b>MarketPlace</b></h1>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <a href="/upload"><button className="homepage-btn">Upload Product</button></a>
          <a href="/purchases"><button className="homepage-btn">My Purchases</button></a>
          <a href="/login"><button className="homepage-btn">Login</button></a>
          <a href="/sells"><button className="homepage-btn">My Sells</button></a>
          <a href="/register"><button className="homepage-btn">Register</button></a>
          <a href="/all-products"><button className="homepage-btn">Browse Products</button></a>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
