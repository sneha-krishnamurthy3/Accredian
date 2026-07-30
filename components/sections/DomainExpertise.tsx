"use client";

import React from "react";
import { DOMAINS } from "@/lib/constants";

// Custom SVG icons matching the reference screenshot exactly
const DOMAIN_ICONS: Record<string, React.FC<{ className?: string }>> = {
  // Light bulb
  "Product & Innovation Hub": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6M10 21v-1a4 4 0 0 1-2-3.46V15h8v1.54A4 4 0 0 1 14 20v1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 1 6 6c0 2.22-1.2 4.16-3 5.2V15H9v-.8A6 6 0 0 1 6 9a6 6 0 0 1 6-6z" />
      <line x1="9" y1="18" x2="15" y2="18" strokeLinecap="round" />
    </svg>
  ),
  // Brain
  "Gen-AI Mastery": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 2A3.5 3.5 0 0 0 6 5.5c0 .17.01.34.03.5A3.5 3.5 0 0 0 3 9.5a3.5 3.5 0 0 0 2 3.14V14a3 3 0 0 0 3 3h1v3h2v-3h1a3 3 0 0 0 3-3v-1.36A3.5 3.5 0 0 0 17 9.5a3.5 3.5 0 0 0-3.03-3.47A3.5 3.5 0 0 0 9.5 2z" />
      <path strokeLinecap="round" d="M9 10h.01M13 10h.01" />
      <path strokeLinecap="round" d="M9 13s1 1 3 1 3-1 3-1" />
    </svg>
  ),
  // Two people / group icon
  "Leadership Elevation": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="9" cy="7" r="3" />
      <path strokeLinecap="round" d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path strokeLinecap="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path strokeLinecap="round" d="M21 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  ),
  // Bar chart analytics
  "Tech & Data Insights": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
      <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
      <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
      <line x1="2" y1="20" x2="22" y2="20" strokeLinecap="round" />
    </svg>
  ),
  // Gear / settings
  "Operations Excellence": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  // Globe
  "Digital Enterprise": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3.6 9h16.8M3.6 15h16.8" />
      <path strokeLinecap="round" d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  ),
  // Payment / card terminal
  "Fintech Innovation Lab": ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M2 11h20" />
      <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export const DomainExpertise: React.FC = () => {
  return (
    <section className="w-full mt-12 sm:mt-24 mb-4 select-none text-center">
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight font-circular">
            Our <span className="text-universal">Domain Expertise</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-650 mt-3 m-auto max-w-xl font-circular">
            <span className="text-universal font-semibold">Specialized Programs</span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {DOMAINS.map((domain, idx) => {
            const Icon = DOMAIN_ICONS[domain.title];
            return (
              <div
                key={idx}
                className="p-5 w-[46%] sm:w-[30%] flex flex-col justify-center items-center bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl rounded-2xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-universal mb-3">
                  {Icon ? (
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10" />
                  ) : (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  )}
                </div>
                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight font-circular">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
