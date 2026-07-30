import React from "react";
import { Star } from "lucide-react";
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
        "p-6 md:p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-indigo-100/50 transition-all text-left",
        className
      )}
    >
      <div className="space-y-4">
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
        <p className="text-sm md:text-base text-slate-600 italic leading-relaxed">
          &quot;{review}&quot;
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-50">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-100 flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">
            {name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {role}, <span className="text-indigo-600 font-semibold">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
