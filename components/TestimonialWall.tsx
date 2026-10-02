"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export function TestimonialWall() {
  const testimonials = [
    {
      role: "VP of Engineering",
      companyType: "Series B Developer Platform",
      teamSize: "180+ engineers",
      quote:
        "We banned third-party recording bots because enterprise clients kept flagging them in security reviews. Pohiri captures audio locally with zero bots. It reclaimed at least 4.5 hours per week for every tech lead on my team.",
      highlight: "Saved 4.5 hrs/week per lead",
      rating: 5,
    },
    {
      role: "Principal Systems Architect",
      companyType: "Cloud Infrastructure Scale-up",
      teamSize: "40+ team",
      quote:
        "The speech engine actually understands technical jargon. When we debate gRPC streaming buffers vs WebSocket backpressure, it transcribes every acronym accurately instead of hallucinatory word salads.",
      highlight: "99.4% technical term accuracy",
      rating: 5,
    },
    {
      role: "Head of Product",
      companyType: "Global FinTech Platform",
      teamSize: "250+ team",
      quote:
        "The automatic Linear and Jira issue generation is shockingly reliable. It captures who committed to what, sets the priority based on verbal tone, and creates the ticket before we close our laptops.",
      highlight: "Zero missed action items",
      rating: 5,
    },
    {
      role: "Staff Design Director",
      companyType: "Independent Digital Studio",
      teamSize: "35+ designers",
      quote:
        "During high-stakes client design critiques, nobody has to look down and furiously take notes anymore. We maintain eye contact, talk through user flows, and Pohiri delivers organized Figma tasks.",
      highlight: "100% engagement in critiques",
      rating: 5,
    },
    {
      role: "Founding Partner",
      companyType: "DeepTech Venture Studio",
      teamSize: "12 partners",
      quote:
        "I take 15 founder pitches every Tuesday. Having an executive brief, decision list, and deal-stage notes drafted into our internal Notion wiki immediately after the call is a superpower.",
      highlight: "Instant post-pitch memos",
      rating: 5,
    },
    {
      role: "Chief of Staff",
      companyType: "Autonomous AI Research Lab",
      teamSize: "120+ team",
      quote:
        "Our team is spread across London, Tokyo, and San Francisco. Asynchronous teammates read the 90-second executive synthesis instead of wading through hours of video recordings.",
      highlight: "3x faster async handoffs",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>EARLY ACCESS FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            What early users say.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            Verified feedback from product managers, engineering leads, and operators using
            Pohiri in daily production meetings.
          </p>
        </div>

        {/* Testimonial Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 sm:p-7 flex flex-col justify-between border border-zinc-800/80 bg-zinc-900/50 hover:border-violet-500/40"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-violet-400 text-violet-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution and Metric Highlight */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-display">
                      {item.role}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {item.companyType} • {item.teamSize}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono text-violet-300">
                  <CheckCircle2 className="w-3 h-3 text-violet-400" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
