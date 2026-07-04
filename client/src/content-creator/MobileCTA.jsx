import React from 'react';

export default function MobileCTA({ onBookClick }) {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-40 block sm:hidden p-[10px_14px] bg-[#0A0A12]/97 backdrop-blur-[10px] border-t border-white/9">
      <button 
        onClick={onBookClick}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold p-3.5 rounded-xl cursor-pointer"
      >
        🚀 Book Free 1:1 Demo
      </button>
    </div>
  );
}
