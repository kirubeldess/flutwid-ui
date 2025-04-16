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
        className={`btn btn-primary px-8 py-3 rounded-md text-base font-medium cursor-pointer ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
