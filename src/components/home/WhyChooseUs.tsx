"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500"
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with years of experience",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-500"
  },
  {
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes",
    icon: <Award className="h-6 w-6" />,
    color: "text-purple-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it",
    icon: <Clock className="h-6 w-6" />,
    color: "text-green-500"
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability",
    icon: <Shield className="h-6 w-6" />,
    color: "text-red-500"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business needs",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-indigo-500"
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose <span className="gradient-text">Divine Web Tech</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
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