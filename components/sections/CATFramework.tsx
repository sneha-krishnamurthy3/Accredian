"use client";

import React from "react";

export const CATFramework: React.FC = () => {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-16 flex flex-col items-center border-y border-slate-100 select-none text-center"
    >
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Title */}
        <div className="text-center mx-2 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight font-circular">
            The <span className="text-universal">CAT Framework</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-655 mt-3 m-auto max-w-xl font-circular">
            Our Proven Approach to{" "}
            <span className="text-universal">Learning Excellence</span>
          </p>
        </div>

        {/* CAT Framework SVG Graphic */}
        <div className="w-full flex justify-center bg-white p-4 sm:p-8 rounded-3xl border border-slate-200/50 shadow-sm max-w-5xl">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework Diagram"
            className="w-[95%] sm:w-[85%] h-auto rounded-xl object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CATFramework;
