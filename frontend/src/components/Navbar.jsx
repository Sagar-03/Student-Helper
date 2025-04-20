import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">🛒 MarketPlace</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Sell</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}