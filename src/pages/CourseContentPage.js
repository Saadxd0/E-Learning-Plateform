import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseContentPage.css';

// Sample courses data - in a real app, this would come from an API or context
import { coursesData } from '../data/coursesData';

// Sample course content data
const sampleLectures = [
  {
    id: 1,
    title: 'Introduction to the Course',
    duration: '10:30',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: true
  },
  {
    id: 2,
    title: 'Getting Started with the Basics',
    duration: '15:45',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: true
  },
  {
    id: 3,
    title: 'Core Concepts Overview',
    duration: '18:20',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: false
  },
  {
    id: 4,
    title: 'Quiz: Testing Your Knowledge',
    duration: '10:00',
    type: 'quiz',
    completed: false
  },
  {
    id: 5,
    title: 'Advanced Techniques',
    duration: '22:15',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: false
  },
  {
    id: 6,
    title: 'Practical Application',
    duration: '25:10',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: false
  },
  {
    id: 7,
    title: 'Project Setup',
    duration: '15:30',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    completed: false
  },
  {
    id: 8,
    title: 'Assignment: Create Your First Project',
    duration: '30:00',
    type: 'assignment',
    completed: false
  }
];

function CourseContentPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [progress, setProgress] = useState(0);
  const [notes, setNotes] = useState('');
  const [lectures, setLectures] = useState([]);
  
  useEffect(() => {
    // Find the course with the matching ID
    const foundCourse = coursesData.find(c => c.id === parseInt(courseId));
    setCourse(foundCourse);
    
    // Set lectures - in a real app, this would be fetched from an API
    setLectures(sampleLectures);
    
    // Set the current lecture to the first lecture or the first incomplete lecture
    const firstIncompleteLecture = sampleLectures.find(lecture => !lecture.completed);
    const lectureToSet = firstIncompleteLecture || sampleLectures[0];
    setCurrentLecture(lectureToSet);
    
    // Calculate progress
    const completedCount = sampleLectures.filter(lecture => lecture.completed).length;
    const progressPercentage = Math.round((completedCount / sampleLectures.length) * 100);
    setProgress(progressPercentage);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [courseId]);
  
  const handleLectureClick = (lecture) => {
    setCurrentLecture(lecture);
  };
  
  const markAsComplete = () => {
    // Update the current lecture's completed status
    const updatedLectures = lectures.map(lecture => 
      lecture.id === currentLecture.id ? { ...lecture, completed: true } : lecture
    );
    
    setLectures(updatedLectures);
    
    // Calculate new progress
    const completedCount = updatedLectures.filter(lecture => lecture.completed).length;
    const progressPercentage = Math.round((completedCount / updatedLectures.length) * 100);
    setProgress(progressPercentage);
    
    // Automatically move to the next lecture if available
    const currentIndex = lectures.findIndex(lecture => lecture.id === currentLecture.id);
    if (currentIndex < lectures.length - 1) {
      setCurrentLecture(lectures[currentIndex + 1]);
    }
  };
  
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };
  
  const saveNotes = () => {
    // In a real app, this would save notes to a database
    alert('Notes saved successfully!');
  };
  
  if (!course || !currentLecture) {
    return <div className="loading">Loading course content...</div>;
  }
  
  return (
    <div className="course-content-page">
      <div className="content-sidebar">
        <div className="course-info">
          <h2>{course.title}</h2>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-text">{progress}% complete</span>
          </div>
        </div>
        
        <div className="lectures-list">
          <h3>Course Content</h3>
          {lectures.map(lecture => (
            <div 
              key={lecture.id} 
              className={`lecture-item ${lecture.id === currentLecture.id ? 'active' : ''} ${lecture.completed ? 'completed' : ''}`}
              onClick={() => handleLectureClick(lecture)}
            >
              <div className="lecture-info">
                <div className="lecture-icon">
                  {lecture.type === 'video' && '🎬'}
                  {lecture.type === 'quiz' && '❓'}
                  {lecture.type === 'assignment' && '📝'}
                </div>
                <div className="lecture-details">
                  <span className="lecture-title">{lecture.title}</span>
                  <span className="lecture-duration">{lecture.duration}</span>
                </div>
              </div>
              {lecture.completed && <span className="completion-status">✓</span>}
            </div>
          ))}
        </div>
      </div>
      
      <div className="content-main">
        <div className="video-container">
          {currentLecture.type === 'video' ? (
            <iframe 
              src={currentLecture.videoUrl} 
              title={currentLecture.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="non-video-content">
              <h3>{currentLecture.type === 'quiz' ? 'Quiz' : 'Assignment'}</h3>
              <p>
                {currentLecture.type === 'quiz' 
                  ? 'This is a quiz to test your knowledge on the concepts covered so far.' 
                  : 'Complete this assignment to practice the skills you\'ve learned.'}
              </p>
              <button className="start-btn">
                {currentLecture.type === 'quiz' ? 'Start Quiz' : 'View Assignment'}
              </button>
            </div>
          )}
        </div>
        
        <div className="lecture-details-panel">
          <h2>{currentLecture.title}</h2>
          <div className="action-buttons">
            {!currentLecture.completed && (
              <button className="complete-btn" onClick={markAsComplete}>
                Mark as Complete
              </button>
            )}
            <button className="download-btn">
              Download Resources
            </button>
          </div>
          
          <div className="notes-section">
            <h3>Your Notes</h3>
            <textarea 
              value={notes}
              onChange={handleNotesChange}
              placeholder="Take notes here..."
              rows="6"
            ></textarea>
            <button className="save-notes-btn" onClick={saveNotes}>
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContentPage; 