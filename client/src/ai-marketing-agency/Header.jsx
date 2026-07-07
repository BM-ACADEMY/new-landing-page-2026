import React from 'react';

export default function Header({ onRegister }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
        <div className="wrap flex items-center justify-between h-[76px]">
          <a href="#" className="flex items-center">
            <img src="/logo/logo.webp" alt="BM Academy Logo" className="h-14 w-auto object-contain" />
          </a>
          <button
            onClick={(e) => { e.preventDefault(); onRegister && onRegister(); }}
            className="btn btn-primary hidden sm:inline-flex cursor-pointer"
            style={{ padding: '10px 18px', fontSize: '0.85rem', borderRadius: '10px', border: 'none' }}
          >
            Register for Free Webinar
          </button>
        </div>
      </header>
      <div className="bg-panel-2 border-b border-white/9 text-[0.78rem] text-muted-brand py-2">
        <div className="wrap flex flex-wrap gap-[18px] justify-center items-center">
          <span><b className="text-amber-500">★★★★★ 4.9</b> on Google (35 reviews)</span>
          <span><b className="text-white">1,400+</b> students trained</span>
          <span><b className="text-white">150+</b> students placed</span>
          <span>Part of <b className="text-white">ABM Groups</b></span>
        </div>
      </div>
    </>
  );
}
