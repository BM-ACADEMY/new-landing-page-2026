import React from 'react';

export default function Hero({ onRegister }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="pulse"></span> AI Marketing Agency · Accelerator
          </span>
          <h1>
            Build Your Own <span className="y">AI Marketing</span> Agency{' '}
            <span className="sm">in 90 Days</span>
          </h1>
          <p className="sub">
            Learn. Get Clients. Earn. <span className="g">Be Your Own Boss.</span>
          </p>
          <p className="subline">
            This isn't just a course — 12 modules, real projects,{' '}
            <b>mentorship till your first client</b>. Learn from the team that runs a
            real agency for 750+ businesses.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary cursor-pointer" style={{ border: 'none' }} onClick={(e) => { e.preventDefault(); onRegister && onRegister(); }}>
              Register for Free Webinar →
            </button>
            <a className="btn btn-ghost" href="#curriculum">
              See the 12 Modules
            </a>
          </div>
          <p className="webinar-line">
            🎥 Free Live Webinar · <b>Aug 1 · 5:00 PM to 6:00 PM</b> · Online
          </p>
          <div className="proof-row">
            <span className="pill">
              <b>750+</b> businesses served
            </span>
            <span className="pill">
              <b>1,400+</b> trained
            </span>
            <span className="pill">
              <b>4.8★</b> Google
            </span>
          </div>
        </div>
        <div className="hcard reveal">
          <div className="tag">What you'll get</div>
          <div className="partner">
            Everything to
            <br />
            launch + earn
          </div>
          <ul>
            <li>
              <span className="tk">✓</span> 12-module agency curriculum
            </li>
            <li>
              <span className="tk">✓</span> AI Tools + Meta & Google Ads
            </li>
            <li>
              <span className="tk">✓</span> Real client projects
            </li>
            <li>
              <span className="tk">✓</span> First-client mentorship
            </li>
            <li>
              <span className="tk">✓</span> Agency setup & pricing support
            </li>
            <li>
              <span className="tk">✓</span> Certification + lifetime support
            </li>
          </ul>
          <div className="foot">
            12 weeks · 3 months · <b>1 transformation</b>
          </div>
        </div>
      </div>
    </section>
  );
}
