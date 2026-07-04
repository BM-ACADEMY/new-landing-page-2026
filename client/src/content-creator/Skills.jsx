import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the skill stack</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          3 Core Skills. <span className="gradtext">1 Job-Ready You.</span>
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px]">
          Every skill is practiced on a live project, so your resume shows real campaigns you actually ran — not just a certificate.
        </p>
        
        {/* 3 Core Skills */}
        <div className="flex flex-wrap gap-3.5 mt-9">
          <div className="skill reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Hook &amp; Script</h3>
            <p className="text-muted-brand text-[0.86rem]">
              Write scroll-stopping hooks and scripts that actually keep viewers watching.
            </p>
          </div>
          
          <div className="skill reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Shoot &amp; Edit</h3>
            <p className="text-muted-brand text-[0.86rem]">
              Shoot and edit professional-quality reels using just a phone and free tools.
            </p>
          </div>
          
          <div className="skill reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Post &amp; Grow</h3>
            <p className="text-muted-brand text-[0.86rem]">
              Posting strategy, analytics, and growth — turning content into a system, not luck.
            </p>
          </div>
        </div>

        {/* Syllabus Weeks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
          <div className="smod reveal bg-panel border border-white/9 rounded-xl p-5 px-5.5">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 1</div>
            <h4 className="font-sora font-bold text-[1rem] my-1.5 text-white">Hook &amp; Script Writing</h4>
            <p className="text-muted-brand text-[0.86rem]">Writing hooks and scripts that stop the scroll and hold attention.</p>
          </div>
          
          <div className="smod reveal bg-panel border border-white/9 rounded-xl p-5 px-5.5">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 2–3</div>
            <h4 className="font-sora font-bold text-[1rem] my-1.5 text-white">Shooting &amp; Editing</h4>
            <p className="text-muted-brand text-[0.86rem]">Phone shooting techniques, pacing, transitions, captions, sound design.</p>
          </div>
          
          <div className="smod reveal bg-panel border border-white/9 rounded-xl p-5 px-5.5">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 4</div>
            <h4 className="font-sora font-bold text-[1rem] my-1.5 text-white">Client Content</h4>
            <p className="text-muted-brand text-[0.86rem]">Creating content for a real or simulated brand — client-style deliverables.</p>
          </div>
          
          <div className="smod reveal bg-panel border border-white/9 rounded-xl p-5 px-5.5">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 5</div>
            <h4 className="font-sora font-bold text-[1rem] my-1.5 text-white">Personal Brand</h4>
            <p className="text-muted-brand text-[0.86rem]">Building your own content brand and portfolio in parallel.</p>
          </div>
          
          <div className="smod reveal bg-panel border border-white/9 rounded-xl p-5 px-5.5 md:col-span-2">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 6</div>
            <h4 className="font-sora font-bold text-[1rem] my-1.5 text-white">Posting Strategy &amp; Growth</h4>
            <p className="text-muted-brand text-[0.86rem]">Analytics, posting strategy, and turning content into consistent income.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
