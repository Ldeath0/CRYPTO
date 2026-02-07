import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

// Layout wrapper to conditionally render header/footer
const Layout = ({ children }) => {
  const location = useLocation();
  // We might want to hide navbar/footer on dashboard or login in some designs, 
  // but for now let's keep them or just simple logic
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isAuth = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app-container">
      {!isAuth && <Navbar />}
      <div className="content-wrapper">
        {children}
      </div>
      {!isAuth && !isDashboard && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div className="container section text-center">404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
