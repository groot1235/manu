"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Starter",
      description: "For individual builders, consultants and early experimenters.",
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      highlight: false,
      features: [
        "15 meeting hours per month",
        "Zero-bot client audio capture",
        "Basic speaker diarization (up to 4)",
        "Automated markdown summaries",
        "Slack webhook notifications",
        "7-day transcript search history",
        "Community support",
      ],
      ctaText: "Start Free Forever",
      ctaHref: "#",
    },
    {
      name: "Pro",
      description: "For high-velocity product and engineering squads.",
      monthlyPrice: 24,
      annualPrice: 19,
      badge: "Most Popular",
      highlight: true,
      features: [
        "Unlimited meeting hours",
        "Sub-150ms ultra-low latency ingest",
        "Unlimited speaker identification",
        "1-click sync to Linear, Jira & Notion",
        "Custom company glossary & acronym map",
        "Automated decision logs & spec drafts",
        "Full audio retention & semantic search",
        "Priority email & Slack support",
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaHref: "#",
    },
    {
      name: "Team & Enterprise",
      description: "For scaling organizations with strict security & compliance.",
      monthlyPrice: 49,
      annualPrice: 39,
      badge: "Enterprise Ready",
      highlight: false,
      features: [
        "Everything in Pro, plus:",
        "Private VPC or on-premises deployment",
        "SOC2 Type II compliance & HIPAA BAA",
        "Zero data retention for AI model training",
        "SAML SSO & automated SCIM provisioning",
        "Custom LLM prompts tailored by department",
        "Dedicated Solutions Engineer & 99.99% SLA",
      ],
      ctaText: "Contact Enterprise Team",
      ctaHref: "#",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            Simple, predictable pricing for teams of any scale.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            All plans include bot-free audio capture and end-to-end encrypted transcript processing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-zinc-500"
              }`}
            >
              Monthly billing
            </span>
            <button
              onClick={() =>
                setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
              }
              className="relative w-14 h-7 rounded-full bg-zinc-800 border border-zinc-700 p-1 transition-colors focus:outline-none"
              aria-label="Toggle annual or monthly pricing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-violet-500 transition-transform ${
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                billingCycle === "annual" ? "text-white" : "text-zinc-500"
              }`}
            >
              <span>Annual billing</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price =
              billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <SpotlightCard
                key={idx}
                className={`p-8 flex flex-col justify-between relative ${
                  plan.highlight
                    ? "border-violet-500/60 bg-zinc-900/80 shadow-[0_0_40px_rgba(139,92,246,0.2)] lg:-translate-y-2"
                    : "border-zinc-800/80 bg-zinc-900/40"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-[11px] font-bold tracking-wide uppercase text-white shadow-md font-display">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-display text-white">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 min-h-[36px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-400 font-sans">
                      / user / month
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="pt-6 border-t border-zinc-800/80 space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Security / Enterprise Callout */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-zinc-200">Strict Enterprise Data Isolation</span>
              <p className="text-zinc-500">
                Pohiri guarantees your confidential conversation transcripts are never used to train foundational AI models.
              </p>
            </div>
          </div>
          <a
            href="#faq"
            className="text-violet-400 hover:text-violet-300 font-medium shrink-0 flex items-center gap-1"
          >
            <span>Read security whitepaper</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
