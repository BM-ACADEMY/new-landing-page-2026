import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// real students, real Google reviews</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          What our students say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div className="tquote reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "College student posting reels with no growth for over a year. After this program, landed first paid brand collaboration within a month of finishing."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— Content Creator Alumni, Pondicherry</div>
          </div>

          <div className="tquote reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "Good place to upgrade skills. Editing and brand-content modules made the difference compared to free online tutorials."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— Google Review</div>
          </div>

          <div className="tquote reveal bg-panel border border-white/9 rounded-2xl p-6">
            <div className="text-amber-brand text-[0.8rem] mb-2.5">★★★★★</div>
            <p className="text-white text-[0.92rem] leading-relaxed">
              "The trainers and team were very supportive and guided me throughout the course."
            </p>
            <div className="text-[0.78rem] text-pink-brand font-semibold mt-3.5">— Google Review</div>
          </div>
        </div>
      </div>
    </section>
  );
}
