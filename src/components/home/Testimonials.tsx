"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Analog Innovation transformed our business with their AI solutions. The AnalogAI platform increased our efficiency by 300% and provided insights we never thought possible. Their team's expertise is truly exceptional.",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    rating: 5,
    avatar: "SJ",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "Working with Analog Innovation was a game-changer for our digital transformation. Their cloud solutions are robust, scalable, and perfectly tailored to our needs. Outstanding support and delivery.",
    author: "Michael Chen",
    company: "Creative Solutions",
    role: "CTO",
    rating: 5,
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "The team's professionalism and technical expertise exceeded our expectations. They delivered on time, within budget, and the AI-powered results speak for themselves. Highly recommended!",
    author: "Emily Rodriguez",
    company: "Digital Ventures",
    role: "Founder",
    rating: 5,
    avatar: "ER",
    gradient: "from-green-500 to-teal-500"
  },
  {
    quote: "Analog Innovation's custom development services helped us build a cutting-edge platform. Their attention to detail and innovative approach made all the difference in our success.",
    author: "David Kumar",
    company: "InnovateTech",
    role: "Product Manager",
    rating: 5,
    avatar: "DK",
    gradient: "from-orange-500 to-red-500"
  },
  {
    quote: "The AI consulting and implementation by Analog Innovation revolutionized our data analytics. We now have real-time insights that drive our business decisions effectively.",
    author: "Lisa Wang",
    company: "DataFlow Systems",
    role: "VP of Technology",
    rating: 5,
    avatar: "LW",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium mb-6"
          >
            Client Testimonials
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from our satisfied clients who have transformed their businesses with our AI solutions
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="border-0 shadow-strong bg-gradient-to-br from-white to-slate-50 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-5`}></div>
            
            <CardContent className="p-8 lg:p-12 relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Quote className="h-12 w-12 text-purple-500" />
              </div>
              
              <motion.p 
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl lg:text-2xl text-slate-700 mb-8 leading-relaxed italic text-center"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-slate-600">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white shadow-medium rounded-full hover:shadow-strong transition-all duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 text-slate-600 group-hover:text-purple-600 transition-colors" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white shadow-medium rounded-full hover:shadow-strong transition-all duration-300 group"
            >
              <ArrowRight className="h-5 w-5 text-slate-600 group-hover:text-purple-600 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-purple-500 mb-4" />
                  </div>
                  
                  <p className="text-slate-700 mb-6 leading-relaxed italic text-sm">
                    "{testimonial.quote.substring(0, 120)}..."
                  </p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};