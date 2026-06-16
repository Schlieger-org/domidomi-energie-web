import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ValueProposition } from "./components/ValueProposition";
import { HowItWorks } from "./components/HowItWorks";
import { Segments } from "./components/Segments";
import { CalculatorSection } from "./components/CalculatorSection";
import { Ecosystem } from "./components/Ecosystem";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyBar } from "./components/StickyBar";
import { CalculatorModal } from "./components/CalculatorModal";
import type { PrefillData } from "./components/Calculator";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<PrefillData | undefined>(undefined);

  const openCalculator = (data?: PrefillData) => {
    setPrefill(data);
    setModalOpen(true);
  };
  const closeCalculator = () => {
    setModalOpen(false);
    setPrefill(undefined);
  };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header onOpenCalculator={() => openCalculator()} />
      <Hero onOpenCalculator={openCalculator} />
      <TrustBar />
      <ValueProposition />
      <HowItWorks />
      <Segments onOpenCalculator={() => openCalculator()} />
      <CalculatorSection />
      <Ecosystem />
      <FAQ />
      <FinalCTA onOpenCalculator={() => openCalculator()} />
      <div className="pb-16 md:pb-0">
        <Footer onOpenCalculator={() => openCalculator()} />
      </div>
      <StickyBar onOpenCalculator={() => openCalculator()} />
      <CalculatorModal open={modalOpen} onClose={closeCalculator} prefill={prefill} />
    </div>
  );
}