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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// who we are</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          About BM Academy
        </h2>
        
        <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px] mt-9">
          <p className="text-[#DAD4EC] text-[0.98rem] mb-3">
            BM Academy is a Digital Marketing, Full Stack Development, IT &amp; Skill Training Institute based in Kottakuppam, Vanur, Puducherry, and part of <b className="text-white">ABM Groups</b>. We are rated <b className="text-white">4.9★ on Google</b> from 35+ verified reviews, with 1,400+ students trained and 150+ students placed in jobs.
          </p>
          <p className="text-[#DAD4EC] text-[0.98rem] mb-0">
            Our approach is hands-on: students learn by running real campaigns, building real websites, and working on live projects — not by sitting through theory-only lectures. We also offer Full Stack Development, Video Editing, Data Analytics, AI, and Government Exam Coaching programs at the same campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg">
              K
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">Kamar</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Lead Trainer, Digital Marketing</span>
              <p className="text-muted-brand text-[0.86rem]">Runs the "Learn with Kamar" program — practical, campaign-first training focused on real client work, not just theory.</p>
            </div>
          </div>
          
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg">
              BM
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">BM Academy Faculty Team</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Industry Practitioners</span>
              <p className="text-muted-brand text-[0.86rem]">Trainers with hands-on agency and freelance experience in ads, SEO, and AI tools, mentoring every batch personally.</p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex flex-wrap gap-3">
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold">🏢 ABM Groups</span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold">📜 Certificate of Completion</span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold">💼 Placement Assistance</span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold">🎓 Hands-on Live Projects</span>
        </div>
      </div>
    </section>
  );
}
