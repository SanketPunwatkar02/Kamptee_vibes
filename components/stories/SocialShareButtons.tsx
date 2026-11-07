'use client';

import React, { useState } from 'react';
import { MessageCircle, Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - Read more on Kamptee Vibez: ${url}`
  )}`;

  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}&via=kamptee_vibezzz`;

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono text-primary-muted uppercase mr-1">Share:</span>

      <a
        href={whatsappShare}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black flex items-center justify-center transition-colors"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors border border-white/10"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>

      <a
        href={facebookShare}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-3.5 h-3.5" />
      </a>

      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-primary-muted hover:text-white transition-colors"
        title="Copy link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-accent-pink" />
            <span className="text-accent-pink">Copied</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};
