import React from 'react';

export default function NoTeam() {
  return (
    <section>
      <div className="wrap">
        <span className="kicker">// the 2026 advantage</span>
        <h2 className="h2">
          No team. No office. <span className="gold">No overhead.</span>
        </h2>
        <p className="lead">
          Waiting because you think an agency needs a team, an office, and lakhs in
          investment? That's 2015 thinking. In 2026, it's just you + AI — break-even
          from client #1.
        </p>
        <div className="moat-grid">
          <div className="moat-col bad reveal">
            <h3>❌ Old-school agency / month</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>Office rent</span>
              <b style={{ color: '#fff' }}>₹15,000</b>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>3 staff salaries</span>
              <b style={{ color: '#fff' }}>₹60,000</b>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>Tools & misc</span>
              <b style={{ color: '#fff' }}>₹10,000</b>
            </div>
            <div
              style={{
                marginTop: '16px',
                fontFamily: 'var(--disp)',
                fontWeight: 800,
                fontSize: '1.5rem',
                color: 'var(--red)',
              }}
            >
              ₹85,000 burn
              <span
                style={{
                  display: 'block',
                  fontSize: '.8rem',
                  fontWeight: 400,
                  color: 'var(--muted)',
                  marginTop: '2px',
                }}
              >
                before 1 rupee profit · need ~5 clients to break even
              </span>
            </div>
          </div>
          <div className="moat-col good reveal">
            <h3>✅ Your solo AI agency / month</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>Home / laptop</span>
              <b style={{ color: 'var(--green)' }}>₹0</b>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>You + AI (your team)</span>
              <b style={{ color: 'var(--green)' }}>₹0</b>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: '.95rem',
              }}
            >
              <span>Tools</span>
              <b style={{ color: 'var(--green)' }}>₹2–3k</b>
            </div>
            <div
              style={{
                marginTop: '16px',
                fontFamily: 'var(--disp)',
                fontWeight: 800,
                fontSize: '1.5rem',
                color: 'var(--gold)',
              }}
            >
              ~₹16k profit
              <span
                style={{
                  display: 'block',
                  fontSize: '.8rem',
                  fontWeight: 400,
                  color: 'var(--muted)',
                  marginTop: '2px',
                }}
              >
                from client #1, day one · break-even instantly
              </span>
            </div>
          </div>
        </div>
        <div className="math reveal" style={{ marginTop: '26px' }}>
          Instead of paying office rent — that money stays in your pocket.{' '}
          <span className="g">No employees, no payroll tension. AI is your team.</span>
        </div>
      </div>
    </section>
  );
}
