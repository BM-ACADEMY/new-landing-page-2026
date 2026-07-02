import React from 'react';

export default function Footer({ onBookClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-bg-dark border-t border-white/9 text-left">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr] gap-8 mb-8">
          {/* Column 1: Logo, description, socials */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img src="/logo/logo.webp" alt="BM Academy Logo" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-muted-brand text-[0.88rem] leading-relaxed mb-6">
              BM Academy is a multi-vertical training institute empowering students through Digital Marketing, AI tools, Software Development, and Skill Training — built on integrity, innovation, and real-world skills.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/learnwithkamar.ai/" target="_blank" rel="noopener noreferrer" title="Instagram" className="p-2 bg-panel rounded-lg border border-white/9 hover:border-pink-brand transition-colors">
                <svg className="w-4 h-4 text-muted-brand hover:text-pink-brand transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568398556096" target="_blank" rel="noopener noreferrer" title="Facebook" className="p-2 bg-panel rounded-lg border border-white/9 hover:border-blue-brand transition-colors">
                <svg className="w-4 h-4 text-muted-brand hover:text-blue-brand transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@LEARNWITHKAMAR" target="_blank" rel="noopener noreferrer" title="YouTube" className="p-2 bg-panel rounded-lg border border-white/9 hover:border-red-500 transition-colors">
                <svg className="w-4 h-4 text-muted-brand hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/abm-bm-academy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 bg-panel rounded-lg border border-white/9 hover:border-blue-500 transition-colors">
                <svg className="w-4 h-4 text-muted-brand hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful links */}
          <div>
            <h4 className="font-sora font-semibold text-white text-base mb-4">Useful links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-brand hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-brand hover:text-white transition-colors">Syllabus &amp; Skills</a>
              </li>
              <li>
                <a href="#tracks" className="text-muted-brand hover:text-white transition-colors">Course Tracks</a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-brand hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-muted-brand hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <button onClick={onBookClick} className="text-muted-brand hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left">
                  Book Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in touch */}
          <div>
            <h4 className="font-sora font-semibold text-white text-base mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-brand">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-pink-brand flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919944940051" className="hover:text-white transition-colors">+91 99449 40051</a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-pink-brand flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-pink-brand font-bold mt-1">1,400+ Trained · 150+ Placed</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit Us (Map) */}
          <div>
            <h4 className="font-sora font-semibold text-white text-base mb-4">Visit us</h4>
            <div className="rounded-2xl overflow-hidden border border-white/9">
              <iframe
                src="https://maps.google.com/maps?q=BM%20Academy%20Digital%20Marketing%20Kottakuppam%20Puducherry&z=16&output=embed"
                width="100%" 
                height="150" 
                style={{ border: 0, display: 'block' }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
                title="BM Academy location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="border-white/9 my-6" />
        
        <p className="text-center text-muted-brand text-[0.82rem]">
          Copyright {currentYear} © <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">BMTechx.in</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
