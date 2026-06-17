import React from "react";

export default function MPesaBadge() {
  return (
    <div className="group inline-flex items-center gap-3.5 bg-linear-to-r from-emerald-50 to-green-50 border border-green-200/80 px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-[10px] font-bold text-green-700 tracking-wider uppercase">
          Buy Goods Till Number
        </span>
        <span className="text-2xl font-black text-green-900 tracking-widest font-mono group-hover:scale-105 transition-transform duration-300 ease-out transform-gpu">
          5898147
        </span>
      </div>
    </div>
  );
}
