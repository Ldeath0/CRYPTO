import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Hexagon className="logo-icon" size={32} />
          <span className="logo-text">MetaMiner</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Inicio</Link>
          <a href="#platform" className="nav-link">Plataforma</a>
          <a href="#how-it-works" className="nav-link">Cómo Funciona</a>
          <a href="#pricing" className="nav-link">Precios</a>
          <Link to="/support" className="nav-link">Soporte</Link>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/login">
            <Button variant="ghost" size="sm">Iniciar Sesión</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="sm">Registrarse</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-links">
              <Link to="/" className="mobile-link" onClick={toggleMenu}>Inicio</Link>
              <a href="#platform" className="mobile-link" onClick={toggleMenu}>Plataforma</a>
              <a href="#how-it-works" className="mobile-link" onClick={toggleMenu}>Cómo Funciona</a>
              <a href="#pricing" className="mobile-link" onClick={toggleMenu}>Precios</a>
              <Link to="/support" className="mobile-link" onClick={toggleMenu}>Soporte</Link>
            </div>
            <div className="mobile-actions">
              <Link to="/login" onClick={toggleMenu} style={{ width: '100%' }}>
                <Button variant="ghost" className="w-full">Iniciar Sesión</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu} style={{ width: '100%' }}>
                <Button variant="primary" className="w-full">Registrarse</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
