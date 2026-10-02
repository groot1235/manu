"use client";

import React, { useState, useEffect } from "react";
import {
  Mic,
  Sparkles,
  CheckCircle2,
  Clock,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface SpeakerSegment {
  speaker: string;
  role: string;
  avatarColor: string;
  time: string;
  text: string;
}

const TRANSCRIPT_SCRIPT: SpeakerSegment[] = [
  {
    speaker: "Sarah C.",
    role: "Lead Designer",
    avatarColor: "bg-emerald-500",
    time: "10:14:02",
    text: "We tested the dark mode palette with high contrast ratios. The electric violet (#8b5cf6) accent gives us great visibility without overwhelming users.",
  },
  {
    speaker: "Marcus V.",
    role: "Staff Architect",
    avatarColor: "bg-violet-500",
    time: "10:14:18",
    text: "Agreed. On the backend, we swapped the audio chunking pipeline to native WebSockets. Transcription latency is now sub-150ms globally.",
  },
  {
    speaker: "Elena R.",
    role: "Product Manager",
    avatarColor: "bg-amber-500",
    time: "10:14:35",
    text: "Perfect. Let's make sure the Linear issue for the WebSocket migration is assigned to David, and post the summary directly to #eng-sync on Slack.",
  },
];

export function LiveTranscriptPanel() {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<"summary" | "actions" | "raw">("summary");

  // Typewriter effect for current speaker segment
  useEffect(() => {
    if (!isPlaying) return;

    const currentSegment = TRANSCRIPT_SCRIPT[currentSegmentIndex];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (charIndex <= currentSegment.text.length) {
        setDisplayedText(currentSegment.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        // Wait before transitioning to next segment
        const timeout = setTimeout(() => {
          setCurrentSegmentIndex((prev) => (prev + 1) % TRANSCRIPT_SCRIPT.length);
        }, 2400);
        return () => clearTimeout(timeout);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [currentSegmentIndex, isPlaying]);

  const handleReset = () => {
    setCurrentSegmentIndex(0);
    setDisplayedText("");
    setIsPlaying(true);
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-[#0d0d12]/90 backdrop-blur-2xl shadow-2xl overflow-hidden font-sans">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
          </div>
          <div className="h-4 w-px bg-zinc-800 mx-1.5" />
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              LIVE DIARIZATION
            </span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="hidden sm:inline text-zinc-300">Product & Engineering Architecture Sync</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Controls */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause simulation" : "Play simulation"}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleReset}
            title="Replay from start"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
            <Clock className="w-3 h-3 text-zinc-500" />
            <span>00:24:18</span>
          </div>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        {/* Left Column: Live Audio Stream & Real-time Transcript */}
        <div className="lg:col-span-7 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-zinc-800/80 flex flex-col justify-between">
          <div>
            {/* Live Audio Visualizer Bar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Mic className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                    Audio Engine Ingest
                    <span className="text-[10px] text-emerald-400 font-mono">99.4% precision</span>
                  </div>
                  <div className="text-[11px] text-zinc-500">Dual-channel stereo stream • 48kHz lossless</div>
                </div>
              </div>

              {/* Dynamic waveform visualizer bars */}
              <div className="flex items-center gap-1 h-6 px-2">
                {[12, 28, 48, 20, 64, 82, 35, 90, 45, 70, 24, 85, 32, 50, 18].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * ((i % 3) + 1)) % 100)}%` : "20%",
                      transition: "height 0.15s ease",
                    }}
                    className={`w-1 rounded-full ${
                      i % 4 === 0
                        ? "bg-violet-400"
                        : i % 2 === 0
                        ? "bg-violet-600/70"
                        : "bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Transcript Stream */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-1 border-b border-zinc-900">
                <span className="font-medium text-zinc-300">Live Speaker Dialogue</span>
                <span className="text-[11px] text-zinc-500">Auto-identifying 3 participants</span>
              </div>

              {/* Past segments */}
              {TRANSCRIPT_SCRIPT.map((segment, idx) => {
                const isCurrent = idx === currentSegmentIndex;
                const isPast = idx < currentSegmentIndex;
                if (!isCurrent && !isPast) return null;

                return (
                  <div
                    key={idx}
                    className={`group rounded-xl p-3 transition-all duration-300 ${
                      isCurrent
                        ? "bg-violet-950/20 border border-violet-500/30 shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)]"
                        : "bg-zinc-900/30 border border-zinc-800/40 opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full ${segment.avatarColor} text-[10px] font-bold text-black flex items-center justify-center`}
                        >
                          {segment.speaker[0]}
                        </div>
                        <span className="text-xs font-semibold text-zinc-200">
                          {segment.speaker}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {segment.role}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {segment.time}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pl-7">
                      {isCurrent ? displayedText : segment.text}
                      {isCurrent && isTyping && (
                        <span className="inline-block w-1.5 h-3.5 bg-violet-400 ml-1 animate-pulse" />
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              End-to-end encrypted audio stream
            </span>
            <span className="text-violet-400/90 font-mono">Stream delay: 112ms</span>
          </div>
        </div>

        {/* Right Column: AI Autonomous Synthesis */}
        <div className="lg:col-span-5 p-4 sm:p-5 bg-zinc-950/40 flex flex-col justify-between">
          <div>
            {/* Header Tabs */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Pohiri Synthesis Engine</span>
              </div>
              <div className="flex p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px]">
                <button
                  onClick={() => setActiveTab("summary")}
                  className={`px-2 py-0.5 rounded-md transition-colors ${
                    activeTab === "summary"
                      ? "bg-violet-600 text-white shadow-sm font-medium"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Digest
                </button>
                <button
                  onClick={() => setActiveTab("actions")}
                  className={`px-2 py-0.5 rounded-md transition-colors ${
                    activeTab === "actions"
                      ? "bg-violet-600 text-white shadow-sm font-medium"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Actions (3)
                </button>
              </div>
            </div>

            {/* Digest Content */}
            {activeTab === "summary" && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                  <div className="text-[11px] font-semibold text-violet-400 uppercase tracking-wider mb-1">
                    Executive TL;DR
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Team validated the high-contrast dark theme. Backend audio ingestion transitioned
                    to native WebSockets, successfully reducing global transcription latency to sub-150ms.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    Key Architectural Decisions
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Standardize dark mode on zinc-950 + electric violet (#8b5cf6)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Adopt WebSocket chunking stream for zero drop-frame ingestion</span>
                    </li>
                  </ul>
                </div>

                {/* Team Sentiment Indicator */}
                <div className="p-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Team Alignment Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="w-[96%] h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full" />
                    </div>
                    <span className="text-emerald-400 font-mono font-medium">96%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Items Content */}
            {activeTab === "actions" && (
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-violet-500/30 hover:border-violet-500/60 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-zinc-200">
                      ENG-342: WebSocket migration audit
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Linear Synced
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mb-2">
                    Assigned to David K. • Priority: Urgent
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <span>Due: Today 5:00 PM</span>
                    <span>•</span>
                    <span className="text-emerald-400">Auto-created from audio context</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-zinc-200">
                      Figma design token verification
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      Figma Task
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mb-2">
                    Assigned to Sarah C. • High-contrast dark theme
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-zinc-200">
                      Post minutes to #eng-sync
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Slack Queued
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Scheduled on meeting dismissal
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Dispatch Button */}
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-[11px] text-zinc-500">
              Synced with Linear, Slack & Notion
            </span>
            <button
              onClick={() => setActiveTab(activeTab === "summary" ? "actions" : "summary")}
              className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1 font-medium transition-colors"
            >
              <span>{activeTab === "summary" ? "View 3 Auto-Tasks" : "View Digest"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
