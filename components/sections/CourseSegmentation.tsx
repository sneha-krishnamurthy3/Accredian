"use client";

import React from "react";
import { COURSE_SEGMENTS } from "@/lib/constants";

export const CourseSegmentation: React.FC = () => {
  return (
    <section className="w-full mt-12 sm:mt-24 xl:px-12 px-6 bg-white text-center font-circular select-none">
      <div className="max-w-[85rem] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
            Tailored <span className="text-universal">Course Segmentation</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-655 mt-3 m-auto max-w-xl">
            Explore <span className="text-universal">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* 4 Cards Grid Layout (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_SEGMENTS.map((segment, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
              </div>

              {/* Text Context */}
              <div className="p-5 flex-grow flex flex-col justify-start gap-2">
                <h4 className="text-lg font-bold text-universal font-circular">
                  {segment.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSegmentation;
