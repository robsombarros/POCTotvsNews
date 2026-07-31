import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CalculatorSection } from "./components/CalculatorSection";
import { DidYouKnowSection } from "./components/DidYouKnowSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { CasesSection } from "./components/CasesSection";
import { WebinarSection } from "./components/WebinarSection";
import { VideoSection } from "./components/VideoSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <CalculatorSection />
        <DidYouKnowSection />
        <RoadmapSection />
        <CasesSection />
        <WebinarSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
