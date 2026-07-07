import React from 'react';
import { Home, Bot, Target, Coins, TrendingUp } from 'lucide-react';

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="wrap">
        <div className="pgrid">
          <div className="pil reveal">
            <div className="ic">
              <Home size={28} className="text-[#FFB020]" />
            </div>
            <h3>Build Your Agency</h3>
            <p>From home</p>
          </div>
          <div className="pil reveal">
            <div className="ic">
              <Bot size={28} className="text-[#FFB020]" />
            </div>
            <h3>Master AI Tools</h3>
            <p>Work 10x faster</p>
          </div>
          <div className="pil reveal">
            <div className="ic">
              <Target size={28} className="text-[#FFB020]" />
            </div>
            <h3>Get First Client</h3>
            <p>With mentorship</p>
          </div>
          <div className="pil reveal">
            <div className="ic">
              <Coins size={28} className="text-[#FFB020]" />
            </div>
            <h3>Earn Recurring</h3>
            <p>Monthly retainers</p>
          </div>
          <div className="pil reveal">
            <div className="ic">
              <TrendingUp size={28} className="text-[#FFB020]" />
            </div>
            <h3>Real Businesses</h3>
            <p>In your city</p>
          </div>
        </div>
      </div>
    </section>
  );
}
