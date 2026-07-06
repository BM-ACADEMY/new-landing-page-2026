import React, { useEffect, useRef } from 'react';

export default function About() {
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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// who we are</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white reveal">
          About BM Academy
        </h2>

        <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px] mt-9">
          <p className="text-[#DAD4EC] text-[0.98rem] mb-3 leading-relaxed">
            BM Academy is a Digital Marketing, Full Stack Development, IT &amp; Skill Training Institute based in Kottakuppam, Vanur, Puducherry, and part of <b className="text-green-brand">ABM Groups</b>. We are rated <b className="text-green-brand">4.9★ on Google</b> from 35+ verified reviews, with 1,400+ students trained and 150+ students placed in jobs.
          </p>
          <p className="text-[#DAD4EC] text-[0.98rem] leading-relaxed mb-0">
            Our approach is hands-on: students learn by running real campaigns, building real websites, and working on live projects — not by sitting through theory-only lectures. We also offer Full Stack Development, Video Editing, Data Analytics, AI, and Government Exam Coaching programs at the same campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-[1.1rem]">
              F
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">Full Stack Lead Trainer</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Full Stack Lead Trainer</span>
              <p className="text-muted-brand text-[0.86rem] leading-relaxed">Working developer with real product-building and freelance project experience.</p>
            </div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-[1.1rem]">
              BM
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">BM Academy Faculty Team</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">BM Academy Faculty Team</span>
              <p className="text-muted-brand text-[0.86rem] leading-relaxed">Practitioners mentoring every batch through live coding projects, not just theory.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
