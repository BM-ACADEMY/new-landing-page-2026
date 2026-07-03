import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the skill stack</span>
           <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          3 Core Skills. <span className="gradtext">1 Job-Ready You.</span>
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px] mb-8">
          Every skill is practiced on a live project, so your resume shows real campaigns you actually ran — not just a certificate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Power Prompting</h3>
            <p className="text-muted-brand text-[0.86rem]">Pro-level prompting in ChatGPT, Gemini, and Claude for consistent, quality output.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.02983 19.1713 5.28151 19.2312 5.50414 19.1558C5.72677 19.0805 5.8893 18.8821 5.9213 18.6473C5.9729 18.2687 6.00002 17.8872 6.00002 17.5C6.00002 15.0147 8.01474 13 10.5 13H11.5C12.3284 13 13 13.6716 13 14.5V17.5C13 19.9853 10.9853 22 8.5 22H12Z" />
                <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
                <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">AI Content &amp; Images</h3>
            <p className="text-muted-brand text-[0.86rem]">Generate content, images, and creative assets using AI tools, professionally.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="mb-3">
              <svg className="w-8 h-8 text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5 text-white">Automation Tools</h3>
            <p className="text-muted-brand text-[0.86rem]">Automate repetitive tasks and workflows, saving hours of manual work every week.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="reveal bg-panel border border-white/9 rounded-xl p-[20px_22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 1</div>
            <h4 className="font-sora font-bold text-[1rem] mt-1.5 mb-1.5 text-white">Power Prompting</h4>
            <p className="text-muted-brand text-[0.86rem]">Structured, professional-level prompting across ChatGPT, Gemini, and Claude.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-xl p-[20px_22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 2</div>
            <h4 className="font-sora font-bold text-[1rem] mt-1.5 mb-1.5 text-white">AI Content &amp; Images</h4>
            <p className="text-muted-brand text-[0.86rem]">Using AI for writing, content creation, and image generation, properly and efficiently.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-xl p-[20px_22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 3</div>
            <h4 className="font-sora font-bold text-[1rem] mt-1.5 mb-1.5 text-white">Automation Tools</h4>
            <p className="text-muted-brand text-[0.86rem]">Setting up automations that handle repetitive tasks for you.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-xl p-[20px_22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Week 4</div>
            <h4 className="font-sora font-bold text-[1rem] mt-1.5 mb-1.5 text-white">AI for Your Career</h4>
            <p className="text-muted-brand text-[0.86rem]">Applying AI tools directly to your specific career, studies, or business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
