"use client";

import React, { useState } from "react";
import {
  Mic,
  Sparkles,
  Send,
  CheckCircle2,
  Volume2,
  Clock,
  Layers,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  FileCode,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"record" | "summarise" | "ship">("record");

  return (
    <section id="showcase" className="py-24 relative bg-[#09090b]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            Experience the three phases of Pohiri.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Click through each phase to inspect how raw conversation transforms into structured,
            verified company knowledge.
          </p>
        </div>

        {/* Interactive Tabs Header */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl">
            <button
              onClick={() => setActiveTab("record")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "record"
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>1. Record</span>
            </button>

            <button
              onClick={() => setActiveTab("summarise")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "summarise"
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>2. Summarise</span>
            </button>

            <button
              onClick={() => setActiveTab("ship")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "ship"
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Send className="w-4 h-4" />
              <span>3. Ship</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "record" && (
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d12] p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
                    Phase 01: Low-Latency Ingestion
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Multi-Channel Audio Fingerprinting
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    BUFFER: 48kHz / 24-bit
                  </span>
                </div>
              </div>

              {/* Waveform & Voiceprint visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Channel 1 (System Loopback)</div>
                  <div className="text-sm font-semibold text-zinc-200 mb-3">Remote Attendees</div>
                  <div className="flex items-end gap-1.5 h-10">
                    {[30, 60, 45, 90, 70, 85, 40, 95, 60, 40, 80, 50].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-violet-500 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Channel 2 (Hardware Mic)</div>
                  <div className="text-sm font-semibold text-zinc-200 mb-3">Local Speaker</div>
                  <div className="flex items-end gap-1.5 h-10">
                    {[20, 35, 80, 40, 50, 65, 30, 75, 45, 20, 60, 30].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-indigo-400 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex flex-col justify-between">
                  <div className="text-xs text-zinc-400">Acoustic Noise Floor</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">-52 dB</div>
                  <div className="text-xs text-zinc-500">Neural noise cancelation active</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span>Supports native Zoom, Google Meet, Microsoft Teams, Slack Huddles, and in-person room mics.</span>
                <span className="font-semibold text-violet-400">Zero bot required</span>
              </div>
            </div>
          )}

          {activeTab === "summarise" && (
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d12] p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
                    Phase 02: Semantic Intelligence
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Structured Decision & Action Matrix
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                    Format: Executive Brief
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="text-xs font-semibold text-violet-400 mb-1">Contextual Topic Cluster</div>
                  <h4 className="text-sm font-bold text-zinc-100 mb-2">
                    Frontend Design Tokens & Dark Theme Implementation
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Discussion resolved differences between high-contrast dark themes vs tinted grey.
                    Consensus reached on zinc-950 background with violet-500 interactive elements to meet
                    WCAG AAA accessibility compliance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-950 border border-emerald-500/20">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Decisions Made (2)</span>
                    </div>
                    <ul className="text-xs text-zinc-300 space-y-1.5">
                      <li>• Do not add external bot accounts to calls</li>
                      <li>• Standardize on Tailwind v4 CSS variables</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950 border border-violet-500/20">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Commitments Extracted (3)</span>
                    </div>
                    <ul className="text-xs text-zinc-300 space-y-1.5">
                      <li>• Sarah: Export Figma variables by EOD</li>
                      <li>• Marcus: Benchmark WebSocket reconnects</li>
                      <li>• Elena: Update client roadmap timeline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ship" && (
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d12] p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                    Phase 03: Automated Dispatch
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    One-Click Pipeline Execution
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                    All 3 Webhooks Dispatched
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
                      <FileCode className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">Linear Task Created</div>
                      <div className="text-[11px] text-zinc-500">
                        Issue #ENG-418: Update dark theme variables • Assigned to Marcus V.
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Success (201)</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
                      <MessageSquare className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">Slack Thread Posted</div>
                      <div className="text-[11px] text-zinc-500">
                        Message sent to #eng-standup with key takeaways & tags
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Success (200)</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
                      <Layers className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">Notion Meeting Archive</div>
                      <div className="text-[11px] text-zinc-500">
                        Page created under Team Knowledge Base &gt; Product Architecture
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Synced</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
