import React, { useEffect, useRef } from 'react';

export default function Skills() {
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

  const syllabus = [
    { wk: "Week 1–2", title: "WordPress Foundations", desc: "Site structure, themes, plugins — your first real working website." },
    { wk: "Week 3–4", title: "Design & Page Builders", desc: "Visual page building for clean, professional, responsive layouts." },
    { wk: "Week 5", title: "E-Commerce Setup", desc: "Building and launching a working online store." },
    { wk: "Week 6", title: "Client Project", desc: "A full real or simulated client website built end-to-end." },
    { wk: "Week 7", title: "Freelance Business Skills", desc: "Finding clients, pricing projects, proposals, and client communication." },
    { wk: "Week 8", title: "Portfolio & Launch", desc: "Final portfolio review and certificate — ready to take on paid projects." }
  ];

  return (
    <section id="skills" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the skill stack</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white reveal">
          3 Core Skills. <span className="gradtext">1 Job-Ready You.</span>
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px] reveal">
          Every skill is practiced on a live project, so your resume shows real work you actually completed — not just a certificate.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-9">
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Site Building</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Build responsive business websites visually, with no coding required.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">E-Commerce</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Set up and launch online stores clients can sell from immediately.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Freelance Skills</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Find clients, price your work, and deliver projects professionally.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
          {syllabus.map((mod, idx) => (
            <div key={idx} className="reveal bg-panel border border-white/9 rounded-[14px] p-5">
              <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">{mod.wk}</div>
              <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5 text-white">{mod.title}</h4>
              <p className="text-muted-brand text-[0.86rem] leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
