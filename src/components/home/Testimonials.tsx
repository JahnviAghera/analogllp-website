"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Divine Web Tech has been a great partner for us. They are very responsive and have been able to help us with all of our needs.",
    author: "John Doe",
    company: "Acme Inc.",
  },
  {
    quote: "We have been working with Divine Web Tech for over a year now and we are very happy with their services. They are very professional and have been able to help us with all of our needs.",
    author: "Jane Smith",
    company: "Stark Industries",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="bg-background border-none h-full">
                <CardContent className="pt-6">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <p className="mt-4 font-bold text-right">- {testimonial.author}, {testimonial.company}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};