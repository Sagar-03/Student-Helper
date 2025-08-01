import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Upload from "./pages/Upload";
import MarketplaceHome from "./pages/MarketplaceHome";
import PurchaseDashboard from "./pages/PurchaseDashboard";
import Sells from "./pages/Sells";
import AllProductsDashboard from "./pages/AllProductsDashboard";
import Dashboard from "./pages/Dashboard";
import GoogleClassroom from "./pages/GoogleClassroom";
import SellerDashboard from "./pages/SellerDashboard";
import Notes from "./components/Notes/Notes";
import BTech from "./components/Notes/BTech/BTech";
import CSE from "./components/Notes/BTech/CSE/CSE";
import Semester1 from "./components/Notes/BTech/CSE/Semesters/Sem1/1";
import Semester2 from "./components/Notes/BTech/CSE/Semesters/Sem2/2";
import Semester3 from "./components/Notes/BTech/CSE/Semesters/Sem3/3";
import Semester4 from "./components/Notes/BTech/CSE/Semesters/Sem4/4";  
import Semester5 from "./components/Notes/BTech/CSE/Semesters/Sem5/5";
import Semester6 from "./components/Notes/BTech/CSE/Semesters/Sem6/6";
import NightMarket from "./pages/hosteller/night-market";
import GoogleAuthCallback from "./components/GoogleAuthCallback";
import StudySwap from "./pages/StudySwap";
import BecomeWriter from "./pages/BecomeWriter";
import FindWriter from "./pages/FindWriter";

// Token handler component
function TokenHandler() {
  const location = useLocation();
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    
    if (token) {
      if (location.pathname === '/googleclassroom') {
        // Store the Google token for classroom
        localStorage.setItem('googleToken', token);
        
        // Clean up the URL
        window.history.replaceState({}, document.title, '/googleclassroom');
      } else if (location.pathname === '/auth') {
        // For auth page, the token will be handled by the Auth component itself
        // No need to store here, just clean up URL if needed
      }
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <TokenHandler />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<MarketplaceHome />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/purchases" element={<PurchaseDashboard />} />
        <Route path="/sells" element={<Sells />} />
        <Route path="/all-products" element={<AllProductsDashboard />} />
        <Route path="/mysells" element={<Sells />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/googleclassroom" element={<GoogleClassroom />} />
        <Route path="/google/callback" element={<GoogleAuthCallback />} />
        <Route path="/hosteller/night-market" element={<NightMarket />} />
        <Route path="/studyswap" element={<StudySwap />} />
        <Route path="/become-writer" element={<BecomeWriter />} />
        <Route path="/find-writer" element={<FindWriter />} />

        {/* BTech Notes Routes */}
        <Route path="/notes/btech" element={<BTech />} />
        
        {/* CSE Routes */}
        <Route path="/btech/cse" element={<CSE />}>
          <Route path="1" element={<Semester1 />} />
          <Route path="2" element={<Semester2 />} /> 
          <Route path="3" element={<Semester3 />} /> 
          <Route path="4" element={<Semester4 />} /> 
          <Route path="5" element={<Semester5 />} /> 
          <Route path="6" element={<Semester6 />} /> 
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;