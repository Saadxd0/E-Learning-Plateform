import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>EduConnect</h3>
          <p>Empowering individuals through quality education and connecting learners with expert instructors around the globe.</p>
          <div className="social-icons">
            <a href="https://instagram.com" className="icon"><span>📱</span></a>
            <a href="https://facebook.com" className="icon"><span>📘</span></a>
            <a href="https://instagram.com" className="icon"><span>📸</span></a>
            <a href="https://twitter.com" className="icon"><span>🐦</span></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/teachers">Teachers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section resources">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><span>📞</span> +1 234 567 8900</p>
          <p><span>📧</span> info@educonnect.com</p>
          <p><span>📍</span> 123 Education Street, Learning City, ED 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 