import React, { useState, useEffect } from 'react';
import Header from './Header';
import Trustbar from './Trustbar';
import Hero from './Hero';
import Fears from './Fears';
import Skills from './Skills';
import About from './About';
import Guarantee from './Guarantee';
import Tracks from './Tracks';
import Certificate from './Certificate';
import LiveStatus from './LiveStatus';
import Transformation from './Transformation';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import BookDemo from './BookDemo';
import FinalCTA from './FinalCTA';
import Map from './Map';
import Footer from './Footer';
import MobileCTA from './MobileCTA';

export default function DigitalMarketing() {
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
    const bookSection = document.getElementById('book');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text-brand pb-[74px] sm:pb-0 relative font-inter">
      <Header />
      <Trustbar />
      <Hero />
      <Fears />
      <Skills />
      <About />
      <Guarantee />
      <Tracks onSelectProgram={handleSelectProgram} />
      <Certificate />
      <LiveStatus />
      <Transformation />
      <Testimonials />
      <FAQ />
      <BookDemo selectedProgram={selectedProgram} />
      <FinalCTA />
      <Map />
      <Footer />
      <MobileCTA />
    </div>
  );
}
