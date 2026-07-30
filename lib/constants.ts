import {
  NavLink,
  Stat,
  ClientLogo,
  DomainItem,
  CourseSegment,
  TargetAudience,
  HowItWorksStep,
  FAQGroup,
  Testimonial
} from "@/types";

export const BRAND_NAME = "Accredian";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredianEdge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#howItWorks" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const STATS: Stat[] = [
  {
    id: 1,
    title: "Professionals trained for exceptional career success",
    text: "10K+"
  },
  {
    id: 2,
    title: "Sessions delivered with unmatched learning excellence",
    text: "200+"
  },
  {
    id: 3,
    title: "Active learners engaged in dynamic courses",
    text: "5K+"
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: "client-1",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png"
  },
  {
    id: "client-3",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png"
  },
  {
    id: "client-4",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png"
  },
  {
    id: "client-5",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png"
  },
  {
    id: "client-6",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg"
  },
  {
    id: "client-2",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg"
  }
];

export const DOMAINS: DomainItem[] = [
  {
    title: "Product & Innovation Hub",
    description: "Driving creativity, product excellence, and innovation strategies.",
    iconName: "Sparkles"
  },
  {
    title: "Gen-AI Mastery",
    description: "Comprehensive training on harnessing Generative AI for business transformation.",
    iconName: "Cpu"
  },
  {
    title: "Leadership Elevation",
    description: "Programs designed to build strong, visionary, and impactful leaders.",
    iconName: "TrendingUp"
  },
  {
    title: "Tech & Data Insights",
    description: "Training in cutting-edge technologies, data analytics, and digital tools.",
    iconName: "Database"
  },
  {
    title: "Operations Excellence",
    description: "Enhancing efficiency, process optimization, and operational leadership.",
    iconName: "Settings"
  },
  {
    title: "Digital Enterprise",
    description: "Empowering professionals in a fast-paced digital business environment.",
    iconName: "Globe"
  },
  {
    title: "Fintech Innovation Lab",
    description: "Specializing in emerging trends and technologies in the financial sector.",
    iconName: "DollarSign"
  }
];

export const COURSE_SEGMENTS: CourseSegment[] = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp"
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp"
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp"
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp"
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    iconName: "Code"
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    iconName: "Layers"
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    iconName: "ArrowUpRight"
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    iconName: "Award"
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    iconName: "Search"
  },
  {
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    iconName: "FileText"
  },
  {
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    iconName: "Play"
  }
];

export const FAQ_GROUPS: FAQGroup[] = [
  {
    title: "About the Course",
    content: [
      {
        title: "What types of corporate training programs does Accredian offer?",
        content: [
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
        ]
      },
      {
        title: "What domain specializations are available?",
        content: [
          "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
        ]
      }
    ]
  },
  {
    title: "About the Delivery",
    content: [
      {
        title: "Can the courses be customized for specific industries or teams?",
        content: [
          "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals."
        ]
      },
      {
        title: "Who are the instructors for these programs?",
        content: [
          "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights."
        ]
      },
      {
        title: "What formats are the programs delivered in?",
        content: [
          "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements."
        ]
      }
    ]
  },
  {
    title: "Miscellaneous",
    content: [
      {
        title: "What is the ideal team size for corporate training?",
        content: [
          "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."
        ]
      },
      {
        title: "How do we get started with Accredian?",
        content: [
          "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs."
        ]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    review: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    company_logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    name: "ADP"
  },
  {
    review: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    company_logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    name: "Bayer"
  },
  {
    review: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    company_logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    name: "Reliance"
  }
];

export const DOMAIN_OPTIONS = [
  { value: "product management", label: "Product Management" },
  { value: "CFO", label: "CFO" },
  { value: "data science", label: "Data Science" },
  { value: "artificial intelligence", label: "Artificial Intelligence" },
  { value: "Human Resource", label: "Human Resource" },
  { value: "strategy & leadership", label: "Strategy & Leadership" },
  { value: "General Management", label: "General Management" },
  { value: "digital Transformation", label: "Digital Transformation" },
  { value: "business management", label: "Business Management" },
  { value: "finance", label: "Finance" },
  { value: "project management", label: "Project Management" },
  { value: "senior management", label: "Senior Management" },
  { value: "cybersecurity", label: "Cybersecurity" }
];

export const DELIVERY_OPTIONS = [
  { value: "Online", label: "Online" },
  { value: "Offline", label: "Offline" }
];
