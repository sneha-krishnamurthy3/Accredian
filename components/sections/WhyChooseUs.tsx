"use client";

import React from "react";
import { TARGET_AUDIENCES } from "@/lib/constants";

// SVG icons matching the reference screenshot exactly
const AUDIENCE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  // Monitor with checkmark
  "Tech Professionals": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l3 3 5-5" />
    </svg>
  ),
  // Monitor with X
  "Non-Tech Professionals": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" d="M9 8l6 6M15 8l-6 6" />
    </svg>
  ),
  // Graduation cap
  "Emerging Professionals": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6z" />
      <path strokeLinecap="round" d="M6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5" />
      <line x1="22" y1="9" x2="22" y2="15" strokeLinecap="round" />
    </svg>
  ),
  // Briefcase / bag
  "Senior Professionals": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="2" y1="14" x2="22" y2="14" strokeLinecap="round" />
      <line x1="12" y1="11" x2="12" y2="17" strokeLinecap="round" />
    </svg>
  ),
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="who-should-join"
      className="w-full mt-12 sm:mt-28 xl:mx-12 mx-4 bg-[#1a6fe0] rounded-2xl overflow-hidden shadow-xl select-none"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Pane - Title & Illustration */}
        <div className="md:w-[42%] pt-10 pb-0 md:pb-0 px-8 md:pl-12 text-white flex flex-col justify-between items-start gap-6">
          <div className="space-y-2 mt-4">
            <p className="text-xs sm:text-sm font-semibold text-blue-100 tracking-wide">
              Who Should Join?
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight font-extrabold text-white font-circular">
              Strategic Skill<br />Enhancement
            </h2>
          </div>

          {/* Illustration image at bottom of left pane */}
          <div className="w-[280px] hidden md:block self-end mt-auto">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
              alt="Professionals Illustration"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Pane - 2x2 Grid of audience items */}
        <div className="md:w-[58%] grid grid-cols-1 sm:grid-cols-2 py-10 px-8 md:px-10 gap-x-10 gap-y-8 text-white">
          {TARGET_AUDIENCES.map((audience, idx) => {
            const Icon = AUDIENCE_ICONS[audience.title];
            return (
              <div key={idx} className="flex flex-col gap-3">
                {/* Icon box with border */}
                <div className="w-12 h-12 flex items-center justify-center border-2 border-white/50 rounded-md text-white">
                  {Icon ? (
                    <Icon className="w-6 h-6" />
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  )}
                </div>
                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-white font-circular">
                    {audience.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 font-medium leading-relaxed font-sans mt-1">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
