import React from 'react';

export default function Roadmap() {
  return (
    <section>
      <div className="wrap">
        <span className="kicker">// 3 months · 12 weeks · 1 transformation</span>
        <h2 className="h2">From foundation to your first client.</h2>
        <div className="road">
          <div className="rc reveal">
            <div className="num">01</div>
            <div className="mo">Month 1</div>
            <h3>Foundation</h3>
            <p>Master AI tools, Meta + Google Ads, social & local marketing.</p>
          </div>
          <div className="rc reveal">
            <div className="num">02</div>
            <div className="mo">Month 2</div>
            <h3>Real Practice</h3>
            <p>Package, pitch & run real campaigns. Fully hands-on.</p>
          </div>
          <div className="rc reveal">
            <div className="num">03</div>
            <div className="mo">Month 3</div>
            <h3>First Client & Scale</h3>
            <p>Land your first client with mentorship. Income start.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
