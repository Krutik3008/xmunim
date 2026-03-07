import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll handler for routes and sections
const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionIds = ['features', 'security', 'showcase'];
    const sectionId = pathname.substring(1); // Remove leading slash

    if (sectionIds.includes(sectionId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return;
      }
    }

    // Default scroll to top for regular pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main Landing Page content
const Home = () => (
  <main>
    <Hero />
    <Showcase />
    <TrustSection />
    <Features />
  </main>
);

function App() {
  return (
    <>
      <ScrollHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Home />} />
        <Route path="/security" element={<Home />} />
        <Route path="/showcase" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
