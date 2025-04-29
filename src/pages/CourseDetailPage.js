import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/CourseDetailPage.css';

// Sample courses data - in a real app, this would come from an API or context
import { coursesData } from '../data/coursesData';

function CourseDetailPage() {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    // Find the course with the matching ID
    const foundCourse = coursesData.find(c => c.id === parseInt(courseId));
    setCourse(foundCourse);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [courseId]);
  
  if (!course) {
    return <div className="loading">Loading course details...</div>;
  }
  
  return (
    <div className="course-detail-page">
      {/* Course header */}
      <div className="course-header">
        <div className="course-header-content">
          <h1>{course.title}</h1>
          <p className="course-subtitle">{course.description}</p>
          
          <div className="course-meta">
            <div className="meta-item">
              <span className="meta-icon">👨‍🏫</span>
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⭐</span>
              <span>Rating: {course.rating} ({course.students} students)</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🏷️</span>
              <span>Category: {course.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🕒</span>
              <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
        <div className="course-header-image">
          <img src={course.image} alt={course.title} />
        </div>
      </div>
      
      {/* Enrollment card */}
      <div className="enrollment-card">
        <div className="price-container">
          <h2 className="price">${course.price}</h2>
        </div>
        <Link to={`/course/${course.id}/enroll`} className="enroll-button">Enroll Now</Link>
        <button className="add-to-wishlist">Add to Wishlist</button>
        <div className="course-includes">
          <h3>This Course Includes:</h3>
          <ul>
            <li><span className="include-icon">🎬</span> 12 hours on-demand video</li>
            <li><span className="include-icon">📝</span> 15 articles and resources</li>
            <li><span className="include-icon">📄</span> 25 downloadable resources</li>
            <li><span className="include-icon">🔄</span> Full lifetime access</li>
            <li><span className="include-icon">📱</span> Access on mobile and TV</li>
            <li><span className="include-icon">🏆</span> Certificate of completion</li>
          </ul>
        </div>
        <div className="course-tags">
          <span className="tag">Bestseller</span>
          <span className="tag">Hot & New</span>
        </div>
      </div>
      
      {/* Course tabs */}
      <div className="course-tabs">
        <div className="tabs-header">
          <button 
            className={activeTab === 'overview' ? 'active' : ''} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={activeTab === 'curriculum' ? 'active' : ''} 
            onClick={() => setActiveTab('curriculum')}
          >
            Curriculum
          </button>
          <button 
            className={activeTab === 'instructor' ? 'active' : ''} 
            onClick={() => setActiveTab('instructor')}
          >
            Instructor
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <h3>About This Course</h3>
              <p>{course.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis molestie dolor. Vivamus feugiat sapien vel purus hendrerit, in commodo neque congue. Phasellus sit amet est sapien. Nullam at nisi quis nunc gravida hendrerit.</p>
              
              <h3>What You'll Learn</h3>
              <ul className="learning-objectives">
                <li>Understand core concepts and principles in {course.category}</li>
                <li>Apply your knowledge to real-world projects and scenarios</li>
                <li>Master the latest tools and technologies in the field</li>
                <li>Build a portfolio of projects to showcase your skills</li>
                <li>Earn a certificate to demonstrate your expertise</li>
              </ul>
              
              <h3>Requirements</h3>
              <ul className="requirements-list">
                <li>Basic computer skills and internet connection</li>
                <li>No prior knowledge required - this course is suitable for beginners</li>
                <li>Enthusiasm and willingness to learn</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'curriculum' && (
            <div className="curriculum-tab">
              <h3>Course Content</h3>
              <p>12 sections • 45 lectures • 12h total length</p>
              
              <div className="course-section">
                <div className="section-header">
                  <h4>Section 1: Introduction</h4>
                  <span>3 lectures • 45min</span>
                </div>
                <div className="section-content">
                  <div className="lecture">
                    <div className="lecture-left">
                      <span className="lecture-icon">🎬</span>
                      <span className="lecture-title">Welcome to the Course</span>
                    </div>
                    <span className="lecture-duration">10:30</span>
                  </div>
                  <div className="lecture">
                    <div className="lecture-left">
                      <span className="lecture-icon">🎬</span>
                      <span className="lecture-title">Course Overview</span>
                    </div>
                    <span className="lecture-duration">15:45</span>
                  </div>
                  <div className="lecture">
                    <div className="lecture-left">
                      <span className="lecture-icon">📝</span>
                      <span className="lecture-title">Setting Up Your Environment</span>
                    </div>
                    <span className="lecture-duration">18:20</span>
                  </div>
                </div>
              </div>
              
              <div className="course-section">
                <div className="section-header">
                  <h4>Section 2: Fundamentals</h4>
                  <span>5 lectures • 1h 30min</span>
                </div>
                <div className="section-content">
                  <div className="lecture">
                    <div className="lecture-left">
                      <span className="lecture-icon">🎬</span>
                      <span className="lecture-title">Core Concepts</span>
                    </div>
                    <span className="lecture-duration">22:15</span>
                  </div>
                  <div className="lecture">
                    <div className="lecture-left">
                      <span className="lecture-icon">🎬</span>
                      <span className="lecture-title">Essential Tools</span>
                    </div>
                    <span className="lecture-duration">18:30</span>
                  </div>
                  <div className="lecture preview">
                    <div className="lecture-left">
                      <span className="lecture-icon">🎬</span>
                      <span className="lecture-title">Getting Started - Free Preview</span>
                    </div>
                    <span className="lecture-duration">20:45</span>
                  </div>
                </div>
              </div>
              
              <div className="show-more">
                <button>Show More</button>
              </div>
            </div>
          )}
          
          {activeTab === 'instructor' && (
            <div className="instructor-tab">
              <div className="instructor-profile">
                <div className="instructor-image">
                  <div className="profile-placeholder">
                    {course.instructor.charAt(0)}
                  </div>
                </div>
                <div className="instructor-info">
                  <h3>{course.instructor}</h3>
                  <p className="instructor-title">Expert in {course.category}</p>
                  <div className="instructor-stats">
                    <div className="stat">
                      <span className="stat-icon">⭐</span>
                      <span className="stat-value">4.8 Instructor Rating</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">👨‍🎓</span>
                      <span className="stat-value">12,350 Students</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">🎓</span>
                      <span className="stat-value">15 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="instructor-bio">
                <h3>About the Instructor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent eu quam eu urna fringilla ultrices. Nullam id magna in velit feugiat faucibus. Proin eu hendrerit odio, vel tempus nisl.</p>
                <p>Praesent condimentum mauris vel ex ultrices, non sagittis purus tincidunt. Vivamus molestie felis vitae massa rutrum, a tempor tellus sagittis. Donec vel risus ac mi imperdiet pharetra. Vestibulum eleifend lacinia nibh, eu convallis purus facilisis a.</p>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="reviews-tab">
              <div className="reviews-summary">
                <div className="rating-overview">
                  <div className="rating-number">{course.rating}</div>
                  <div className="rating-stars">
                    {'★'.repeat(Math.floor(course.rating))}
                    {'☆'.repeat(5 - Math.floor(course.rating))}
                  </div>
                  <div className="total-reviews">Course Rating • {course.students} reviews</div>
                </div>
                
                <div className="rating-bars">
                  <div className="rating-bar">
                    <span className="bar-label">5 stars</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: '75%' }}></div>
                    </div>
                    <span className="bar-percentage">75%</span>
                  </div>
                  <div className="rating-bar">
                    <span className="bar-label">4 stars</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: '20%' }}></div>
                    </div>
                    <span className="bar-percentage">20%</span>
                  </div>
                  <div className="rating-bar">
                    <span className="bar-label">3 stars</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: '3%' }}></div>
                    </div>
                    <span className="bar-percentage">3%</span>
                  </div>
                  <div className="rating-bar">
                    <span className="bar-label">2 stars</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: '1%' }}></div>
                    </div>
                    <span className="bar-percentage">1%</span>
                  </div>
                  <div className="rating-bar">
                    <span className="bar-label">1 star</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: '1%' }}></div>
                    </div>
                    <span className="bar-percentage">1%</span>
                  </div>
                </div>
              </div>
              
              <div className="user-reviews">
                <h3>Reviews</h3>
                <div className="review">
                  <div className="review-user">
                    <div className="user-avatar">S</div>
                    <div className="user-info">
                      <h4>Sarah L.</h4>
                      <div className="review-meta">
                        <span className="review-stars">★★★★★</span>
                        <span className="review-date">3 months ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>This course was exactly what I needed! The instructor explains complex concepts in an easy-to-understand way. I've already applied what I learned to my current project.</p>
                  </div>
                </div>
                
                <div className="review">
                  <div className="review-user">
                    <div className="user-avatar">M</div>
                    <div className="user-info">
                      <h4>Michael T.</h4>
                      <div className="review-meta">
                        <span className="review-stars">★★★★☆</span>
                        <span className="review-date">1 month ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>Great course with lots of practical examples. Would have liked more advanced topics towards the end, but overall very satisfied with the content.</p>
                  </div>
                </div>
                
                <div className="show-more-reviews">
                  <button>Show More Reviews</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage; 