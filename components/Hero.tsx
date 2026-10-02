"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";
import { LiveTranscriptPanel } from "./LiveTranscriptPanel";
import { DemoModal } from "./DemoModal";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#09090b]">
      {/* Background Gradients & Beams */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-60" />
      <div className="absolute inset-0 pointer-events-none bg-noise" />

      {/* Luminous Beams / Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-violet-600/25 via-indigo-600/15 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-24 left-1/3 w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-medium text-violet-300 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:border-violet-500/50 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-violet-400 -ml-4" />
            <span className="font-semibold text-white font-display">New: AI summaries v2</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
              Read release notes →
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
            Turn every spoken word into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-500">
              executed work.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-sans leading-relaxed">
            Zero-latency transcription, automatic speaker diarization, and instant ticket sync to
            Linear, Slack & Jira — before you even hit &ldquo;Leave Call&rdquo;.
          </p>

          {/* Email Capture & CTA Controls */}
          <div className="pt-2 max-w-md mx-auto">
            {submitted ? (
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm font-medium animate-in fade-in zoom-in-95">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Priority workspace invite sent! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4 text-violet-200" />
                </button>
              </form>
            )}

            {/* Watch Demo Secondary Button */}
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-zinc-400">
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-zinc-800/80 group-hover:bg-violet-600 flex items-center justify-center text-zinc-300 group-hover:text-white transition-all shadow-sm">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch 2-min demo</span>
              </button>

              <span className="text-zinc-700">•</span>

              <div className="flex items-center gap-1.5 text-zinc-400">
                <Lock className="w-3 h-3 text-zinc-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshot Mockup in Browser Frame with Glow */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Intense Ambient Glow behind the mockup */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

          {/* Browser Frame */}
          <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                </div>
              </div>

              {/* Fake URL Bar */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/70 border border-zinc-800 text-[11px] text-zinc-400 font-mono w-72 max-w-[50%] justify-center">
                <Lock className="w-2.5 h-2.5 text-emerald-400" />
                <span className="truncate">https://app.pohiri.ai/live/session-842</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                <Zap className="w-3 h-3 text-violet-400" />
                <span className="hidden sm:inline">Engine v2.4</span>
              </div>
            </div>

            {/* Embedded AI Moment: The Live Transcript Panel */}
            <div className="p-2 sm:p-4 bg-zinc-950">
              <LiveTranscriptPanel />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
