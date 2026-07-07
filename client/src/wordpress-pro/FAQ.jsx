import React, { useState } from 'react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "I'm not technical. Will I be able to build real websites?",
      a: "Yes. WordPress is visual and beginner-friendly — no coding is required at any stage."
    },
    {
      q: "Can I really earn from this as a side income?",
      a: "Yes. Many students start with 1–2 small client projects alongside their existing job or studies."
    },
    {
      q: "Is EMI available for the course fee?",
      a: "Yes, EMI is available. Full breakdown shared during your free 1:1 demo."
    },
    {
      q: "Where is BM Academy located?",
      a: "252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104."
    }
  ];

  return (
    <section id="faq" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block mb-2">// doubts, cleared</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-white mt-3 mb-0">
          Frequently asked questions
        </h2>

        <div className="mt-7 max-w-[780px] text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-white/9 py-[18px]">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-sora font-bold text-[1.02rem] text-white hover:text-pink-brand transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[1.4rem] text-pink-brand transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] mt-3' : 'max-h-0'}`}>
                  <p className="text-muted-brand text-[0.94rem] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
