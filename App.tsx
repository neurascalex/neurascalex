
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Platform from './pages/Platform';
import HowItWorks from './pages/HowItWorks';
import Safety from './pages/Safety';
import FreeTrial from './pages/FreeTrial';
import Demo from './pages/Demo';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
