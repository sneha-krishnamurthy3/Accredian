"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import PricingCard from "@/components/ui/PricingCard";
import { PRICING_PLANS } from "@/lib/constants";

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Pricing"
          title="Predictable scaling plans"
          description="Choose the tier matching your credential volume. Save up to 20% by subscribing to our annual plans."
        />

        {/* Annual/Monthly Switcher */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-semibold transition-colors ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-500"}`}>
            Billed Monthly
          </span>
          
          <button
            type="button"
            onClick={() => setBillingPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"))}
            className="w-14 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/60 p-1 transition-colors relative cursor-pointer focus:outline-none"
            aria-label="Toggle billing frequency"
          >
            <motion.div
              layout
              className="w-6 h-6 rounded-full bg-indigo-600 shadow-sm"
              animate={{ x: billingPeriod === "monthly" ? 0 : 22 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>

          <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${billingPeriod === "yearly" ? "text-slate-900" : "text-slate-500"}`}>
            Billed Annually
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100/50">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly;
            return (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.ctaText}
                billingPeriod={billingPeriod}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
