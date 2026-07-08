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
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center mb-4 reveal">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#f7367a]">// Certificate</span>
        </h2>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center mb-8 reveal">
          Sample Certificate
        </h2>
        <div className="reveal overflow-hidden rounded-2xl">
          <img
            src="/images/Certificate.webp"
            alt="Sample Certificate"
            className="w-full max-w-[700px] h-auto object-cover transition-transform duration-300  mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
