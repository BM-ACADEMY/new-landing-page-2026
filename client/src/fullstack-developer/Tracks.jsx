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
      { threshold: 0.14 }
    );

    const elements = containerRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openWhatsApp = (tier) => {
    const waNumber = "919944940051";
    const msg = `Hi BM Academy 👋\n\nI'd like to book a free 1:1 demo.\n\n📚 Program: Full Stack Development (${tier})\n\nPlease confirm a slot. Thank you 🙏`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="tracks" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <div className="flex flex-col items-center text-center">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// choose your track</span>
          <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white max-w-[600px]">
            We'll help you pick the right track in your free demo.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[0.92rem]">
            <span className="text-muted-brand font-medium">Starts from</span>
            <span className="text-pink-brand font-extrabold text-[1.1rem]">₹24,999</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-stretch">
          {/* Tier 1 · Standard Skill Track */}
          <div className="reveal bg-panel/40 backdrop-blur-sm border border-white/15 rounded-2xl p-[35px_30px] relative flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:bg-panel/60">
            <div>
              <div className="font-bold text-muted-brand text-[0.8rem] uppercase tracking-[0.06em] mb-4">Tier 1 · Skill Track</div>
              <div className="text-[0.84rem] text-muted-brand mb-6">EMI available · 6 months</div>

              <ul className="list-none p-0 m-0 grid gap-[12px] text-[0.92rem] text-[#b3accd] mb-8">
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> Full frontend &amp; backend training</li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> Live coding projects</li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> Career guidance</li>
                <li className="flex gap-2.5 items-center text-[#4e4866]"><span className="text-[#342f47] font-bold text-lg">✕</span> Placement guarantee</li>
                <li className="flex gap-2.5 items-center text-[#4e4866]"><span className="text-[#342f47] font-bold text-lg">✕</span> 20% refund</li>
              </ul>
            </div>

            <button
              onClick={() => openWhatsApp("Tier 1 Skill Track")}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border border-white/10 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 hover:border-pink-brand hover:text-pink-brand"
            >
              Book Demo
            </button>
          </div>

          {/* Tier 2 · Premium Placement Track */}
          <div className="reveal bg-gradient-to-b from-[#1b1236] to-[#0c081f] border border-violet-brand/35 shadow-[0_0_30px_rgba(124,92,252,0.15)] rounded-2xl p-[35px_30px] relative flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(124,92,252,0.25)] hover:border-violet-brand/50">
            <div className="absolute top-[-14px] left-[30px] bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-extrabold text-[0.7rem] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              Most chosen
            </div>
            <div>
              <div className="font-extrabold text-pink-brand text-[0.8rem] uppercase tracking-[0.06em] mt-2 mb-4">Tier 2 · Placement Track</div>
              <div className="text-[0.84rem] text-muted-brand mb-6">EMI available · 6–8 months</div>

              <ul className="list-none p-0 m-0 grid gap-[12px] text-[0.92rem] text-[#DAD4EC] mb-8">
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> Everything in Tier 1</li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> <span className="font-bold text-white">Placement support</span></li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> <span className="font-bold text-white">20% refund if not placed</span></li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> 2 mock interviews</li>
                <li className="flex gap-2.5 items-center"><span className="text-green-brand font-bold text-lg">✓</span> Priority access to hiring drives</li>
              </ul>
            </div>

            <button
              onClick={() => openWhatsApp("Tier 2 Placement Track")}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.1] hover:shadow-lg w-full"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
