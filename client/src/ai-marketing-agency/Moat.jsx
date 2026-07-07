import React from 'react';

export default function Moat() {
  return (
    <section id="moat">
      <div className="wrap">
        <span className="kicker">// the real difference</span>
        <h2 className="h2">
          Other courses teach you skills. We guide you until your{' '}
          <span className="gold">first client</span>.
        </h2>
        <p className="lead">
          The reason 90% of agencies fail — once the class ends, you're left on your
          own. Here it's different: mentorship till your first client, real projects,
          and a client-getting system.
        </p>
        <div className="moat-grid">
          <div className="moat-col bad reveal">
            <h3>❌ Other "agency" courses</h3>
            <ul>
              <li>
                <span className="m">✕</span> Skill kathukira, appram alone
              </li>
              <li>
                <span className="m">✕</span> "Clients-a neenga thedunga" — no help
              </li>
              <li>
                <span className="m">✕</span> Only theory, no real projects
              </li>
              <li>
                <span className="m">✕</span> First client varaadhu → give up
              </li>
            </ul>
          </div>
          <div className="moat-col good reveal">
            <h3>✅ BM Academy Accelerator</h3>
            <ul>
              <li>
                <span className="m">✓</span> Mentorship till your first client
              </li>
              <li>
                <span className="m">✓</span> Client-getting scripts & system
              </li>
              <li>
                <span className="m">✓</span> Real client projects, not theory
              </li>
              <li>
                <span className="m">✓</span> Lifetime support & community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
