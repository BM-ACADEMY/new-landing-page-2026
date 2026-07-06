import React, { useEffect, useRef, useState } from 'react';

export default function Hero({ onBookClick }) {
  const [counts, setCounts] = useState({ trained: 0, placed: 0 });
  const campRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');

            // Animation for counts
            const duration = 1200;
            const steps = 40;
            const intervalTime = duration / steps;

            const targetTrained = 1400;
            const targetPlaced = 150;

            let currentStep = 0;
            const interval = setInterval(() => {
              currentStep++;
              setCounts({
                trained: Math.min(targetTrained, Math.ceil((targetTrained / steps) * currentStep)),
                placed: Math.min(targetPlaced, Math.ceil((targetPlaced / steps) * currentStep)),
              });
              if (currentStep >= steps) {
                clearInterval(interval);
              }
            }, intervalTime);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    const currentRef = campRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-[50px] relative overflow-hidden bg-bg-dark">
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] left-1/2 top-[-260px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(124,92,252,0.18),transparent_65%)] pointer-events-none"></div>

      <div className="max-w-[1080px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.04fr_.96fr] gap-[44px] items-center relative">
        <div>
          <span className="inline-flex items-center gap-[9px] text-[0.76rem] font-semibold text-white border border-white/9 bg-white/4 px-[14px] py-[7px] rounded-full tracking-[0.02em]">
            <span className="w-[7px] h-[7px] rounded-full bg-green-brand shadow-[0_0_0_4px_rgba(74,222,128,0.2)]"></span>
            DATA ANALYTICS · NEW BATCH FORMING
          </span>
          <h1 className="font-sora font-extrabold text-[2rem] sm:text-[3.2rem] leading-[1.08] tracking-[-0.025em] mt-5 mb-0 text-white">
            Just know basic Excel? <span className="gradtext">Become a ₹3–6 LPA Data Analyst</span> in 3 months.
          </h1>
          <p className="text-[#C8C2DC] text-[1rem] sm:text-[1.1rem] mt-[18px] mb-[28px] max-w-[540px] leading-relaxed">
            Learn <b className="text-white">Excel, SQL, Power BI and Python</b>  by working on real business datasets — not toy examples. Open to commerce, arts, and any background <b className="text-white">Join our FREE Live Webinar to explore the complete learning roadmap, career opportunities, and how to become a job-ready Data Analyst. </b>
          </p>
          <div className="flex gap-[13px]">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white shadow-[0_14px_34px_-12px_rgba(255,61,129,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-[1.06]"
            >
              Register for Free Webinar →
            </button>
            <a
              className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border border-white/9 bg-transparent text-white transition-all duration-200 hover:border-pink-brand hover:text-pink-brand"
              href="#skills"
            >
              See What You'll Learn
            </a>
          </div>
          <p className="text-[0.82rem] text-muted-brand mt-[15px]">
            <span className="text-green-brand font-semibold">150+ placed</span> · 20% fee refund guarantee · EMI available
          </p>
        </div>

        <div ref={campRef} className="camp reveal bg-panel border border-white/9 rounded-[18px] p-[22px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="flex justify-between items-center mb-[18px]">
            <span className="font-bold text-[0.92rem]">📍 BM Academy, Kottakuppam</span>
            <span className="text-[0.66rem] font-bold text-white bg-green-brand px-[10px] py-1 rounded-full flex items-center gap-[5px] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white">
              VERIFIED
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-panel-2 border border-white/9 rounded-xl p-[16px_14px] text-center">
              <div className="font-sora font-extrabold text-[1.4rem] text-white">{counts.trained.toLocaleString()}+</div>
              <div className="text-[0.66rem] text-muted-brand mt-1 uppercase tracking-[0.03em]">Trained</div>
            </div>
            <div className="bg-panel-2 border border-white/9 rounded-xl p-[16px_14px] text-center">
              <div className="font-sora font-extrabold text-[1.4rem] text-white">{counts.placed.toLocaleString()}+</div>
              <div className="text-[0.66rem] text-muted-brand mt-1 uppercase tracking-[0.03em]">Placed</div>
            </div>
            <div className="bg-panel-2 border border-white/9 rounded-xl p-[16px_14px] text-center">
              <div className="font-sora font-extrabold text-[1.4rem] text-white">4.9★</div>
              <div className="text-[0.66rem] text-muted-brand mt-1 uppercase tracking-[0.03em]">Google Rating</div>
            </div>
          </div>
          <div className="bg-panel-2 border border-white/9 rounded-xl p-3.5 px-4 text-[0.82rem] text-muted-brand leading-relaxed">
            <b className="text-white block mb-1 text-[0.86rem]">BM Academy — Digital Marketing &amp; IT Training Institute</b>
            252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104<br />
            📞 099449 40051 &nbsp;|&nbsp; Mon–Sat, 10:00 AM – 8:00 PM
          </div>
        </div>
      </div>
    </section>
  );
}
