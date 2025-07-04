"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Award, Users, Globe, Zap } from "lucide-react";

const achievements = [
  { text: "Founded in 2018 in Gujarat", icon: <Globe className="h-5 w-5" /> },
  { text: "Specialized in AI & Cloud Services", icon: <Zap className="h-5 w-5" /> },
  { text: "Dedicated Team of Creative Thinkers", icon: <Users className="h-5 w-5" /> },
  { text: "Transparent, User-Friendly Solutions", icon: <Award className="h-5 w-5" /> }
];

const stats = [
  { value: "2018", label: "Founded", color: "from-purple-500 to-blue-500" },
  { value: "AI", label: "Focused", color: "from-blue-500 to-cyan-500" },
  { value: "Gujarat", label: "Based", color: "from-cyan-500 to-teal-500" },
  { value: "Cloud", label: "Services", color: "from-teal-500 to-green-500" }
];

export const AboutSnippet = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 text-sm font-medium">
                <Award className="h-4 w-4" />
                About Analog Innovation
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Transforming Ideas Into 
              <span className="block gradient-text mt-2">AI-Powered Reality</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-slate-600 leading-relaxed"
            >
              Founded in 2018 in Gujarat under Analog Innovation Pvt. Ltd., we are a dedicated team 
              of creative thinkers, marketers, and developers focused on harnessing the power of 
              artificial intelligence. Our primary initiative, AnalogAI, aims to transform user 
              experiences through advanced AI technologies.
            </motion.p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="text-green-500 bg-green-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <span className="text-slate-700 font-medium">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white rounded-full px-10 py-4 text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group btn-glow"
              >
                Visit AnalogAI.in
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background Card */}
              <motion.div 
                initial={{ opacity: 0, rotate: 6 }}
                whileInView={{ opacity: 1, rotate: 6 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl transform rotate-6 shadow-xl"
              />
              
              {/* Main Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 lg:p-10 rounded-3xl shadow-strong hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group cursor-pointer"
                    >
                      <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};