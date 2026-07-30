"use client";

import React from "react";
import { Check } from "lucide-react";

interface HeroProps {
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="home"
      className="w-full flex justify-center items-center my-4 mt-20 sm:mt-32 xl:px-12 sm:px-4 mb-10 md:mb-0 select-none text-left"
    >
      <div className="max-w-[85rem] w-full px-4 sm:px-6">
        {/* Outer Banner Card Container */}
        <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-12 shadow-md overflow-visible relative">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column Content */}
          <div className="sm:w-1/2 w-full flex flex-col justify-between gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8 p-6 sm:p-10 lg:p-8">
            
            {/* Title */}
            <h1 className="text-center sm:text-left text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight capitalize font-circular text-slate-900">
              Next-Gen <span className="text-universal">Expertise</span> for Your{" "}
              <span className="text-universal">Enterprise</span>
            </h1>

            {/* Subtext */}
            <p className="font-medium md:font-normal text-sm sm:text-base lg:text-xl xl:text-2xl text-slate-600 max-w-full w-full text-center sm:text-start font-circular leading-relaxed">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-2 mx-auto sm:flex sm:mx-0 sm:justify-start sm:flex-wrap gap-x-6 gap-y-3">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
                "Measurable Impact",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "flex items-center gap-2 text-xs sm:text-sm lg:text-base font-semibold text-slate-700",
                    item === "Measurable Impact" && "sm:hidden lg:flex" // matches live hide/show pattern
                  )}
                >
                  <Check className="w-5 h-5 text-emerald-600 stroke-[3px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Enquire Button */}
            <div className="flex justify-center sm:justify-start pt-2">
              <button
                onClick={onEnquireClick}
                className="w-[85%] sm:w-[170px] py-3 bg-universal hover:bg-universal-hover text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center select-none"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column Graphic */}
          <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="headerImage"
              className="sm:w-full sm:h-[80%] w-[80%] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper utility to safely concatenate classnames inside Hero
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default Hero;
