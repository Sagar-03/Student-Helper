import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({links = [] }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">Student-helper</div>
      <div className="nav-links">
        {links.map(({ to, label }, idx) => (
          <Link key={idx} to={to}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
