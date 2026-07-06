import React from 'react';

export default function Fears() {
  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// before you scroll away</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          Thinking one of these? Here's the honest answer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "I only know basic Excel. Can I really become a data analyst?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Excel is exactly where most analysts start. We build from there to SQL, Power BI, and Python step by step — <span className="text-lime-brand">no prior coding needed</span>.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Is data analytics actually in demand, or just another trending course?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Every company now runs on data — sales, marketing, operations. Analysts who can <span className="text-lime-brand">read and present that data</span> are hired across <span className="text-lime-brand">every industry</span>, not just IT.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Won't free YouTube tutorials teach me the same thing?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Free tutorials teach tools in isolation. Here you <span className="text-lime-brand">work on real, messy business datasets end-to-end</span> — that experience is <span className="text-lime-brand">what employers actually test for</span> in interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

