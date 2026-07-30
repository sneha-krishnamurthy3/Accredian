"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll detection and IntersectionObserver for active link tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver logic
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -50% 0px", // Targeting active sections
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on click/scroll and scroll smoothly to target
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "py-3 bg-white border-b border-slate-200 shadow-sm"
            : "py-4 bg-white border-b border-slate-100"
        )}
      >
        <div className="max-w-[85rem] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wrapper */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="flex items-center gap-2 focus:outline-none select-none"
            >
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                alt="Accredian"
                className="hidden sm:block h-8 w-auto object-contain"
              />
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
                alt="Accredian"
                className="block sm:hidden h-8 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Link Toggles */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium transition-all relative cursor-pointer font-sans select-none",
                      isActive
                        ? "text-universal font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-universal rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA buttons removed */}

            {/* Mobile Navigation Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 xl:hidden border-b border-slate-200 bg-white shadow-xl max-h-[calc(100vh-68px)] overflow-y-auto"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={cn(
                      "py-2 text-base font-semibold transition-colors border-l-2 pl-4 select-none",
                      isActive
                        ? "border-universal text-universal"
                        : "border-transparent text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="border-slate-100" />
                /* Mobile CTA buttons removed */
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
