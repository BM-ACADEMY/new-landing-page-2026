import React, { useEffect, useRef } from 'react';

export default function Skills() {
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
    <section id="skills" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// the skill stack</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          3 core skills. 1 job-ready you.
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5 max-w-[620px]">
          Every skill is practiced on a live project, so your resume shows real campaigns you actually ran — not just a certificate.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-9">
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="text-[1.5rem]">🎯</div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5">Meta &amp; Google Ads</h3>
            <p className="text-muted-brand text-[0.86rem]">Run real campaigns with real budgets. Learn how leads and sales are actually generated for a business.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="text-[1.5rem]">🔍</div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5">SEO</h3>
            <p className="text-muted-brand text-[0.86rem]">Rank websites on Google and bring in free organic traffic — one of the highest-demand skills in marketing today.</p>
          </div>
          <div className="reveal flex-1 min-w-[160px] bg-panel border border-white/9 rounded-2xl p-[22px_20px]">
            <div className="text-[1.5rem]">🤖</div>
            <h3 className="font-sora font-bold text-[1.05rem] mt-2.5 mb-1.5">AI Marketing Tools</h3>
            <p className="text-muted-brand text-[0.86rem]">Use AI for content, ad creatives, and automation to work 10x faster — the edge every 2026 marketer needs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 1</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Foundations &amp; SEO</h4>
            <p className="text-muted-brand text-[0.86rem]">Marketing fundamentals, keyword research, on-page &amp; technical SEO, content strategy, Google Search Console.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 1–2</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Meta Ads (Facebook &amp; Instagram)</h4>
            <p className="text-muted-brand text-[0.86rem]">Campaign structure, audience targeting, creative testing, pixel setup, budget optimization on live accounts.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 2</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Google Ads &amp; Analytics</h4>
            <p className="text-muted-brand text-[0.86rem]">Search, display &amp; performance max campaigns, conversion tracking, GA4 reporting and dashboards.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 2–3</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">AI Tools for Marketing</h4>
            <p className="text-muted-brand text-[0.86rem]">AI content generation, creative automation, prompt workflows for ad copy, video editing basics for reels.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 3</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Live Client Project</h4>
            <p className="text-muted-brand text-[0.86rem]">Run an end-to-end campaign for a real or simulated client, build a portfolio piece you can show employers.</p>
          </div>
          <div className="reveal bg-panel border border-white/9 rounded-2xl p-5 px-[22px]">
            <div className="text-[0.7rem] text-pink-brand font-bold uppercase tracking-[0.04em]">Month 3</div>
            <h4 className="font-sora font-bold text-base mt-1.5 mb-1.5">Placement Preparation</h4>
            <p className="text-muted-brand text-[0.86rem]">Resume building, 2 mock interviews, portfolio review, and access to hiring drives (Tier 2 students).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
