import React from 'react';
import '../styles/StudentsPage.css';

function StudentsPage() {
  const students = [
    { id: 1, name: 'Saad Khan' },
    { id: 2, name: 'Urooj Zaheer' },
    { id: 3, name: 'Adan Fatima' },
    { id: 4, name: 'Umaima Javed' }
  ];

  return (
    <div className="students-page container">
      <h1>Our Students</h1>
      <div className="students-list">
        {students.map(student => (
          <div className="student-card" key={student.id}>
            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>
            <h3>{student.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPage; 