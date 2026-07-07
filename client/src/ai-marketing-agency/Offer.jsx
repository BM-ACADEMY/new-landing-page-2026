import React, { useEffect, useState } from 'react';

export default function Offer({ onRegister }) {
  const [timeLeft, setTimeLeft] = useState({ h: 47, m: 59, s: 59 });

  useEffect(() => {
    // 48 hours from component mount
    const end = Date.now() + 48 * 3600 * 1000;
    
    const timer = setInterval(() => {
      const d = Math.max(0, end - Date.now());
      const t = Math.floor(d / 1000);
      
      setTimeLeft({
        h: Math.floor(t / 3600),
        m: Math.floor((t % 3600) / 60),
        s: t % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="offer" id="register">
      <div className="wrap">
        <span className="kicker" style={{ textAlign: 'center', display: 'block' }}>
          // free webinar → exclusive offer
        </span>
        <h2 className="h2" style={{ textAlign: 'center', margin: '12px auto 34px' }}>
          Register for the free live webinar.
        </h2>
        <div className="offer-card reveal">
          <span className="badge">🎥 Webinar Offer · 48 hours only</span>
          <div className="strike">₹29,999</div>
          <div className="price">
            ₹24,999<small> +GST</small>
          </div>
          <div className="emi">EMI available · from ₹5,000 / month</div>
          <div className="countdown">
            <div className="cd">
              <div className="n">{String(timeLeft.h).padStart(2, '0')}</div>
              <div className="u">Hrs</div>
            </div>
            <div className="cd">
              <div className="n">{String(timeLeft.m).padStart(2, '0')}</div>
              <div className="u">Min</div>
            </div>
            <div className="cd">
              <div className="n">{String(timeLeft.s).padStart(2, '0')}</div>
              <div className="u">Sec</div>
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '6px' }} onClick={onRegister}>
            Register for Free Webinar →
          </button>
          <div className="seats">⚠ Limited seats per batch · Aug 1, 5:00 PM - 6:00 PM</div>
        </div>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--muted)',
            fontSize: '.86rem',
            marginTop: '18px',
          }}
        >
          The ₹24,999 price is unlocked for webinar attendees only. Register → attend →
          decide.
        </p>
      </div>
    </section>
  );
}
