import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Marketplace from "./pages/Marketplace";
import PurchaseDashboard from "./pages/PurchaseDashboard";
import Sells from "./pages/Sells";
import AllProductsDashboard from "./pages/AllProductsDashboard";
import Dashboard from "./pages/Dashboard";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/purchases' element={<PurchaseDashboard />} />
        <Route path='/sells' element={<Sells />} />
        <Route path='/all-products' element={<AllProductsDashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
