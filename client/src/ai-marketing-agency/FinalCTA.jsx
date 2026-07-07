import React from 'react';

export default function FinalCTA({ onRegister }) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>
          Many people take a job.<br />
          Few become an <span className="y">Owner</span>.
        </h2>
        <p>
          See the exact plan in the free webinar. Register and start your agency
          journey today.
        </p>
        <button className="btn btn-primary" style={{ marginTop: '26px' }} onClick={onRegister}>
          Register for Free Webinar →
        </button>
        <div className="phone">📞 099449 40051</div>
      </div>
    </section>
  );
}
