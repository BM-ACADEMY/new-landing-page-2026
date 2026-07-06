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
              "I'm not technical at all. Can I really build websites without coding?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              WordPress is built for exactly this. You <span className="text-lime-brand">design, build, and launch real websites visually</span> — <span className="text-lime-brand">no coding required</span> at any stage.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Is freelance web design actually a stable income source?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Every small business needs a website. With <span className="text-lime-brand">consistent client outreach</span>, this becomes a <span className="text-lime-brand">reliable, scalable side or full-time income</span>.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Can't I just learn WordPress for free on YouTube?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Free tutorials show you how to click buttons. Here you also <span className="text-lime-brand">learn how to find clients, price your work, and deliver a project end-to-end</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

