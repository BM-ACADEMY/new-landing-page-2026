import React, { useEffect, useRef } from 'react';

export default function Transformation() {
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

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      tag: "START HERE",
      title: "Anyone can join",
      desc: "No degree, no age limit, no prior experience — just enroll and begin.",
      bg: "bg-[#fcfaf2]",
      border: "border-[#ebdcc3]",
      textColor: "text-[#3a352a]",
      tagColor: "text-[#a08450]",
      dotBg: "bg-lime-brand text-black shadow-[0_0_15px_rgba(198,242,78,0.4)]"
    },
    {
      id: 2,
      tag: "WEEK 1",
      title: "Hook & Script Writing",
      desc: "Writing hooks and scripts that stop the scroll and hold attention.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      dotBg: "bg-pink-brand text-white shadow-[0_0_15px_rgba(255,61,129,0.4)]"
    },
    {
      id: 3,
      tag: "WEEK 2-3",
      title: "Shooting & Editing",
      desc: "Phone shooting techniques, pacing, transitions, and real edits.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      dotBg: "bg-pink-brand text-white shadow-[0_0_15px_rgba(255,61,129,0.4)]"
    },
    {
      id: 4,
      tag: "WEEK 4",
      title: "Client Content",
      desc: "Creating content for a real or simulated client — portfolio-ready.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      dotBg: "bg-pink-brand text-white shadow-[0_0_15px_rgba(255,61,129,0.4)]"
    },
    {
      id: 5,
      tag: "WEEK 5",
      title: "Personal Brand",
      desc: "Building your own content brand and portfolio alongside client work.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      dotBg: "bg-pink-brand text-white shadow-[0_0_15px_rgba(255,61,129,0.4)]"
    },
    {
      id: 6,
      tag: "WEEK 6",
      title: "Posting Strategy & Growth",
      desc: "Analytics, posting strategy, and turning content into consistent income.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]",
      dotBg: "bg-pink-brand text-white shadow-[0_0_15px_rgba(255,61,129,0.4)]"
    },
    {
      id: 7,
      tag: "YOU CAN NOW",
      title: "Start earning from content",
      desc: "Take on paid brand collaborations and client projects — with a real portfolio to show.",
      bg: "bg-[#eff5eb]",
      border: "border-[#cbe0bf]",
      textColor: "text-[#2d5020]",
      tagColor: "text-[#456f35]",
      dotBg: "bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
    }
  ];

  return (
    <section id="roadmap" className="py-[58px] bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(124,92,252,0.05),transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-[860px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// the real transformation</span>
        <h2 className="font-sora font-extrabold text-[2rem] sm:text-[2.6rem] leading-[1.12] text-center text-white mb-4">
          No degree. No tech background. Here's what changes.
        </h2>
        <p className="text-muted-brand text-[1.02rem] text-center mb-16 max-w-[620px] mx-auto">
          This is the actual journey most of our students go through — not a sales pitch, just the pattern we see batch after batch.
        </p>

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
                <div className={`z-20 flex items-center justify-center font-sora font-extrabold text-sm w-8 h-8 rounded-full absolute left-[4px] md:left-1/2 md:-translate-x-1/2 border-2 border-bg-dark ${step.dotBg}`}>
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
                    <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
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
