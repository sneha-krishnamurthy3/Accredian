"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimonials"
          title="What admissions and HR leaders say"
          description="Read experiences from admissions, operations, and product executives deploying digital credential checking at scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
