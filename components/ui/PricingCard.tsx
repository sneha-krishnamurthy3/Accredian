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
        "rounded-3xl p-8 flex flex-col justify-between transition-all relative border text-left shadow-sm bg-white",
        isPopular
          ? "border-indigo-600 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-600 scale-100 lg:scale-105 z-10"
          : "border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all"
      )}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <p className="text-sm text-slate-600 min-h-[40px] leading-relaxed">{description}</p>
        </div>

        {/* Pricing tag */}
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl md:text-5xl font-extrabold text-slate-900">
            ${price}
          </span>
          <span className="text-slate-500 text-sm font-semibold">
            /{billingPeriod === "monthly" ? "mo" : "mo, billed annually"}
          </span>
        </div>

        {/* Feature List */}
        <div className="border-t border-slate-100 pt-6 mb-8">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
            What&apos;s included
          </p>
          <ul className="space-y-3.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm md:text-base text-slate-600 font-medium">
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
        className="w-full"
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
