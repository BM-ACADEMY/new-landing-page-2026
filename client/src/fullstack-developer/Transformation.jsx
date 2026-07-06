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

    const currentRef = containerRef.current;
    const elements = currentRef ? currentRef.querySelectorAll('.reveal') : [];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const steps = [
    {
      id: 1,
      tag: "BEFORE",
      title: "Learning from YouTube?",
      desc: "Watching tutorials but struggling to build complete applications on your own.",
      bg: "bg-[#f4f1eb]",
      border: "border-[#d6d2c4]",
      textColor: "text-[#333333]",
      tagColor: "text-[#7b776c]"
    },
    {
      id: 2,
      tag: "LEARN",
      title: "Master Industry Technologies",
      desc: "HTML • CSS • JavaScript • React • Node.js • Express • MongoDB",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]"
    },
    {
      id: 3,
      tag: "BUILD",
      title: "Develop Real Projects",
      desc: "Create responsive websites, dashboards, authentication systems, and REST APIs.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]"
    },
    {
      id: 4,
      tag: "DEPLOY",
      title: "Publish Like a Professional",
      desc: "Host your applications on the cloud and learn Git & GitHub collaboration.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]"
    },
    {
      id: 5,
      tag: "PORTFOLIO",
      title: "Show Your Skills",
      desc: "Build a recruiter-ready portfolio with multiple production-level projects.",
      bg: "bg-[#fbf0f2]",
      border: "border-[#ebd0d6]",
      textColor: "text-[#5c1d2e]",
      tagColor: "text-[#a04a60]"
    },
    {
      id: 6,
      tag: "CAREER READY",
      title: "Crack Developer Interviews",
      desc: "Resume preparation, mock interviews, placement guidance, and job support.",
      bg: "bg-[#eff5eb]",
      border: "border-[#cbe0bf]",
      textColor: "text-[#2d5020]",
      tagColor: "text-[#456f35]"
    }
  ];

  return (
    <section id="roadmap" className="py-[58px] bg-bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(124,92,252,0.05),transparent_65%)] pointer-events-none"></div>

      <div className="max-w-[860px] mx-auto px-5" ref={containerRef}>
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand block text-center mb-2">// STUDENT JOURNEY</span>
        <h2 className="font-sora font-extrabold text-[2rem] sm:text-[2.6rem] leading-[1.12] text-center text-white mb-4 reveal">
          Student Journey
        </h2>
        {/* <p className="text-muted-brand text-[1.02rem] text-center mb-16 max-w-[620px] mx-auto reveal">
          This is the actual journey most of our students go through — not a sales pitch, just the pattern we see batch after batch.
        </p> */}

        {/* Timeline Container */}
        <div className="relative wrap overflow-hidden p-0 h-full">
          {/* Vertical Center Line */}
          <div className="absolute border-opacity-20 border-white h-full border-l-2 left-[20px] md:left-1/2 -translate-x-[1px]"></div>

          <div className="space-y-8 relative">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`reveal flex flex-col md:flex-row items-start md:items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
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
