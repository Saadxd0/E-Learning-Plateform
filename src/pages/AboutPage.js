import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About EduConnect</h1>
        <p>Empowering learners worldwide with quality education</p>
      </div>
      
      <div className="about-content">
        <div className="about-sections-container">
          <div className="about-section-card">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                EduConnect was founded in 2021 with a simple mission: to make quality education accessible to everyone, 
                regardless of location or background. What started as a small team of passionate educators has grown 
                into a global learning platform.
              </p>
              <p>
                We believe that education is a fundamental right and that knowledge should be shared openly. 
                Our platform breaks down barriers to learning and creates opportunities for personal growth.
              </p>
            </div>
            <div className="about-image">
              <img src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-books_74855-5509.jpg" alt="Our story" />
            </div>
          </div>
          
          <div className="about-section-card">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                Our mission is to create a world where anyone, anywhere can transform their life through learning. 
                We're committed to providing affordable, high-quality education that empowers individuals.
              </p>
              <p>
                We strive to create an inclusive learning environment that celebrates diversity and promotes 
                critical thinking, creativity, and practical skills development for modern learners.
              </p>
            </div>
            <div className="about-image">
              <img src="https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg" alt="Our mission" />
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <h2>EduConnect in Numbers</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We are committed to excellence in our courses, platform, and student support, constantly seeking to improve and innovate.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Inclusivity</h3>
              <p>We embrace diversity and create an inclusive environment where everyone feels welcomed, respected, and valued.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We stay at the forefront of educational technology and pedagogy to provide cutting-edge learning experiences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Impact</h3>
              <p>We measure our success by the positive impact we make on our students' lives and careers.</p>
            </div>
          </div>
        </div>
        
        <div className="team-preview">
          <h2>Meet Our Leadership</h2>
          <p>Our dedicated team of education enthusiasts is committed to transforming online learning.</p>
          <button className="view-team-btn">View All Team Members</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 