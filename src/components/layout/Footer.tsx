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
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Analog Technologies. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};