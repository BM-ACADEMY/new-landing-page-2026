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
      { threshold: 0.14 }
    );

    const elements = containerRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// real students, real Google reviews</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          What our students say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-[0.92rem] text-white leading-normal">
              "B.A. graduate, working a retail job for ₹9,000/month. After finishing the Digital Marketing Pro program, I got hired as a digital marketer at an agency within 2 months — salary tripled."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— DM Pro Alumni, Pondicherry</div>
          </div>
          
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-[0.92rem] text-white leading-normal">
              "Good place to upgrade skills. The hands-on projects made the difference compared to free online tutorials."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— Google Review</div>
          </div>

          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-[0.92rem] text-white leading-normal">
              "The trainers and team were very supportive and guided me throughout the course and even during interview preparation."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— Google Review</div>
          </div>
        </div>
      </div>
    </section>
  );
}
