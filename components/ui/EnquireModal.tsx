"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useEnquireForm } from "@/hooks/useEnquireForm";
import { DOMAIN_OPTIONS, DELIVERY_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({
  isOpen,
  onClose,
  title = "Enquire Now",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSelectChange,
    handleSubmit,
  } = useEnquireForm(() => {
    // Reset and close after a short delay on success
    setTimeout(() => {
      onClose();
    }, 2000);
  });

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            ref={modalRef}
            className="relative flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[500px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer disabled:opacity-50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Pane - Illustration Banner */}
            <div className="hidden md:flex md:w-1/2 bg-blue-50 relative overflow-hidden items-center justify-center border-r border-slate-100">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
                alt="Quote Request"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>

            {/* Right Pane - Form Formulations */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-start overflow-y-auto max-h-[85vh] md:max-h-none text-left">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 font-circular">
                {title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter Name"
                    className={cn(
                      "w-full px-3 py-2.5 text-sm font-normal border-b-2 outline-none transition duration-150 bg-white placeholder-slate-400 focus:placeholder-slate-300",
                      errors.name
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-blue-500"
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter Email"
                    className={cn(
                      "w-full px-3 py-2.5 text-sm font-normal border-b-2 outline-none transition duration-150 bg-white placeholder-slate-400 focus:placeholder-slate-300",
                      errors.email
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-blue-500"
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <div className="flex gap-2 items-center border-b-2 border-slate-200 focus-within:border-blue-500 transition duration-150 pb-0.5">
                    {/* Country Code Flag Selector */}
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-100 rounded text-xs font-semibold text-slate-700 select-none border border-slate-200">
                      <span className="text-base leading-none">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Enter Mobile Number"
                      className="w-full px-2 py-2 text-sm font-normal outline-none bg-transparent placeholder-slate-400 focus:placeholder-slate-300"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter Company Name"
                    className={cn(
                      "w-full px-3 py-2.5 text-sm font-normal border-b-2 outline-none transition duration-150 bg-white placeholder-slate-400 focus:placeholder-slate-300",
                      errors.company
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-blue-500"
                    )}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Domain Option Selector */}
                <div className="space-y-1">
                  <select
                    name="courseDomain"
                    value={values.courseDomain}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-2.5 py-2.5 text-sm border-b-2 bg-white outline-none transition duration-150 font-normal",
                      errors.courseDomain
                        ? "border-red-500 focus:border-red-600 text-red-500"
                        : "border-slate-200 focus:border-blue-500 text-slate-700",
                      !values.courseDomain && "text-slate-400"
                    )}
                  >
                    <option value="" disabled>Select Domain</option>
                    {DOMAIN_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.courseDomain && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.courseDomain}
                    </p>
                  )}
                </div>

                {/* Candidates Count */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="candidates"
                    value={values.candidates}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter No. of candidates"
                    className={cn(
                      "w-full px-3 py-2.5 text-sm font-normal border-b-2 outline-none transition duration-150 bg-white placeholder-slate-400 focus:placeholder-slate-300",
                      errors.candidates
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-blue-500"
                    )}
                  />
                  {errors.candidates && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.candidates}
                    </p>
                  )}
                </div>

                {/* Delivery Mode Selector */}
                <div className="space-y-1">
                  <select
                    name="mode"
                    value={values.mode}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-2.5 py-2.5 text-sm border-b-2 bg-white outline-none transition duration-150 font-normal",
                      errors.mode
                        ? "border-red-500 focus:border-red-600 text-red-500"
                        : "border-slate-200 focus:border-blue-500 text-slate-700",
                      !values.mode && "text-slate-400"
                    )}
                  >
                    <option value="" disabled>Select Mode of Delivery *</option>
                    {DELIVERY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.mode && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.mode}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Eg: Gurgaon, Delhi, India"
                    className={cn(
                      "w-full px-3 py-2.5 text-sm font-normal border-b-2 outline-none transition duration-150 bg-white placeholder-slate-400 focus:placeholder-slate-300",
                      errors.location
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-blue-500"
                    )}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 py-3 px-4 bg-universal hover:bg-universal-hover text-white rounded-lg font-semibold text-sm transition duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquireModal;
