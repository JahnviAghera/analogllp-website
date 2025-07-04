import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ContactForm } from "@/components/home/ContactForm";
import { HeroSection } from "@/components/home/HeroSection";
import { PlatformsSection } from "@/components/home/PlatformsSection";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSnippet />
      <ServicesHighlight />
      <PlatformsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
