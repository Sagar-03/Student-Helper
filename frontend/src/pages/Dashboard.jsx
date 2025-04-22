import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import "../App.css";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import "../components/Navbar.css";
import "../components/NavbarSide.css";


export default function Dashboard() {
  const navigate = useNavigate(); // ✅ Initialize it

  const topLinks = [
    {to: "/dashboard", label: "Dashboard"},
    {to: "marketplace", label: "Marketplace"},
  ];
  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
  ];

  return (
    <>
    <Navbar links={topLinks} />
    <NavbarSide links={sideLinks} />

      <div className="dashboard">
        <h1>Welcome to Your Dashboard</h1>
        <div className="features">
          <div className="feature-card" onClick={() => navigate("/marketplace")}>Marketplace</div>
          <div className="feature-card">Notes</div>
          <div className="feature-card">Placement Referral</div>
          <div className="feature-card" onClick={() => navigate("/sells")}>Selling Drafter etc</div>
          <div className="feature-card">Nearest PG</div>
          <div className="feature-card">Roommate Finder</div>
          <div className="feature-card">Nearby Mess or Caterers</div>
          <div className="feature-card">Calendar</div>
          <div className="feature-card">Senior Contact</div>
          <div className="feature-card">Google Classroom API</div>
          <div className="feature-card" onClick={() => navigate("/upload")}>File Writing Service</div>
          <div className="feature-card">Society & Club Info</div>
        </div>
      </div>
    </>
  );
}
