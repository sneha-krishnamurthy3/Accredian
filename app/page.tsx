"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TrustedBy from "@/components/sections/TrustedBy";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CATFramework from "@/components/sections/CATFramework";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Navbar onEnquireClick={openModal} />

      {/* Main content — each section manages its own max-w-[85rem] mx-auto centering */}
      <main className="flex-grow flex flex-col items-center w-full">

        {/* Hero Section */}
        <Hero onEnquireClick={openModal} />

        {/* Stats / Numbers Section */}
        <Stats />

        {/* Clients Ticker Marquee Section */}
        <TrustedBy />

        {/* Accredian Edge / USP Section */}
        <AccredianEdge />

        {/* Domain Expertise Hub Grid */}
        <DomainExpertise />

        {/* Course Segmentation focus cards */}
        <CourseSegmentation />

        {/* Who Should Join / Strategic Skill Enhancement */}
        <WhyChooseUs />

        {/* CAT Approach Diagram Section */}
        <CATFramework />

        {/* How We Deliver Results Steps Section */}
        <HowItWorks />

        {/* Accordions FAQs category tabs */}
        <FAQ onEnquireClick={openModal} />

        {/* Testimonials Review deck Swiper */}
        <Testimonials />

        {/* Contact/Support call-out Banner */}
        <ContactCTA onEnquireClick={openModal} />

      </main>

      {/* Footer Navigation Columns & CTA */}
      <Footer onEnquireClick={openModal} />

      {/* Central Lead Capturing Enquire Now Pop-up Modal */}
      <EnquireModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
