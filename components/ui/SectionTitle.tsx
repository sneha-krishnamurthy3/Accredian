import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  badge,
  title,
  description,
  align = "center",
  ...props
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3 mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100/50">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
