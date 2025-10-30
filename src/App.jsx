import React, { useState, useMemo } from 'react';
import './styles/lab-styles.css'; // CSS'i import etmeyi unutma

import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

// Başlangıç verisi
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
  { id: 4, name: 'Zeynep', grade: 92 },
  { id: 5, name: 'Budi', grade: 48 },
];

function App() {
  // --- Ana State'ler ---
  const [students, setStudents] = useState(initialStudents);
  
  // --- Milestone 4 State'leri ---
  const [filter, setFilter] = useState('all'); // 'all', 'pass', 'fail'
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (high->low) veya 'asc' (low->high)

  // --- Ana Fonksiyonlar ---

  // Milestone 2: Öğrenci Ekleme
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Milestone 3: Öğrenci Silme
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // --- Milestone 4: Türetilmiş Veri (Derived Data) ---
  // Bu, App render edildiğinde 'students' state'ine göre yeniden hesaplanır
  const visibleStudents = useMemo(() => {
    return students
      .filter((student) => {
        // 1. Filtreleme (Pass/Fail)
        if (filter === 'pass') return student.grade >= 60;
        if (filter === 'fail') return student.grade < 60;
        return true; // 'all' için
      })
      .filter((student) => {
        // 2. Arama (Search)
        return student.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        // 3. Sıralama (Sort)
        if (sortOrder === 'desc') {
          return b.grade - a.grade; // High -> Low
        } else {
          return a.grade - b.grade; // Low -> High
        }
      });
  }, [students, filter, searchTerm, sortOrder]); // Bu değerler değiştiğinde yeniden hesapla

  // Milestone 4.3: Arama sonucu boşsa gösterilecek özel mesaj
  const noMatches = students.length > 0 && visibleStudents.length === 0 && searchTerm !== '';

  return (
    <div className="app">
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>

      <StudentForm onAdd={addStudent} students={students} />
      
      <StudentControls
        // Filter state ve setter
        filter={filter}
        setFilter={setFilter}
        // Search state ve setter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        // Sort state ve setter
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Milestone 4.3: Arama sonucu için özel mesaj */}
      {noMatches ? (
        <p className="no-data">
          No students match "<em>{searchTerm}</em>"
        </p>
      ) : (
        /* Milestone 3.2: Liste boşsa özel mesaj (StudentList içinde halledildi) */
        <StudentList
          students={visibleStudents}
          onDelete={deleteStudent}
        />
      )}
    </div>
  );
}

export default App;