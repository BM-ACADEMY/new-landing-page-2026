import React, { useEffect, useRef } from 'react';

export default function Tracks() {
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

  const openWhatsApp = (tier) => {
    const waNumber = "919944940051";
    const msg = `Hi BM Academy 👋\n\nI'd like to book a free 1:1 demo.\n\n📚 Program: Data Analytics (${tier})\n\nPlease confirm a slot. Thank you 🙏`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// choose your track</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center text-white mb-9 reveal">
          We'll help you pick the right track in your free demo.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[840px] mx-auto">
          {/* Skill Track */}
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px_26px] relative text-left flex flex-col justify-between">
            <div>
              <div className="font-bold text-pink-brand text-[0.8rem] uppercase tracking-[0.04em]">Tier 1 · Skill Track</div>
              <div className="font-sora font-extrabold text-[2rem] text-white mt-2 mb-0.5">₹14,999</div>
              <div className="text-[0.84rem] text-muted-brand mb-4">EMI available · 3 months</div>
              <ul className="list-none p-0 m-0 grid gap-[11px] mb-6">
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Full Excel, SQL, Power BI &amp; Python training</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Live dataset practice</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Career guidance</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#5f5979]"><span className="text-[#3f3a55] font-bold">✕</span> Placement guarantee</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#5f5979]"><span className="text-[#3f3a55] font-bold">✕</span> 20% refund</li>
              </ul>
            </div>
            <button 
              onClick={() => openWhatsApp("Tier 1 Skill Track")}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm px-6 py-3.5 rounded-xl cursor-pointer bg-transparent text-white border border-white/9 transition-all duration-200 hover:border-pink-brand hover:text-pink-brand"
            >
              Book Demo
            </button>
          </div>

          {/* Placement Track */}
          <div className="reveal bg-panel border-transparent rounded-2xl p-[30px_26px] relative text-left flex flex-col justify-between" style={{ borderImage: 'linear-gradient(100deg,#FF3D81,#7C5CFC 55%,#3DA5FF) 1', borderStyle: 'solid', borderWidth: '1px' }}>
            <div className="absolute top-[-12px] left-6 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold text-[0.7rem] px-3 py-1 rounded-[6px] uppercase">
              Most chosen
            </div>
            <div>
              <div className="font-bold text-pink-brand text-[0.8rem] uppercase tracking-[0.04em] mt-1.5">Tier 2 · Placement Track</div>
              <div className="font-sora font-extrabold text-[2rem] text-white mt-2 mb-0.5">₹19,999</div>
              <div className="text-[0.84rem] text-muted-brand mb-4">EMI available · 3–5 months</div>
              <ul className="list-none p-0 m-0 grid gap-[11px] mb-6">
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Everything in Tier 1</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> <b>Placement support</b></li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> <b>20% refund if not placed</b></li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> 2 mock interviews</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Priority access to hiring drives</li>
              </ul>
            </div>
            <button 
              onClick={() => openWhatsApp("Tier 2 Placement Track")}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm px-6 py-3.5 rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06]"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
