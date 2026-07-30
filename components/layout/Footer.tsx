"use client";

import React from "react";

interface FooterProps {
  onEnquireClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquireClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-[#1d1d1d] sm:bg-white sm:mt-24 py-10 border-t border-slate-200">
      <div className="max-w-[85rem] w-full px-6 sm:px-8 mx-auto">
        {/* Top Section - Brand, Socials & Enquire Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 sm:border-slate-200 pb-6 gap-6">
          <div>
            {/* Logo */}
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian Logo"
              className="hidden sm:block w-36 h-auto object-contain"
            />
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
              alt="Accredian Logo"
              className="block sm:hidden w-36 h-auto object-contain"
            />

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-slate-600 hover:text-universal transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-slate-600 hover:text-universal transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8h2.8v-4.87c0-.26.05-.52.12-.7a1.09 1.09 0 0 1 1-.72c.69 0 .92.52.92 1.3v5h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.5H5v8h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-slate-600 hover:text-universal transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-slate-600 hover:text-universal transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://youtube.com/@accredian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white sm:text-slate-600 hover:text-universal transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enquire CTA */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <button
              onClick={onEnquireClick}
              className="w-full md:w-auto px-6 py-2.5 bg-universal hover:bg-universal-hover text-white rounded-lg font-semibold text-sm transition shadow-md cursor-pointer select-none text-center"
            >
              Enquire Now
            </button>
            <p className="text-white sm:text-slate-700 text-xs mt-2 select-none">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Mid Section - Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-6 gap-8 mt-6 border-b border-gray-700 sm:border-slate-200">
          {/* Accredian Links Column */}
          <div className="text-left space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-white sm:text-slate-900 font-circular select-none">
              Accredian
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 sm:text-slate-600 hover:text-universal text-sm transition-colors font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-slate-400 sm:text-slate-600 hover:text-universal text-sm transition-colors font-medium"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#accredianEdge"
                  className="text-slate-400 sm:text-slate-600 hover:text-universal text-sm transition-colors font-medium"
                >
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="text-left space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-white sm:text-slate-900 font-circular select-none">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-slate-450 text-slate-400 sm:text-slate-600 leading-relaxed">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-universal hover:underline font-medium"
                >
                  enterprise@accredian.com
                </a>
              </p>
              <p>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-6 text-center">
          <p className="text-slate-500 sm:text-slate-600 text-xs font-medium font-sans">
            &copy; {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
