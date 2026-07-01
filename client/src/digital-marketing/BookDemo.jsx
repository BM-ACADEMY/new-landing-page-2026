import React, { useState, useEffect } from 'react';

export default function BookDemo({ selectedProgram }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const WA_NUMBER = "919944940051";
  const defaultProgram = "Digital Marketing Pro";

  const handleBook = () => {
    const program = selectedProgram || defaultProgram;
    let msg = "Hi BM Academy 👋\n\nI'd like to book a free 1:1 demo.";
    msg += `\n\n📚 Program: ${program}`;
    if (name.trim()) msg += `\n👤 Name: ${name.trim()}`;
    if (phone.trim()) msg += `\n📞 Mobile: ${phone.trim()}`;
    msg += "\n\nPlease confirm a slot. Thank you 🙏";

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="book" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="bg-panel border border-white/9 rounded-2xl p-[30px_26px] max-w-[560px] mx-auto text-left">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// free · 15 minutes · no pressure</span>
          <h2 className="font-sora font-extrabold text-[1.6rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
            Book your free 1:1 demo
          </h2>
          <p className="text-muted-brand text-[0.94rem] mt-3 mb-[22px]">
            Get full clarity on skills, placement, and EMI options. Submitting the form opens WhatsApp directly to confirm your slot.
          </p>
          
          {selectedProgram && (
            <div className="mb-4 p-3 bg-panel-2 border border-white/9 rounded-[11px] text-sm text-white">
              Selected Track: <strong className="text-pink-brand">{selectedProgram}</strong>
            </div>
          )}

          <div className="grid gap-[13px]">
            <input 
              id="name" 
              className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand"
              type="text" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              id="phone" 
              className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand"
              type="tel" 
              inputMode="numeric" 
              placeholder="Mobile number (10-digit)" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button 
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06]"
              onClick={handleBook}
            >
              Book on WhatsApp →
            </button>
          </div>
          <p className="text-center text-[0.8rem] text-muted-brand mt-3.5">
            or call <a href="tel:+919944940051" className="text-pink-brand font-bold">099449 40051</a>
          </p>
        </div>
      </div>
    </section>
  );
}
