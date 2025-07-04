"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cloud, Code, Database, Shield, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Artificial Intelligence",
    description: "Advanced AI solutions through AnalogAI to transform user experiences and drive innovation in your business processes.",
    icon: <Brain className="h-8 w-8" />,
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    title: "Cloud Services",
    description: "Comprehensive cloud infrastructure and deployment solutions that scale with your business needs and ensure reliability.",
    icon: <Cloud className="h-8 w-8" />,
    features: ["AWS & Azure", "Auto Scaling", "24/7 Monitoring"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
    icon: <Code className="h-8 w-8" />,
    features: ["Web Applications", "Mobile Apps", "API Development"],
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50"
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
    icon: <Database className="h-8 w-8" />,
    features: ["Big Data Processing", "Real-time Analytics", "Data Visualization"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
    icon: <Shield className="h-8 w-8" />,
    features: ["Technology Strategy", "Digital Transformation", "Security Audits"],
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50"
  },
  {
    title: "Performance Optimization",
    description: "Enhance your systems' performance with our optimization services for faster, more efficient operations.",
    icon: <Zap className="h-8 w-8" />,
    features: ["System Optimization", "Performance Monitoring", "Scalability Planning"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
];

export const ServicesHighlight = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Comprehensive <span className="gradient-text">AI Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We offer comprehensive AI and cloud solutions to help your business thrive in the digital age
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-strong transition-all duration-500 group-hover:-translate-y-2 bg-white overflow-hidden relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`mb-6 p-4 bg-gradient-to-r ${service.color} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};