"use client";

import React from "react";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Stats: React.FC = () => {
  return (
    <section
      id="stats"
      className="w-full overflow-hidden flex flex-col items-center mt-12 sm:mt-24 px-4 sm:px-6 select-none"
    >
      <div className="max-w-[85rem] w-full text-center">
        {/* Header Title */}
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Our <span className="text-universal">Track Record</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 m-auto max-w-xl">
            The Numbers Behind <span className="text-universal">Our Success</span>
          </p>
        </div>

        {/* Stats Grid Wrapper */}
        <div className="w-full flex justify-center p-4">
          <div className="w-full max-w-5xl">
            {/* Desktop Layout (hidden on mobile) */}
            <div className="hidden sm:flex justify-around items-stretch p-6 bg-white border border-slate-100 shadow-sm rounded-2xl gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={cn(
                    "flex flex-col justify-start gap-4 items-center flex-1 px-4 text-center",
                    idx !== STATS.length - 1 && "border-r border-slate-200"
                  )}
                >
                  {/* Number Badge */}
                  <div className="w-20 h-20 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-universal font-extrabold text-2xl shadow-sm">
                    {stat.text}
                  </div>
                  {/* description */}
                  <p className="text-slate-700 text-sm font-semibold leading-relaxed max-w-[240px]">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Layout (hidden on desktop) */}
            <div className="sm:hidden grid grid-cols-1 p-5 bg-white border border-slate-200 shadow-sm rounded-2xl gap-6">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={cn(
                    "flex items-center gap-4 text-left pb-5",
                    idx !== STATS.length - 1 && "border-b border-slate-100"
                  )}
                >
                  {/* Number Badge */}
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center text-universal font-bold text-lg border border-blue-100">
                    {stat.text}
                  </div>
                  {/* Description */}
                  <p className="text-slate-700 text-xs font-semibold leading-normal">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
