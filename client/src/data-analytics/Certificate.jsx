import React, { useEffect, useRef } from 'react';

export default function Certificate() {
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

  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// proof you can show employers</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] text-center text-white mb-4 reveal">
          Get a certificate that backs up your skills
        </h2>
        <p className="text-muted-brand text-[1.02rem] text-center mb-[36px] max-w-[720px] mx-auto reveal leading-relaxed">
          On completing the program, every student receives a BM Academy Certificate of Completion — recognized by our hiring and placement partners — along with a portfolio of live projects you personally built. This is what you show in interviews and on LinkedIn, instead of just saying you "did a course."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-[1.1rem]">
              📜
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">BM Academy Certificate of Completion</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued on course completion</span>
              <p className="text-muted-brand text-[0.86rem] leading-relaxed">States your name, program (Data Analytics), duration, and modules covered — verifiable directly with BM Academy.</p>
            </div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-[1.1rem]">
              💼
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">Live Project Portfolio</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued alongside the certificate</span>
              <p className="text-muted-brand text-[0.86rem] leading-relaxed">A record of the real analytics datasets and dashboards you completed during training — proof of hands-on experience, not just theory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
