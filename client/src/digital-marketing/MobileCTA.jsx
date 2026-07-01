import React from 'react';

export default function MobileCTA() {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-50 p-2.5 bg-[#0a0a12]/97 backdrop-blur-md border-t border-white/9 block sm:hidden">
      <a 
        href="#book" 
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white font-bold py-3.5 rounded-[11px]"
      >
        🚀 Book Free 1:1 Demo
      </a>
    </div>
  );
}
