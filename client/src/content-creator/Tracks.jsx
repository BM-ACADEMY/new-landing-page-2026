import React from 'react';

export default function Tracks({ onSelectProgram }) {
  return (
    <section id="tracks" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// choose your track</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          We'll help you pick the right track in your free demo.
        </h2>
        <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[0.92rem]">
          <span className="text-muted-brand font-medium">Starts from</span>
          <span className="text-pink-brand font-extrabold text-[1.1rem]">₹12,999</span>
        </div>

        <div className="max-w-[440px] mx-auto mt-12">
          <div className="reveal bg-gradient-to-b from-[#1b1236] to-[#0c081f] border border-violet-brand/35 shadow-[0_0_30px_rgba(124,92,252,0.15)] rounded-2xl p-[35px_30px] relative text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(124,92,252,0.25)] hover:border-violet-brand/50">
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-extrabold text-[0.7rem] px-3.5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
              Single Program
            </div>
            <div className="font-extrabold text-pink-brand text-[0.8rem] uppercase tracking-[0.06em] mt-2 mb-4">
              Digital Content Creator
            </div>
            <div className="text-[0.84rem] text-muted-brand mb-6">
              EMI available · 6 weeks · Hybrid
            </div>
            <ul className="list-none p-0 m-0 grid gap-[12px] text-[0.92rem] text-[#DAD4EC] mb-8">
              <li className="flex gap-2.5 items-center">
                <span className="text-green-brand font-bold text-lg">✓</span> Hook, script, shoot &amp; edit training
              </li>
              <li className="flex gap-2.5 items-center">
                <span className="text-green-brand font-bold text-lg">✓</span> Client + personal brand content
              </li>
              <li className="flex gap-2.5 items-center">
                <span className="text-green-brand font-bold text-lg">✓</span> Posting &amp; growth strategy
              </li>
              <li className="flex gap-2.5 items-center">
                <span className="text-green-brand font-bold text-lg">✓</span> Certificate of Completion
              </li>
            </ul>
            <button 
              onClick={() => onSelectProgram('Digital Content Creator')}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.1]"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
