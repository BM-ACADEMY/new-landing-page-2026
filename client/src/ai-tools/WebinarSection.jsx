import React from 'react';

export default function WebinarSection({ onBookClick }) {
  return (
    <section id="webinar" className="py-[58px] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,176,32,0.06),transparent_65%)] pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#f7367a]">// FREE Live Webinar </span>
        <h2 className="font-sora font-extrabold text-[1.35rem] sm:text-[1.8rem] leading-[1.14] tracking-[-0.025em] mt-3 mb-4 text-white">
          AI is Changing Every Career. Are You Ready?
        </h2>
        <p className="text-muted-brand text-[0.96rem] sm:text-[1.05rem] leading-relaxed max-w-[700px] mx-auto mb-10">
          Join our FREE Live AI Webinar to discover how AI tools can boost your productivity, enhance your skills, and open new career opportunities—no coding or technical background required.
        </p>

        {/* Mac OS Terminal Style Window Container */}
        <div className="reveal bg-panel border border-white/9 rounded-[20px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] text-left relative overflow-hidden">
          
          {/* Gold 100% FREE Ribbon */}
          <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none z-20">
            <div className="bg-[#FFB020] text-black font-black text-[0.7rem] uppercase tracking-wider text-center py-1.5 w-[140px] absolute top-5 -right-9 rotate-45 shadow-lg select-none">
              100% FREE
            </div>
          </div>

          {/* Window Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/9 bg-black/20">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FFB020] uppercase font-sora">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Webinar
            </div>
            <div className="w-12"></div>
          </div>

          <div className="p-5 sm:p-7 space-y-5">
            {/* Date display */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[#FFB020]/20 bg-[#FFB020]/[0.02] shadow-[0_0_20px_rgba(255,176,32,0.03)] relative overflow-hidden group">
              <div className="absolute inset-y-0 left-0 w-[4px] bg-[#FFB020]"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFB020]/10 border border-[#FFB020]/20 flex items-center justify-center text-[#FFB020]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-sora font-extrabold text-white text-[1.05rem]">July 18, 2026</div>
                  <div className="text-xs text-[#FFB020] font-semibold mt-0.5">Saturday · 5:00 PM – 6:00 PM</div>
                </div>
              </div>
              <span className="text-xs font-extrabold text-[#FFB020] border border-[#FFB020]/30 bg-[#FFB020]/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                Next Batch
              </span>
            </div>

            {/* Mode & Fee info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-panel-2 border border-white/5 rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#FFB020] mb-2.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                  </svg>
                </div>
                <span className="text-xs text-muted-brand uppercase tracking-wider">Mode</span>
                <span className="font-sora font-bold text-white text-sm mt-1">Online Live Webinar</span>
                <span className="text-[0.7rem] text-muted-brand mt-0.5">(Zoom / Google Meet)</span>
              </div>

              <div className="bg-panel-2 border border-white/5 rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#FFB020] mb-2.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1M10 21h4a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-muted-brand uppercase tracking-wider">Webinar Fee</span>
                <span className="font-sora font-bold text-green-brand text-sm mt-1">100% Free</span>
                <span className="text-[0.7rem] text-muted-brand mt-0.5">(Register today)</span>
              </div>
            </div>

            {/* Bonus Banner bar */}
            <div className="border border-[#FFB020]/20 bg-[#FFB020]/5 rounded-lg p-3.5 px-4 flex items-center gap-3">
              <span className="text-lg">🎁</span>
              <div className="text-xs sm:text-sm text-[#DAD4EC]">
                <strong className="text-[#FFB020]">Bonus Included:</strong> Every attendee receives a <strong className="text-white">Hard Copy Certificate</strong> to mark the beginning of their journey.
              </div>
            </div>

          </div>
        </div>

        {/* Register Button below the window */}
        <div className="mt-8">
          <button 
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-8 py-4 rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white shadow-[0_14px_34px_-12px_rgba(255,61,129,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-[1.06]"
          >
            Register for the Free Webinar →
          </button>
        </div>
      </div>
    </section>
  );
}
