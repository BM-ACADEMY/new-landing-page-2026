import React, { useState } from 'react';

export default function BookDemo({ isModal = false, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleBook = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);
    
    // WhatsApp details
    const waNumber = "919944940051";
    const program = "WordPress Pro";
    let msg = "Hi BM Academy 👋\n\nI'd like to book a free 1:1 demo.";
    msg += `\n\n📚 Program: ${program}`;
    msg += `\n👤 Name: ${name.trim()}`;
    msg += `\n📞 Mobile: ${phone.trim()}`;
    msg += "\n\nPlease confirm a slot. Thank you 🙏";

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");

    setIsSubmitting(false);

    if (isModal && onClose) {
      onClose();
    }
  };

  const formContent = (
    <div className={`bg-panel border border-white/9 rounded-2xl p-[30px_26px] mx-auto text-left relative ${isModal ? 'w-full' : 'max-w-[560px]'}`}>
      {isModal && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-4 text-muted-brand hover:text-white z-50 p-1.5 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {isModal && <div className="h-4" />}

      <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// free · 15 minutes · no pressure</span>
      <h2 className="font-sora font-extrabold text-[1.6rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
        Book your free 1:1 demo
      </h2>
      <p className="text-muted-brand text-[0.94rem] mt-3 mb-[22px] leading-relaxed">
        Get full clarity on skills, placement, and EMI options. Submitting the form opens WhatsApp directly to confirm your slot.
      </p>

      <div className="grid gap-[13px]">
        <input 
          id="name" 
          className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand"
          type="text" 
          placeholder="Your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
        <input 
          id="phone" 
          className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand"
          type="tel" 
          inputMode="numeric" 
          placeholder="Mobile number (10-digit)" 
          value={phone}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
        <button 
          className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06] disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleBook}
          disabled={isSubmitting}
        >
          Book on WhatsApp →
        </button>
      </div>
      
      {!isModal && (
        <p className="text-center text-[0.8rem] text-muted-brand mt-3.5">
          or call <a href="tel:+919944940051" className="text-pink-brand font-bold">099449 40051</a>
        </p>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="book" className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5">
        {formContent}
      </div>
    </section>
  );
}
