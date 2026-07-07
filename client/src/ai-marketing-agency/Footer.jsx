import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 0 30px', textAlign: 'left', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr] gap-8 mb-8">
          <div>
            <div className="brand" style={{ display: 'inline-flex', marginBottom: '16px', justifyContent: 'flex-start' }}>
              <span className="logo">BM</span> <span style={{ color: 'white', fontWeight: 800 }}>Academy</span>
            </div>
            <p style={{ textAlign: 'left', marginBottom: '24px', lineHeight: '1.6', color: 'var(--muted)', fontSize: '0.88rem' }}>
              BM Academy is a multi-vertical training institute empowering students through Digital Marketing, AI tools, Software Development, and Skill Training — built on integrity, innovation, and real-world skills.
            </p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a href="https://www.instagram.com/learnwithkamar.ai/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '10px', backgroundColor: 'var(--panel)', borderRadius: '10px', border: '1px solid var(--line)', transition: 'border-color 0.2s, color 0.2s' }}>
                <svg style={{ width: '18px', height: '18px', color: 'var(--muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568398556096" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '10px', backgroundColor: 'var(--panel)', borderRadius: '10px', border: '1px solid var(--line)', transition: 'border-color 0.2s, color 0.2s' }}>
                <svg style={{ width: '18px', height: '18px', color: 'var(--muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@LEARNWITHKAMAR" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '10px', backgroundColor: 'var(--panel)', borderRadius: '10px', border: '1px solid var(--line)', transition: 'border-color 0.2s, color 0.2s' }}>
                <svg style={{ width: '18px', height: '18px', color: 'var(--muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/abm-bm-academy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '10px', backgroundColor: 'var(--panel)', borderRadius: '10px', border: '1px solid var(--line)', transition: 'border-color 0.2s, color 0.2s' }}>
                <svg style={{ width: '18px', height: '18px', color: 'var(--muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-[Sora] font-semibold text-white text-base mb-4">Useful links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px', fontSize: '0.88rem' }}>
              <li><a href="#" className="text-[#9A968C] hover:text-[#F5B301] transition-colors">Home</a></li>
              <li><a href="#curriculum" className="text-[#9A968C] hover:text-[#F5B301] transition-colors">Curriculum</a></li>
              <li><a href="#bonuses" className="text-[#9A968C] hover:text-[#F5B301] transition-colors">Bonuses</a></li>
              <li><a href="#testimonials" className="text-[#9A968C] hover:text-[#F5B301] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-[#9A968C] hover:text-[#F5B301] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[Sora] font-semibold text-white text-base mb-4">Get in touch</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '14px', fontSize: '0.88rem', color: '#9A968C' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg style={{ width: '16px', height: '16px', color: '#F5B301', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+9109944940051" className="hover:text-white transition-colors" style={{ transition: 'color 0.2s' }}>+91 099449 40051</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <svg style={{ width: '16px', height: '16px', color: '#F5B301', flexShrink: 0, marginTop: '3px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ textAlign: 'left', lineHeight: '1.5' }}>252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[Sora] font-semibold text-white text-base mb-4">Visit us</h4>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=BM%20Academy%20Digital%20Marketing%20Kottakuppam%20Puducherry&z=16&output=embed"
                width="100%" height="150" style={{ border: 0, display: 'block' }} loading="lazy" title="BM Academy location"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="border-white/10 my-6" />
        <p className="text-center text-[#9A968C] text-[0.82rem]" style={{ margin: 0 }}>
          Copyright {new Date().getFullYear()} © <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B301] transition-colors font-semibold">BMTechx.in</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
