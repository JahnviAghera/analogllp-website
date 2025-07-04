import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Mountain className="h-7 w-7" />
              <span className="text-xl font-bold">AnalogLLP</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Innovative Solutions for a Digital World.
            </p>
          </div>
          <div className="grid gap-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="#about" className="hover:underline" prefetch={false}>About</Link>
                <Link href="#products" className="hover:underline" prefetch={false}>Products</Link>
                <Link href="#platforms" className="hover:underline" prefetch={false}>Platforms</Link>
                <Link href="#services" className="hover:underline" prefetch={false}>Services</Link>
                <Link href="#contact" className="hover:underline" prefetch={false}>Contact</Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter" prefetch={false}><Twitter className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
              <Link href="#" aria-label="LinkedIn" prefetch={false}><Linkedin className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
              <Link href="#" aria-label="GitHub" prefetch={false}><Github className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} AnalogLLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
