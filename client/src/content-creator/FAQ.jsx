import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// doubts, cleared</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          Frequently asked questions
        </h2>

        <div className="mt-7 max-w-[780px] text-left">
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden text-white">
              Do I need expensive camera equipment?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              No. Everything is taught using just a smartphone and free editing tools.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden text-white">
              Can this really become a paid skill, not just a hobby?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes. Many students take on their first paid client or brand project within weeks of finishing.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden text-white">
              Is EMI available for the course fee?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes, EMI is available. Full breakdown shared during your free 1:1 demo.
            </p>
          </details>

          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] cursor-pointer list-none flex justify-between gap-4 items-center [&::-webkit-details-marker]:hidden text-white">
              Where is BM Academy located?
              <span className="text-[1.4rem] text-pink-brand transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
