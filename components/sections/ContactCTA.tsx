"use client";

import React from "react";
import { Headphones, ChevronRight } from "lucide-react";

interface ContactCTAProps {
  onEnquireClick: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="supportSection"
      className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4 select-none text-left"
    >
      <div className="cta-grad border border-universal w-full max-w-[85rem] py-8 md:py-14 md:px-12 px-6 rounded-3xl flex flex-col md:flex-row items-center md:justify-between gap-6 shadow-lg relative overflow-hidden">
        
        {/* Decorative backdrop glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side Info - Icon + Text */}
        <div className="flex gap-6 md:flex-row flex-col md:items-center items-center">
          {/* Headset Icon Wrapper */}
          <div className="w-16 h-16 flex-shrink-0 bg-white/20 rounded-2xl p-1 shadow">
            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-universal shadow-sm">
              <Headphones className="w-8 h-8 stroke-[2px]" />
            </div>
          </div>

          {/* Texts */}
          <div className="md:text-start text-center space-y-1">
            <h2 className="text-xl md:text-3xl font-bold text-white font-circular">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-sm hidden sm:block md:text-lg font-medium text-blue-100 font-circular">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* Right Side - Button Trigger */}
        <button
          onClick={onEnquireClick}
          className="w-full max-w-[200px] py-3 px-4 rounded-xl text-universal bg-white hover:bg-slate-50 font-bold text-base transition shadow hover:shadow-lg flex items-center justify-center gap-1 cursor-pointer select-none"
        >
          <span>Contact Us</span>
          <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
