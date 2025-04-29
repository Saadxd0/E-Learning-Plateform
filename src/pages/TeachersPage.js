import React, { useState } from 'react';
import '../styles/TeachersPage.css';

const TeachersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Teacher data (in a real app, this would come from an API)
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      experience: '15 years',
      education: 'Ph.D in Mathematics, Princeton University',
      image: 'https://img.freepik.com/free-photo/portrait-female-teacher-white_114579-89479.jpg',
      bio: 'Dr. Johnson specializes in advanced calculus and has published numerous research papers on mathematical theory. She brings complex concepts to life through interactive learning.',
      expertise: ['Calculus', 'Algebra', 'Statistics', 'Mathematical Modeling'],
      category: 'math'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      subject: 'Computer Science',
      experience: '12 years',
      education: 'MSc in Computer Science, MIT',
      image: 'https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg',
      bio: 'Professor Chen is a former software engineer at Google who now dedicates his time to teaching the next generation of coders. He specializes in algorithms and data structures.',
      expertise: ['Python', 'Java', 'Data Structures', 'Algorithms', 'Web Development'],
      category: 'tech'
    },
    {
      id: 3,
      name: 'Dr. Amelia Patel',
      subject: 'Biology',
      experience: '10 years',
      education: 'Ph.D in Molecular Biology, Stanford University',
      image: 'https://img.freepik.com/free-photo/woman-lab-coat-science-education_23-2148980331.jpg',
      bio: 'Dr. Patel combines lab work with theoretical teaching to give students a complete understanding of biological concepts. Her research focuses on cellular regeneration.',
      expertise: ['Molecular Biology', 'Genetics', 'Cell Biology', 'Biochemistry'],
      category: 'science'
    },
    {
      id: 4,
      name: 'Prof. James Wilson',
      subject: 'English Literature',
      experience: '20 years',
      education: 'Ph.D in English Literature, Oxford University',
      image: 'https://img.freepik.com/free-photo/happy-young-man-student-holding-notebooks-smiling-street_1298-4102.jpg',
      bio: 'Professor Wilson is a published author and literary critic. His classes explore the depths of classic and contemporary literature, with a focus on critical analysis.',
      expertise: ['Classical Literature', 'Poetry', 'Creative Writing', 'Literary Analysis'],
      category: 'humanities'
    },
    {
      id: 5,
      name: 'Ms. Emily Rodriguez',
      subject: 'History',
      experience: '8 years',
      education: 'MA in History, Columbia University',
      image: 'https://img.freepik.com/free-photo/medium-shot-woman-holding-tablet_23-2149074200.jpg',
      bio: 'Ms. Rodriguez makes history come alive through interactive lessons and virtual field trips. She specializes in world history and cultural studies.',
      expertise: ['World History', 'American History', 'Cultural Studies', 'Historical Research'],
      category: 'humanities'
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      subject: 'Physics',
      experience: '17 years',
      education: 'Ph.D in Theoretical Physics, Caltech',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      bio: "Dr. Kim's teaching philosophy centers on practical demonstrations of complex physical concepts. He previously worked on particle physics research at CERN.",
      expertise: ['Quantum Mechanics', 'Thermodynamics', 'Nuclear Physics', 'Astrophysics'],
      category: 'science'
    }
  ];

  // Filter teachers based on active filter
  const filteredTeachers = activeFilter === 'all' 
    ? teachers 
    : teachers.filter(teacher => teacher.category === activeFilter);

  return (
    <div className="teachers-page">
      <div className="teachers-hero">
        <h1>Meet Our Expert Teachers</h1>
        <p>Learn from the best in their fields with decades of combined experience</p>
      </div>

      <div className="teachers-content">
        <div className="teachers-intro">
          <h2>Exceptional Educators, Outstanding Results</h2>
          <p>
            At EduConnect, we pride ourselves on our team of dedicated educators who bring both academic excellence and real-world experience to the classroom. Our teachers are passionate about their subjects and committed to helping every student reach their full potential.
          </p>
          <p>
            With advanced degrees from prestigious institutions and years of teaching experience, our faculty provides the perfect balance of theoretical knowledge and practical application. Whether you're looking to excel in mathematics, explore the sciences, master a language, or dive into the humanities, our teachers will guide your educational journey with expertise and enthusiasm.
          </p>
        </div>

        <div className="filter-section">
          <h3>Filter by Subject Area:</h3>
          <div className="filter-buttons">
            <button 
              className={activeFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveFilter('all')}
            >
              All Teachers
            </button>
            <button 
              className={activeFilter === 'math' ? 'active' : ''} 
              onClick={() => setActiveFilter('math')}
            >
              Mathematics
            </button>
            <button 
              className={activeFilter === 'science' ? 'active' : ''} 
              onClick={() => setActiveFilter('science')}
            >
              Sciences
            </button>
            <button 
              className={activeFilter === 'tech' ? 'active' : ''} 
              onClick={() => setActiveFilter('tech')}
            >
              Technology
            </button>
            <button 
              className={activeFilter === 'humanities' ? 'active' : ''} 
              onClick={() => setActiveFilter('humanities')}
            >
              Humanities
            </button>
          </div>
        </div>

        <div className="teachers-grid">
          {filteredTeachers.map(teacher => (
            <div className="teacher-card" key={teacher.id}>
              <div className="teacher-image">
                <img src={teacher.image} alt={teacher.name} />
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <h4>{teacher.subject}</h4>
                <p className="teacher-exp"><strong>Experience:</strong> {teacher.experience}</p>
                <p className="teacher-edu"><strong>Education:</strong> {teacher.education}</p>
                <p className="teacher-bio">{teacher.bio}</p>
                <div className="teacher-expertise">
                  <h5>Areas of Expertise:</h5>
                  <ul>
                    {teacher.expertise.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
                <button className="contact-teacher-btn">Contact Teacher</button>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team-section">
          <h2>Join Our Teaching Team</h2>
          <p>Are you passionate about education and want to make a difference in students' lives? We're always looking for talented educators to join our team.</p>
          <button className="join-team-btn">View Open Positions</button>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage; 