"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Radio, BrainCircuit, Send, Sparkles, Check, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Silent Audio Capture",
      tagline: "Zero bot intrusion",
      description:
        "Sync your Google or Outlook calendar, or install our 12MB native client. Pohiri ingests stereo audio directly from your mic and system output without inviting an awkward bot to client or board meetings.",
      icon: <Radio className="w-6 h-6 text-violet-400" />,
      features: [
        "No bot participant in calls",
        "Works with Zoom, Meet, Teams & Slack Huddles",
        "Lossless local 48kHz audio buffer",
      ],
    },
    {
      number: "02",
      title: "Contextual Neural Synthesis",
      tagline: "Learns your internal glossary",
      description:
        "While you speak, Pohiri maps speaker voices to team members, connects project code names to your Linear and GitHub repos, and extracts architectural trade-offs with 99.4% precision.",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      features: [
        "Real-time speaker separation (diarization)",
        "Automatic company & repo jargon lookup",
        "Key decisions vs brainstorming filtering",
      ],
    },
    {
      number: "03",
      title: "Instant Workflow Execution",
      tagline: "Done before you leave the call",
      description:
        "The moment you hang up, Pohiri pushes an executive digest to Slack, creates tracked tickets with due dates in Linear/Jira, and drafts follow-up emails for client sign-off.",
      icon: <Send className="w-6 h-6 text-emerald-400" />,
      features: [
        "Direct 1-click Linear & Jira ticket sync",
        "Auto-formatted Slack & Teams threads",
        "Searchable private conversation knowledge base",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW POHIRI OPERATES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            From spoken thought to committed ticket in three steps.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Eliminate the 45-minute post-meeting note-taking scramble. Everything is recorded,
            synthesized, and dispatched autonomously.
          </p>
        </div>

        {/* 3 Steps with Animated Connecting Beam */}
        <div className="relative">
          {/* Animated Connecting Beam (Desktop Horizontal Track) */}
          <div className="hidden lg:block absolute top-28 left-[15%] right-[15%] h-0.5 bg-zinc-800 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-violet-400 to-indigo-500/20" />
            {/* Glowing Traveling Pulse Particle */}
            <div className="absolute top-1/2 -translate-y-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-[1px] animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <SpotlightCard
                key={idx}
                className="p-8 flex flex-col justify-between border border-zinc-800/80 bg-zinc-900/50 hover:border-violet-500/50"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-extrabold font-display text-zinc-700 group-hover:text-violet-400/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1 font-display">
                    {step.tagline}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-violet-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Micro-Interaction CTA */}
        <div className="mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group"
          >
            <span>Explore technical integration docs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
