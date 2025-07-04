import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, LineChart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Cog className="h-10 w-10 text-accent" />,
    title: 'Custom Development',
    description: 'Bespoke software solutions crafted to your exact specifications.',
    price: 'Starts at $5,000',
  },
  {
    icon: <LineChart className="h-10 w-10 text-accent" />,
    title: 'Digital Strategy',
    description: 'Expert guidance to create a roadmap for your digital success.',
    price: 'Starts at $2,500',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support to ensure your systems run smoothly and securely.',
    price: 'Starts at $500/mo',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
              Services We Provide
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From ideation to implementation and beyond, we offer a comprehensive range of services to support your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader className="items-center text-center p-6">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center p-6 pt-0">
                <p className="text-sm text-foreground/70">{service.description}</p>
              </CardContent>
              <CardFooter className="flex-col gap-2 p-6 pt-0">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button className="w-full" variant="outline">Get Quote</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
