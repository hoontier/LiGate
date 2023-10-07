//App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProfRegister } from './pages/ProfRegister';
import { StuRegister } from './pages/StuRegister'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/professor-register" element={<ProfRegister />} />
        <Route path="/student-register" element={<StuRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
