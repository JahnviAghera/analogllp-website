"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platforms = [
  {
    title: "AnalogAI Platform",
    description: "Our flagship AI platform for transforming user experiences",
    logo: "🤖"
  },
  {
    title: "TensorFlow & PyTorch",
    description: "Advanced machine learning frameworks for AI development",
    logo: "🧠"
  },
  {
    title: "AWS Cloud",
    description: "Scalable cloud infrastructure and deployment solutions",
    logo: "☁️"
  },
  {
    title: "Python & Node.js",
    description: "Powerful backend development with modern frameworks",
    logo: "🐍"
  },
  {
    title: "React & Next.js",
    description: "Modern frontend frameworks for responsive applications",
    logo: "⚛️"
  },
  {
    title: "Docker & Kubernetes",
    description: "Containerization for consistent deployment environments",
    logo: "🐳"
  },
];

export const PlatformsSection = () => {
  return (
    <section id="analogai" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work with cutting-edge AI and cloud technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.logo}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {platform.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};