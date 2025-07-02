import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';
import ContactForm from './components/ConForm';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import HappyClients from './components/HappyClients';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/why" element={<WhyChooseUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/happy" element={<HappyClients />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
