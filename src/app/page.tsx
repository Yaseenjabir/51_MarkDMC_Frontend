import AdvanceTech from "@/components/Home/AdvanceTech";
import BestBussiness from "@/components/Home/BestBussiness";
import HeroSection from "@/components/Home/HeroSection";
import Strategy from "@/components/Home/Strategy";
import TheProblem from "@/components/Home/TheProblem";
import TurnLeads from "@/components/Home/TurnLeads";
import UnfairAdvantage from "@/components/Home/UnfairAdvantage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark DMC | Effective Digital Marketing Solutions",
  description:
    "Discover smart, strategic, and results-driven digital marketing at Mark DMC. We craft tailored plans to attract, engage, and convert audiences, driving measurable growth for your business.",
  keywords:
    "digital marketing, SEO, paid media, content marketing, web development, Mark DMC, results-driven marketing, client growth",
  other: {
    "facebook-domain-verification": "jnaajaywv1dtmclb6e4ipwc0o7s873",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Strategy />
      <AdvanceTech />
      <TurnLeads />
      <UnfairAdvantage />
      <TheProblem />
      <BestBussiness />
    </main>
  );
}
