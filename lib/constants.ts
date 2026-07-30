import { NavLink, Feature, Stat, Testimonial, PricingPlan, FaqItem } from "@/types";

export const BRAND_NAME = "Accredian";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const TRUSTED_COMPANIES = [
  { name: "Vercel", id: "vercel" },
  { name: "Stripe", id: "stripe" },
  { name: "Linear", id: "linear" },
  { name: "Apple", id: "apple" },
  { name: "Framer", id: "framer" },
  { name: "Raycast", id: "raycast" }
];

export const FEATURES: Feature[] = [
  {
    id: "feat-1",
    title: "Instant Verification",
    description: "Verify credentials and academic achievements in milliseconds. Fully decentralized cryptographic verification protocols.",
    iconName: "Zap",
  },
  {
    id: "feat-2",
    title: "Enterprise Security",
    description: "Military-grade AES-256 encryption. GDPR and HIPAA compliant storage architectures to safeguard user credentials.",
    iconName: "Shield",
  },
  {
    id: "feat-3",
    title: "Real-time Analytics",
    description: "Get complete visibility into credential issuance, validation rates, and engagement through dynamic dashboards.",
    iconName: "BarChart3",
  },
  {
    id: "feat-4",
    title: "Developer First APIs",
    description: "Integrate credential tracking directly into your LMS or internal HR portal with our robust REST and GraphQL APIs.",
    iconName: "Code2",
  },
  {
    id: "feat-5",
    title: "Automated Workflows",
    description: "Trigger automated verification triggers, email alerts, and PDF certificates directly from custom webhooks.",
    iconName: "Cpu",
  },
  {
    id: "feat-6",
    title: "Global Compliance",
    description: "Compliant with international standards for digital credentials. Issue globally-recognized academic transcripts.",
    iconName: "Globe",
  },
];

export const STATS: Stat[] = [
  { id: "stat-1", value: "99.99%", label: "API Uptime SLA" },
  { id: "stat-2", value: "24M+", label: "Credentials Verified" },
  { id: "stat-3", value: "15,000+", label: "Organizations Onboarded" },
  { id: "stat-4", value: "< 200ms", label: "Verification Latency" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah Jenkins",
    role: "Head of Admissions",
    company: "Stanford University",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    review: "Accredian has revolutionized our academic transcripts validation. We saved thousands of admin hours and completely eliminated certificate fraud.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Alex Rivera",
    role: "Director of HR Operations",
    company: "Stripe",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    review: "The API-first model allowed us to embed credential checks directly into our hiring workflows. Candidate background screening now takes seconds.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "EdTech Global",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    review: "Integrating Accredian's webhooks took less than an afternoon. The developer experience is unparalleled—reminds me of Vercel and Stripe.",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-starter",
    name: "Starter",
    priceMonthly: 49,
    priceYearly: 39,
    description: "Essential verification tools for growing education centers and coding bootcamps.",
    features: [
      "Up to 1,000 verifications/mo",
      "Standard PDF templates",
      "Email support",
      "Basic reporting analytics",
      "Public verification portal",
    ],
    isPopular: false,
    ctaText: "Start 14-day free trial",
  },
  {
    id: "plan-pro",
    name: "Professional",
    priceMonthly: 129,
    priceYearly: 99,
    description: "Advanced analytics, white-label branding, and dedicated webhooks for scaling platforms.",
    features: [
      "Up to 10,000 verifications/mo",
      "Custom branding & domains",
      "API & webhook access",
      "Priority 24/7 support",
      "Advanced engagement analytics",
      "Bulk CSV issuance uploads",
    ],
    isPopular: true,
    ctaText: "Upgrade to Professional",
  },
  {
    id: "plan-enterprise",
    name: "Enterprise",
    priceMonthly: 499,
    priceYearly: 399,
    description: "Custom volume limits, dedicated database clusters, and custom SLA contracts for large institutions.",
    features: [
      "Unlimited verifications",
      "Dedicated infrastructure option",
      "Custom system integrations",
      "Designated Account Manager",
      "SLA: 99.99% uptime guarantee",
      "Strict data isolation (on-prem/dedicated VPC)",
    ],
    isPopular: false,
    ctaText: "Contact Enterprise Sales",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does the cryptographic credential verification work?",
    answer: "Every credential issued on Accredian receives a unique cryptographic hash, signed by the issuer. When validated, the system checks the signature against the issuer's public key, guaranteeing that the record has not been altered or forged since its issuance.",
  },
  {
    id: "faq-2",
    question: "Can we integrate Accredian with our existing LMS?",
    answer: "Yes, absolutely! Accredian has plug-and-play integrations with popular learning management systems like Canvas, Moodle, and Blackboard, as well as a comprehensive REST API to integrate with custom in-house systems.",
  },
  {
    id: "faq-3",
    question: "What compliance standards does Accredian meet?",
    answer: "We take compliance very seriously. Accredian is fully GDPR compliant, SOC 2 Type II certified (in progress), and follows W3C Verifiable Credentials standards, ensuring international interoperability and high-level privacy controls.",
  },
  {
    id: "faq-4",
    question: "Is there a limit to how many credentials we can issue?",
    answer: "Our Starter and Professional plans have soft monthly validation quotas, while our Enterprise plan offers customizable limits. We scale effortlessly from small academies to national university networks.",
  },
  {
    id: "faq-5",
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day fully featured free trial on our Starter and Professional plans. You do not need a credit card to sign up and test the API integration.",
  },
];
