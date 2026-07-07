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

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz0vdNWxM0bN466FSy3Q8M7rB2xJ0qJdVOCOGFiq4sSAiZWQla_46lKrDIAv0tO4WFtlg/exec";
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
          Program: "AI Marketing Agency",
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
    <div className={`wform relative ${isModal ? 'w-full' : 'max-w-[560px] mx-auto'}`}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '8px' }}
          aria-label="Close modal"
        >
          <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {isSuccess ? (
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div style={{ width: '64px', height: '64px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <svg style={{ width: '32px', height: '32px', color: 'var(--green)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>Registration Confirmed!</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '360px', margin: '0 auto' }}>
            Thank you, <strong style={{ color: '#fff' }}>{name}</strong>! Your seat for the webinar has been successfully reserved. We will share the joining link to <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{phone}</span> shortly.
          </p>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '24px', paddingRight: '24px' }}>
            <h2 style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: '1.5rem', color: '#fff', margin: 0, lineHeight: 1.2 }}>Register for Free Webinar</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '8px', marginBottom: 0 }}>Secure your spot to learn how to build your agency.</p>
          </div>
          <div className="wform-grid">
            <input
              id="name"
              className="wform-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
            <input
              id="phone"
              className="wform-input"
              type="tel"
              inputMode="numeric"
              placeholder="Mobile number (10-digit only)"
              value={phone}
              onChange={handlePhoneChange}
              disabled={isSubmitting}
            />
            <input
              id="location"
              className="wform-input"
              type="text"
              placeholder="Your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isSubmitting}
            />

            <div style={{ position: 'relative' }}>
              <select
                id="currentStatus"
                className="wform-input"
                style={{ appearance: 'none', cursor: 'pointer' }}
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="" disabled style={{ color: 'var(--muted)' }}>Select Current Status</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Other">Other</option>
              </select>
              <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--muted)' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <textarea
              id="message"
              className="wform-input"
              style={{ minHeight: '100px', resize: 'vertical' }}
              placeholder="Message/Note (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />

            <button
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px', border: 'none' }}
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

  return formContent;
}
