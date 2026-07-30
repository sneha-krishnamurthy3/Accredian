"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm",
        isOpen
          ? "border-indigo-100 bg-indigo-50/10 shadow-indigo-500/2"
          : "border-slate-100 bg-white/60 hover:bg-white/80"
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-btn-${id}`}
        onClick={onToggle}
        className={cn(
          "w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 transition-all cursor-pointer",
          isOpen && "text-indigo-650"
        )}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn("flex-shrink-0 ml-4 transition-colors", isOpen ? "text-indigo-500" : "text-slate-400")}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 text-slate-650 text-sm md:text-base leading-relaxed border-t border-slate-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ id: string; question: string; answer: string }>;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
