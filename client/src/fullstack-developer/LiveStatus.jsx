import React from 'react';

export default function LiveStatus() {
  return (
    <section className="py-[58px] bg-panel border-t border-b border-white/9">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// right now</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          Classes are currently running
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[720px] leading-relaxed">
          Our current Full Stack Development batch is live and in session at our Kottakuppam campus. Seats for the next intake are open and filling on a first-come basis — book your free 1:1 demo to check seat availability and the next start date for your batch.
        </p>
      </div>
    </section>
  );
}
