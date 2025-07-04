"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const AboutSnippet = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Divine Web Tech is a team of dedicated professionals who are passionate about helping technology business owners to achieve their goals. We are committed to providing high-quality software development services that are tailored to the specific needs of our clients.
          </p>
          <Button className="mt-8">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
};