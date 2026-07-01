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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// proof you can show employers</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Get a certificate that backs up your skills
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px]">
          On completing the program, every student receives a BM Academy Certificate of Completion — recognized by our hiring and placement partners — along with a portfolio of live campaigns you personally ran. This is what you show in interviews and on LinkedIn, instead of just saying you "did a course."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg">
              📜
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">BM Academy Certificate of Completion</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued on course completion</span>
              <p className="text-muted-brand text-[0.86rem]">States your name, program (Digital Marketing Pro), duration, and modules covered — verifiable directly with BM Academy.</p>
            </div>
          </div>
          
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg">
              💼
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">Live Campaign Portfolio</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued alongside the certificate</span>
              <p className="text-muted-brand text-[0.86rem]">A record of the real Meta Ads, Google Ads, and SEO work you completed during training — proof of hands-on experience, not just theory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
