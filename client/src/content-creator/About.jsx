import React from 'react';

export default function About() {
  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// who we are</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          About BM Academy
        </h2>
        
        <div className="about reveal bg-panel border border-white/9 rounded-2xl p-[30px] mt-9">
          <p className="text-[#DAD4EC] text-[0.98rem] mb-3">
            BM Academy is a Digital Marketing, Full Stack Development, IT &amp; Skill Training Institute based in Kottakuppam, Vanur, Puducherry, and part of <strong className="text-green-brand font-bold">ABM Groups</strong>. We are rated <strong className="text-green-brand font-bold">4.9★ on Google</strong> from 35+ verified reviews, with 1,400+ students trained and 150+ students placed in jobs.
          </p>
          <p className="text-[#DAD4EC] text-[0.98rem] mb-0">
            Our approach is hands-on: students learn by running real campaigns, building real websites, and working on live projects — not by sitting through theory-only lectures. We also offer Full Stack Development, Video Editing, Data Analytics, AI, and Government Exam Coaching programs at the same campus.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-9">
          <div className="tcard reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="tavatar w-[54px] height-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg min-h-[54px] min-w-[54px]">
              C
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">Content Creator Lead Trainer</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-1 mb-2 font-semibold">Content Creator Lead Trainer</span>
              <p className="text-muted-brand text-[0.86rem]">Active content creator and editor with real brand and client work experience.</p>
            </div>
          </div>

          <div className="tcard reveal bg-panel border border-white/9 rounded-2xl p-[22px] flex gap-4 items-start">
            <div className="tavatar w-[54px] height-[54px] rounded-full bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand flex-shrink-0 grid place-items-center font-extrabold font-sora text-white text-lg min-h-[54px] min-w-[54px]">
              BM
            </div>
            <div>
              <h4 className="font-sora font-bold text-[1rem] text-white">BM Academy Faculty Team</h4>
              <span className="block text-[0.78rem] text-pink-brand mt-1 mb-2 font-semibold">BM Academy Faculty Team</span>
              <p className="text-muted-brand text-[0.86rem]">Practitioners mentoring every batch on both creative and business sides of content.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
