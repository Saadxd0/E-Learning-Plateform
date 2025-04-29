import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>EduConnect</h1>
        </Link>
      </div>
      
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/teachers" onClick={() => setMobileMenuOpen(false)}>Teachers</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
      
      <div className={`auth-buttons ${mobileMenuOpen ? 'mobile-show' : ''}`}>
        <Link to="/login" className="login-btn" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
        <Link to="/signup" className="signup-btn" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
      </div>
    </header>
  );
}

export default Header; 