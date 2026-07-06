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
    { wk: "Month 1", title: "Web Foundations", desc: "HTML, CSS, responsive design — your first real, deployed website." },
    { wk: "Month 2", title: "JavaScript", desc: "Core programming logic, DOM manipulation, and interactive web behaviour." },
    { wk: "Month 3–4", title: "React", desc: "Component-based frontend development — building modern, real-world interfaces." },
    { wk: "Month 4–5", title: "Node.js & Databases", desc: "Backend APIs, database connections, authentication — a full working stack." },
    { wk: "Month 5–6", title: "Capstone Project", desc: "A full CRUD web application you design and build end-to-end, for your portfolio." },
    { wk: "Month 6", title: "Placement Preparation", desc: "Resume building, GitHub portfolio, 2 mock interviews, hiring drive access (Tier 2)." }
  ];

  return (
    <section id="skills" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the skill stack</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white reveal">
          3 Core Skills. <span className="gradtext">1 Job-Ready You.</span>
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px] reveal">
          Every skill is practiced on a live project, so your portfolio shows real working applications you actually built — not just theory.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-9">
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Frontend (HTML, CSS, JS)</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Build responsive, real websites and interfaces from scratch.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">React</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Build modern, interactive web applications used by real companies today.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Backend (Node.js)</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Build APIs, connect databases, and understand how a full product actually works.</p>
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
