"use client";

import React, { useEffect, useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Zap, ShieldCheck, Clock, Globe } from "lucide-react";

export function StatsCounter() {
  const [minutesCount, setMinutesCount] = useState(1380);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      value: "99.4%",
      label: "Diarization Accuracy",
      subtext: "Verified on multi-speaker cross-talk",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      value: "<150ms",
      label: "Zero-Latency Stream",
      subtext: "WebSocket beamforming audio engine",
      icon: <Zap className="w-5 h-5 text-violet-400" />,
    },
    {
      value: "4.2 hrs",
      label: "Reclaimed / Week",
      subtext: "Per team member on note-taking & debriefs",
      icon: <Clock className="w-5 h-5 text-indigo-400" />,
    },
    {
      value: "42+",
      label: "Global Dialects",
      subtext: "Automatic dialect & technical jargon parser",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-16 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 border border-zinc-800/80 bg-zinc-900/40 hover:border-violet-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/40">
                  {stat.icon}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  Live Metric
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-200 mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {stat.subtext}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Live System Ingest Ticker */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live platform telemetry:</span>
            <span className="font-mono font-bold text-zinc-200">
              {minutesCount.toLocaleString()} min
            </span>
            <span className="text-zinc-500">transcribed in the last hour</span>
          </div>
        </div>
      </div>
    </section>
  );
}
