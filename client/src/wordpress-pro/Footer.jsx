import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/9 bg-bg-dark text-muted-brand text-[0.82rem] leading-relaxed">
      <div className="max-w-[1080px] mx-auto px-5">
        <a href="#" className="font-sora font-extrabold text-[1rem] text-white inline-block mb-2">
          BM<span className="gradtext">Academy</span>
        </a>
        <p className="mt-1">Digital Marketing, Full Stack Development, IT &amp; Skill Training Institute</p>
        <p className="mt-1">252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104 · Part of ABM Groups</p>
        <p className="mt-1">1,400+ trained · 150+ placed · 4.9★ on Google (35 reviews)</p>
      </div>
    </footer>
  );
}
