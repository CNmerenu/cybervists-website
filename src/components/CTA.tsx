"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const ctaContent = {
  enabled: true,
  title: "Do you need Support?",
  subtitle:
    "We know you're busy, and tech can feel like another language. That's why we've made this:",
  mediaType: "image", // "image" or "video"
  mediaUrl: "/assets/cybersecurity_action.png",
  videoUrl: "https://youtube.com/shorts/0bX7VOyo3Ps?si=409pMW0aL6XvxYl0", // for video type
  infoItems: [
    "🎮 Gamified — Learning that feels like fun.",
    "🎯 Tailored — Designed for the audience.",
    "💪 Empowering — You'll leave with skills, not just information",
    "👨👩👧 Together — A community digitally supporting each other",
  ],
  buttonText: "Reach Out Now",
  buttonLink: "mailto:info@cybevists.org",
};

function convertToEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:shorts\/|v=|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return videoIdMatch
    ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
    : url;
}

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!ctaContent.enabled || !showCTA || !isVisible) return null;

  return (
    <section className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 max-w-sm md:max-w-xl w-[calc(100vw-2rem)] md:w-full">
      <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-3 h-3 text-gray-600" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Media */}
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 max-w-[120px] mx-auto md:max-w-none">
            {ctaContent.mediaType === "image" ? (
              <Image
                src={ctaContent.mediaUrl}
                alt="CTA Media"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={convertToEmbedUrl(ctaContent.videoUrl)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Information */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {ctaContent.title}
            </h3>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              {ctaContent.subtitle}
            </p>

            <div className="space-y-1 mb-4">
              {ctaContent.infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href={ctaContent.buttonLink}
              className="inline-block px-4 py-2 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              {ctaContent.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
