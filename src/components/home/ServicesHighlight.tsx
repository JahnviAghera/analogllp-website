"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Smartphone, Palette, Database, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    icon: <Code className="h-8 w-8 text-purple-500" />,
    features: ["React & Next.js", "Responsive Design", "SEO Optimized"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs.",
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    features: ["AWS & Azure", "Auto Scaling", "24/7 Monitoring"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    features: ["iOS & Android", "Cross-Platform", "App Store Ready"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.",
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    features: ["User Research", "Prototyping", "Design Systems"]
  },
  {
    title: "Database Solutions",
    description: "Robust database architecture and optimization for high-performance data management.",
    icon: <Database className="h-8 w-8 text-orange-500" />,
    features: ["SQL & NoSQL", "Data Migration", "Performance Tuning"]
  },
  {
    title: "Security & DevOps",
    description: "Comprehensive security measures and DevOps practices to protect and streamline your operations.",
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ["CI/CD Pipelines", "Security Audits", "Automated Testing"]
  },
];

export const ServicesHighlight = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-slate-100 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};