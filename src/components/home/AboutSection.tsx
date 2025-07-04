"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const AboutSection = () => {
  return (
<section id="about" className="py-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Analog LLP is a technology company dedicated to providing innovative solutions for businesses of all sizes. We specialize in software development, cloud computing, and data analytics.
          </p>
          <Button className="mt-8">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
};
