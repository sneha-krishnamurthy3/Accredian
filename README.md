# Accredian - Premium Digital Credentialing & Verification Landing Page

Accredian is a complete, production-quality SaaS landing page built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases a premium credential issuance and cryptographic validation platform for universities, bootcamps, and modern enterprises.

The design is heavily inspired by high-end startup platforms (e.g., Stripe, Linear, Vercel, Apple) featuring minimal design, responsive layout, glassmorphic accents, and fluid 60fps micro-animations.

---

## 🚀 Key Features

1. **Sticky Glassmorphic Navigation**: Adapts on scroll, tracks active scroll sections, and features a slide-out mobile menu.
2. **Interactive Hero Section**: High-impact typography, quick stats, primary/secondary action triggers, and interactive floating verification preview cards.
3. **Logos Marquee**: Greyscale showcase of leading tech companies and academic partners.
4. **Interactive Features Grid**: 6 hover-lift capability cards with custom SVG capsules.
5. **Why Choose Us Split Section**: Stat counters and benefits highlights paired with an interactive dashboard UI mockup.
6. **Product Showcase & Console**: Tab-like features overview and an interactive syntax-highlighted code block console with one-click copy capability.
7. **Masonry Testimonials**: Grid of authenticated admissions and operations reviews.
8. **Interactive Pricing Grid**: Toggle between monthly and yearly billing options with a spring-animated sliding pill. Highlights the Pro tier plan.
9. **FAQ Accordion**: Smooth height transitions powered by Framer Motion. Accessible using ARIA states (`aria-expanded`, `role="region"`).
10. **Interactive Contact Form**: Custom-styled input components with instant client-side validations, submission status states (loading spinners, successes, errors), and native Sonner toasts. Integrates directly with a Next.js API route.
11. **Sleek Multi-column Footer**: Product/company shortcuts, newsletter form with instant validation, and custom inline SVG social shortcuts.

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
│   └── contact/
│       └── route.ts         # Zod validated contact submission endpoint
├── layout.tsx               # Root layout, Metadata SEO API, Inter font, Toaster
├── page.tsx                 # Main landing page coordinator (RSC)
├── globals.css              # Custom Tailwind v4 theme configurations
components/
├── ui/                      # Reusable atomic UI elements
│   ├── Button.tsx           # Multi-variant animated button
│   ├── Input.tsx            # Custom input and textarea wrappers
│   ├── SectionTitle.tsx     # Reusable section header text
│   ├── Accordion.tsx        # Framer motion powered accordion
│   ├── FeatureCard.tsx      # Hover-lift icon card
│   ├── TestimonialCard.tsx  # Grid/rating review card
│   └── PricingCard.tsx      # Plan details and action CTA
├── layout/                  # Shell components
│   ├── Navbar.tsx           # Sticky nav with active section state & mobile drawer
│   └── Footer.tsx           # Multi-column footer and newsletter submit
├── sections/                # Full screen page blocks
│   ├── Hero.tsx
│   ├── TrustedBy.tsx
│   ├── Features.tsx
│   ├── WhyChooseUs.tsx
│   ├── ProductShowcase.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── ContactForm.tsx
hooks/
└── useContactForm.ts        # Form state, validation, and API fetch hook
lib/
├── constants.ts             # Copy text, logos, pricing plans (Single source of truth)
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

### POST `/api/contact`
Receives contact inquiries, validates the schema using Zod, and registers them in-memory.

#### Request Headers:
- `Content-Type: application/json`

#### Request Body:
```json
{
  "name": "Jane Madison",
  "email": "jane@stanford.edu",
  "phone": "+1 (555) 019-2834",
  "message": "We would like to request an API integration key for Stanford."
}
```

#### Successful Response (`200 OK`):
```json
{
  "success": true,
  "message": "Thank you Jane Madison, your inquiry has been submitted successfully!"
}
```

#### Bad Request Validation Error (`400 Bad Request`):
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {
    "email": "Please enter a valid email address.",
    "message": "Message must be at least 10 characters."
  }
}
```

---

## 🤖 AI Usage and Refinement

During development, the AI agent worked in tandem with the developer to produce a production-ready system:
- **AI-Generated foundations**: Scalable folder structure, type-safe custom components, Framer Motion transitions, Zod API structure, and utility hooks (`useContactForm`).
- **Refinement**: Explicitly typed Framer Motion elements (`Variants`, `HTMLMotionProps`) to accommodate React 19 typings, resolved Next.js/Turbopack escape character conventions, and replaced dynamic lucide icon package mismatches with custom inline brand SVGs for optimal performance and Vercel compatibility.

---

## 🔮 Future Improvements

1. **Database Integration**: Connect the `/api/contact` route to a serverless DB like Prisma + Supabase (PostgreSQL) or MongoDB.
2. **Mail Notification**: Integrate AWS SES or Resend to send confirmation emails automatically upon form submit.
3. **Interactive Verification Sandbox**: Build a secondary page `/verify` that lets users upload a mock certificate JSON/PDF and verify its cryptographic hash live.
