import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2>About EduConnect</h2>
        <p>Discover how we're transforming education through technology and community</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <div className="image-container"></div>
        </div>
        
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>At EduConnect, we believe that quality education should be accessible to everyone, regardless of location or background. Our mission is to bridge the gap between learners and educators, creating a global community dedicated to knowledge sharing and skill development.</p>
          
          <h3>What Sets Us Apart</h3>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <div className="feature-text">
                <h4>Expert Instructors</h4>
                <p>Learn from industry professionals with years of experience in their fields.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <div className="feature-text">
                <h4>Interactive Learning</h4>
                <p>Engage with content through quizzes, projects, and live sessions.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🌐</div>
              <div className="feature-text">
                <h4>Global Community</h4>
                <p>Connect with learners and instructors from around the world.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <div className="feature-text">
                <h4>Lifetime Access</h4>
                <p>Once enrolled, access your courses and materials forever.</p>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="learn-more-btn">Learn More About Us</Link>
        </div>
      </div>
    </section>
  );
}

export default About; 