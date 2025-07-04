"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platforms = [
  {
    title: "AnalogAI Platform",
    description: "Our flagship AI platform for transforming user experiences with cutting-edge machine learning",
    logo: "🤖",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    title: "TensorFlow & PyTorch",
    description: "Advanced machine learning frameworks for AI development and deep learning solutions",
    logo: "🧠",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "AWS Cloud",
    description: "Scalable cloud infrastructure and deployment solutions for enterprise-grade applications",
    logo: "☁️",
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    title: "Python & Node.js",
    description: "Powerful backend development with modern frameworks and robust server-side solutions",
    logo: "🐍",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    title: "React & Next.js",
    description: "Modern frontend frameworks for responsive applications and seamless user experiences",
    logo: "⚛️",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    title: "Docker & Kubernetes",
    description: "Containerization for consistent deployment environments and scalable microservices",
    logo: "🐳",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50"
  },
];

export const PlatformsSection = () => {
  return (
    <section id="analogai" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-6"
          >
            Technologies & Platforms
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Technologies We <span className="gradient-text">Master</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We work with cutting-edge AI and cloud technologies to deliver exceptional results
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-strong transition-all duration-500 group-hover:-translate-y-3 bg-white overflow-hidden relative">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {platform.logo}
                  </motion.div>
                  
                  <CardTitle className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors mb-4">
                    {platform.title}
                  </CardTitle>

                  {/* Gradient Line */}
                  <div className={`w-16 h-1 bg-gradient-to-r ${platform.gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-300`}></div>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {platform.description}
                  </p>
                </CardContent>

                {/* Corner Decorations */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${platform.gradient} rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300`}></div>
                <div className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r ${platform.gradient} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-300`}></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full">
            <span className="text-slate-700 font-medium">Ready to leverage these technologies?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};