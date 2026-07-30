"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen resize for layout adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate slide pagination count
  // If mobile, we have 3 slides (ADP, Bayer, Reliance).
  // If desktop, we show 2 side-by-side, so we have 2 sets: Set 1 (ADP, Bayer) and Set 2 (Bayer, Reliance).
  const totalSlides = isMobile ? TESTIMONIALS.length : TESTIMONIALS.length - 1;

  // Auto-rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-white border-t border-slate-100 select-none text-center"
    >
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Header Block */}
        <div className="text-center mb-12 mx-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight font-circular">
            Testimonials from <span className="text-universal">Our Partners</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-655 mt-3 m-auto font-circular">
            What <span className="text-universal">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Carousel Content Deck */}
        <div className="w-full max-w-5xl mx-auto px-4 overflow-hidden relative pb-10">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {isMobile ? (
                  // Mobile view: Render single card at activeIndex
                  <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm">
                    <div className="h-14 mb-4 flex items-center">
                      <img
                        src={TESTIMONIALS[activeIndex].company_logo}
                        alt={TESTIMONIALS[activeIndex].name}
                        className="h-10 sm:h-12 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light italic font-sans flex-grow">
                      &quot;{TESTIMONIALS[activeIndex].review}&quot;
                    </p>
                  </div>
                ) : (
                  // Desktop view: Render two cards side by side
                  <>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-14 mb-4 flex items-center">
                        <img
                          src={TESTIMONIALS[activeIndex].company_logo}
                          alt={TESTIMONIALS[activeIndex].name}
                          className="h-10 lg:h-12 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light italic font-sans flex-grow">
                        &quot;{TESTIMONIALS[activeIndex].review}&quot;
                      </p>
                    </div>
                    
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-14 mb-4 flex items-center">
                        <img
                          src={TESTIMONIALS[activeIndex + 1].company_logo}
                          alt={TESTIMONIALS[activeIndex + 1].name}
                          className="h-10 lg:h-12 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light italic font-sans flex-grow">
                        &quot;{TESTIMONIALS[activeIndex + 1].review}&quot;
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator Controller */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer select-none",
                  activeIndex === idx ? "bg-universal px-3" : "bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
