import React, { useState } from 'react';
import './styles/lab-styles.css'; // CSS'i import et

// Import edeceğin bileşenler (henüz oluşturmadık ama yazalım)
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

// Milestone 1'de istenen başlangıç verisi
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  // Milestone 2'de bu state'i kullanacağız, şimdilik listeyi doğrudan pass'layalım
  // const [students, setStudents] = useState(initialStudents);

  return (
    <div className="app">
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>

      {/* Milestone 2'de bu bileşeni dolduracağız */}
      <StudentForm />
      
      {/* Milestone 4'te bu bileşeni dolduracağız */}
      <StudentControls />

      {/* Milestone 1: Statik listeyi prop olarak gönder */}
      <StudentList students={initialStudents} />
    </div>
  );
}

export default App;