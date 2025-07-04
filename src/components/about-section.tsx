import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-headline">
              Driving Innovation at AnalogLLP
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At AnalogLLP, our mission is to empower businesses with transformative digital solutions. We are guided by our core values of integrity, innovation, and client success. With a rich history of delivering excellence, we are your trusted partner in navigating the complexities of the digital landscape.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="About AnalogLLP"
                    width={600}
                    height={400}
                    className="object-cover"
                    data-ai-hint="team collaboration"
                />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
