
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ValueDetails from './components/ValueDetails';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import VisualEffects from './components/VisualEffects';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#050505';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fcfcfc';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-blue-500 selection:text-white transition-colors duration-500">
      {/* Background Visual Layer */}
      <VisualEffects isDarkMode={isDarkMode} />

      {/* Main Content Sections */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        <Logos />
        <ValueDetails />
        <Testimonials />
        <FooterCTA />
      </main>

      {/* Perspective Grid Enhancement */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#050505] to-transparent pointer-events-none z-40 transition-colors duration-500" />
    </div>
  );
};

export default App;
