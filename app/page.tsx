import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Layout */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Landing */}
        <Hero />

        {/* Gray Scale Client Logos */}
        <TrustedBy />

        {/* 6 Reusable Feature Grid */}
        <Features />

        {/* Split statistics & Check list benefits */}
        <WhyChooseUs />

        {/* Product mockups & showcase tabs */}
        <ProductShowcase />

        {/* Testimonials Review grid */}
        <Testimonials />

        {/* Pricing tier matrices */}
        <Pricing />

        {/* Accordions questions answers */}
        <FAQ />

        {/* Lead capturing form API validation integration */}
        <ContactForm />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </>
  );
}
