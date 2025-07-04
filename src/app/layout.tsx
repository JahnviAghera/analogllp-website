import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Analog Innovation - Transforming Experiences with AI",
  description:
    "Founded in 2018, Analog Innovation harnesses the power of artificial intelligence through AnalogAI to transform user experiences and drive economic growth with transparent, user-friendly solutions.",
  keywords:
    "artificial intelligence, AI, cloud services, AnalogAI, digital transformation, Gujarat, Rajkot, IT consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
