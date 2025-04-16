import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flutwid UI - Beautiful Flutter Component Library",
  description: "A modern, customizable Flutter component library inspired by shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <header className="navbar py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-xl font-bold flex items-center">
                <span className="text-primary">flutwid-ui</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/components" className="text-foreground hover:text-primary transition-colors">
                  Components
                </Link>
                <Link href="/docs" className="text-foreground hover:text-primary transition-colors">
                  Docs
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/kirubeldess/flutwid_ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
