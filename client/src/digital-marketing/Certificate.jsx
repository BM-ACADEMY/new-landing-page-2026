import React, { useEffect, useRef } from "react";

export default function Certificate() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    const elements = containerRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">
          // proof you can show employers
        </span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Get a certificate that backs up your skills
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px]">
          On completing the program, every student receives a BM Academy
          Certificate of Completion — recognized by our hiring and placement
          partners — along with a portfolio of live campaigns you personally
          ran. This is what you show in interviews and on LinkedIn, instead of
          just saying you "did a course."
        </p>

        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">BM Academy Certificate of Completion</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued on course completion</span>
              <p className="text-muted-brand text-[0.86rem]">States your name, program (Digital Marketing Pro), duration, and modules covered — verifiable directly with BM Academy.</p>
            </div>
          </div>
          
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <h4 className="font-sora font-bold text-base text-white">Live Campaign Portfolio</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-[3px] mb-2 font-semibold">Issued alongside the certificate</span>
              <p className="text-muted-brand text-[0.86rem]">A record of the real Meta Ads, Google Ads, and SEO work you completed during training — proof of hands-on experience, not just theory.</p>
            </div>
          </div>
        </div>
        */}

        <div className="mt-16">
          <h3 className="font-sora font-bold text-[1.25rem] sm:text-[1.8rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-6">
            Classroom Images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass1.webp"
                alt="DM Class 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass2.webp"
                alt="DM Class 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass3.webp"
                alt="DM Class 3"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-sora font-bold text-[1.25rem] sm:text-[1.8rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-6">
            Gallery Images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass7.webp"
                alt="DM Class 4"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass8.webp"
                alt="DM Class 5"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-white/9 aspect-[4/3]">
              <img
                src="/DM/dmclass9.webp"
                alt="DM Class 6"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
