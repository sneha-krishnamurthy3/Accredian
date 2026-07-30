"use client";

import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

// Custom SVG icons matching the reference screenshot exactly
const STEP_ICONS: Record<string, React.FC<{ className?: string }>> = {
  // Bar chart / analytics icon
  "Skill Gap Analysis": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="14" width="4" height="7" rx="1" fill="currentColor" stroke="none" />
      <rect x="9" y="9" width="4" height="12" rx="1" fill="currentColor" stroke="none" />
      <rect x="16" y="4" width="4" height="17" rx="1" fill="currentColor" stroke="none" />
      <line x1="1" y1="21" x2="23" y2="21" strokeLinecap="round" />
    </svg>
  ),
  // Presentation easel / whiteboard icon
  "Customized Training Plan": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path strokeLinecap="round" d="M12 16v5M8 21h8" />
      <path strokeLinecap="round" d="M12 1v2" />
      <path strokeLinecap="round" d="M3 3h18" />
      <path strokeLinecap="round" d="M7 9l2 2 4-4" />
    </svg>
  ),
  // Monitor with play button icon
  "Flexible Program Delivery": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      <polygon points="10,7.5 10,13.5 16,10.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="howItWorks" className="w-full py-16 sm:py-24 bg-white select-none text-center">
      <div className="mx-auto max-w-[85rem] px-6">
        {/* Title Block */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            How We <span className="text-universal">Deliver Results</span> That Matter?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-xl mx-auto">
            A Structured Three-Step Approach to{" "}
            <span className="text-universal">Skill Development</span>
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.title];
            return (
              <div
                key={idx}
                className="relative bg-[#eef3fb] border border-blue-200 rounded-2xl p-7 flex flex-col items-center text-center w-full max-w-[17rem] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Left blue accent bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-universal rounded-r-full" />
                {/* Right blue accent bar */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-universal rounded-l-full" />

                {/* Step number — top left */}
                <div className="absolute left-4 top-4 w-6 h-6 rounded-full border-2 border-blue-300 bg-white flex items-center justify-center text-xs font-bold text-slate-500">
                  {idx + 1}
                </div>

                {/* Icon circle */}
                <div className="w-16 h-16 flex items-center justify-center bg-universal text-white rounded-full shadow-md mb-5 mt-3">
                  {Icon ? (
                    <Icon className="w-7 h-7" />
                  ) : (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
