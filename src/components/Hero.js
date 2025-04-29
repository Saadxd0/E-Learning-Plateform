import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Learn Without Limits</h1>
        <p>Access quality education anytime, anywhere with EduConnect - your gateway to knowledge and skills for the future.</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn-primary">Get Started</Link>
          <Link to="/courses" className="btn-secondary">Browse Courses</Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          {/* Image would be added via CSS background */}
        </div>
      </div>
    </section>
  );
}

export default Hero; 