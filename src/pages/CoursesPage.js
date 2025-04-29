import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CoursesPage.css';

function CoursesPage() {
  const [filter, setFilter] = useState('all');
  
  // Sample courses data
  const allCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      category: 'Programming',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1253,
      price: 49.99,
      image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      description: 'Learn the core fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners looking to start their journey in web development.'
    },
    {
      id: 2,
      title: 'Data Science for Beginners',
      category: 'Data Science',
      instructor: 'Jane Smith',
      rating: 4.7,
      students: 845,
      price: 59.99,
      image: 'https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-5296.jpg',
      description: 'Master the basics of data science, statistics, and machine learning. Learn how to analyze data and extract meaningful insights using Python and popular data science libraries.'
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      category: 'Marketing',
      instructor: 'Mike Johnson',
      rating: 4.9,
      students: 1845,
      price: 44.99,
      image: 'https://img.freepik.com/free-vector/digital-marketing-concept-with-people-scene_23-2148394189.jpg',
      description: 'Comprehensive guide to digital marketing strategies, SEO, social media marketing, and content creation. Learn how to promote products and services online effectively.'
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      category: 'Programming',
      instructor: 'Emma Wilson',
      rating: 4.6,
      students: 632,
      price: 54.99,
      image: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg',
      description: 'Build cross-platform mobile applications using React Native. Create beautiful, responsive mobile apps that work on both iOS and Android from a single codebase.'
    },
    {
      id: 5,
      title: 'UX/UI Design Principles',
      category: 'Design',
      instructor: 'Alex Turner',
      rating: 4.8,
      students: 1105,
      price: 49.99,
      image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
      description: 'Learn essential principles of user experience and interface design. Master tools like Figma and Adobe XD to create stunning user interfaces.'
    },
    {
      id: 6,
      title: 'Advanced Python Programming',
      category: 'Programming',
      instructor: 'Robert Chen',
      rating: 4.9,
      students: 1523,
      price: 64.99,
      image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
      description: 'Take your Python skills to the next level. Learn advanced concepts including decorators, generators, multithreading, and how to build robust applications.'
    },
    {
      id: 7,
      title: 'Social Media Marketing',
      category: 'Marketing',
      instructor: 'Lisa Johnson',
      rating: 4.6,
      students: 932,
      price: 39.99,
      image: 'https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg',
      description: 'Master the art of social media marketing across platforms like Instagram, Facebook, Twitter, and LinkedIn. Learn how to grow your audience and increase engagement.'
    },
    {
      id: 8,
      title: 'Artificial Intelligence Fundamentals',
      category: 'Data Science',
      instructor: 'David Miller',
      rating: 4.7,
      students: 1287,
      price: 69.99,
      image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-1188.jpg',
      description: 'Introduction to AI concepts, machine learning algorithms, neural networks, and practical applications of artificial intelligence in the real world.'
    }
  ];

  // Filter courses based on category
  const filteredCourses = filter === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === filter);

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <h1>Explore Our Courses</h1>
        <p>Discover a wide range of courses to enhance your skills and advance your career</p>
      </div>
      
      <div className="courses-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All Courses
        </button>
        <button 
          className={filter === 'Programming' ? 'active' : ''} 
          onClick={() => setFilter('Programming')}
        >
          Programming
        </button>
        <button 
          className={filter === 'Data Science' ? 'active' : ''} 
          onClick={() => setFilter('Data Science')}
        >
          Data Science
        </button>
        <button 
          className={filter === 'Marketing' ? 'active' : ''} 
          onClick={() => setFilter('Marketing')}
        >
          Marketing
        </button>
        <button 
          className={filter === 'Design' ? 'active' : ''} 
          onClick={() => setFilter('Design')}
        >
          Design
        </button>
      </div>
      
      <div className="courses-container">
        {filteredCourses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-category">{course.category}</div>
              <div className="course-price">${course.price}</div>
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
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
              <div className="course-actions">
                <Link to={`/course/${course.id}`} className="view-course-btn">View Course</Link>
                <Link to={`/course/${course.id}/enroll`} className="enroll-btn">Enroll Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage; 