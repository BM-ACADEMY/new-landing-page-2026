import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// doubts, cleared</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Frequently asked questions
        </h2>

        <div className="mt-7 max-w-[780px] text-left">
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden">
              I'm from a non-tech / arts background. Will I be able to keep up?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes. The majority of our students are from arts and commerce backgrounds. What matters most is attendance and effort, not your degree.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden">
              Do I need money to run real ad campaigns?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              No. We guide you with a small practice budget in class so you get genuine, hands-on campaign experience.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden">
              Will I actually get a job in 3 months?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Tier 2 includes placement support and a 20% refund guarantee if you're not placed. 150+ students have already been placed through us.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden">
              Is EMI available for the course fee?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes, EMI is available. We'll share the full breakdown during your free demo session.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden">
              Where is BM Academy located?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104. Open Monday–Saturday, 10:00 AM to 8:00 PM.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
