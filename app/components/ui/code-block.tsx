"use client";

import { useState } from 'react';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-md overflow-hidden border border-gray-700 bg-secondary/50 mb-4">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-background/80 hover:bg-background transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
