# Accredian Enterprise - Workforce Upskilling & Corporate Training Landing Page

Accredian Enterprise is a high-fidelity recreation of the official Accredian corporate training platform (`https://enterprise.accredian.com/`), built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

The landing page features custom-styled layouts, responsive grid structures, dynamic infinite scrolling logo marquees, and a functional popup "Enquire Now" lead capture form validated on both the client and server sides.

---

## 🚀 Key Features

1. **Sticky Adaptive Navigation**: Fixed header with scrolling state, smooth anchor scrolling to section IDs, active section indicators, and a collapsible mobile menu.
2. **Interactive Hero Section**: Recreates the blue card structure featuring bullet highlights (Tailored Solutions, Industry Insights, Expert Guidance, Measurable Impact) and a modal-triggering CTA next to the official GCP illustration `corporate-big-hero-v4.webp`.
3. **Track Record Statistics**: Section highlighting trained metrics (10K+ professionals, 200+ sessions, 5K+ active learners) framed in circular badges with adaptive divider border structures.
4. **Infinite scrolling Logo Marquee**: Grayscale logo ticker showcasing proven partnerships (Bayer, Reliance, HCL, IBM, CRIF, ADP) with automatic looping and hover pause.
5. **The Accredian Edge Strategic USP**: Renders the enterprise upskilling diagrams, swapping between desktop (`accredian-edge-usp-v3.svg`) and mobile (`accredian-edge-usp-mobile.svg`) SVGs.
6. **Focus Hub Domain Expertise Grid**: Displays the 7 specialization hubs (Gen-AI, Leadership, Operations, Fintech, etc.) in a responsive grid layout with hover transforms and Lucide icons.
7. **Custom-Fit Course Segmentation**: Displays the 4 custom-fit course scopes (Program, Industry, Topic, Level) using card grid layouts and GCP assets.
8. **Who Should Join (Strategic Skill Enhancement)**: Blue panel layout displaying target audience categories (Tech, Non-tech, Emerging, Senior professionals) in a clean grid layout alongside `imagehuman.png`.
9. **The CAT Framework**: Highlights learning excellence (Concept, Application, Tools) using the GCP diagram SVG (`catV2.svg`).
10. **Results Delivery (How It Works)**: Render cards representing the 3-step delivery approach (Skill Gap Analysis, Customized Plan, Flexible Delivery) with circular numbers and vertical accent bars.
11. **Tabbed FAQ Accordion**: Toggle drawer accordions categorized into tabs ("About the Course", "About the Delivery", and "Miscellaneous") with smooth grid-row transitions.
12. **Partner Testimonials Slider**: Reusable slide-transition testimonials carousel showing reviews (Bayer, ADP, Reliance) with responsive slides (2 side-by-side on desktop, 1 on mobile) and dot indicator selectors.
13. **Contact support CTA Banner**: Bottom blue gradient call-to-action banner ("Want to Learn More...").
14. **Corporate Footer**: Dynamic footer featuring logo, inline SVG social links, L&D details, and an "Enquire Now" CTA button.

---

## 🏗️ Approach Taken

This project was built from the ground up prioritizing modularity, clean code, responsive design, and production-ready architecture.

- **Component-First Architecture**: Features are divided into atomic, reusable UI components (`EnquireModal.tsx`, `Button.tsx`) isolated from page-specific sections. This keeps the layout dry and highly maintainable.
- **Next.js App Router**: Utilized Next.js App Router and React Server Components (RSC) by default. Client components (defined with `"use client"`) are used only where interactive hooks, state, or animations (Framer Motion) are required.
- **Responsive-First Design**: Layouts are designed mobile-first, ensuring fluid adaptivity across all breakpoints (from small screens `320px` to large screens `1440px`).
- **GCP Assets Integration**: Avoided placeholder image placeholders. Instead, we extracted and integrated original SVG, WebP, and PNG assets hosted directly on Accredian's Google Cloud Storage, ensuring 100% visual realism.
- **Zod-Validated API Integration**: The enquire form communicates with a Next.js serverless route using a strict Zod schema definition to validate payloads on both client and server sides.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Validation**: [Zod](https://zod.dev/)
- **Toasts**: [Sonner](https://sonner.dev/)

---

## 📂 Folder Structure

```text
app/
├── api/
│   └── enquire/
│       └── route.ts         # Zod validated contact enquiry endpoint
├── layout.tsx               # Root layout, Metadata SEO, Toaster
├── page.tsx                 # Main landing page coordinator (RSC)
├── globals.css              # Custom Tailwind v4 theme configurations & animations
components/
├── ui/                      # Reusable UI elements
│   ├── Button.tsx           # Multi-variant animated button
│   ├── Input.tsx            # Custom input and textarea wrappers
│   └── EnquireModal.tsx     # Double-pane modal form with GCP assets
├── layout/                  # Shell components
│   ├── Navbar.tsx           # Sticky nav with active section state & mobile drawer
│   └── Footer.tsx           # Footer and social shortcuts
├── sections/                # Full screen page blocks
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── TrustedBy.tsx
│   ├── AccredianEdge.tsx
│   ├── DomainExpertise.tsx
│   ├── CourseSegmentation.tsx
│   ├── WhyChooseUs.tsx
│   ├── CATFramework.tsx
│   ├── HowItWorks.tsx
│   ├── FAQ.tsx
│   ├── Testimonials.tsx
│   └── ContactCTA.tsx
hooks/
└── useEnquireForm.ts        # Enquire form validation and fetch state hook
lib/
├── constants.ts             # Copy text, logos, FAQs (Single source of truth)
└── utils.ts                 # Class merger utility (clsx + tailwind-merge)
types/
└── index.ts                 # TypeScript type interfaces
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 18+ and npm installed.

### Setup Instructions

1. Clone or download the repository into a directory:
   ```bash
   cd Accredian
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

4. Build for production:
   ```bash
   npm run build
   ```

5. Lint the project:
   ```bash
   npm run lint
   ```

---

## 📡 API Documentation

### POST `/api/enquire`
Receives corporate upskilling enquiries, validates the schema using Zod, and registers them in-memory.

#### Request Headers:
- `Content-Type: application/json`

#### Request Body:
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

#### Successful Response (`200 OK`):
```json
{
  "success": true,
  "message": "Thank you Jane Madison! Your corporate enquiry has been successfully logged. Our L&D Advisor will contact you shortly."
}
```

#### Bad Request Validation Error (`400 Bad Request`):
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {
    "email": "Please enter a valid email address.",
    "candidates": "Number of candidates must be greater than 0."
  }
}
```

---

## 🤖 AI Usage and Refinement

This project was built leveraging collaborative AI development workflows using Antigravity.

### Where AI Helped
- **Page Extraction**: Fetched the live client bundle structure and parsed the exact stats, testimonials arrays, FAQs list, and asset paths of the original `enterprise.accredian.com` page.
- **Form Schema & Scaffolding**: Generated Zod schemas and validation rules mapping the 8 inputs of the modal form.
- **Slider Carousel**: Designed the structural slide set pagination calculations for the custom testimonials carousel.
- **Type Checking Audits**: Identified type-checking errors in Zod enums and native `<img>` tags during production build checks.

### Manual Improvements
- **CSS Marquee Fine-Tuning**: Polished horizontal padding and translate distances in the infinite marquee to prevent layout flickering.
- **Icon Binding Mapping**: Mapped GCP variable variables to modern Lucide React icons.
- **SVG Social Icons**: Replaced external dependency icon imports in `Footer.tsx` with clean inline vector SVGs to prevent type errors.
- **Form State Hook**: Refactored input change handlers to clear specific validation errors in real-time as the user typing events fire.

---

## 🔮 Future Improvements

1. **Database Persistence**: Connect the `/api/enquire` route to a serverless Postgres database (using Supabase or Prisma ORM).
2. **Email Alerts**: Integrate Resend or AWS SES to send instant emails to the Accredian sales team when a lead is captured.
3. **Advanced Country Code Selector**: Implement an interactive dropdown containing country code lists and phone dial-codes mapping dial length constraints.
4. **CRM Onboarding**: Sync submitted leads directly to CRM databases (HubSpot, Salesforce) using webhooks.
