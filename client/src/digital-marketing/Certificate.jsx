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
      <div className="max-w-[1080px] mx-auto px-5 text-center flex flex-col items-center" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block">
          // proof you can show employers
        </span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Learn. Practice. Get Certified.
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px] mb-8 mx-auto">
          On completing the program, every student receives a BM Academy
          Certificate of Completion — recognized by our hiring and placement
          partners — along with a portfolio of live campaigns you personally
          ran. This is what you show in interviews and on LinkedIn, instead of
          just saying you "did a course."
        </p>

        <div className="reveal overflow-hidden rounded-2xl mb-16 max-w-[700px] w-full mx-auto">
          <img
            src="/images/Certificate.webp"
            alt="BM Academy Certificate"
            className="w-full h-auto object-cover border border-white/9 rounded-2xl mx-auto"
          />
        </div>

        <div className="mt-16 border-t border-white/9 pt-16 w-full text-center flex flex-col items-center">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block mb-2">
            // Live from our campus
          </span>
          <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-3">
            Real Students. Real Learning.
          </h2>
          <p className="text-muted-brand text-[1.02rem] mt-2 mb-8 max-w-[620px] mx-auto">
            See how our students learn through live classroom sessions, hands-on projects, and practical training at BM Academy.
          </p>

          <h3 className="font-sora font-bold text-[1.25rem] sm:text-[1.8rem] leading-[1.14] tracking-[-0.02em] mt-8 mb-6 w-full text-center">
            Classroom Images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
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

        <div className="mt-12 w-full">
          <h3 className="font-sora font-bold text-[1.25rem] sm:text-[1.8rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-6 w-full text-center">
            Gallery Images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
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
