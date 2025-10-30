import React from 'react';

function StudentItem({ student, onDelete }) {
  
  // Milestone 3: Pass/Fail 
  const passed = student.grade >= 60;
  
  // Dinamik class
  const itemClasses = `student-item ${passed ? 'student-pass' : 'student-fail'}`;

  return (
    <li className={itemClasses}>
      <div>
        <span className="student-name">{student.name}</span>
        <span className="student-grade">Grade: {student.grade}</span>
        {/* Milestone 3.1: Pass/Fail Statüsü */}
        <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
      </div>
      
      {/* Milestone 3.3: Silme Butonu */}
      <button
        className="delete-btn"
        onClick={() => onDelete(student.id)} // Tıklandığında onDelete'i ID ile çağır
      >
        Delete
      </button>
    </li>
  );
}

export default StudentItem;