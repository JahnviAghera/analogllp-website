import { HeroSection } from "@/components/home/HeroSection";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { AboutSnippet } from "@/components/home/AboutSnippet";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesHighlight />
      <AboutSnippet />
    </main>
  );
}
