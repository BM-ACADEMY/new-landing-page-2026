import React from 'react';

export default function Tools() {
  return (
    <section>
      <div className="wrap">
        <span className="kicker">// tools you'll master</span>
        <h2 className="h2">Industry tools, hands-on.</h2>
        <div className="tools">
          <span className="tool">ChatGPT</span>
          <span className="tool">Gemini</span>
          <span className="tool">Meta Ads Manager</span>
          <span className="tool">Google Ads</span>
          <span className="tool">Google Business Profile</span>
          <span className="tool">Canva</span>
          <span className="tool">WordPress</span>
          <span className="tool">Elementor</span>
          <span className="tool">WhatsApp Business</span>
          <span className="tool">CapCut</span>
        </div>
        <span className="kicker" style={{ display: 'block', marginTop: '40px' }}>
          // services you'll sell — & what they pay
        </span>
        <div className="svc-grid">
          <div className="svc">
            <div className="sn">
              Social Media Management<small>content + growth</small>
            </div>
            <div className="sp">₹8k–15k/mo</div>
          </div>
          <div className="svc">
            <div className="sn">
              Meta Ads Management<small>lead-gen & sales</small>
            </div>
            <div className="sp">₹10k–20k/mo</div>
          </div>
          <div className="svc">
            <div className="sn">
              Google / GMB + SEO<small>local ranking</small>
            </div>
            <div className="sp">₹5k–15k/mo</div>
          </div>
          <div className="svc">
            <div className="sn">
              Content & Reels<small>video packages</small>
            </div>
            <div className="sp">₹5k–15k/mo</div>
          </div>
          <div className="svc">
            <div className="sn">
              Website Design<small>one-time build</small>
            </div>
            <div className="sp">₹8k–25k</div>
          </div>
          <div className="svc">
            <div className="sn">
              Full Marketing Retainer<small>bundle</small>
            </div>
            <div className="sp">₹18k–29k/mo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
