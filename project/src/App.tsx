import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import FutureGoals from './components/FutureGoals';
import Hobbies from './components/Hobbies';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <FutureGoals />
      <Hobbies />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;