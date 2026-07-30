"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, BRAND_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
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
      rootMargin: "-120px 0px -60% 0px", // Sweet spot targeting active sections below the header
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

  // Close mobile menu on click/scroll
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-white/75 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-500/10">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {BRAND_NAME}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
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
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors relative cursor-pointer",
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleLinkClick("#contact")}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleLinkClick("#contact")}
                className="gap-1.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-100 cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-lg shadow-xl"
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
                      "py-2 text-base font-semibold transition-colors border-l-2 pl-4",
                      isActive
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full gap-1.5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
