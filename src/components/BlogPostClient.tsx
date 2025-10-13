"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface BlogPostClientProps {
  title: string;
}

export default function BlogPostClient({ title }: BlogPostClientProps) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <>
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share Article
      </button>

      {showToast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
}