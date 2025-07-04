"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Innovation",
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    description: "We are always looking for new and innovative ways to solve problems.",
  },
  {
    title: "Result-Driven",
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    description: "We are focused on delivering results that will help you grow your business.",
  },
  {
    title: "Passion",
    icon: <Heart className="h-8 w-8 text-blue-500" />,
    description: "We are passionate about what we do and we are committed to your success.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="bg-secondary border-none h-full text-center">
                <CardHeader className="flex flex-col items-center gap-4">
                  {value.icon}
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};