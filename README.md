# Accredian Enterprise — Corporate Training Landing Page

> **Assignment Submission** — Full Stack Developer Intern Role  
> A high-fidelity recreation of [enterprise.accredian.com](https://enterprise.accredian.com/) built with Next.js, TypeScript, and Tailwind CSS v4.

---

## 🔗 Submission Links

| Resource | Link |
|---|---|
| 🌐 **Live Deployed Link (Vercel)** | _(Add after Vercel deployment)_ |
| 💻 **GitHub Repository** | [github.com/sneha-krishnamurthy3/Accredian](https://github.com/sneha-krishnamurthy3/Accredian) |

---

## 🚀 Key Features

1. **Sticky Adaptive Navbar** — Fixed header with scroll detection, smooth anchor scrolling, active section highlighting via IntersectionObserver, and a collapsible mobile drawer menu.
2. **Hero Section** — Blue card structure with bullet highlights, modal-triggering CTA button, and official GCP illustration (`corporate-big-hero-v4.webp`).
3. **Track Record Stats** — Animated circular stat badges (10K+ professionals, 200+ sessions, 5K+ learners) with responsive desktop/mobile layouts.
4. **Infinite-Scroll Logo Marquee** — Seamless CSS keyframe ticker showcasing partner logos (Bayer, Reliance, HCL, IBM, CRIF, ADP) with gradient edge fades.
5. **Accredian Edge USP** — Swaps between desktop and mobile SVG diagrams from GCP assets.
6. **Domain Expertise Grid** — 7 domains with custom inline SVGs (lightbulb, brain, people-group, bar chart, gear, globe, payment card) matching the original site's icons.
7. **Course Segmentation Cards** — 4 image cards (Program/Industry/Topic/Level Specific) in a responsive grid.
8. **Strategic Skill Enhancement** — Blue banner with audience categories (Tech / Non-Tech / Emerging / Senior Professionals) and custom icon set.
9. **CAT Framework** — Concept-Application-Tools diagram from official GCP SVG asset.
10. **How We Deliver Results** — 3-step process cards with custom SVG icons, numbered badges, and blue accent bars.
11. **Tabbed FAQ Accordion** — Left sidebar category tabs (About Course / Delivery / Miscellaneous) with smooth drawer accordions and an Enquire Now CTA.
12. **Testimonials Carousel** — Auto-rotating slide deck with 2-up desktop and 1-up mobile views, animated with Framer Motion.
13. **Contact CTA Banner** — Blue gradient banner with headset icon and Contact Us button.
14. **Corporate Footer** — Logo, inline SVG social links, navigation columns, and Enquire Now CTA.
15. **Enquire Now Modal (Bonus)** — Full lead capture form with 8 validated fields stored via Next.js API route.

---

## 🏗️ Approach Taken

This project was built from scratch, component by component, with clarity and structure as the primary goals.

### Architecture Decisions

- **Next.js App Router**: Used the App Router with `"use client"` directives only where interactivity is required (Navbar, modals, carousels, forms). Static sections remain server-rendered for performance.
- **Component-First Structure**: UI is divided into atomic components (`Button`, `Input`, `EnquireModal`) and page-section components (`Hero`, `Stats`, `FAQ`, etc.), keeping each piece focused and reusable.
- **Single Source of Truth**: All copy text, asset URLs, FAQ data, testimonial arrays, and stats live in `lib/constants.ts`, making updates easy without touching component files.
- **Original Asset Integration**: Instead of placeholder images, all assets (WebP illustrations, SVG diagrams, PNG logos) are loaded directly from Accredian's Google Cloud Storage CDN — the same URLs the original site uses.
- **Responsive-First Design**: All layouts are mobile-first. Breakpoints follow `sm → md → lg → xl` progression with Tailwind CSS utilities.
- **Zod-Validated API**: The `/api/enquire` route uses a strict Zod schema to validate all 8 form fields server-side, returning structured error messages.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16 (App Router)](https://nextjs.org/) | Framework & routing |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling & responsive design |
| [Framer Motion 12](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Zod](https://zod.dev/) | Form & API schema validation |
| [Sonner](https://sonner.dev/) | Toast notifications |

---

## 📂 Project Structure

```
app/
├── api/enquire/route.ts     # POST API — Zod-validated lead capture endpoint
├── layout.tsx               # Root layout, SEO metadata, Toaster provider
├── page.tsx                 # Landing page — assembles all sections
└── globals.css              # Tailwind v4 theme tokens, custom animations

components/
├── layout/
│   ├── Navbar.tsx           # Sticky nav with IntersectionObserver active tracking
│   └── Footer.tsx           # Footer columns, social icons, enquire CTA
├── sections/
│   ├── Hero.tsx             # Hero card with CTA and illustration
│   ├── Stats.tsx            # Track record stats with circular badges
│   ├── TrustedBy.tsx        # Infinite marquee logo ticker
│   ├── AccredianEdge.tsx    # USP diagram (desktop/mobile swap)
│   ├── DomainExpertise.tsx  # 7-domain grid with custom SVG icons
│   ├── CourseSegmentation.tsx  # 4 segmentation cards
│   ├── WhyChooseUs.tsx      # Blue banner — target audience grid
│   ├── CATFramework.tsx     # CAT diagram section
│   ├── HowItWorks.tsx       # 3-step process cards
│   ├── FAQ.tsx              # Tabbed sidebar + accordion
│   ├── Testimonials.tsx     # Auto-rotating testimonial carousel
│   └── ContactCTA.tsx       # Bottom CTA banner
└── ui/
    ├── Button.tsx           # Multi-variant button component
    ├── Input.tsx            # Input & textarea wrappers
    └── EnquireModal.tsx     # Lead capture modal form

hooks/
└── useEnquireForm.ts        # Form state, validation, and API submission hook

lib/
├── constants.ts             # All content data (single source of truth)
└── utils.ts                 # clsx + tailwind-merge utility

types/
└── index.ts                 # TypeScript interfaces
```

---

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js 18+** and **npm** installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/sneha-krishnamurthy3/Accredian.git
cd Accredian

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# 4. Build for production (optional)
npm run build
npm start

# 5. Lint check
npm run lint
```

---

## 📡 API — `POST /api/enquire`

The bonus lead capture form posts to a Next.js serverless API route with Zod validation.

### Request Body

```json
{
  "name": "Jane Madison",
  "email": "jane@reliance.com",
  "phone": "+91 9999988888",
  "company": "Reliance Industries",
  "courseDomain": "data science",
  "candidates": "25",
  "mode": "Online",
  "location": "Mumbai, India"
}
```

### Success Response (`200 OK`)

```json
{
  "success": true,
  "message": "Thank you Jane Madison! Your enquiry has been logged. Our L&D Advisor will contact you shortly."
}
```

### Validation Error (`400`)

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": { "email": "Please enter a valid email address." }
}
```

---

## 🤖 AI Usage — Antigravity (Google DeepMind)

This project was developed using **Antigravity AI** as the primary AI pair-programming tool throughout the entire build.

### Where AI Helped

| Area | AI Contribution |
|---|---|
| **Page Analysis** | Fetched and parsed the live `enterprise.accredian.com` site — extracted all stats, testimonial text, FAQ content, GCP asset URLs, and Tailwind class structures from the actual source |
| **Component Scaffolding** | Generated initial JSX structure for all 14 section components with correct props and TypeScript interfaces |
| **Zod Schema** | Designed the 8-field enquiry form validation schema and the corresponding serverless API route |
| **Custom SVG Icons** | Generated precise inline SVG paths for domain expertise icons (brain, lightbulb, globe, etc.) and audience icons (graduation cap, briefcase, monitor+checkmark) to match the original site's visual style |
| **FAQ Layout** | Restructured the FAQ from pill-tab layout to sidebar-tab + accordion layout matching the reference screenshot |
| **Infinite Marquee** | Implemented the CSS keyframe `@keyframes marquee` animation with gradient edge fades |
| **Testimonials Carousel** | Built the responsive carousel pagination logic (2-up desktop, 1-up mobile) with Framer Motion `AnimatePresence` |
| **Build Debugging** | Identified and resolved TypeScript build errors — Zod enum type mismatch, invalid `priority` attribute on native `<img>` tags, missing lucide-react icon exports |
| **Alignment Fixes** | Cross-referenced browser DevTools HTML from the original site to align section classes, max-widths, and spacing to match exactly |

### What I Modified or Improved Manually

| Area | Manual Improvement |
|---|---|
| **Icon Accuracy** | Reviewed each AI-generated SVG path against the reference screenshots and corrected mismatched icon shapes (e.g., bar-chart vs analytics, presentation board vs monitor) |
| **Navbar Design** | Removed CTA buttons, repositioned logo to left, resized the logo image to match the original layout after reviewing the actual site |
| **DevTools Alignment** | Personally inspected the browser DevTools HTML of the original site and manually identified the correct Tailwind classes for the Hero banner (`rounded-lg`, `overflow-visible`, `mt-20`, image sizing `w-[80%]`) |
| **Section Centering** | Diagnosed the root `items-start` vs `items-center` alignment bug in page.tsx and fixed the main wrapper structure |
| **Color Matching** | Identified the exact blue hex `#1a6fe0` for the WhyChooseUs banner by inspecting the original site's computed styles |
| **Content Data** | Verified all stat numbers, FAQ answers, testimonial quotes, and domain descriptions against the original live site |

---

## 🔮 Improvements with More Time

1. **Database Persistence** — Connect `/api/enquire` to a serverless Postgres DB (Supabase + Prisma) to persist leads instead of in-memory logging.
2. **Email Notifications** — Integrate Resend or AWS SES to automatically email the L&D team when a new enquiry is submitted.
3. **CRM Integration** — Webhook-sync submitted leads to HubSpot or Salesforce for the sales pipeline.
4. **Country Code Dropdown** — Replace the plain phone input with an international dial-code selector component.
5. **Analytics** — Add Vercel Analytics or PostHog to track CTA clicks, section engagement, and form conversion rates.
6. **Dark Mode** — Implement a dark mode toggle using Tailwind's `dark:` variant and `next-themes`.
7. **Animated Section Entrances** — Add scroll-triggered `framer-motion` reveal animations to each section as they enter the viewport.
8. **E2E Tests** — Write Playwright tests for the enquire modal form flow and mobile navigation toggle.
9. **i18n** — Add multi-language support using `next-intl` for global enterprise reach.

---

## 📋 Evaluation Checklist

| Criteria | Status |
|---|---|
| ✅ All landing page sections built | Done |
| ✅ Navigation menu & footer | Done |
| ✅ Fully responsive (mobile + desktop) | Done |
| ✅ Reusable components | Done |
| ✅ Smooth section navigation | Done |
| ✅ Next.js App Router | Done |
| ✅ Functional components + hooks | Done |
| ✅ Tailwind CSS styling | Done |
| ✅ API integration (mock + validated) | Done |
| ✅ GitHub repository | Done |
| ⭐ Lead capture form (Bonus) | Done |
| ⭐ API route with validation (Bonus) | Done |
| 🔲 Deployed on Vercel | Pending |

---

*Built by Sneha Krishnamurthy — Full Stack Developer Intern Applicant*
