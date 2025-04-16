"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GridBackground } from "./components/ui/grid-background";
import { DotBackground } from "./components/ui/dot-background";
import { AnimatedButton } from "./components/ui/animated-button";
import { Button } from "./components/ui/moving-border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <GridBackground containerClassName="absolute inset-0">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                className="space-y-4 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-0.5 bg-primary mb-2"></div>
                  <h1 className="text-2xl md:text-3xl uppercase tracking-widest text-primary font-extrabold">
                    Your Go-to Flutter Component Library
                  </h1>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-2">
                  Beautiful UI Components for Flutter
                </h1>
                <p className="text-xl text-secondary-foreground max-w-[700px] mx-auto">
                  A collection of reusable, accessible Flutter components for building beautiful mobile applications.
                </p>
              </motion.div>
              <motion.div 
                className="mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-center">
                  <Button
                    as="a"
                    href="/components"
                    className="px-8 py-3 font-medium"
                    containerClassName="w-auto min-w-[180px]"
                    borderClassName="bg-[radial-gradient(#3b82f6_40%,#06b6d4_60%)] opacity-[0.8]"
                  >
                    <span className="flex items-center">
                      Get Started
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <DotBackground containerClassName="absolute inset-0">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="w-16 h-0.5 bg-primary mb-6"></div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Why Choose Flutwid UI?
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="p-8 rounded-xl border border-border bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-all shadow-lg shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 text-primary bg-primary/10 p-3 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H2v10h10V2z"></path>
                    <path d="M22 12h-10v10h10V12z"></path>
                    <path d="M12 12H2v10h10V12z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Customizable</h3>
                <p className="text-muted-foreground">Easily customize components to match your brand and design system.</p>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-xl border border-border bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-all shadow-lg shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 text-primary bg-primary/10 p-3 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Accessible</h3>
                <p className="text-muted-foreground">All components follow accessibility best practices for mobile applications.</p>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-xl border border-border bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-all shadow-lg shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 text-primary bg-primary/10 p-3 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Modern</h3>
                <p className="text-muted-foreground">Built with the latest Flutter features and best practices in mind.</p>
              </motion.div>
            </div>
          </div>
        </DotBackground>
      </section>
      
      {/* Components Preview Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-0.5 bg-accent mb-6"></div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Beautiful Components
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-[700px] mx-auto mt-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Flutwid UI provides a collection of ready-to-use Flutter components that are both beautiful and functional.
            </motion.p>
          </div>
          
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
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-muted-foreground">Made with</span>
              <svg className="mx-1 text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="text-muted-foreground">2025</span>
            </div>
            <p className="text-sm text-muted-foreground">A beautiful Flutter component library</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
