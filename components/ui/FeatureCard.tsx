"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  className,
}) => {
  // Dynamically resolve lucide icon
  const Icon = (Icons[iconName as keyof typeof Icons] || Icons.HelpCircle) as React.ComponentType<{
    className?: string;
  }>;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 text-left overflow-hidden",
        className
      )}
    >
      {/* Radial Hover Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(79,70,229,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Icon Capsule */}
      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>

      {/* Text Content */}
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
