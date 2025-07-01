import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';
import ContactForm from './components/contactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
