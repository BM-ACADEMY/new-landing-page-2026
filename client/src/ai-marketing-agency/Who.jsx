import React from 'react';
import { Briefcase, Laptop, GraduationCap, Rocket } from 'lucide-react';

export default function Who() {
  return (
    <section>
      <div className="wrap">
        <span className="kicker">// who is this for</span>
        <h2 className="h2">Who is this for?</h2>
        <div className="who-row">
          <div className="wc reveal">
            <div className="ic">
              <Briefcase size={28} className="text-[#FFB020]" />
            </div>
            <h3>Job-tired freshers</h3>
            <p>No salary ceiling — build your own business instead.</p>
          </div>
          <div className="wc reveal">
            <div className="ic">
              <Laptop size={28} className="text-[#FFB020]" />
            </div>
            <h3>Freelancers</h3>
            <p>Already doing a bit of it — need to scale it up.</p>
          </div>
          <div className="wc reveal">
            <div className="ic">
              <GraduationCap size={28} className="text-[#FFB020]" />
            </div>
            <h3>Marketing grads</h3>
            <p>You have the skills — you need clients + a system.</p>
          </div>
          <div className="wc reveal">
            <div className="ic">
              <Rocket size={28} className="text-[#FFB020]" />
            </div>
            <h3>Side-income seekers</h3>
            <p>Build extra recurring income on the side.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
