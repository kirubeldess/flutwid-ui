"use client";

import React from "react";
import { motion } from "framer-motion";

export function GridBackground({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background ${containerClassName}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute h-full w-full bg-background">
            <motion.div
              variants={gridVariants}
              initial="hidden"
              animate="show"
              className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1"
            >
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="h-full w-full rounded-md bg-primary/5"
                />
              ))}
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        </div>
      </div>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
