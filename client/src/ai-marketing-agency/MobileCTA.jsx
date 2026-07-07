import React from 'react';

export default function MobileCTA({ onRegister }) {
  return (
    <div className="mobile-cta">
      <a href="#register" onClick={(e) => { e.preventDefault(); onRegister(); }}>
        🎥 Register Free Webinar
      </a>
    </div>
  );
}
