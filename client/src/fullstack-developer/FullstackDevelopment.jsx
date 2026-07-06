import React, { useState, useEffect } from 'react';
import Header from './Header';
import Trustbar from './Trustbar';
import Hero from './Hero';
import Fears from './Fears';
import Skills from './Skills';
import About from './About';
import WebinarSection from './WebinarSection';
import WebinarForm from './WebinarForm';
import Guarantee from './Guarantee';
import Tracks from './Tracks';
import Certificate from './Certificate';
import Transformation from './Transformation';
import SampleCertificate from './SampleCertificate';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import BookDemo from './BookDemo';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import MobileCTA from './MobileCTA';

import FloatingWhatsApp from '../digital-marketing/FloatingWhatsApp';

export default function FullstackDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  useEffect(() => {
    // Set document meta
    document.title = "Full Stack Developer Course in Pondicherry | Arts Degree OK — BM Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Become a job-ready Full Stack Developer in Pondicherry — no coding background required. Build real web apps with HTML, CSS, JS, React & Node. Placement support + 20% refund guarantee. Free 1:1 demo at BM Academy, Kottakuppam.');
    }

    // Meta Pixel and Google Analytics PageView Tracking
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.gtag) {
      window.gtag('config', 'G-102MXGE3GQ', {
        page_path: window.location.pathname,
        page_title: 'Full Stack Development Landing Page'
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

  const openModal = () => { setSelectedProgram(''); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);
  const openModalWithProgram = (program) => { setSelectedProgram(program); setIsModalOpen(true); };

  const openWebinarModal = () => setIsWebinarModalOpen(true);
  const closeWebinarModal = () => setIsWebinarModalOpen(false);

  return (
    <div className="min-h-screen bg-bg-dark text-text-brand pb-[74px] sm:pb-0 relative font-inter">
      <Header onBookClick={openWebinarModal} />
      <Trustbar />
      <Hero onBookClick={openWebinarModal} />
      <Fears />
      <Skills />
      <About />
      <WebinarSection onBookClick={openWebinarModal} />
      <Transformation />
      <SampleCertificate />
      <Tracks onBookClick={openModalWithProgram} />
      <Guarantee />
      <Certificate />
      <Testimonials />
      <FAQ />
      <BookDemo isModal={false} />
      <FinalCTA onBookClick={openWebinarModal} />

      <Footer />
      <MobileCTA onBookClick={openWebinarModal} />

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[560px] select-none">
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-panel border border-white/20">
              <BookDemo isModal={true} onClose={closeModal} selectedProgram={selectedProgram} />
            </div>
          </div>
        </div>
      )}

      {/* Webinar Modal Overlay */}
      {isWebinarModalOpen && (
        <div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[560px] select-none">
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-panel border border-white/20">
              <WebinarForm isModal={true} onClose={closeWebinarModal} />
            </div>
          </div>
        </div>
      )}

      <FloatingWhatsApp />
    </div>
  );
}

