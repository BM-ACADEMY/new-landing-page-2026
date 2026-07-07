import React from 'react';

export default function Income() {
  return (
    <section className="income">
      <div className="wrap">
        <span className="kicker">// job vs ownership</span>
        <h2 className="h2">A job has a ceiling. An agency doesn't.</h2>
        <div className="compare">
          <div className="cbox reveal">
            <div className="l">A digital job</div>
            <div className="v">₹25k</div>
            <div className="d">/ month · fixed ceiling · one salary</div>
          </div>
          <div className="cvs">VS</div>
          <div className="cbox win reveal">
            <div className="l">Your agency</div>
            <div className="v">No cap</div>
            <div className="d">recurring retainers · scale with clients</div>
          </div>
        </div>
        <div className="math reveal">
          Just <span className="g">3 clients</span> × ₹18,999/mo retainer ={' '}
          <span className="g">₹56,997 / month</span> recurring. Add ads, reels,
          websites → more.
        </div>
      </div>
    </section>
  );
}
