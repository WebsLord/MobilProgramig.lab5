import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, onDelete }) {
  
  // Milestone 3.2: Empty State
  if (students.length === 0) {
    return (
      <p className="no-data">No students yet - use the form above.</p>
    );
  }

  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem
          key={student.id} // Milestone 5: Key !!!
          student={student}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default StudentList;