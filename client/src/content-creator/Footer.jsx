import React from 'react';

export default function Footer({ onBookClick }) {
  return (
    <footer className="py-12 bg-bg-dark border-t border-white/9 text-left">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr] gap-8 mb-8">
          <div>
            <a href="#" className="inline-block mb-4 p-2 bg-[#f9f9fb] rounded-xl shadow-md border border-white/10">
              <img src="/logo/logo.webp" alt="BM Academy Logo" className="h-8 w-auto object-contain block" />
            </a>
            <p className="text-muted-brand text-[0.88rem] leading-relaxed mb-6">
              BM Academy is a multi-vertical training institute empowering students through Digital Marketing, Content Creation, AI tools, Software Development, and Skill Training — built on integrity, innovation, and real-world skills.
            </p>
          </div>
          <div>
            <h4 className="font-sora font-semibold text-white text-base mb-4">Useful links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-brand hover:text-white transition-colors">Home</a></li>
              <li><a href="#skills" className="text-muted-brand hover:text-white transition-colors">Syllabus &amp; Skills</a></li>
              <li><a href="#tracks" className="text-muted-brand hover:text-white transition-colors">Course Tracks</a></li>
              <li><a href="#testimonials" className="text-muted-brand hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-brand hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
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
            </ul>
          </div>
          <div>
            <h4 className="font-sora font-semibold text-white text-base mb-4">Visit us</h4>
            <div className="rounded-2xl overflow-hidden border border-white/9">
              <iframe
                src="https://maps.google.com/maps?q=BM%20Academy%20Digital%20Marketing%20Kottakuppam%20Puducherry&z=16&output=embed"
                width="100%" height="150" style={{ border: 0, display: 'block' }} loading="lazy" title="BM Academy location"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="border-white/9 my-6" />
        <p className="text-center text-muted-brand text-[0.82rem]">
          Copyright {new Date().getFullYear()} © <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">BMTechx.in</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
