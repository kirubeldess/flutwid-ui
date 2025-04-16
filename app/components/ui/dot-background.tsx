"use client";

import React from "react";
import { motion } from "framer-motion";

export function DotBackground({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-background ${containerClassName}`}
    >
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-background to-background" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        {/* Animated glow effects */}
        <motion.div 
          className="absolute h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: ["calc(10% - 50px)", "calc(90% - 50px)", "calc(10% - 50px)"],
            y: ["calc(20% - 50px)", "calc(80% - 50px)", "calc(20% - 50px)"]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: ["calc(80% - 50px)", "calc(20% - 50px)", "calc(80% - 50px)"],
            y: ["calc(70% - 50px)", "calc(30% - 50px)", "calc(70% - 50px)"]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
