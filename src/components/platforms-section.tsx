import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Cloud, Database, Smartphone } from 'lucide-react';

const platforms = [
  {
    icon: <Laptop className="h-10 w-10 text-accent" />,
    title: 'Web Platforms',
    description: 'Robust and scalable web solutions tailored to your business needs.',
  },
  {
    icon: <Cloud className="h-10 w-10 text-accent" />,
    title: 'Cloud Infrastructure',
    description: 'Leveraging the power of the cloud for security, scalability, and efficiency.',
  },
  {
    icon: <Database className="h-10 w-10 text-accent" />,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights for smarter decision-making.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Mobile Applications',
    description: 'Engaging and intuitive mobile experiences for iOS and Android platforms.',
  },
];

export function PlatformsSection() {
  return (
    <section id="platforms" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Platforms
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
              Platforms We Specialize In
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We build on a foundation of proven, powerful technologies to deliver reliable and high-performance solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform-gpu hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                {platform.icon}
                <CardTitle className="mt-4">{platform.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-sm text-foreground/70">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
