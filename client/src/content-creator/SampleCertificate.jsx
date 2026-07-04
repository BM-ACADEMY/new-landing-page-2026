import React, { useEffect, useRef } from 'react';

export default function SampleCertificate() {
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

    const elements = containerRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <div className="text-center mb-4 reveal">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// Certificate</span>
        </div>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center mb-8 reveal text-white">
          Sample Course Certificate
        </h2>
        <div className="reveal overflow-hidden rounded-2xl max-w-[700px] mx-auto border border-white/10">
          <img
            src="/images/contentcreator.webp"
            alt="Sample Course Certificate"
            className="w-full h-auto object-cover transition-transform duration-300 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
