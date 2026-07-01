import React from 'react';

export default function Trustbar() {
  return (
    <div className="bg-panel-2 border-b border-line-light text-[0.78rem] text-muted-brand py-2">
      <div className="max-w-[1080px] mx-auto px-5 flex flex-wrap gap-[18px] justify-center items-center">
        <span><b className="text-amber-brand">★★★★★ 4.9</b> on Google (35 reviews)</span>
        <span><b className="text-white">1,400+</b> students trained</span>
        <span><b className="text-white">150+</b> students placed</span>
        <span>Part of <b className="text-white">ABM Groups</b></span>
      </div>
    </div>
  );
}
