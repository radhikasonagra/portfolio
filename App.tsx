import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';

function App() {
  return (
    <div className="bg-darker text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <GeminiChat />
    </div>
  );
}

export default App;