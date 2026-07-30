"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FAQ"
          title="Frequently asked questions"
          description="Have questions about security, deployment integration, or customization? We have compiled the answers here."
        />

        <div className="mt-8">
          <Accordion items={FAQ_ITEMS} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
