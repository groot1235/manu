"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  AudioWaveform,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function CtaFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Pre-Footer Hero CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl border border-violet-500/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-8 sm:p-12 lg:p-16 text-center shadow-[0_0_60px_rgba(139,92,246,0.15)] overflow-hidden">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300 font-display">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ZERO-NOTE REVOLUTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Ready to eliminate meeting debt forever?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              Start your next sprint sync with Pohiri. Real-time diarization, zero bot interruptions,
              and instant Linear tickets before you close your laptop.
            </p>

            {/* Email form */}
            <div className="pt-2 max-w-md mx-auto">
              {submitted ? (
                <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Welcome aboard! Check your email for instant access.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all shrink-0"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                  14-day free trial
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-zinc-500" />
                  No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800/80">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <AudioWaveform className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                Pohiri
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                AI
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Ambient intelligence for conversation workflows. Zero-latency voice diarization,
              automated summaries, and direct ticket execution.
            </p>
            <div className="flex items-center gap-3 text-zinc-400">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-display mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#features" className="hover:text-zinc-200 transition-colors">
                  Diarization Engine
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-zinc-200 transition-colors">
                  Contextual Summaries
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-zinc-200 transition-colors">
                  Linear & Jira Sync
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-zinc-200 transition-colors">
                  Bot-Free Audio Hook
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-zinc-200 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-display mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Engineering Squads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Consultancies & Agencies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Venture & Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Private Cloud / VPC
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Trust & Security */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-display mb-4">
              Security
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  SOC2 Type II Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Zero Data Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-200 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Pohiri AI Inc. Fictional concept demonstration. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">All Systems Operational</span>
            <span className="text-zinc-600">•</span>
            <span className="font-mono text-zinc-400">99.99% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
