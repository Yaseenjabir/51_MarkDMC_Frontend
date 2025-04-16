import AdvanceTech from "@/components/Home/AdvanceTech";
import BestBussiness from "@/components/Home/BestBussiness";
import HeroSection from "@/components/Home/HeroSection";
import Strategy from "@/components/Home/Strategy";
import TheProblem from "@/components/Home/TheProblem";
import TurnLeads from "@/components/Home/TurnLeads";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Strategy />
      <AdvanceTech />
      <TurnLeads />
      <TheProblem />
      <BestBussiness />
    </main>
  );
}
