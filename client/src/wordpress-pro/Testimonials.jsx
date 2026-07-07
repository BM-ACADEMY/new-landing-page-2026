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
    <section id="testimonials" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block mb-2">// real students, real Google reviews</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-white mt-3 mb-0 reveal">
          What our students say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 font-bold text-[0.9rem] mb-2.5">★★★★★</div>
              <p className="text-[0.92rem] text-white leading-relaxed">
                "College student with no technical background. After WordPress Pro, built 3 client websites in the first 2 months and earned more than a part-time job would have paid."
              </p>
            </div>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">
              — WP Pro Alumni, Pondicherry
            </div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 font-bold text-[0.9rem] mb-2.5">★★★★★</div>
              <p className="text-[0.92rem] text-white leading-relaxed">
                "Good place to upgrade skills. The hands-on client project made the difference compared to free online tutorials."
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
                "The trainers and team were very supportive and guided me throughout the course."
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
