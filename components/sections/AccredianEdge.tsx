"use client";

import React from "react";

export const AccredianEdge: React.FC = () => {
  return (
    <section
      id="accredianEdge"
      className="w-full mt-12 sm:mt-24 px-4 md:px-8 xl:px-12 select-none text-center"
    >
      <div className="max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="text-center pb-8 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight font-circular">
            The <span className="text-universal">Accredian Edge</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-655 mt-3 m-auto max-w-xl font-circular">
            Key Aspects of{" "}
            <span className="text-universal">Our Strategic Training</span>
          </p>
        </div>

        {/* Desktop Image (hidden on mobile) */}
        <div className="w-full hidden sm:flex justify-center items-center mb-8 border border-slate-100/50 shadow-sm rounded-2xl overflow-hidden bg-white p-4">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
            alt="Accredian Edge USP Desktop"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Mobile Image (hidden on desktop) */}
        <div className="flex sm:hidden w-full justify-center items-center mb-8 border border-slate-100 bg-white p-2 shadow-sm rounded-xl">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
            alt="Accredian Edge USP Mobile"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
