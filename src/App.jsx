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

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
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
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
