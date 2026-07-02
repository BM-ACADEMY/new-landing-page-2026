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
            BM Academy is a Digital Marketing, Full Stack Development, IT &amp; Skill Training Institute based in Kottakuppam, Vanur, Puducherry, and part of <b className="text-green-brand">ABM Groups</b>. We are rated <b className="text-green-brand">4.9★ on Google</b> from 35+ verified reviews, with 1,400+ students trained and 150+ students placed in jobs.
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

        {/* <div className="mt-[30px] flex flex-wrap gap-3">
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold flex items-center">
            <svg className="w-4 h-4 mr-2 inline-block text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="9" y1="22" x2="9" y2="16" />
              <line x1="15" y1="22" x2="15" y2="16" />
              <line x1="9" y1="16" x2="15" y2="16" />
              <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
            </svg>
            ABM Groups
          </span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold flex items-center">
            <svg className="w-4 h-4 mr-2 inline-block text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Certificate of Completion
          </span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold flex items-center">
            <svg className="w-4 h-4 mr-2 inline-block text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Placement Assistance
          </span>
          <span className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold flex items-center">
            <svg className="w-4 h-4 mr-2 inline-block text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Hands-on Live Projects
          </span>
        </div> */}
      </div>
    </section>
  );
}
