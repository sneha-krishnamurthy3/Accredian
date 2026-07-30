"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { STATS } from "@/lib/constants";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content & Stats Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100/50">
              Why Accredian
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Designed to eliminate verification overhead and certificate fraud
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Traditional credential verification is broken—relying on manual email checks, physical calls, and slow document mailings. Accredian simplifies everything by introducing instant digital verification.
            </p>

            {/* Bullet benefits */}
            <ul className="space-y-3.5">
              {[
                "100% tamper-proof cryptographically signed credentials.",
                "Zero manual support tickets for admissions and registrar offices.",
                "Global verification portal accessible anywhere, anytime.",
                "Secure data compliance conforming to SOC2 and GDPR requirements.",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/60">
              {STATS.slice(0, 2).map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium UI Mockup Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl" />

              {/* Window Controls */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">Verification Dashboard</span>
              </div>

              {/* Main Panel Content */}
              <div className="space-y-5 text-left">
                {/* Key Status Panel */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800/80 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-400">Decentralized Key Identifier</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] text-emerald-400 font-bold border border-emerald-500/20">ACTIVE</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-mono text-indigo-400 font-bold">did:accredian:keys#z6MkgT2hZ8...</p>
                    <p className="text-xs text-slate-455 text-slate-400">Standard Ed25519 Cryptographic Verification Key</p>
                  </div>
                </div>

                {/* Key Details & Specs */}
                <div className="space-y-3 pt-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Key Configuration Specs
                  </span>
                  
                  {[
                    { label: "W3C Cryptographic Standard", desc: "Complies with Verifiable Credentials Data Model v2.0", check: true },
                    { label: "Hardware Security Modules", desc: "Signed with FIPS 140-2 Level 3 HSM keys", check: true },
                    { label: "Admissions Registrar Auth", desc: "Keys automatically rotated every 180 days", check: true }
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-800/30 border border-slate-800/60 flex items-start gap-3 text-xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{spec.label}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
