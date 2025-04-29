import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth"; // ✅ Combined Login/Register
import Upload from "./pages/Upload";
import MarketplaceHome from "./pages/MarketplaceHome"; // ✅ Marketplace Buy/Sell page
import PurchaseDashboard from "./pages/PurchaseDashboard";
import Sells from "./pages/Sells";
import AllProductsDashboard from "./pages/AllProductsDashboard";
import Dashboard from "./pages/Dashboard"; // ✅ Default Homepage
import GoogleClassroom from "./pages/GoogleClassroom";
import SellerDashboard from "./pages/SellerDashboard"; // ✅ Seller Dashboard
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Dashboard />} /> {/* ✅ Now opens Dashboard first */}

        {/* Auth Pages */}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<MarketplaceHome />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />

        {/* Product Pages */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/purchases" element={<PurchaseDashboard />} />
        <Route path="/sells" element={<Sells />} />
        <Route path="/all-products" element={<AllProductsDashboard />} />

        <Route path='/mysells' element={<Sells />} />  // ✅ Add this line


        {/* Other */}
        <Route path="/googleclassroom" element={<GoogleClassroom />} />
      </Routes>
    </Router>
  );
}

export default App;
