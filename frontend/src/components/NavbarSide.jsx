import { Link } from "react-router-dom";


export default function NavbarSide({ brand = "MarketPlace", links = [] }) {
  return (
    <div className="sidebar-static">
      <ul>
        {links.map(({ to, label }, idx) => (
          <li key={idx}><Link to={to}>{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
