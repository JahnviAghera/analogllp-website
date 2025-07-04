"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { href: "#", icon: <Twitter className="h-5 w-5" /> },
  { href: "#", icon: <Github className="h-5 w-5" /> },
  { href: "#", icon: <Linkedin className="h-5 w-5" /> },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Divine Web Tech</h3>
            <p className="text-muted-foreground">
              We are a team of dedicated professionals who are passionate about helping technology business owners to achieve their goals.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Software Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">DevOps</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Cloud Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Ecommerce</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li><Link href="/platforms" className="text-muted-foreground hover:text-foreground">Odoo</Link></li>
              <li><Link href="/platforms" className="text-muted-foreground hover:text-foreground">Dotnet</Link></li>
              <li><Link href="/platforms" className="text-muted-foreground hover:text-foreground">Magento</Link></li>
              <li><Link href="/platforms" className="text-muted-foreground hover:text-foreground">Salesforce</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-muted-foreground">
              Email: info@divinewebtech.com
            </p>
            <p className="text-muted-foreground">
              Phone: +1 123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Divine Web Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};