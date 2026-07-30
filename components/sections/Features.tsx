"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export const Features: React.FC = () => {
  // Framer motion container variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Typographic Title Header */}
        <SectionTitle
          badge="Features"
          title="Engineered for modern institutions"
          description="Everything you need to issue, manage, and verify secure digital credentials at global enterprise scale."
        />

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
