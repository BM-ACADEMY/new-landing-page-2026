import React, { useEffect, useRef } from 'react';

export default function Roadmap() {
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
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal') || [];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const steps = [
    {
      id: 1,
      tag: "Before",
      title: "Using AI casually",
      desc: "Uses ChatGPT occasionally with inconsistent, mediocre results. Not applying it to real work.",
      bg: "bg-[#f4f1eb]",
      border: "border-[#d6d2c4]",
      textColor: "text-[#333333]",
      tagColor: "text-[#7b776c]",
      descColor: "text-[#555555]"
    },
    {
      id: 2,
      tag: "Week 1",
      title: "Structured prompting",
      desc: "Learns professional prompting — output quality jumps immediately.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      descColor: "text-[#7a3b4c]"
    },
    {
      id: 3,
      tag: "Week 2",
      title: "Creating with AI",
      desc: "Generates content and images at a level usable for real work, not just experiments.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      descColor: "text-[#7a3b4c]"
    },
    {
      id: 4,
      tag: "Week 3",
      title: "Automating tasks",
      desc: "Sets up automations that save hours of manual work every week.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      descColor: "text-[#7a3b4c]"
    },
    {
      id: 5,
      tag: "After",
      title: "10x faster at work",
      desc: "Applies AI tools daily, completing tasks in a fraction of the previous time.",
      bg: "bg-[#eff5eb]",
      border: "border-[#cbe0bf]",
      textColor: "text-[#2d5020]",
      tagColor: "text-[#456f35]",
      descColor: "text-[#3b5c2e]"
    },
    {
      id: 6,
      tag: "Lifestyle shift",
      title: "Future-ready edge",
      desc: "A foundation skill that keeps paying off as AI becomes part of every career.",
      bg: "bg-[#eff5eb]",
      border: "border-[#cbe0bf]",
      textColor: "text-[#2d5020]",
      tagColor: "text-[#456f35]",
      descColor: "text-[#3b5c2e]"
    }
  ];

  return (
    <section id="roadmap" className="py-[58px] bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(124,92,252,0.05),transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-[860px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// student journey</span>
        <h2 className="font-sora font-extrabold text-[2rem] sm:text-[2.6rem] leading-[1.12] text-center text-white mb-16 uppercase">
          STUDENT JOURNEY
        </h2>

        {/* Timeline Container */}
        <div className="relative wrap overflow-hidden p-0 h-full">
          {/* Vertical Center Line */}
          <div className="absolute border-opacity-20 border-white h-full border-l-2 left-[20px] md:left-1/2 -translate-x-[1px]"></div>
          
          <div className="space-y-8 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className={`reveal flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Space holder for desktop to push item to one side */}
                <div className="hidden md:block w-[calc(50%-30px)]"></div>
                
                {/* Timeline Dot (Numbered) */}
                <div className="z-20 flex items-center justify-center bg-violet-brand text-white font-sora font-extrabold text-sm w-8 h-8 rounded-full absolute left-[4px] md:left-1/2 md:-translate-x-1/2 border-2 border-bg-dark shadow-[0_0_15px_rgba(124,92,252,0.3)]">
                  {step.id}
                </div>
                
                {/* Card */}
                <div className={`order-2 border backdrop-blur-md rounded-2xl p-5 w-[calc(100%-40px)] ml-10 md:ml-0 md:w-[calc(50%-30px)] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-left ${step.bg} ${step.border}`}>
                  <div>
                    <div className={`font-bold text-[0.72rem] uppercase tracking-wider mb-0.5 ${step.tagColor}`}>
                      {step.tag}
                    </div>
                    <div className={`font-sora font-bold text-sm sm:text-base leading-snug ${step.textColor}`}>
                      {step.title}
                    </div>
                    <div className={`text-xs mt-1.5 leading-relaxed ${step.descColor}`}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
