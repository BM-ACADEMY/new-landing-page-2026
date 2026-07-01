import React, { useEffect, useRef } from 'react';

export default function Tracks({ onSelectProgram }) {
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
    <section id="tracks" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// choose your track</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          We'll help you pick the right track in your free demo.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px_26px] relative">
            <div className="font-bold text-pink-brand text-[0.8rem] uppercase tracking-[0.04em]">Tier 1 · Skill Track</div>
            <div className="font-sora font-extrabold text-[2rem] text-white mt-2 mb-[2px]">₹14,999</div>
            <div className="text-[0.84rem] text-muted-brand mb-4">EMI available · 3 months</div>
            
            <ul className="list-none p-0 m-0 grid gap-[11px] text-[0.92rem] text-[#DAD4EC] mb-6">
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> Full Ads, SEO &amp; AI tools training</li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> Live campaign practice</li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> Career guidance</li>
              <li className="flex gap-2.5 text-[#5f5979]"><span className="text-[#3f3a55] font-bold">✕</span> Placement guarantee</li>
              <li className="flex gap-2.5 text-[#5f5979]"><span className="text-[#3f3a55] font-bold">✕</span> 20% refund</li>
            </ul>
            
            <button 
              onClick={() => onSelectProgram("Digital Marketing Pro (Tier 1)")}
              className="w-100 inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border border-white/9 bg-transparent text-white transition-all duration-200 hover:border-pink-brand hover:text-pink-brand w-full"
            >
              Book Demo
            </button>
          </div>

          <div className="reveal bg-panel border border-transparent rounded-2xl p-[30px_26px] relative style-border" style={{ borderImageSource: 'linear-gradient(100deg, #FF3D81, #7C5CFC 55%, #3DA5FF)', borderImageSlice: 1, borderStyle: 'solid', borderWidth: '1px' }}>
            <div className="absolute top-[-12px] left-[26px] bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold text-[0.7rem] px-3 py-1 rounded-[6px] uppercase">
              Most chosen
            </div>
            <div className="font-bold text-pink-brand text-[0.8rem] uppercase tracking-[0.04em] mt-2">Tier 2 · Placement Track</div>
            <div className="font-sora font-extrabold text-[2rem] text-white mt-2 mb-[2px]">₹19,999</div>
            <div className="text-[0.84rem] text-muted-brand mb-4">EMI available · 3–5 months</div>
            
            <ul className="list-none p-0 m-0 grid gap-[11px] text-[0.92rem] text-[#DAD4EC] mb-6">
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> Everything in Tier 1</li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> <b>Placement support</b></li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> <b>20% refund if not placed</b></li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> 2 mock interviews</li>
              <li className="flex gap-2.5"><span className="text-green-brand font-bold">✓</span> Priority access to hiring drives</li>
            </ul>
            
            <button 
              onClick={() => onSelectProgram("Digital Marketing Pro (Tier 2 - Placement)")}
              className="w-100 inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06] w-full"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
