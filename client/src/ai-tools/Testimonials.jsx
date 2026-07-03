import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// real students, real Google reviews</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          What our students say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-500 mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "Working professional spending hours on repetitive reports. After AI Tools Mastery, automated most of that work and cut report time by more than half."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">— AI Tools Alumni, Pondicherry</div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-500 mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "Good place to upgrade skills. Very practical, applied straight to my actual work."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">— Google Review</div>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-500 mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "The trainers and team were very supportive and guided me throughout the course."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-4">— Google Review</div>
          </div>
        </div>
      </div>
    </section>
  );
}
