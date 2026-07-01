import React from 'react';

export default function MobileCTA({ onBookClick }) {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-50 p-2.5 bg-[#0a0a12]/97 backdrop-blur-md border-t border-white/9 block sm:hidden">
      <button 
        onClick={onBookClick}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold py-3.5 rounded-[11px] cursor-pointer"
      >
        <svg className="w-5 h-5 mr-2 inline-block text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L13 10l-2.5-2.5z" />
          <path d="M12 9l9-9-3 12-2.5-2.5z" />
        </svg>
        Register for Free Webinar
      </button>
    </div>
  );
}
