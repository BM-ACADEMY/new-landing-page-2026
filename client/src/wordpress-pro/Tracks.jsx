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

  const openWhatsApp = () => {
    const waNumber = "919944940051";
    const msg = `Hi BM Academy 👋\n\nI'd like to book a free 1:1 demo.\n\n📚 Program: WordPress Pro\n\nPlease confirm a slot. Thank you 🙏`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// choose your track</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center text-white mb-9 reveal">
          We'll help you pick the right track in your free demo.
        </h2>

        <div className="flex justify-center">
          {/* WordPress Pro Card */}
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px_26px] relative text-left flex flex-col justify-between w-full max-w-[440px] shadow-lg">
            <div className="absolute top-[-12px] left-6 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold text-[0.7rem] px-3 py-1 rounded-[6px] uppercase">
              Single program
            </div>
            <div>
              <div className="font-bold text-pink-brand text-[0.8rem] uppercase tracking-[0.04em] mt-1.5">WordPress Pro</div>
              <div className="font-sora font-extrabold text-[2rem] text-white mt-2 mb-0.5">₹12,999</div>
              <div className="text-[0.84rem] text-muted-brand mb-4">EMI available · 8 weeks · Hybrid</div>
              <ul className="list-none p-0 m-0 grid gap-[11px] mb-6">
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Full site-building &amp; e-commerce training</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Live client-style project</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Freelance business skills</li>
                <li className="flex gap-2.5 text-[0.92rem] text-[#DAD4EC]"><span className="text-green-brand font-bold">✓</span> Certificate of Completion</li>
              </ul>
            </div>
            <button 
              onClick={openWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-6 py-3.5 rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06]"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
