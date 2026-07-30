"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  billingPeriod: "monthly" | "yearly";
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular,
  ctaText,
  billingPeriod,
}) => {
  return (
    <div
      className={cn(
        "rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 relative border text-left bg-white",
        isPopular
          ? "border-indigo-600/80 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_10px_30px_rgba(79,70,229,0.04)] ring-1 ring-indigo-600/10 scale-[1.02] hover:scale-[1.04] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03),0_20px_40px_rgba(79,70,229,0.06)] z-10"
          : "border-slate-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.01),0_10px_30px_rgba(0,0,0,0.01)] hover:border-indigo-200/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02),0_20px_40px_rgba(79,70,229,0.03)] hover:-translate-y-1"
      )}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.2 rounded-full text-[9px] font-bold bg-indigo-600 text-white uppercase tracking-widest leading-none">
          Most Popular
        </span>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <p className="text-sm text-slate-650 min-h-[40px] leading-relaxed">{description}</p>
        </div>

        {/* Pricing tag */}
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl md:text-5xl font-extrabold text-slate-900">
            ${price}
          </span>
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            /{billingPeriod === "monthly" ? "mo" : "mo, billed annually"}
          </span>
        </div>

        {/* Feature List */}
        <div className="border-t border-slate-100 pt-6 mb-8">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            What&apos;s included
          </p>
          <ul className="space-y-3.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-650 flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-[0.93rem] text-slate-650 font-medium leading-normal">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant={isPopular ? "primary" : "outline"}
        size="md"
        className="w-full cursor-pointer"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;
