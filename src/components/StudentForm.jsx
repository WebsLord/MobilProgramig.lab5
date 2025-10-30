import React, { useState } from 'react';

function StudentForm({ onAdd, students }) {
  // Formun kendi state'leri (Controlled Inputs)
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState(null); // Validasyon hataları için

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Hata mesajını her submit'te temizle

    // Milestone 2 Validasyonları
    if (name.trim() === '') {
      setError('Student name cannot be empty.');
      return;
    }

    const gradeNum = Number(grade);
    if (grade.trim() === '' || isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100) {
      setError('Grade must be a number between 0 and 100.');
      return;
    }

    // M2 Edge Case: İsim kontrolü (case-insensitive)
    const nameExists = students.some(
      (student) => student.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (nameExists) {
      setError('A student with this name already exists.');
      return;
    }

    // Validasyon başarılıysa, App.jsx'teki onAdd fonksiyonunu çağır
    onAdd({
      id: Date.now(),
      name: name.trim(),
      grade: gradeNum,
    });

    // Formu temizle
    setName('');
    setGrade('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Grade (0-100)"
        className="input input-grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit" className="btn">Add Student</button>
      
      {/* Validasyon hatası varsa göster */}
      {error && <span className="form-error">{error}</span>}
    </form>
  );
}

export default StudentForm;