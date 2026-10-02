"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Pohiri record meetings without an awkward bot joining the call?",
      answer:
        "Pohiri operates at the audio layer using our lightweight desktop driver or browser audio worklet. Instead of dispatching a third-party bot account into your Zoom, Meet, or Teams room, it captures your microphone and incoming speaker stream directly on your machine. Client calls stay completely professional with zero intrusive participant avatars.",
    },
    {
      question: "Is our conversation audio or transcript data used to train AI models?",
      answer:
        "Never. We maintain a strict zero-data-retention policy with our inference pipeline. Your audio streams and generated transcripts are encrypted with AES-256 at rest and TLS 1.3 in transit. We sign enterprise DPAs (Data Processing Agreements) and HIPAA Business Associate Agreements upon request.",
    },
    {
      question: "How does Pohiri handle technical jargon, code names, and internal acronyms?",
      answer:
        "You can connect Pohiri to your Linear workspace, GitHub repositories, or company glossary. Pohiri automatically ingests your team's active project names, library acronyms (e.g., gRPC, K8s, OAuth2), and team member handles to ensure 99.4% precision without phonetic misspellings.",
    },
    {
      question: "Which meeting and communication platforms work with Pohiri?",
      answer:
        "Pohiri supports Google Meet, Zoom, Microsoft Teams, Webex, Slack Huddles, and Discord. Because it operates at the hardware and browser audio driver layer, it also works with in-person meeting room microphone setups.",
    },
    {
      question: "Can we customize summary formats for engineering vs. sales teams?",
      answer:
        "Yes! You can configure tailored output blueprints per calendar event or channel. Engineering syncs can output architectural trade-offs and Linear tickets; client calls can output executive agreements and follow-up email drafts.",
    },
    {
      question: "Is there an option for self-hosting or deployment in a private VPC?",
      answer:
        "Yes. Enterprise tier customers can deploy Pohiri within their dedicated AWS, GCP, or Azure Virtual Private Cloud using our turnkey Helm charts and containerized inference containers.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-xs font-semibold text-violet-400 font-display">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Everything you need to know about Pohiri.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Have questions about privacy, bot-free recording, or technical integrations?
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-colors hover:border-violet-500/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-100 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-violet-400 bg-violet-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed border-t border-zinc-800/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
