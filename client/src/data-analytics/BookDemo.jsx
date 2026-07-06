import React, { useState } from 'react';

export default function BookDemo({ selectedProgram, isModal = false, onClose }) {
  const getInitialTrack = (prog) => {
    if (prog && prog.includes("Tier 1")) {
      return "Tier 1 · Skill Track";
    }
    return "Tier 2 · Placement Track";
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [track, setTrack] = useState(getInitialTrack(selectedProgram));
  const [dateTime, setDateTime] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleBook = async () => {
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
    if (!dateTime) {
      alert("Please select a date and time");
      return;
    }

    setIsSubmitting(true);
    const program = selectedProgram || "Data Analytics";
    const formattedDate = new Date(dateTime).toLocaleString();

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwze3EX5T2XHCo1QY_WWAkPYaKQRuFif69H8D7MyWsnfGbtX-zFi1JCqtZAGLH8eOk56w/exec";

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
          Track: track,
          DateTime: formattedDate,
          Note: note.trim(),
          Program: "Data Analytics",
          Timestamp: new Date().toLocaleString()
        })
      }).catch(err => console.error("Error sending to sheet:", err));
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto-close/reset logic
    if (isModal && onClose) {
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setName('');
        setPhone('');
        setLocation('');
        setDateTime('');
        setNote('');
      }, 3000);
    } else {
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setPhone('');
        setLocation('');
        setDateTime('');
        setNote('');
      }, 5000);
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
          <h3 className="font-sora font-extrabold text-[1.4rem] text-white mb-2">Booking Confirmed!</h3>
          <p className="text-muted-brand text-[0.9rem] leading-relaxed max-w-[360px] mx-auto">
            Thank you, <strong className="text-white">{name}</strong>! Your demo session has been successfully scheduled. We will contact you soon at <span className="text-pink-brand font-semibold">{phone}</span> to confirm your slot.
          </p>
        </div>
      ) : (
        <>
          {!isModal && (
            <>
              <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// free · 15 minutes · no pressure</span>
              <h2 className="font-sora font-extrabold text-[1.6rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
                Book your free demo
              </h2>
              <p className="text-muted-brand text-[0.94rem] mt-3 mb-[22px]">
                Get full clarity on skills, placement, and EMI options. Submit the form to schedule your session.
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
            <div className="flex flex-col gap-1.5">
              <label htmlFor="track" className="text-xs text-muted-brand px-1">Select Track</label>
              <select
                id="track"
                className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand cursor-pointer"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="Tier 1 · Skill Track">Tier 1 · Skill Track</option>
                <option value="Tier 2 · Placement Track">Tier 2 · Placement Track</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="dateTime" className="text-xs text-muted-brand px-1">Preferred Date &amp; Time</label>
              <input
                id="dateTime"
                className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand cursor-pointer"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                onClick={(e) => {
                  try {
                    e.target.showPicker();
                  } catch (err) { }
                }}
                disabled={isSubmitting}
              />
            </div>
            <textarea
              id="note"
              className="w-full p-[13px_14px] border border-white/9 rounded-[11px] bg-bg-dark text-white font-sans focus:outline-none focus:border-pink-brand min-h-[80px]"
              placeholder="Message/Note (Optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              disabled={isSubmitting}
            />
            <button
              className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border-none bg-gradient-to-r from-pink-brand via-violet-brand to-blue-brand text-white transition-all duration-200 hover:brightness-[1.06] disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleBook}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Scheduling..." : "Book"}
            </button>
          </div>

          {!isModal && (
            <p className="text-center text-[0.8rem] text-muted-brand mt-3.5">
              or call <a href="tel:+919944940051" className="text-pink-brand font-bold">099449 40051</a>
            </p>
          )}
        </>
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
