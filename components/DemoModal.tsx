"use client";

import React, { useState, useEffect } from "react";
import { X, Play, Pause, Volume2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-[#0c0c11] shadow-[0_0_50px_rgba(139,92,246,0.25)] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
            <h3 className="text-sm font-semibold text-zinc-200 font-display">
              Pohiri 2-Minute Architecture & Workflow Walkthrough
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Simulation Canvas */}
        <div className="p-6 space-y-6">
          <div className="relative aspect-video rounded-xl bg-zinc-950 border border-zinc-800/80 overflow-hidden flex flex-col justify-between p-6">
            {/* Ambient Violet Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Simulated Session: Weekly Sprint Retrospective</span>
              </div>
              <div className="text-xs font-mono text-violet-400">
                AI Confidence: 99.8%
              </div>
            </div>

            {/* Center Dynamic Preview */}
            <div className="relative z-10 text-center max-w-xl mx-auto space-y-3">
              <div className="inline-flex p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Autonomous Diarization in Action
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pohiri captures multi-channel audio directly from the device or web meeting, runs
                low-latency beamforming, and synchronizes tickets with zero manual effort.
              </p>
            </div>

            {/* Bottom Scrubber & Controls */}
            <div className="relative z-10 space-y-3 bg-zinc-900/90 backdrop-blur-md p-3.5 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-lg bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div className="flex-1">
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-indigo-400 h-full rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {Math.floor((progress * 1.2) / 60)}:{String(Math.floor((progress * 1.2) % 60)).padStart(2, "0")} / 2:00
                </div>
              </div>
            </div>
          </div>

          {/* Quick Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Bots in Call</span>
              </div>
              <p className="text-xs text-zinc-400">
                Records silently via native desktop audio hook or browser tab.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Ticket Sync</span>
              </div>
              <p className="text-xs text-zinc-400">
                Pushes tickets to Linear, Jira, and Asana with exact assignees.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SOC2 Privacy Shield</span>
              </div>
              <p className="text-xs text-zinc-400">
                Zero training on your data. Local VPC or multi-tenant encryption.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-950/80">
          <span className="text-xs text-zinc-400">
            Ready to test on your next team standup?
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
