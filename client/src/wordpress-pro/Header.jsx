import React from 'react';

export default function Header({ onBookClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-[1080px] mx-auto px-5 flex items-center justify-between h-[76px]">
        <a href="#" className="flex items-center">
          <img src="/logo/logo.webp" alt="BM Academy Logo" className="h-14 w-auto object-contain" />
        </a>
        <button 
          onClick={onBookClick}
          className="hidden sm:inline-flex gap-2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold text-[0.85rem] px-[18px] py-2.5 rounded-[10px] transition-transform duration-200 hover:-translate-y-[1px] hover:brightness-[1.08] cursor-pointer"
        >
          Book Free 1:1 Demo
        </button>
      </div>
    </header>
  );
}

