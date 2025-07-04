"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Artificial Intelligence", href: "#services" },
    { name: "Cloud Services", href: "#services" },
    { name: "Custom Development", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "AnalogAI Platform", href: "#analogai" },
    { name: "Careers", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "AnalogAI.in", href: "https://analogai.in" },
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Support", href: "#contact" },
  ]
};

const socialLinks = [
  { href: "#", icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
  { href: "#", icon: <Github className="h-5 w-5" />, name: "GitHub" },
  { href: "#", icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">Analog Innovation</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Founded in 2018, we harness the power of artificial intelligence through AnalogAI 
              to transform user experiences and drive economic growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@analogai.in</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 79841 36471</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Rajkot, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Analog Innovation Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};