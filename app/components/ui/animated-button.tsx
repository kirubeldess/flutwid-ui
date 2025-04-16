"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function AnimatedButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} passHref>
      <motion.div
        className={`relative overflow-hidden px-8 py-3.5 rounded-md text-base font-medium cursor-pointer bg-primary text-primary-foreground ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.span 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary"
          style={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          className="absolute top-0 left-0 w-full h-full bg-white/10"
          style={{ height: 0 }}
          whileHover={{ height: '100%' }}
          transition={{ duration: 0.2 }}
        />
        <span className="relative z-10 flex items-center justify-center">
          {children}
          <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </motion.div>
    </Link>
  );
}
