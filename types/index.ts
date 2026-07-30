export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  id: number;
  title: string;
  text: string;
}

export interface ClientLogo {
  id: string;
  logo: string;
}

export interface DomainItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CourseSegment {
  title: string;
  description: string;
  image: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  title: string;
  content: string[];
}

export interface FAQGroup {
  title: string;
  content: FAQItem[];
}

export interface Testimonial {
  review: string;
  company_logo: string;
  name: string;
}
