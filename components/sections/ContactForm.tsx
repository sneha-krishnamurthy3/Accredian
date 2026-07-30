"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useContactForm(() => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Contact Us"
          title="Get in touch with us"
          description="Ready to secure your credentials or integrate our verification system? Send us a message and our integration specialist will connect in 1 business hour."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Connect with our team to explore institutional integrations, custom API plans, or security standards audit requests.
              </p>
            </div>

            {/* Detail items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Email Support</h4>
                  <p className="text-sm text-slate-600 mt-0.5">integrations@accredian.com</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Admissions registry: registrar@accredian.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Phone Helpline</h4>
                  <p className="text-sm text-slate-600 mt-0.5">+1 (800) 555-ACCR</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Mon-Fri: 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Headquarters</h4>
                  <p className="text-sm text-slate-600 mt-0.5">Suite 400, 250 University Ave</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Palo Alto, CA 94301</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 border border-slate-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">Thank you!</h3>
                    <p className="text-sm text-slate-600 max-w-sm">
                      We have received your message. Our integration coordinator will get in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        error={errors.name}
                        disabled={isSubmitting}
                        placeholder="John Doe"
                        required
                      />
                      <Input
                        label="Work Email"
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={isSubmitting}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <Input
                      label="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      disabled={isSubmitting}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                    <Textarea
                      label="Your Message"
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      error={errors.message}
                      disabled={isSubmitting}
                      placeholder="Tell us about your organization's credentialing and verification requirements..."
                      required
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      className="w-full gap-2 mt-2"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
