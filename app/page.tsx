import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { StatsCounter } from "@/components/StatsCounter";
import { BentoGrid } from "@/components/BentoGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TestimonialWall } from "@/components/TestimonialWall";
import { Pricing } from "@/components/Pricing";
import { FaqSection } from "@/components/FaqSection";
import { CtaFooter } from "@/components/CtaFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <StatsCounter />
        <BentoGrid />
        <HowItWorks />
        <ProductShowcase />
        <TestimonialWall />
        <Pricing />
        <FaqSection />
      </main>
      <CtaFooter />
    </div>
  );
}
