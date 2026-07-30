"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_GROUPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left text-slate-800 text-sm sm:text-base font-medium focus:outline-none cursor-pointer select-none hover:text-slate-900 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "flex-shrink-0 ml-4 w-5 h-5 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180 text-universal"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-slate-500 text-xs sm:text-sm leading-relaxed space-y-2 font-sans">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  onEnquireClick?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onEnquireClick }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setOpenIdx(0);
  };

  return (
    <section id="faqs" className="w-full py-16 sm:py-24 bg-white select-none">
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
          Frequently Asked <span className="text-universal">Questions</span>
        </h2>

        {/* Two-column layout: sidebar tabs + accordion */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Left sidebar tab buttons */}
          <div className="flex flex-row sm:flex-col gap-3 sm:w-[220px] flex-shrink-0">
            {FAQ_GROUPS.map((group, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={cn(
                  "px-5 py-3 rounded-lg border text-sm font-semibold text-left transition-all cursor-pointer select-none",
                  activeTab === idx
                    ? "border-universal text-universal bg-blue-50 shadow-sm"
                    : "border-slate-200 text-slate-500 bg-white hover:border-slate-300 hover:text-slate-700"
                )}
              >
                {group.title}
              </button>
            ))}
          </div>

          {/* Right accordion */}
          <div className="flex-1">
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg px-6">
              {FAQ_GROUPS[activeTab].content.map((faq, idx) => (
                <FAQAccordionItem
                  key={idx}
                  title={faq.title}
                  content={faq.content}
                  isOpen={openIdx === idx}
                  onToggle={() => handleToggle(idx)}
                />
              ))}
            </div>

            {/* Enquire Now button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={onEnquireClick}
                className="px-8 py-3 bg-universal text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer shadow-md"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
