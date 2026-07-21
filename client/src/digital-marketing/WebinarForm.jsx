import React, { useState } from 'react';

export default function WebinarForm({ isModal = false, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleRegister = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!location.trim()) {
      alert("Please enter your location");
      return;
    }
    if (!currentStatus) {
      alert("Please select your current status");
      return;
    }

    setIsSubmitting(true);

    // Replace with the Google Apps Script Web App URL after deployment
    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx4nINIVZHbDQdTjwURFd4vYSNPWLnR2uX4wQhT0VfamVMi7zD9zAP_59HzYV-BSPfn/exec";
    
    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name: name.trim(),
          Phone: phone.trim(),
          Location: location.trim(),
          CurrentStatus: currentStatus,
          Message: message.trim(),
          Timestamp: new Date().toLocaleString() 
        })
      }).catch(err => console.error("Error sending to sheet:", err));
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    if (window.fbq) {
      window.fbq('track', 'CompleteRegistration');
    }
    
    // Auto-close modal after 3 seconds if in modal mode
    if (isModal && onClose) {
      setTimeout(() => {
        onClose();
      }, 3000);
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

      {isModal && (
        <div className="h-4" />
      )}

      {isSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-brand animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-sora font-extrabold text-[1.4rem] text-white mb-2">Registration Confirmed!</h3>
          <p className="text-muted-brand text-[0.9rem] leading-relaxed max-w-[360px] mx-auto">
            Thank you, <strong className="text-white">{name}</strong>! Your seat for the webinar has been successfully reserved. We will share the joining link to <span className="text-pink-brand font-semibold">{phone}</span> shortly.
          </p>
        </div>
      ) : (
        <>
          {!isModal && (
            <>
              <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// 100% free webinar</span>
              <h2 className="font-sora font-extrabold text-[1.6rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
                Register for the Free Webinar
              </h2>
              <p className="text-muted-brand text-[0.94rem] mt-3 mb-[22px]">
                Learn the exact roadmap to start your Digital Marketing career. Fill out the form below to secure your spot.
              </p>
            </>
          )}

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
              placeholder="Mobile number (10-digit only)" 
              value={phone}
              onChange={handlePhoneChange}
              disabled={isSubmitting}
            />
            <input 
              id="location" 
              className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand"
              type="text" 
              placeholder="Your location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isSubmitting}
            />
            
            <div className="flex flex-col gap-1.5 relative">
              <select
                id="currentStatus"
                className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand appearance-none cursor-pointer"
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="" disabled className="text-muted-brand">Select Current Status</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-brand">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <textarea 
              id="message" 
              className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand min-h-[80px]"
              placeholder="Message/Note (Optional)" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />
            
            <button 
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              onClick={handleRegister}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Reserve My Seat"}
            </button>
          </div>
        </>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="webinar-register" className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {formContent}
      </div>
    </section>
  );
}
