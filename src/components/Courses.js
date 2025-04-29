import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

function Courses() {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      category: 'Programming',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1253,
      image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    },
    {
      id: 2,
      title: 'Data Science for Beginners',
      category: 'Data Science',
      instructor: 'Jane Smith',
      rating: 4.7,
      students: 845,
      image: 'https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-5296.jpg'
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      category: 'Marketing',
      instructor: 'Mike Johnson',
      rating: 4.9,
      students: 1845,
      image: 'https://img.freepik.com/free-vector/digital-marketing-concept-with-people-scene_23-2148394189.jpg'
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      category: 'Programming',
      instructor: 'Emma Wilson',
      rating: 4.6,
      students: 632,
      image: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg'
    }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="section-header">
        <h2>Popular Courses</h2>
        <p>Explore our most in-demand courses curated by industry experts</p>
      </div>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-category">{course.category}</div>
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="course-details">
                <div className="instructor">
                  <i className="instructor-icon">👨‍🏫</i>
                  <span>{course.instructor}</span>
                </div>
                <div className="rating">
                  <i className="star-icon">⭐</i>
                  <span>{course.rating} ({course.students})</span>
                </div>
              </div>
              <Link to={`/course/${course.id}`} className="enroll-btn">Enroll Now</Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all">
        <Link to="/courses" className="view-all-btn">View All Courses</Link>
      </div>
    </section>
  );
}

export default Courses; 