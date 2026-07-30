"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import Button from "@/components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50/50"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply opacity-70" />
        <div className="absolute bottom-12 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[80px] mix-blend-multiply opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50/80 border border-indigo-100/50"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Next-Gen Verification Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-slate-900"
            >
              Verify Academic and Professional achievements{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Instantly
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-normal"
            >
              Stop manual degree verifications. Issuance takes under a minute, validation is done in a millisecond. Secure, cryptographically certified credentials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto gap-2"
              >
                Create Credentials
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto gap-2 border-slate-200"
              >
                <Play className="w-4 h-4 text-slate-500 fill-slate-500" />
                How It Works
              </Button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0"
            >
              <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">Secured</p>
              </div>
              <div className="space-y-1 border-x border-slate-200/60 px-4">
                <p className="text-2xl font-bold text-slate-900">0.01s</p>
                <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">Latency</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-900">Zero</p>
                <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">Fraud</p>
              </div>
            </motion.div>
          </div>

          {/* Graphics Showcase & Floating Cards */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
            {/* Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-50/50 border border-indigo-100/50 p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-indigo-500/5"
            >
              {/* Dynamic decorative backdrop circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl" />

              {/* Certificate Mockup Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                      A
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Accredian secure</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>

                <div className="space-y-2 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Digital Credential Type
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    B.Sc. Computer Science & Systems Engineering
                  </h3>
                  <p className="text-xs text-slate-600">Issued by Stanford School of Admissions</p>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-200/60 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Recipient Name</span>
                  <span className="font-semibold text-slate-900">Jane Madison</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Verification ID</span>
                  <span className="font-mono text-indigo-600 font-semibold">acc_8849b29c</span>
                </div>
                <div className="w-full h-8 bg-indigo-600/5 rounded-lg border border-indigo-600/10 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-indigo-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  Verified Cryptographically
                </div>
              </div>

              {/* Floating Card 1: Live Activity */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute top-1/3 -right-6 md:-right-8 z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="p-3 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-900">Jane&apos;s Degree verified</p>
                    <p className="text-[9px] text-slate-600">Stanford Univ. admissions check</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 2: Security Indicator */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-1/4 -left-6 md:-left-8 z-20"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="p-3 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-900">W3C Verifiable Credentials</p>
                    <p className="text-[9px] text-slate-600">Complies with open specifications</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
