"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/lib/constants";

export const TrustedBy: React.FC = () => {
  // Duplicate logos for seamless infinite scrolling loops
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients"
      className="mt-8 sm:mt-24 xl:px-12 px-4 text-center select-none"
    >
      <div className="max-w-[85rem] mx-auto">
        {/* Title & Subtext */}
        <div className="text-center mx-2 mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Our Proven <span className="text-universal">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 m-auto">
            Successful Collaborations With the{" "}
            <span className="text-universal">Industry’s Best</span>
          </p>
        </div>

        {/* Endless Marquee Ticker */}
        <div className="relative w-full overflow-hidden border-y border-slate-100 bg-white py-6 md:py-8 shadow-inner">
          {/* Gradient Overlays for smooth edge fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Ticker Track */}
          <div className="flex animate-marquee">
            {marqueeLogos.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center justify-center px-10 md:px-14 flex-shrink-0"
              >
                <img
                  src={client.logo}
                  alt="Partner Company Logo"
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain opacity-65 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
