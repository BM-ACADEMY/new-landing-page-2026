import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="py-[58px]">
      <div className="max-w-[780px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// doubts, cleared</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] text-center text-white mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] text-white cursor-pointer list-none flex justify-between items-center outline-none">
              I'm not in a tech field. Is this still useful for me?
              <span className="text-pink-brand text-[1.4rem] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes. This is built for students, working professionals, and business owners alike — not just tech roles.
            </p>
          </details>
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] text-white cursor-pointer list-none flex justify-between items-center outline-none">
              Do I need to pay for AI tool subscriptions?
              <span className="text-pink-brand text-[1.4rem] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              No. We train using free and trial versions of all tools during the program.
            </p>
          </details>
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] text-white cursor-pointer list-none flex justify-between items-center outline-none">
              Is EMI available for the course fee?
              <span className="text-pink-brand text-[1.4rem] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="text-muted-brand mt-3 text-[0.94rem]">
              Yes, EMI is available. Full breakdown shared during your free 1:1 demo.
            </p>
          </details>
          <details className="border-b border-white/9 py-[18px] group">
            <summary className="font-sora font-bold text-[1.02rem] text-white cursor-pointer list-none flex justify-between items-center outline-none">
              Where is BM Academy located?
              <span className="text-pink-brand text-[1.4rem] transition-transform duration-200 group-open:rotate-45">+</span>
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
