"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center bg-grid-white/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Bring your ideas and thoughts in to reality
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-neutral-300">
            Increase efficiency of system, products, and services of your business.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};