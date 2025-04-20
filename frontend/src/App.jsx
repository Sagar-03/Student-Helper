import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Marketplace from './pages/Marketplace';
import PurchaseDashboard from './pages/PurchaseDashboard';
import Sells from './pages/Sells';
import './index.css';
import AllProductsDashboard from './pages/AllProductsDashboard';




function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Welcome to 🛒 MarketPlace</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link to="/upload"><button className="homepage-btn">Upload Product</button></Link>
          <Link to="/purchases"><button className="homepage-btn">My Purchases</button></Link>
          <Link to="/login"><button className="homepage-btn">Login</button></Link>
          <Link to="/sells"><button className="homepage-btn">My Sells</button></Link>

          <Link to="/register"><button className="homepage-btn">Register</button></Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Marketplace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/purchases' element={<PurchaseDashboard />} />
        <Route path='/sells' element={<Sells />} />
        <Route path="/all-products" element={<AllProductsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
