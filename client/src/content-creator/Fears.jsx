import React from 'react';

export default function Fears() {
  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-pink-brand">// before you scroll away</span>
        <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-0 text-white">
          Thinking one of these? Here's the honest answer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[36px]">
          <div className="mcard reveal bg-panel border border-white/9 rounded-2xl p-6">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-3 border-violet-brand mb-3.5">
              "I post reels but nothing grows. Is content creation actually learnable as a skill?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Growth isn't luck — it's hook, script, edit, and consistency done as a repeatable system. We teach exactly that system.
            </p>
          </div>

          <div className="mcard reveal bg-panel border border-white/9 rounded-2xl p-6">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-3 border-violet-brand mb-3.5">
              "Can content creation really become income, not just a hobby?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Brands pay for content constantly — reels, ads, product shoots. Once you can deliver client-ready content, this becomes real, recurring income.
            </p>
          </div>

          <div className="mcard reveal bg-panel border border-white/9 rounded-2xl p-6">
            <p className="italic text-[#D2CCE6] text-[0.96rem] pl-3.5 border-l-3 border-violet-brand mb-3.5">
              "Isn't this all free information on YouTube already?"
            </p>
            <p className="font-bold text-pink-brand text-[0.8rem] mb-2">→ truth</p>
            <p className="text-white font-semibold text-[0.96rem]">
              Free videos show finished results, not the process. Here you build, shoot, and edit real client-style content with direct feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
