"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  LayoutDashboard, 
  FileCheck, 
  Settings, 
  Code, 
  Plus, 
  ArrowUpRight, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "verification">("dashboard");
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const [hoveredChartPoint, setHoveredChartPoint] = useState<{ x: number; y: number; val: string; day: string } | null>(null);

  // Mock data for the static verification dashboard
  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Credentials", icon: FileCheck, active: false },
    { label: "Developer API", icon: Code, active: false },
    { label: "Settings", icon: Settings, active: false },
  ];

  const metrics = [
    { id: "m1", label: "Active Credentials", value: "148,259", change: "+12.4%", trend: "up" },
    { id: "m2", label: "Validation Rate", value: "99.98%", change: "Stable", trend: "neutral" },
    { id: "m3", label: "Verification Requests", value: "32,940", change: "+8.2%", trend: "up" },
  ];

  const chartData = [
    { x: 30, y: 140, val: "2,420 reqs", day: "Mon" },
    { x: 90, y: 110, val: "2,980 reqs", day: "Tue" },
    { x: 150, y: 80, val: "3,410 reqs", day: "Wed" },
    { x: 210, y: 130, val: "2,600 reqs", day: "Thu" },
    { x: 270, y: 90, val: "3,250 reqs", day: "Fri" },
    { x: 330, y: 50, val: "4,120 reqs", day: "Sat" },
    { x: 390, y: 60, val: "3,890 reqs", day: "Sun" },
  ];

  const mockRecords = [
    { name: "Jane Madison", course: "B.Sc. Computer Science", status: "Verified", date: "March 14, 2026", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { name: "Robert Chen", course: "M.BA Business Admin", status: "Verified", date: "March 12, 2026", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { name: "Emily Watson", course: "Data Analytics Bootcamp", status: "Pending", date: "March 11, 2026", color: "text-amber-600 bg-amber-50 border-amber-100" },
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-white overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Product Demo"
          title="The unified credential console"
          description="A complete institutional admin interface designed for rapid certificate issuing, tracking, and tamper-proof verification auditing."
        />

        {/* Dashboard Mockup Window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto rounded-3xl bg-slate-900 shadow-2xl border border-slate-800 p-3 md:p-4 overflow-hidden text-left"
        >
          {/* Window Frame Header */}
          <div className="flex items-center justify-between px-4 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-slate-500 ml-3">console.accredian.com</span>
            </div>
            
            {/* View Switch Tabs */}
            <div className="flex items-center bg-slate-850 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  activeTab === "dashboard"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                Issuer Console
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  activeTab === "verification"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                Verification Portal
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
            {activeTab === "dashboard" ? (
              <>
                {/* Mock Sidebar */}
                <div className="hidden md:flex md:col-span-3 flex-col border-r border-slate-800/60 p-4 justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                        A
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">Accredian</span>
                    </div>

                    <nav className="space-y-1">
                      {sidebarLinks.map((link) => (
                        <a
                          key={link.label}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={cn(
                            "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors",
                            link.active
                              ? "bg-slate-800/80 text-white"
                              : "text-slate-400 hover:text-slate-200"
                          )}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="p-3 bg-slate-850/50 rounded-xl border border-slate-800/50 text-[10px] text-slate-500">
                    <p className="font-semibold text-slate-450">Current Tier</p>
                    <p className="text-indigo-400 font-bold mt-0.5">Professional Plan</p>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-1 md:col-span-9 p-4 md:p-6 flex flex-col justify-between space-y-6">
                  {/* Top bar header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Admissions Console</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Manage digital credential credentials issuance and metrics.</p>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.8 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                      Issue Certificate
                    </button>
                  </div>

                  {/* Dashboard Metrics grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {metrics.map((metric) => (
                      <div
                        key={metric.id}
                        onMouseEnter={() => setHoveredMetric(metric.id)}
                        onMouseLeave={() => setHoveredMetric(null)}
                        className={cn(
                          "p-4 rounded-2xl bg-slate-850 border transition-all duration-300 relative overflow-hidden",
                          hoveredMetric === metric.id ? "border-slate-700 bg-slate-800/80" : "border-slate-800/80 bg-slate-850"
                        )}
                      >
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{metric.label}</p>
                        <div className="flex items-baseline gap-2 mt-2">
                          <span className="text-xl font-bold text-white">{metric.value}</span>
                          <span className={cn(
                            "text-[10px] font-bold",
                            metric.trend === "up" ? "text-emerald-400" : "text-slate-500"
                          )}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart and Tables split grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* SVG Line Chart */}
                    <div className="lg:col-span-7 p-4 rounded-2xl bg-slate-850 border border-slate-800/80 flex flex-col justify-between relative">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-slate-400">Verification Requests (Weekly)</span>
                        <span className="text-[10px] font-mono text-slate-500">Peak: 4,120</span>
                      </div>

                      {/* Interactive Chart Visualizer */}
                      <div className="relative w-full h-36 border-b border-slate-800/40 mt-2">
                        <svg className="w-full h-full" viewBox="0 0 420 160" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          <line x1="0" y1="40" x2="420" y2="40" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
                          <line x1="0" y1="80" x2="420" y2="80" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
                          <line x1="0" y1="120" x2="420" y2="120" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />

                          {/* SVG Path Curve */}
                          <path
                            d="M 30 140 Q 60 125 90 110 T 150 80 T 210 130 T 270 90 T 330 50 T 390 60"
                            fill="none"
                            stroke="url(#chartGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />

                          {/* Gradient Definitions */}
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#4f46e5" />
                              <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                          </defs>

                          {/* Dynamic vertices dots */}
                          {chartData.map((pt, idx) => (
                            <circle
                              key={idx}
                              cx={pt.x}
                              cy={pt.y}
                              r={hoveredChartPoint?.day === pt.day ? 6 : 4}
                              className="fill-indigo-500 stroke-slate-900 cursor-pointer transition-all duration-150"
                              strokeWidth="2"
                              onMouseEnter={() => setHoveredChartPoint(pt)}
                              onMouseLeave={() => setHoveredChartPoint(null)}
                            />
                          ))}
                        </svg>

                        {/* Chart Tooltip popover */}
                        <AnimatePresence>
                          {hoveredChartPoint && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              className="absolute bg-slate-950 border border-slate-800 rounded-lg p-2 text-[10px] font-semibold text-white shadow-xl z-20"
                              style={{ left: `${(hoveredChartPoint.x / 420) * 100 - 10}%`, top: `${(hoveredChartPoint.y / 160) * 100 - 45}%` }}
                            >
                              <p className="text-slate-400 leading-none">{hoveredChartPoint.day}</p>
                              <p className="text-indigo-400 font-bold mt-1">{hoveredChartPoint.val}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* X Axis Labels */}
                      <div className="flex items-center justify-between text-[9px] font-semibold text-slate-500 px-6 pt-2">
                        {chartData.map((d) => (
                          <span key={d.day}>{d.day}</span>
                        ))}
                      </div>
                    </div>

                    {/* Transaction Audit logs table */}
                    <div className="lg:col-span-5 p-4 rounded-2xl bg-slate-850 border border-slate-800/80 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-slate-400 block mb-3">Recent Issuance Audit Logs</span>
                        <div className="space-y-2">
                          {mockRecords.map((rec, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-[11px]">
                              <div className="space-y-0.5">
                                <p className="font-semibold text-white">{rec.name}</p>
                                <p className="text-[10px] text-slate-500">{rec.course}</p>
                              </div>
                              <div className="text-right">
                                <span className={cn("inline-block px-1.8 py-0.5 rounded-md text-[9px] font-bold border", rec.color)}>
                                  {rec.status}
                                </span>
                                <p className="text-[9px] text-slate-500 mt-1">{rec.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 mt-3">
                        View All Issuance History
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* High Fidelity Verifiable Recipient Portal */
              <div className="col-span-12 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-full max-w-xl rounded-3xl bg-slate-850 border border-slate-850 p-6 md:p-8 space-y-6 relative overflow-hidden shadow-inner text-left">
                  {/* Decorative glowing gradient */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" />
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-violet-500/10 rounded-full blur-[60px]" />

                  {/* Portal Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-650 flex items-center justify-center text-white font-black text-sm">
                        A
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white tracking-wide leading-none">Accredian Trust Network</h5>
                        <span className="text-[9px] text-slate-500 font-medium">Valid secure cryptographically signed credential</span>
                      </div>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Recipient Certificate Content */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                        Credential Recipient
                      </span>
                      <h4 className="text-xl font-bold text-white">Jane Madison</h4>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                        Credential Type
                      </span>
                      <p className="text-sm font-semibold text-slate-350">
                        B.Sc. Computer Science & Systems Engineering
                      </p>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        Stanford School of Admissions
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">
                          Issued On
                        </span>
                        <span className="text-xs font-semibold text-white">March 14, 2026</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">
                          Security Hash
                        </span>
                        <span className="text-xs font-mono text-indigo-400 font-semibold">acc_8849b29c</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Banner */}
                  <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 flex items-center justify-between text-xs text-emerald-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold">Cryptographically Verified</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-500">SHA-256</span>
                  </div>

                  {/* Share button mockups */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors border border-slate-750 flex items-center justify-center gap-1.5 cursor-pointer">
                      Download PDF
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex-1 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                      Share Credential
                    </button>
                  </div>
                </div>

                <div className="text-slate-500 text-xs">
                  Looking for developer integration?{" "}
                  <a href="#contact" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                    Get sandbox keys
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
