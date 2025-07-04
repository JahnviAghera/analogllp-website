import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "AnalogLLP transformed our business. Their team is professional, knowledgeable, and dedicated to our success. We couldn't be happier with the results.",
    name: 'Jane Doe',
    title: 'CEO, Innovate Inc.',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'JD',
  },
  {
    quote: 'The level of expertise and the quality of work from AnalogLLP is outstanding. They delivered beyond our expectations on a very tight schedule.',
    name: 'John Smith',
    title: 'CTO, Tech Solutions',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'JS',
  },
  {
    quote: 'Working with AnalogLLP was a game-changer. Their strategic insights helped us unlock new growth opportunities. Highly recommended!',
    name: 'Emily White',
    title: 'Marketing Director, Growth Co.',
    avatar: 'https://placehold.co/100x100.png',
    fallback: 'EW',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to have partnered with amazing clients. Here's what they have to say about their experience with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-lg font-semibold leading-snug text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person" />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
