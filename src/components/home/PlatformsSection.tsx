"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platforms = [
  {
    title: "Odoo",
  },
  {
    title: "Dotnet",
  },
  {
    title: "Magento",
  },
  {
    title: "Salesforce",
  },
  {
    title: "Shopware",
  },
  {
    title: "Shopify",
  },
];

export const PlatformsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Platforms We Work With
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="bg-background border-none h-full text-center">
                <CardHeader>
                  <CardTitle>{platform.title}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};