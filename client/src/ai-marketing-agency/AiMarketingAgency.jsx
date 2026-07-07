import React, { useEffect, useState } from 'react';
import './AiMarketingAgency.css';
import Header from './Header';
import Hero from './Hero';
import Pillars from './Pillars';
import Moat from './Moat';
import Income from './Income';
import NoTeam from './NoTeam';
import Curriculum from './Curriculum';
import Tools from './Tools';
import Bonus from './Bonus';
import Roadmap from './Roadmap';
import Offer from './Offer';
import Who from './Who';
import Testimonial from './Testimonial';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import MobileCTA from './MobileCTA';
import WebinarForm from './WebinarForm';

export default function AiMarketingAgency() {
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false);
  useEffect(() => {
    // Set document meta
    document.title = "Build Your Own AI Marketing Agency in 90 Days | BM Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Learn AI tools, Meta & Google Ads, and client acquisition in 12 hands-on modules. Get mentorship till your first client. Free live webinar — register now"
      );
    }

    // Set font links
    const addLink = (href, rel, crossOrigin = false) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.href = href;
        link.rel = rel;
        if (crossOrigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    };
    
    addLink('https://fonts.googleapis.com', 'preconnect');
    addLink('https://fonts.gstatic.com', 'preconnect', true);
    addLink('https://fonts.googleapis.com/css2?family=Anton&family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@500;600;700&display=swap', 'stylesheet');

    // Scroll reveal logic
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

  const handleRegister = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsWebinarModalOpen(true);
  };

  const closeWebinarModal = () => {
    setIsWebinarModalOpen(false);
  };

  return (
    <div className="aimarketing-page">
      <Header onRegister={handleRegister} />
      <Hero onRegister={handleRegister} />
      <Pillars />
      <Moat />
      <Income />
      <NoTeam />
      <Curriculum />
      <Tools />
      <Bonus />
      <Roadmap />
      <Offer onRegister={handleRegister} />
      <Who />
      <Testimonial />
      <FAQ />
      <FinalCTA onRegister={handleRegister} />
      <Footer />
      <MobileCTA onRegister={handleRegister} />

      {isWebinarModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={closeWebinarModal}
          />
          <div className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-2xl z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <WebinarForm isModal={true} onClose={closeWebinarModal} />
          </div>
        </div>
      )}
    </div>
  );
}
