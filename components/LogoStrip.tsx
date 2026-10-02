"use client";

import React from "react";

export function LogoStrip() {
  const fictionalLogos = [
    {
      name: "Acorn Labs",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      name: "Cadence Cloud",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm2 0c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm4 0a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      ),
    },
    {
      name: "Monolith AI",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M4 4h7v7H4zm9 0h7v7h-7zm0 9h7v7h-7zm-9 0h7v7H4z" />
        </svg>
      ),
    },
    {
      name: "Northline",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      ),
    },
    {
      name: "PulseHQ",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M3 13h4l3-8 4 14 3-6h4v-2h-3l-3 6-4-14-3 8H3z" />
        </svg>
      ),
    },
    {
      name: "Hyperion",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Orbit Systems",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="5" stroke="currentColor" strokeWidth="1.8" fill="none" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 border-y border-zinc-800/60 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-semibold text-zinc-500 font-display mb-8">
          Engineered for startups, engineering agencies & remote teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-60">
          {fictionalLogos.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <div className="shrink-0">{item.svg}</div>
              <span className="text-sm font-semibold tracking-tight font-display">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
