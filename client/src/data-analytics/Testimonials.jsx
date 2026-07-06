import React, { useEffect, useRef } from 'react';

export default function Testimonials() {
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
      { threshold: 0.1 }
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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-left mb-2">// real students, real Google reviews</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-left text-white mb-9 reveal">
          What our students say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 font-bold text-[0.9rem] mb-2.5">★★★★★</div>
              <p className="text-[0.92rem] text-white leading-relaxed">
                "Commerce graduate working a data-entry job for ₹10,000/month. After the Data Analytics course, hired as a junior analyst within 6 weeks — at nearly double the salary."
              </p>
            </div>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">
              — DA Alumni, Pondicherry
            </div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 font-bold text-[0.9rem] mb-2.5">★★★★★</div>
              <p className="text-[0.92rem] text-white leading-relaxed">
                "Good place to upgrade skills. The hands-on dashboards made the difference compared to free online tutorials."
              </p>
            </div>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">
              — Google Review
            </div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 font-bold text-[0.9rem] mb-2.5">★★★★★</div>
              <p className="text-[0.92rem] text-white leading-relaxed">
                "The trainers and team were very supportive and guided me throughout the course and even during interview preparation."
              </p>
            </div>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">
              — Google Review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
