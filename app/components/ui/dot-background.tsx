"use client";

import React from "react";

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
      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background ${containerClassName}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute h-full w-full bg-background">
            <div className="absolute inset-0">
              <div className="h-full w-full bg-[radial-gradient(#8a63d2_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        </div>
      </div>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
