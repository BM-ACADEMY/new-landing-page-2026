import React from 'react';

export default function FinalCTA({ onBookClick }) {
  return (
    <section className="py-[58px] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand opacity-[0.08] pointer-events-none"></div>
      <div className="max-w-[1080px] mx-auto px-5 relative">
        <h2 className="font-sora font-extrabold text-[1.6rem] sm:text-[2.3rem] leading-[1.12] text-white">
          New batch seats are filling fast.<br />Start your digital marketing career today.
        </h2>
        <p className="text-muted-brand max-w-[520px] mx-auto mt-4">
          15 minutes. Zero pressure. Your first real step toward a job.
        </p>
        <button 
          onClick={onBookClick}
          className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white shadow-[0_14px_34px_-12px_rgba(255,61,129,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-[1.06] mt-[26px]"
        >
          Register for Free Webinar →
        </button>
        <div className="font-bold text-[1.15rem] text-white mt-[18px]">📞 099449 40051</div>
      </div>
    </section>
  );
}
