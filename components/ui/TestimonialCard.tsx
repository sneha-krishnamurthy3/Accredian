import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  review: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatarUrl,
  review,
  rating = 5,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-8 md:p-10 rounded-[24px] border border-slate-200/50 bg-white shadow-sm flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.02),0_20px_40px_rgba(79,70,229,0.04)] hover:border-indigo-150/50 transition-all duration-300 text-left",
        className
      )}
    >
      <div className="space-y-5">
        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("w-4.5 h-4.5", i < rating ? "fill-amber-400" : "text-slate-200")}
            />
          ))}
        </div>

        {/* Review Quote */}
        <p className="text-[0.93rem] md:text-base text-slate-650 leading-relaxed font-normal">
          &quot;{review}&quot;
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100/80">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200/60 flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <h4 className="text-sm font-bold text-slate-900 leading-none">
              {name}
            </h4>
            <span title="Verified User" className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
            </span>
          </div>
          <p className="text-xs text-slate-500 font-semibold tracking-wide">
            {role}, <span className="text-indigo-650 font-bold">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
