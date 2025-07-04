import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-background/50 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero background"
        fill
        className="object-cover opacity-20"
        data-ai-hint="abstract technology"
        priority
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center relative z-20">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary font-headline">
            Innovative Solutions for a Digital World
          </h1>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            AnalogLLP provides cutting-edge platforms, products, and services to propel your business forward. Discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
