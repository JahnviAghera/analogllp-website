"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#analogai", label: "AnalogAI" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800/50" 
        : "bg-slate-900/80 backdrop-blur-sm"
    }`}>
      <div className="container flex h-20 max-w-7xl items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <Link href="#home" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="text-white h-5 w-5" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                Analog Innovation
              </span>
              <span className="text-xs text-slate-400 -mt-1">AI Solutions</span>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="relative text-slate-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm transition-all duration-300 group-hover:w-full opacity-60"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white hover:bg-slate-800 p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 text-white border-l border-slate-800 w-80">
              <nav className="flex flex-col gap-8 text-lg font-medium pt-8">
                <Link
                  href="#home"
                  className="flex items-center gap-3 text-xl font-bold text-white mb-8"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div>Analog Innovation</div>
                    <div className="text-xs text-slate-400 font-normal">AI Solutions</div>
                  </div>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-purple-400 text-slate-300 transition-colors duration-300 py-2 border-b border-slate-800 hover:border-purple-500/30"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-6 py-3 shadow-lg transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 btn-glow">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};