import React, { useState, useEffect } from 'react';
import Header from './Header';
import Trustbar from './Trustbar';
import Hero from './Hero';
import WebinarSection from './WebinarSection';
import Fears from './Fears';
import Skills from './Skills';
import About from './About';
import Roadmap from './Roadmap';
import Guarantee from './Guarantee';
import Tracks from './Tracks';
import Certificate from './Certificate';
import SampleCertificate from './SampleCertificate';
// import LiveStatus from './LiveStatus';
// import Transformation from './Transformation';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import BookDemo from './BookDemo';
import WebinarForm from './WebinarForm';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import MobileCTA from './MobileCTA';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function DigitalMarketing() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false);

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenWebinarModal = () => {
    setIsWebinarModalOpen(true);
  };

  useEffect(() => {
    // Meta Pixel and Google Analytics PageView Tracking
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.gtag) {
      window.gtag('config', 'G-102MXGE3GQ', {
        page_path: window.location.pathname,
        page_title: 'Digital Marketing Landing Page'
      });
    }

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
      <Header onBookClick={handleOpenWebinarModal} />
      <Trustbar />
      <Hero onBookClick={handleOpenWebinarModal} />
      <Fears />
      <Skills />
      <About />
      <WebinarSection onBookClick={handleOpenWebinarModal} />
      <Roadmap />
      <SampleCertificate />
      <Tracks onSelectProgram={handleSelectProgram} />
      <Guarantee />
      <Certificate />
      {/* <LiveStatus /> */}
      {/* <Transformation /> */}
      <Testimonials />
      <FAQ />
      <BookDemo selectedProgram={selectedProgram} />
      <FinalCTA onBookClick={handleOpenWebinarModal} />
      <Footer onBookClick={handleOpenModal} />
      <MobileCTA onBookClick={handleOpenWebinarModal} />
      <FloatingWhatsApp />

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[560px] select-none">
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-panel border border-white/20">
              <BookDemo selectedProgram={selectedProgram} isModal={true} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Webinar Modal Overlay */}
      {isWebinarModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[560px] select-none">
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-panel border border-white/20">
              <WebinarForm isModal={true} onClose={() => setIsWebinarModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
