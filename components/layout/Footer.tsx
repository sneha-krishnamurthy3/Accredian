"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BRAND_NAME, NAV_LINKS } from "@/lib/constants";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Mock API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Profile */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                A
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {BRAND_NAME}
              </span>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              The modern credentialing platform for universities, enterprises, and online bootcamps. Secure, instant verification at scale.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-100 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-100 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-100 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.slice(3).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get product updates, security briefs, and digital certification best practices.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="name@company.com"
                  className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm shadow-sm"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {status === "error" && (
                <p className="text-xs font-medium text-red-500">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-xs font-medium text-emerald-600">
                  Thank you! You&apos;ve been subscribed.
                </p>
              )}
            </form>
          </div>
        </div>

        <hr className="my-10 md:my-12 border-slate-200/60" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; 2026 {BRAND_NAME} Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-indigo-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-indigo-600 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
