import React from 'react';

export default function Guarantee() {
  return (
    <section className="py-[58px] bg-panel border-t border-b border-white/9">
      <div className="max-w-[1080px] mx-auto px-5 flex flex-wrap md:flex-nowrap items-center gap-[30px]">
        <div className="flex-shrink-0 w-[110px] h-[110px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white flex flex-col justify-center items-center font-sora font-extrabold line-height-tight shadow-[0_16px_40px_-14px_rgba(255,61,129,0.5)]">
          <span className="text-[1.75rem]">100%</span>
          <span className="text-[0.56rem] tracking-wider uppercase mt-0.5">Hands-on</span>
        </div>
        <div className="flex-grow">
          <h2 className="font-sora font-extrabold text-[1.3rem] sm:text-[1.8rem] text-white">A skill that pays off in every other course and career.</h2>
          <p className="text-muted-brand mt-3 max-w-[540px]">
            By the end of the program, you'll be using AI tools confidently and efficiently in your studies, job, or business — a foundation skill for 2026 and beyond.
          </p>
          <p className="text-[0.78rem] text-[#6f6a86] mt-2.5">Eligibility: 75% attendance · all assignments and the final project completed</p>
        </div>
      </div>
    </section>
  );
}
