import React, { useEffect, useRef } from 'react';

export default function MapSection() {
  const containerRef = useRef(null);

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

    const currentRef = containerRef.current;
    const elements = currentRef ? currentRef.querySelectorAll('.reveal') : [];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// visit us</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white reveal">
          Find BM Academy on the map
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px] reveal">
          252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104
        </p>
        <div className="reveal mt-6 overflow-hidden rounded-2xl border border-white/9">
          <iframe
            src="https://maps.google.com/maps?q=BM%20Academy%20Digital%20Marketing%20Kottakuppam%20Puducherry&z=16&output=embed"
            width="100%" 
            height="320" 
            style={{ border: 0, display: 'block' }} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" 
            title="BM Academy location on Google Maps"
          ></iframe>
        </div>
        <a 
          className="inline-flex items-center justify-center gap-2.5 font-bold text-sm px-[26px] py-[15px] rounded-xl cursor-pointer border border-white/9 bg-transparent text-white transition-all duration-200 hover:border-pink-brand hover:text-pink-brand mt-4" 
          href="https://www.google.com/maps/place/BM+Academy+-+Digital+Marketing,+Full+Stack+Development,+IT+%26+Skill+Training+Institute" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Open in Google Maps →
        </a>
      </div>
    </section>
  );
}
