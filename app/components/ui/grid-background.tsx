"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GridBackground({
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
      {/* Grid pattern background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]"
        )}
      />
      
      {/* Gradient glow in the center */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Glowing orbs for added visual interest */}
      <motion.div 
        className="absolute h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: ["calc(10% - 50px)", "calc(30% - 50px)", "calc(10% - 50px)"],
          y: ["calc(20% - 50px)", "calc(40% - 50px)", "calc(20% - 50px)"]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: ["calc(80% - 50px)", "calc(60% - 50px)", "calc(80% - 50px)"],
          y: ["calc(70% - 50px)", "calc(50% - 50px)", "calc(70% - 50px)"]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      />
      
      {/* Gradient overlays for fading edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
