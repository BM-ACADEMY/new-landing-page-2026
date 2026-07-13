import React, { useEffect, useRef } from 'react';

export default function AIWorkflow() {
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
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// AI AUTOMATION</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          What If <span className="gradtext">AI</span> Could Handle Your <span className="gradtext">Digital marketing?</span>
        </h2>
        
        <div className="reveal bg-panel border border-white/9 rounded-2xl p-[30px] mt-9">
          <p className="text-[#DAD4EC] text-[0.98rem] leading-relaxed mb-0">
            Discover how to build AI Agents that can automate your complete content marketing workflow. Upload your creative once, let AI generate optimized content, and automatically publish it across multiple social media platforms. Spend less time on repetitive tasks and more time growing your business.
          </p>
        </div>

        <div className="mt-[24px] flex flex-wrap gap-3">
          {['ChatGPT', 'Google Sheets', 'Agentic AI', 'Automation Platforms'].map((tool) => (
            <span key={tool} className="bg-panel-2 border border-white/9 rounded-[10px] p-[10px_18px] text-[0.84rem] text-[#9C95B6] font-semibold flex items-center">
              <svg className="w-4 h-4 mr-2 inline-block text-pink-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
