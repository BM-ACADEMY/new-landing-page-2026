import React from 'react';
import { useNavigate } from 'react-router-dom';

const pathData = [
  {
    id: 1,
    title: "DIGITAL MARKETING WEBINAR",
    description: "Learn Meta & Google Ads, SEO, and AI marketing tools by running real live campaigns — not just watching videos. Open to students from any background.",
    image: "/Home/Marketing.png",
    path: "/digital-marketing",
  },
  {
    id: 2,
    title: "AI TOOLS MASTERY",
    description: "Master ChatGPT, Gemini, Claude & automation tools in 4 weeks. Work 10x faster in any career. Free 1:1 demo session.",
    image: "/Home/ai.png",
    path: "/ai-tools",
  },
  {
    id: 3,
    title: "CONTENT CREATOR",
    description: "Turn content creation into real income in 6 weeks. Learn hooks, editing & brand content systematically. Free 1:1 demo.",
    image: "/Home/content-creator.png",
    path: "/content-creator",
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6" style={{ backgroundColor: '#625E5E' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Radial Gradient overlay to create a spotlight/vignette effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#4A4747]/60 to-[#3A3737]/90"></div>

      <div className="text-center mb-12 relative z-10 w-full max-w-6xl mx-auto">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-12 uppercase tracking-wide"
          style={{ 
            color: '#F4C829', 
            fontFamily: '"Arial Black", Impact, sans-serif',
            WebkitTextStroke: '1px rgba(0,0,0,0.1)'
          }}
        >
          CHOOSE YOUR PATH
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mx-auto w-full">
          {pathData.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate(item.path)}
              className="group cursor-pointer rounded overflow-hidden flex flex-col transition-transform hover:-translate-y-1 w-full max-w-[320px]"
              style={{ backgroundColor: '#101010', minHeight: '400px' }}
            >
              {/* Image area */}
              <div className="w-full h-48 relative overflow-hidden bg-[#101010] border-b border-white/20">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-inter)' }}>{item.title}</h2>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">LEARN_MORE</span>
                </div>
                
                {/* Bottom right dark button */}
                <div className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center" style={{ backgroundColor: '#1A212D' }}>
                  <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
