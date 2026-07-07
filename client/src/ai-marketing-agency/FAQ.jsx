import React from 'react';

export default function FAQ() {
  return (
    <section>
      <div className="wrap">
        <span className="kicker">// doubts.clear()</span>
        <h2 className="h2">Common kelvigal.</h2>
        <div className="faq-list">
          <details>
            <summary>I have no experience. Can I still start an agency?</summary>
            <p>
              Yes. Module 1 starts from scratch. You'll learn AI tools + ads + local
              marketing fully, step by step.
            </p>
          </details>
          <details>
            <summary>Where do I find clients? That's my main doubt.</summary>
            <p>
              Module 11 is entirely about client-getting. With mentorship, scripts, and
              a system, we help you land your first client. You won't be searching
              alone.
            </p>
          </details>
          <details>
            <summary>Do I need this for a job or for a business?</summary>
            <p>
              Both. With these same skills, you can build an agency or land a
              high-paying job.
            </p>
          </details>
          <details>
            <summary>How much time commitment is needed?</summary>
            <p>
              12 weeks, weekend-friendly. You can balance it alongside your job or
              college.
            </p>
          </details>
          <details>
            <summary>₹24,999 — is EMI available?</summary>
            <p>
              Yes, EMI from ₹5,000/mo. Webinar offer valid for 48 hours only.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
