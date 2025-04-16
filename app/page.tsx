"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GridBackground } from "./components/ui/grid-background";
import { DotBackground } from "./components/ui/dot-background";
import { AnimatedButton } from "./components/ui/animated-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <GridBackground containerClassName="absolute inset-0">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div 
                className="space-y-4 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Beautiful Flutter Components
                </h1>
                <p className="text-xl text-secondary-foreground max-w-[700px] mx-auto">
                  A collection of reusable, accessible Flutter components for building beautiful mobile applications.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AnimatedButton href="/components">
                  Get Started
                </AnimatedButton>
                <motion.a 
                  href="https://github.com/kirubeldess/flutwid_ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn px-8 py-3 rounded-md text-base font-medium border border-border hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </motion.div>
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <DotBackground containerClassName="absolute inset-0">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Flutwid UI?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="p-6 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H2v10h10V2z"></path>
                    <path d="M22 12h-10v10h10V12z"></path>
                    <path d="M12 12H2v10h10V12z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Customizable</h3>
                <p className="text-secondary-foreground">Easily customize components to match your brand and design system.</p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Accessible</h3>
                <p className="text-secondary-foreground">All components follow accessibility best practices for mobile applications.</p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Modern</h3>
                <p className="text-secondary-foreground">Built with the latest Flutter features and best practices in mind.</p>
              </motion.div>
            </div>
          </div>
        </DotBackground>
      </section>
      
      {/* Components Preview Section */}
      <section className="py-16 bg-secondary/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Beautiful Components</h2>
            <p className="text-xl text-secondary-foreground max-w-[700px] mx-auto">
              Flutwid UI provides a collection of ready-to-use Flutter components that are both beautiful and functional.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/components" className="bg-accent hover:bg-accent/90">
              Browse Components
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
