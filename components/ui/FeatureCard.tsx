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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative p-8 md:p-10 rounded-3xl border border-slate-100/80 bg-white/60 hover:bg-white hover:border-slate-250/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03),0_20px_40px_rgba(79,70,229,0.06)] transition-all duration-300 text-left overflow-hidden",
        className
      )}
    >
      {/* Radial Hover Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(79,70,229,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon Capsule */}
      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-650 mb-8 group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent transition-all duration-350">
        <Icon className="w-5.5 h-5.5" />
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-[0.93rem] text-slate-650 leading-relaxed font-normal">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
