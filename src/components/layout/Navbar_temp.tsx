"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <Link href="#home" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Analog LLP</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-purple-400 text-gray-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white border-r border-gray-700">
              <nav className="flex flex-col gap-6 text-lg font-medium pt-8">
                <Link
                  href="#home"
                  className="flex items-center gap-2 text-xl font-bold text-white mb-4"
                >
                  Analog LLP
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-purple-400 text-gray-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 py-2 shadow-lg transition-all duration-300">
              Contact Us
            </Button>
          </motion.div>
        </div>
    </header>
  );
};
