"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: "info@analogai.in",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: "+91 79841 36471",
    color: "text-green-500",
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: "Rajkot, Gujarat, India",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  }
];

const features = [
  { icon: <MessageCircle className="h-5 w-5" />, text: "Free Consultation" },
  { icon: <Clock className="h-5 w-5" />, text: "24/7 Support" },
  { icon: <Globe className="h-5 w-5" />, text: "Global Reach" }
];

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob2"></div>
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
            Get In Touch
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Let's Start Your <span className="gradient-text">AI Journey</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Ready to transform your business with AI? Get in touch with us today for a free consultation and discover how we can help you achieve your goals
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We'd love to hear about your project and discuss how AnalogAI can help transform 
                your business with cutting-edge artificial intelligence solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">{info.title}</h4>
                      <p className="text-slate-600">{info.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 border border-purple-500/10 rounded-2xl"
            >
              <h4 className="font-semibold text-slate-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-purple-500">
                      {feature.icon}
                    </div>
                    <span className="text-slate-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
              <p className="text-sm text-slate-600">
                <strong>Visit our main platform:</strong> <a href="https://analogai.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">analogai.in</a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-strong relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Email Address
                    </label>
                    <Input 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your AI project requirements, goals, and how we can help transform your business..." 
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 min-h-[140px] resize-none hover:border-slate-300"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-4 text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group btn-glow"
                    >
                      Send Message
                      <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};