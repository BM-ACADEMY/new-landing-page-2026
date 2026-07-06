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
import Footer from './Footer';
import MobileCTA from './MobileCTA';
import MapSection from './MapSection';
import FloatingWhatsApp from '../digital-marketing/FloatingWhatsApp';

export default function WordpressPro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set document meta
    document.title = "WordPress Website Building Course in Pondicherry | No Coding — BM Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn to build professional WordPress websites in 8 weeks — no coding required. Charge ₹15,000–₹25,000 per client project. Free 1:1 demo at BM Academy, Kottakuppam, Pondicherry.');
    }

    // Meta Pixel and Google Analytics PageView Tracking
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.gtag) {
      window.gtag('config', 'G-102MXGE3GQ', {
        page_path: window.location.pathname,
        page_title: 'WordPress Pro Landing Page'
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bg-dark text-text-brand pb-[74px] sm:pb-0 relative font-inter">
      <Header onBookClick={openModal} />
      <Trustbar />
      <Hero onBookClick={openModal} />
      <Fears />
      <Skills />
      <About />
      <Guarantee />
      <Tracks onBookClick={openModal} />
      <Certificate />
      <LiveStatus />
      <Transformation />
      <Testimonials />
      <FAQ />
      <BookDemo isModal={false} />
      <FinalCTA onBookClick={openModal} />
      <MapSection />
      <Footer />
      <MobileCTA onBookClick={openModal} />

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[560px] select-none">
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-panel border border-white/20">
              <BookDemo isModal={true} onClose={closeModal} />
            </div>
          </div>
        </div>
      )}

      <FloatingWhatsApp />
    </div>
  );
}
