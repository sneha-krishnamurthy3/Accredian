
export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  review: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logoSvg: string; // inline SVG or path
}
