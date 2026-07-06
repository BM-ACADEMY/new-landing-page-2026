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
    { wk: "Month 1", title: "Excel & Data Foundations", desc: "Advanced formulas, pivot tables, data cleaning, and your first real dashboard." },
    { wk: "Month 1–2", title: "SQL for Analysts", desc: "Writing queries, joins, aggregations on real business databases." },
    { wk: "Month 2", title: "Power BI Dashboards", desc: "Building interactive reports and dashboards stakeholders can act on." },
    { wk: "Month 2–3", title: "Python for Data", desc: "Pandas and basic analysis scripts to automate repetitive reporting work." },
    { wk: "Month 3", title: "Live Capstone Project", desc: "An end-to-end analytics project using a real dataset, presented like a real client report." },
    { wk: "Month 3", title: "Placement Preparation", desc: "Resume building, 2 mock interviews, portfolio review, hiring drive access (Tier 2)." }
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="16" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Excel</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Advanced formulas, pivot tables, and dashboards used daily by real analysts.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">SQL</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Query and join real business databases — the single most-asked skill in analyst interviews.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-[14px] p-5">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Power BI</h3>
            <p className="text-muted-brand text-[0.86rem] leading-relaxed">Build interactive dashboards and reports that executives actually use to make decisions.</p>
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
