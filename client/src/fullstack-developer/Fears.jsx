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
              "I have an arts degree, never coded before. Can I really become a developer?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Most of our placed developers started with <span className="text-lime-brand">zero coding background</span>. <span className="text-lime-brand">Logical thinking and consistency</span> matter far more than your degree stream.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Is coding still a safe career, or is AI replacing developers?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              AI writes code faster, but someone still has to <span className="text-lime-brand">design systems, debug, and build full products</span>. Developers who <span className="text-lime-brand">understand the fundamentals</span> stay in demand.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="font-sans italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5 leading-relaxed">
              "Can't I just learn to code for free on YouTube?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2 uppercase tracking-[0.04em]">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem] leading-relaxed">
              Free tutorials teach syntax. Here you <span className="text-lime-brand">build complete, working applications end-to-end</span> with <span className="text-lime-brand">mentor feedback</span> — that's the difference employers test for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

