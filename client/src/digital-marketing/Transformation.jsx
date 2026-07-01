import React, { useEffect, useRef } from 'react';

export default function Transformation() {
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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the real transformation</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          No degree. No tech background. Here's what changes.
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5">
          This is the actual journey most of our students go through — not a sales pitch, just the pattern we see batch after batch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[30px]">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Before</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Stuck without a degree</h4>
            <p className="text-muted-brand text-[0.86rem]">No engineering or specialized degree. Applying for jobs and getting rejected, or stuck in a low-paying job unrelated to any real skill.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 1–4</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">First real skill</h4>
            <p className="text-muted-brand text-[0.86rem]">Learns SEO and ad fundamentals. For the first time, has something concrete to put on a resume — actual skill, not just a degree line.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 5–8</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Running live campaigns</h4>
            <p className="text-muted-brand text-[0.86rem]">Manages real Meta and Google Ads accounts. Confidence builds — can explain to anyone exactly how a brand gets customers online.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 9–12</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Portfolio &amp; interviews</h4>
            <p className="text-muted-brand text-[0.86rem]">Has a certificate and a live campaign portfolio. Walks into interviews with proof of work, not just promises.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">After</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">First digital marketing job</h4>
            <p className="text-muted-brand text-[0.86rem]">Hired as a digital marketer/executive. Often 2–3x the salary of their previous job, with a real career path ahead — not a dead-end role.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Lifestyle shift</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Independence &amp; stability</h4>
            <p className="text-muted-brand text-[0.86rem]">Steady income, remote-work flexibility in many roles, and a skill that stays relevant as long as businesses need online customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
