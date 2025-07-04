"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Cloud, Code, Palette } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description: "We build scalable and robust software solutions tailored to your business needs.",
  },
  {
    title: "DevOps",
    description: "We provide cloud and DevOps services to accelerate your product lifecycle.",
  },
  {
    title: "Cloud Development",
    description: "We build cloud-native applications that are scalable, resilient, and cost-effective.",
  },
  {
    title: "Ecommerce",
    description: "We build ecommerce solutions that help you sell your products online.",
  },
  {
    title: "Hire Developers",
    description: "We provide dedicated developers to help you build your product.",
  },
];

export const ServicesHighlight = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="bg-secondary border-none h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};