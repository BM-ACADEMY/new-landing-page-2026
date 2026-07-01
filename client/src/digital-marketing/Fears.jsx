import React, { useEffect, useRef } from 'react';

export default function Fears() {
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
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// before you scroll away</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Thinking one of these? Here's the honest answer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5">
              "I didn't study engineering. I'm not technical. Can I really get a decent job?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Digital marketing doesn't care about your degree — it cares about <span className="text-lime-brand">skill and portfolio</span>. Most of our placed students come from arts and commerce backgrounds.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5">
              "Is digital marketing just hype, or an actual long-term career?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Every business today needs ads and SEO to survive online. Demand is <span className="text-lime-brand">growing every year</span> — this isn't a trend, it's an industry.
            </p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[24px_22px]">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-[3px] border-violet-brand mb-3.5">
              "Isn't all this available free on YouTube? Why pay for a course?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Free videos give scattered information. Here you get a <span className="text-lime-brand">structured path, live campaign practice, and placement support</span> — that's what actually gets you hired.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
