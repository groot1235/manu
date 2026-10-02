"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import {
  Mic,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Cpu,
  FileText,
  Share2,
} from "lucide-react";

export function BentoGrid() {
  const [activeSummaryMode, setActiveSummaryMode] = useState<"tldr" | "specs" | "decisions">("tldr");

  return (
    <section id="features" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTELLIGENCE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            Built from scratch for conversation fidelity.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Every cell of Pohiri is engineered to listen with nuance, understand technical context,
            and execute workflow tasks before the meeting ends.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cell 1: Transcription (Large 2 Cols) */}
          <SpotlightCard className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Zero-Latency Multi-Speaker Diarization
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Separates overlapping cross-talk with 99.4% precision
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                  Sub-150ms Ingest
                </span>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Traditional transcription trips over engineers debating pull requests or interrupting
                each other. Pohiri isolates individual vocal frequencies in real-time, attributing
                every nuance, argument, and technical decision to the right speaker.
              </p>
            </div>

            {/* Mini Animated Visual inside Cell 1 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-900">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                  Active Audio Beamforming
                </span>
                <span className="font-mono text-zinc-500">Channel A & B Balanced</span>
              </div>

              {/* Dynamic waveform stream */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-violet-500/30">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-zinc-200">Sarah (Design)</span>
                    <span className="text-[10px] text-violet-400 font-mono">Speaking</span>
                  </div>
                  <div className="flex items-end gap-1 h-5">
                    {[40, 80, 55, 95, 30, 75, 45].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-violet-500 rounded-t-sm"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60 opacity-60">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-zinc-400">Marcus (Arch)</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Listening</span>
                  </div>
                  <div className="flex items-end gap-1 h-5">
                    {[10, 15, 12, 10, 14, 10, 12].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-zinc-700 rounded-t-sm"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60 opacity-60">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-zinc-400">Elena (PM)</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Idle</span>
                  </div>
                  <div className="flex items-end gap-1 h-5">
                    {[8, 8, 8, 8, 8, 8, 8].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-zinc-800 rounded-t-sm"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Cell 2: Summaries (1 Col) */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Context-Aware Summaries
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Filter out filler chit-chat. Generate tailored briefs with one click.
              </p>

              {/* Mode Selector Tabs */}
              <div className="flex p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] mb-4">
                <button
                  onClick={() => setActiveSummaryMode("tldr")}
                  className={`flex-1 py-1 rounded-md transition-all ${
                    activeSummaryMode === "tldr"
                      ? "bg-violet-600 text-white font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  TL;DR
                </button>
                <button
                  onClick={() => setActiveSummaryMode("specs")}
                  className={`flex-1 py-1 rounded-md transition-all ${
                    activeSummaryMode === "specs"
                      ? "bg-violet-600 text-white font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Specs
                </button>
                <button
                  onClick={() => setActiveSummaryMode("decisions")}
                  className={`flex-1 py-1 rounded-md transition-all ${
                    activeSummaryMode === "decisions"
                      ? "bg-violet-600 text-white font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Log
                </button>
              </div>
            </div>

            {/* Dynamic Mini Visual inside Cell 2 */}
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
              {activeSummaryMode === "tldr" && (
                <p className="leading-relaxed animate-in fade-in">
                  &ldquo;Team agreed to standardize dark mode tokens on zinc-950 with electric violet accents. Audio streaming moved to WebSockets for sub-150ms latency.&rdquo;
                </p>
              )}
              {activeSummaryMode === "specs" && (
                <div className="space-y-1.5 font-mono text-[11px] text-zinc-300 animate-in fade-in">
                  <div>• PROTOCOL: WS/v2 dual-channel</div>
                  <div>• BUFFER: 250ms circular window</div>
                  <div>• THEME: var(--color-violet-accent)</div>
                </div>
              )}
              {activeSummaryMode === "decisions" && (
                <div className="space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-zinc-200">No external bots in client meetings</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-zinc-200">Assign Linear ticket to David</span>
                  </div>
                </div>
              )}
            </div>
          </SpotlightCard>

          {/* Cell 3: Action Items (1 Col) */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Autonomous Action Items
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Pohiri parses commitment verbs like &ldquo;I&apos;ll handle that ticket by Thursday&rdquo; and creates the ticket automatically.
              </p>
            </div>

            {/* Mini Visual: Synced Ticket Card */}
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-200">Linear Task Ingest</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                  Created
                </span>
              </div>
              <div className="text-xs text-zinc-400 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                <div className="text-zinc-200 font-medium mb-1">
                  ENG-409: Audit WebSocket reconnect policy
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span>Assignee: Marcus V.</span>
                  <span>Due: In 2 days</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Cell 4: Integrations & Privacy (Large 2 Cols) */}
          <SpotlightCard className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Zero-Bot Architecture & Deep Ecosystem Sync
                    </h3>
                    <p className="text-xs text-zinc-400">
                      No intrusive &ldquo;Pohiri Bot has joined&rdquo; avatars in your calls
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                  <span>SOC2 Type II</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Connects through native macOS/Windows audio drivers, browser audio worklets, or
                direct enterprise calendar webhook integrations with Google Meet, Zoom, and Teams.
                Pushes structured deliverables straight into Linear, Notion, Slack, and Jira.
              </p>
            </div>

            {/* Mini Visual: Synced Tool Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Linear", type: "Issue Tracker", status: "Active Sync" },
                { name: "Slack", type: "Channel Thread", status: "Auto-post" },
                { name: "Notion", type: "Team Wiki", status: "Doc Created" },
                { name: "Google Meet", type: "Native Audio", status: "Bot-free" },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-violet-500/40 transition-colors"
                >
                  <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                    {tool.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 mb-2">{tool.type}</div>
                  <div className="text-[10px] text-violet-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    {tool.status}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
