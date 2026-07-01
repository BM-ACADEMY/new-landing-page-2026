import React from 'react';

export default function Map() {
  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// visit us</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0">
          Find BM Academy on the map
        </h2>
        <p className="text-muted-brand text-[1.02rem] mt-3.5">
          252, 2nd Floor, MG Road, Kottakuppam, Vanur, Puducherry – 605104
        </p>
        
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/9">
          <iframe
            src="https://maps.google.com/maps?q=BM%20Academy%20Digital%20Marketing%20Kottakuppam%20Puducherry&z=16&output=embed"
            width="100%" 
            height="320" 
            style={{ border: 0, display: 'block' }} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" 
            title="BM Academy location on Google Maps"
          ></iframe>
        </div>
        <a 
          className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-[26px] py-[15px] rounded-xl cursor-pointer border border-white/9 bg-transparent text-white transition-all duration-200 hover:border-pink-brand hover:text-pink-brand mt-4" 
          href="https://www.google.com/maps/place/BM+Academy+-+Digital+Marketing,+Full+Stack+Development,+IT+%26+Skill+Training+Institute" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Open in Google Maps →
        </a>
      </div>
    </section>
  );
}
