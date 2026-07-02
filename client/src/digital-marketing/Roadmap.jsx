import React, { useState, useEffect, useRef } from 'react';

export default function Roadmap() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-[58px] bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[400px] h-[400px] right-[-100px] top-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.02),transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-[860px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// student journey</span>
        <h2 className="font-sora font-extrabold text-[2.4rem] sm:text-[3.4rem] leading-[1.12] text-center text-white mb-12 uppercase">
          STUDENT JOURNEY
        </h2>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          {/* Row 1: Before -> Month 1 -> Month 2 */}
          <div className="flex items-center justify-between gap-4 mb-16 relative">
            {/* Before Card */}
            <div className="flex-1 bg-[#f4f1eb] border border-[#d6d2c4] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white border border-[#d6d2c4] text-[#7b776c] font-bold text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <div className="text-[#7b776c] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">Before</div>
                <div className="text-[#333333] font-sora font-bold text-base leading-snug">No degree, no skill</div>
              </div>
            </div>
            
            {/* Horizontal Arrow 1 (with scroll draw animation) */}
            <div className="flex-shrink-0 relative w-8 h-8">
              <svg className="w-8 h-8 absolute top-0 left-0" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  stroke="rgba(255, 61, 129, 0.45)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 60,
                    strokeDashoffset: isVisible ? 0 : 60,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.2s'
                  }} 
                />
                <path 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  stroke="rgba(255, 255, 255, 0.4)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 60,
                    strokeDashoffset: isVisible ? 0 : 60,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.2s'
                  }} 
                />
              </svg>
            </div>

            {/* Month 1 Card */}
            <div className="flex-1 bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <div className="text-[#a04a60] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">Month 1</div>
                <div className="text-[#5c1d2e] font-sora font-bold text-base leading-snug">First real skill</div>
              </div>
            </div>

            {/* Horizontal Arrow 2 (with scroll draw animation) */}
            <div className="flex-shrink-0 relative w-8 h-8">
              <svg className="w-8 h-8 absolute top-0 left-0" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  stroke="rgba(255, 61, 129, 0.45)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 60,
                    strokeDashoffset: isVisible ? 0 : 60,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.8s'
                  }} 
                />
                <path 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  stroke="rgba(255, 255, 255, 0.4)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 60,
                    strokeDashoffset: isVisible ? 0 : 60,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.8s'
                  }} 
                />
              </svg>
            </div>

            {/* Month 2 Card */}
            <div className="flex-1 bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left relative">
              <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">3</div>
              <div>
                <div className="text-[#a04a60] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">Month 2</div>
                <div className="text-[#5c1d2e] font-sora font-bold text-base leading-snug">Runs live ad campaigns</div>
              </div>
            </div>
          </div>

          {/* Curved path loop indicator - bound strictly to container width (with scroll draw animation) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[110px] w-full h-[110px] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 860 110" fill="none">
              {/* Line Glow */}
              <path 
                d="M 760,8 L 760,85 Q 760,100 745,100 L 696,100" 
                stroke="rgba(255, 61, 129, 0.25)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ 
                  filter: 'blur(3px)',
                  strokeDasharray: 250,
                  strokeDashoffset: isVisible ? 0 : 250,
                  transition: 'stroke-dashoffset 1s ease-in-out',
                  transitionDelay: '1.4s'
                }} 
              />
              {/* Line Sharp */}
              <path 
                d="M 760,8 L 760,85 Q 760,100 745,100 L 696,100" 
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ 
                  strokeDasharray: 250,
                  strokeDashoffset: isVisible ? 0 : 250,
                  transition: 'stroke-dashoffset 1s ease-in-out',
                  transitionDelay: '1.4s'
                }} 
              />
              
              {/* Arrowhead Glow */}
              <path 
                d="M 702,92 L 690,100 L 702,108" 
                stroke="rgba(255, 61, 129, 0.45)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ 
                  filter: 'blur(2px)',
                  strokeDasharray: 40,
                  strokeDashoffset: isVisible ? 0 : 40,
                  transition: 'stroke-dashoffset 0.3s ease-out',
                  transitionDelay: '2.4s'
                }} 
              />
              {/* Arrowhead Sharp */}
              <path 
                d="M 702,92 L 690,100 L 702,108" 
                stroke="rgba(255, 255, 255, 0.4)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ 
                  strokeDasharray: 40,
                  strokeDashoffset: isVisible ? 0 : 40,
                  transition: 'stroke-dashoffset 0.3s ease-out',
                  transitionDelay: '2.4s'
                }} 
              />
            </svg>
          </div>

          {/* Row 2: Month 3 -> After -> Lifestyle shift */}
          <div className="flex flex-col items-center gap-6 mt-12 max-w-[600px] mx-auto relative">
            {/* Month 3 Card */}
            <div className="w-[80%] bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">4</div>
              <div>
                <div className="text-[#a04a60] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">Month 3</div>
                <div className="text-[#5c1d2e] font-sora font-bold text-base leading-snug">Portfolio &amp; mock interviews</div>
              </div>
            </div>

            {/* Vertical Arrow 1 (with scroll draw animation) */}
            <div className="relative w-6 h-12 flex items-center justify-center">
              <svg className="w-6 h-12 absolute" fill="none" viewBox="0 0 24 48">
                <path 
                  d="M12 4 L12 44 M19 37 L12 44 L5 37" 
                  stroke="rgba(255, 61, 129, 0.45)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                    transition: 'stroke-dashoffset 0.6s ease-out',
                    transitionDelay: '2.8s'
                  }} 
                />
                <path 
                  d="M12 4 L12 44 M19 37 L12 44 L5 37" 
                  stroke="rgba(255, 255, 255, 0.4)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                    transition: 'stroke-dashoffset 0.6s ease-out',
                    transitionDelay: '2.8s'
                  }} 
                />
              </svg>
            </div>

            {/* After Card */}
            <div className="w-[80%] bg-[#eff5eb] border border-[#cbe0bf] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white border border-[#cbe0bf] text-[#456f35] font-bold text-sm flex items-center justify-center shrink-0">5</div>
              <div>
                <div className="text-[#456f35] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">After</div>
                <div className="text-[#2d5020] font-sora font-bold text-base leading-snug">Hired, 2-3x salary</div>
              </div>
            </div>

            {/* Vertical Arrow 2 (with scroll draw animation) */}
            <div className="relative w-6 h-12 flex items-center justify-center">
              <svg className="w-6 h-12 absolute" fill="none" viewBox="0 0 24 48">
                <path 
                  d="M12 4 L12 44 M19 37 L12 44 L5 37" 
                  stroke="rgba(74, 222, 128, 0.35)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                    transition: 'stroke-dashoffset 0.6s ease-out',
                    transitionDelay: '3.6s'
                  }} 
                />
                <path 
                  d="M12 4 L12 44 M19 37 L12 44 L5 37" 
                  stroke="rgba(255, 255, 255, 0.4)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                    transition: 'stroke-dashoffset 0.6s ease-out',
                    transitionDelay: '3.6s'
                  }} 
                />
              </svg>
            </div>

            {/* Lifestyle Shift Card */}
            <div className="w-[80%] bg-[#eff5eb] border border-[#cbe0bf] rounded-2xl p-6 min-h-[110px] flex items-center gap-4 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white border border-[#cbe0bf] text-[#456f35] font-bold text-sm flex items-center justify-center shrink-0">6</div>
              <div>
                <div className="text-[#456f35] font-bold text-[0.72rem] uppercase tracking-wider mb-0.5">Lifestyle shift</div>
                <div className="text-[#2d5020] font-sora font-bold text-base leading-snug">Stable income, flexibility</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden space-y-5">
          {/* 1. Before */}
          <div className="bg-[#f4f1eb] border border-[#d6d2c4] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#d6d2c4] text-[#7b776c] font-bold text-sm flex items-center justify-center shrink-0">1</div>
            <div>
              <div className="text-[#7b776c] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">Before</div>
              <div className="text-[#333333] font-sora font-bold text-base">No degree, no skill</div>
            </div>
          </div>

          {/* Mobile Arrow 1 */}
          <div className="flex justify-center">
            <div className="relative w-6 h-10 flex items-center justify-center">
              <svg className="w-6 h-10 absolute" fill="none" viewBox="0 0 24 40">
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 61, 129, 0.4)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.2s'
                  }} 
                />
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.2s'
                  }} 
                />
              </svg>
            </div>
          </div>

          {/* 2. Month 1 */}
          <div className="bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">2</div>
            <div>
              <div className="text-[#a04a60] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">Month 1</div>
              <div className="text-[#5c1d2e] font-sora font-bold text-base">First real skill</div>
            </div>
          </div>

          {/* Mobile Arrow 2 */}
          <div className="flex justify-center">
            <div className="relative w-6 h-10 flex items-center justify-center">
              <svg className="w-6 h-10 absolute" fill="none" viewBox="0 0 24 40">
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 61, 129, 0.4)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.8s'
                  }} 
                />
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '0.8s'
                  }} 
                />
              </svg>
            </div>
          </div>

          {/* 3. Month 2 */}
          <div className="bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">3</div>
            <div>
              <div className="text-[#a04a60] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">Month 2</div>
              <div className="text-[#5c1d2e] font-sora font-bold text-base">Runs live ad campaigns</div>
            </div>
          </div>

          {/* Mobile Arrow 3 */}
          <div className="flex justify-center">
            <div className="relative w-6 h-10 flex items-center justify-center">
              <svg className="w-6 h-10 absolute" fill="none" viewBox="0 0 24 40">
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 61, 129, 0.4)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '1.4s'
                  }} 
                />
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '1.4s'
                  }} 
                />
              </svg>
            </div>
          </div>

          {/* 4. Month 3 */}
          <div className="bg-[#fbf0f2] border border-[#ebd0d6] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#ebd0d6] text-[#a04a60] font-bold text-sm flex items-center justify-center shrink-0">4</div>
            <div>
              <div className="text-[#a04a60] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">Month 3</div>
              <div className="text-[#5c1d2e] font-sora font-bold text-base">Portfolio &amp; mock interviews</div>
            </div>
          </div>

          {/* Mobile Arrow 4 */}
          <div className="flex justify-center">
            <div className="relative w-6 h-10 flex items-center justify-center">
              <svg className="w-6 h-10 absolute" fill="none" viewBox="0 0 24 40">
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(74, 222, 128, 0.3)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '2.0s'
                  }} 
                />
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '2.0s'
                  }} 
                />
              </svg>
            </div>
          </div>

          {/* 5. After */}
          <div className="bg-[#eff5eb] border border-[#cbe0bf] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#cbe0bf] text-[#456f35] font-bold text-sm flex items-center justify-center shrink-0">5</div>
            <div>
              <div className="text-[#456f35] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">After</div>
              <div className="text-[#2d5020] font-sora font-bold text-base">Hired, 2-3x salary</div>
            </div>
          </div>

          {/* Mobile Arrow 5 */}
          <div className="flex justify-center">
            <div className="relative w-6 h-10 flex items-center justify-center">
              <svg className="w-6 h-10 absolute" fill="none" viewBox="0 0 24 40">
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(74, 222, 128, 0.3)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    filter: 'blur(2px)',
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '2.6s'
                  }} 
                />
                <path 
                  d="M12 2 L12 36 M19 29 L12 36 L5 29" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ 
                    strokeDasharray: 90,
                    strokeDashoffset: isVisible ? 0 : 90,
                    transition: 'stroke-dashoffset 0.5s ease-out',
                    transitionDelay: '2.6s'
                  }} 
                />
              </svg>
            </div>
          </div>

          {/* 6. Lifestyle shift */}
          <div className="bg-[#eff5eb] border border-[#cbe0bf] rounded-2xl p-5 shadow-md flex items-center gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-white border border-[#cbe0bf] text-[#456f35] font-bold text-sm flex items-center justify-center shrink-0">6</div>
            <div>
              <div className="text-[#456f35] font-bold text-[0.7rem] uppercase tracking-wider mb-0.5">Lifestyle shift</div>
              <div className="text-[#2d5020] font-sora font-bold text-base">Stable income, flexibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
