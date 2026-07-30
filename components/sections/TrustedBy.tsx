"use client";

import React from "react";
import { motion } from "framer-motion";

export const TrustedBy: React.FC = () => {
  const logos = [
    {
      name: "Vercel",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 116 100" fill="currentColor">
          <path d="M57.5 0L115 100H0L57.5 0z" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 80 33" fill="currentColor">
          <path d="M30 19.3c0-3.3 2-4.9 5.3-4.9 1.7 0 2.9.4 3.7.8v-6c-.8-.3-1.9-.5-3.3-.5-6 0-9.8 3.5-9.8 9.5 0 9 12 7.7 12 12.3 0 3.7-2.3 5.3-5.9 5.3-2 0-3.6-.5-4.8-1.1v6c1.3.5 3 .8 5.1.8 6.4 0 10.4-3.4 10.4-9.7 0-9.3-12.7-8-12.7-12.5zm19.3-5.4h-3.3v4.6h3.3v8.5c0 3.8 2.1 5.6 5.8 5.6 1.4 0 2.5-.2 3.1-.5V26c-.4.2-1 .3-1.6.3-1.6 0-2.4-.7-2.4-2.5v-5.9h4v-4.6h-4V7.5l-4.9 1.5v4.9zm17 0c-1.3 0-2.3.4-3.1 1.1v-.8h-4.8v18.7h4.9v-9.3c0-3.6 1.9-5.1 4.5-5.1.7 0 1.2.1 1.6.2v-4.8c-.5-.1-1.3-.2-3.1-.2zM6.9 11.2c-2-.6-3.1-1.2-3.1-2.4 0-1 1-1.7 2.6-1.7 1.3 0 2.6.3 3.6.8V2c-1.1-.4-2.6-.7-4.3-.7C2.2 1.3 0 3.5 0 7.3c0 5.4 7.2 4.6 7.2 7.5 0 1.2-1.1 1.9-2.9 1.9-1.7 0-3.2-.5-4.5-1.2v6.2c1.4.6 3.1.9 4.9.9 3.9 0 6.6-2.1 6.6-6 0-5.8-7.3-4.6-7.3-7.5zm14-8v4.9h2.3v4.6h-2.3v10.3c0 1.6.8 2.2 2.1 2.2.6 0 1.1-.1 1.4-.2v4.6c-.6.3-1.6.4-2.7.4-3.5 0-5.6-1.8-5.6-5.4V12.7h-1.6v-4.6h1.6V3.2l4.8-1.5z" />
        </svg>
      ),
    },
    {
      name: "Linear",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="6" />
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
    },
    {
      name: "Framer",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 2h14v6.2L12 14.5l-7-6.3V2zm0 12.6h14l-7 7.4-7-7.4z" />
        </svg>
      ),
    },
    {
      name: "Apple",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.12.01.2.02.26.02.89 0 1.99-.54 2.56-1.35z" />
        </svg>
      ),
    },
    {
      name: "Raycast",
      svg: (
        <svg className="h-7 w-auto text-slate-900 opacity-45 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-10">
          Trusted by top academic institutions and tech companies globally
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-x-20 lg:gap-x-24">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              {logo.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
