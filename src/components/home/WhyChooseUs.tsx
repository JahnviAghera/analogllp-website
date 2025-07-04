"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const features = [
  {
    title: "Lightning Fast Performance",
    description: "Optimized solutions delivering exceptional speed and performance for the best user experience",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50"
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with years of experience in AI, cloud computing, and software development",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes ensuring reliable and robust solutions",
    icon: <Award className="h-6 w-6" />,
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance and monitoring to ensure your systems run smoothly",
    icon: <Clock className="h-6 w-6" />,
    color: "text-green-500",
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures and reliability standards for peace of mind",
    icon: <Shield className="h-6 w-6" />,
    color: "text-red-500",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business needs, from startup to enterprise scale",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-indigo-500",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee", icon: <CheckCircle className="h-5 w-5" /> },
  { value: "24/7", label: "Support Available", icon: <Clock className="h-5 w-5" /> },
  { value: "100+", label: "Projects Delivered", icon: <Award className="h-5 w-5" /> },
  { value: "5★", label: "Client Rating", icon: <Star className="h-5 w-5" /> }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full text-green-600 text-sm font-medium mb-6"
          >
            Why Choose Us
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Why Choose <span className="gradient-text">Analog Innovation</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We combine technical expertise with creative innovation to deliver exceptional results that drive your business forward
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="text-purple-500 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 border border-purple-500/10 rounded-3xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to get started?</h3>
              <p className="text-slate-600">Let's discuss how we can help transform your business</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 btn-glow"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};