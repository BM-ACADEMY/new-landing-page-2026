import React from 'react';

export default function Trustbar() {
  return (
    <div className="bg-panel-2 border-b border-white/9 text-[0.78rem] text-muted-brand py-2">
      <div className="max-w-[1080px] mx-auto px-5 flex flex-wrap gap-[18px] justify-center items-center">
        <span>
          <b className="text-amber-brand">★★★★★ 4.9</b> on Google (35 reviews)
        </span>
        <span>
          <strong className="text-white font-bold">1,400+</strong> students trained
        </span>
        <span>
          <strong className="text-white font-bold">150+</strong> students placed
        </span>
        <span>
          Part of <strong className="text-white font-bold">ABM Groups</strong>
        </span>
      </div>
    </div>
  );
}
