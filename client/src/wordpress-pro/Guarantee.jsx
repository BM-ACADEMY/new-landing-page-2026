import React from 'react';

export default function Guarantee() {
  return (
    <section className="py-[58px] bg-panel border-t border-b border-white/9">
      <div className="max-w-[1080px] mx-auto px-5 flex items-center gap-[30px] flex-wrap md:flex-nowrap">
        <div className="flex-shrink-0 w-[110px] h-[110px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white flex items-center justify-center text-center font-sora font-extrabold leading-[1.05] shadow-[0_16px_40px_-14px_rgba(255,61,129,0.5)] mx-auto md:mx-0">
          <div>
            <span className="text-[1.3rem] tracking-tight block">100%</span>
            <span className="text-[0.56rem] tracking-[0.08em] uppercase block mt-0.5">Hands-on</span>
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="font-sora font-extrabold text-[1.3rem] sm:text-[1.8rem] leading-[1.18] text-white">
            Confidence to launch your first paid project.
          </h2>
          <p className="text-muted-brand mt-3 max-w-[540px] mx-auto md:mx-0 leading-relaxed">
            By the end of the program you'll have a live portfolio website and the freelance skills to start pitching real client projects immediately.
          </p>
          <p className="text-[0.78rem] text-[#6f6a86] mt-2.5">
            Eligibility: 75% attendance · all assignments and the final project completed
          </p>
        </div>
      </div>
    </section>
  );
}
