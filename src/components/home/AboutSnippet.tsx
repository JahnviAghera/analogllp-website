"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const achievements = [
  "Founded in 2018 in Gujarat",
  "Specialized in AI & Cloud Services",
  "Dedicated Team of Creative Thinkers",
  "Transparent, User-Friendly Solutions"
];

export const AboutSnippet = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-600 text-sm font-medium">
                About Analog Innovation
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Ideas Into 
              <span className="gradient-text"> AI-Powered Reality</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2018 in Gujarat under Analog Innovation Pvt. Ltd., we are a dedicated team 
              of creative thinkers, marketers, and developers focused on harnessing the power of 
              artificial intelligence. Our primary initiative, AnalogAI, aims to transform user 
              experiences through advanced AI technologies.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              Visit AnalogAI.in
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">2018</div>
                    <div className="text-slate-600 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">AI</div>
                    <div className="text-slate-600 text-sm">Focused</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">Gujarat</div>
                    <div className="text-slate-600 text-sm">Based</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">Cloud</div>
                    <div className="text-slate-600 text-sm">Services</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};