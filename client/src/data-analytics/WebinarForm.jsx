import React, { useState } from 'react';

export default function WebinarForm({ isModal = false, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [currentStatus, setCurrentStatus] = useState('College Student');
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
      alert("Please enter a valid 10-digit WhatsApp number");
      return;
    }
    if (!location.trim()) {
      alert("Please enter your location");
      return;
    }

    setIsSubmitting(true);

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxsOGaZv_rf8OH09ltxdclLrdl9Z26BxeYL8WCSFxT5MBAMqWN0Fju7MsW6VodWm5eLiQ/exec";
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
          Program: "Data Analytics",
          Timestamp: new Date().toLocaleString()
        })
      }).catch(err => console.error("Error sending to sheet:", err));
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    if (isModal && onClose) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const formContent = (
    <div className={`bg-panel border border-white/9 rounded-[20px] p-[32px_28px] mx-auto text-left relative ${isModal ? 'w-full shadow-2xl' : 'max-w-[480px]'}`}>
      
      {isModal && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-brand hover:text-white z-50 p-2 cursor-pointer transition-colors bg-white/5 hover:bg-white/10 rounded-full"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {isSuccess ? (
        <div className="text-center py-10 px-4">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-full animate-ping"></div>
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-sora font-extrabold text-[1.6rem] text-white mb-3 tracking-tight">Registration Successful!</h3>
          <p className="text-muted-brand text-[0.95rem] leading-relaxed max-w-[320px] mx-auto mb-6">
            Awesome <strong className="text-white">{name}</strong>! We've reserved your spot for the FREE webinar.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block text-left mb-2 w-full max-w-[320px]">
            <div className="text-xs text-muted-brand uppercase tracking-wider font-semibold mb-1">What happens next?</div>
            <div className="text-sm text-[#DAD4EC] flex items-start gap-2">
              <span className="text-[#FFB020] mt-0.5">📱</span>
              You will receive the Zoom/Meet link on your WhatsApp number shortly.
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8 pr-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-red-400">Live Session</span>
            </div>
            <h2 className="font-sora font-extrabold text-[1.7rem] sm:text-[2rem] leading-[1.15] tracking-[-0.03em] text-white mb-2">
              Register for Webinar
            </h2>
            <p className="text-muted-brand text-[0.92rem] leading-relaxed">
              Fill in your details to secure your spot for the upcoming free webinar session.
            </p>
          </div>

          <div className="grid gap-[16px]">
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-muted-brand group-focus-within:text-[#FFB020] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input 
                id="webinar_name" 
                className="w-full pl-11 pr-4 py-3.5 border border-white/10 rounded-xl bg-black/40 text-white font-sans focus:outline-none focus:border-[#FFB020] transition-colors placeholder:text-muted-brand"
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-muted-brand group-focus-within:text-[#FFB020] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                id="webinar_phone" 
                className="w-full pl-11 pr-4 py-3.5 border border-white/10 rounded-xl bg-black/40 text-white font-sans focus:outline-none focus:border-[#FFB020] transition-colors placeholder:text-muted-brand"
                type="tel" 
                inputMode="numeric" 
                placeholder="WhatsApp Number" 
                value={phone}
                onChange={handlePhoneChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Location Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-muted-brand group-focus-within:text-[#FFB020] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input 
                id="webinar_location" 
                className="w-full pl-11 pr-4 py-3.5 border border-white/10 rounded-xl bg-black/40 text-white font-sans focus:outline-none focus:border-[#FFB020] transition-colors placeholder:text-muted-brand"
                type="text" 
                placeholder="City / Location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            {/* Status Select */}
            <div className="relative group mt-1">
              <label htmlFor="webinar_status" className="block text-xs font-semibold uppercase tracking-wider text-muted-brand mb-1.5 ml-1">Current Status</label>
              <select 
                id="webinar_status" 
                className="w-full px-4 py-3.5 border border-white/10 rounded-xl bg-black/40 text-white font-sans focus:outline-none focus:border-[#FFB020] transition-colors cursor-pointer appearance-none"
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="College Student">College Student</option>
                <option value="Fresh Graduate">Fresh Graduate</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute top-[38px] right-4 pointer-events-none text-muted-brand">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <button 
              className="w-full mt-4 flex items-center justify-center gap-3 font-bold text-base px-[26px] py-[16px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-[#FFB020] to-[#F29F05] text-black shadow-[0_10px_30px_-10px_rgba(255,176,32,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-10px_rgba(255,176,32,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleRegister}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Confirm Registration
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
            <div className="text-center mt-2">
              <span className="text-xs text-muted-brand">By registering, you agree to receive webinar updates on WhatsApp.</span>
            </div>
          </div>
        </>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section className="py-[58px] bg-bg-dark">
      <div className="max-w-[1080px] mx-auto px-5">
        {formContent}
      </div>
    </section>
  );
}
