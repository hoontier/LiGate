// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store'; // Adjust the path as per your directory structure
import { LoginPage } from './pages/LoginPage';
import { RegisterAll } from './pages/RegisterAll';
import { HomePage } from './pages/HomePage';
import { RegisterProf } from './pages/RegisterProf';
import { RegisterStu } from './pages/RegisterStu';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-all" element={<RegisterAll />} />
          <Route path="/register-prof" element={<RegisterProf />} />
          <Route path="/register-stu" element={<RegisterStu />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
