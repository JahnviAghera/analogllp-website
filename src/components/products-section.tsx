import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'software interface',
    title: 'Product Alpha',
    description: 'A revolutionary tool to streamline your workflow and boost productivity.',
    price: '$49/mo',
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'analytics dashboard',
    title: 'Product Beta',
    description: 'Gain deep insights into your data with our advanced analytics suite.',
    price: '$99/mo',
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'security shield',
    title: 'Product Gamma',
    description: 'Comprehensive security solution to protect your digital assets.',
    price: '$79/mo',
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
              Discover Our Suite of Products
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our innovative products designed to solve your most complex challenges and drive growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={product.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{product.title}</CardTitle>
                <p className="mt-2 text-sm text-foreground/70">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
