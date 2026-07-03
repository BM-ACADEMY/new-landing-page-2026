import React from 'react';

export default function MobileCTA({ onBookClick }) {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-60 block sm:hidden p-[10px_14px] bg-black/90 backdrop-blur-md border-t border-white/9">
      <button 
        onClick={onBookClick}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold p-4 rounded-xl"
      >
        🚀 Register for Free Webinar
      </button>
    </div>
  );
}
