"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Challenge {
  title: string;
  stat: string;
  description: string;
  impact: string;
}

const challengeContent = {
  title: "The prevailing challenge",
  subtitle:
    "Cybersecurity threats are escalating at an unprecedented rate, creating significant challenges for businesses, individuals, and communities worldwide.",
  challenges: [
    {
      title: "Global Scam Losses",
      stat: "$1.03T",
      description:
        "Lost to online scams annually worldwide, devastating individuals and families",
      impact: "Lost globally per year",
    },
    {
      title: "Attack Frequency",
      stat: "39 sec",
      description:
        "Average time between cyber attacks, showing the relentless nature of threats",
      impact: "Between attacks",
    },
    {
      title: "Digital Exclusion",
      stat: "2.7B",
      description:
        "People worldwide lack basic digital skills, leaving them vulnerable to exploitation",
      impact: "People digitally excluded",
    },
    {
      title: "Senior Online Scams",
      stat: "58%",
      description:
        "Seniors over 60 represent the majority of financial losses from online scams",
      impact: "Seniors affected",
    },
    {
      title: "Teen Cyberbullying",
      stat: "49%",
      description:
        "Nearly 1 in 2 Teens have experienced some form of cyberbullying, leading to emotional and psychological distress",
      impact: "Teens affected",
    },
    {
      title: "AI Voice Scams",
      stat: "1 in 10",
      description:
        "Adults have experienced AI voice scams, a rapidly growing threat",
      impact: "Adults targeted",
    },
  ],
  summary: {
    title: "The Human Cost",
    description:
      "Beyond financial losses, cyber attacks cause stress, anxiety, and loss of trust. Vulnerable communities including seniors, small businesses, and digitally excluded individuals are disproportionately affected and often lack the resources to recover.",
  },
  sources: [
    {
      stat: "$1.03T - Global Scam Losses",
      url: "https://www.gasa.org/post/global-state-of-scams-report-2024-1-trillion-stolen-in-12-months-gasa-feedzai",
    },
    {
      stat: "39 sec - Attack Frequency",
      url: "https://eng.umd.edu/news/story/study-hackers-attack-every-39-seconds",
    },
    {
      stat: "2.7B - Digital Exclusion",
      url: "https://www.trueambassadors.org.uk/what-are-the-main-barriers-to-digital-inclusion/",
    },
    {
      stat: "1 in 10 - AI Voice Scams",
      url: "https://www.businesswire.com/news/home/20230501005587/en/Artificial-Intelligence-Voice-Scams-on-the-Rise-with-1-in-4-Adults-Impacted",
    },
    {
      stat: "58% - Senior Online Scams",
      url: "https://www.ic3.gov/annualreport/reports/2023_ic3elderfraudreport.pdf",
    },
    {
      stat: "49% - Teen Cyberbullying",
      url: "https://www.comparitech.com/internet-providers/cyberbullying-statistics/",
    },
  ],
};

export default function Challenge() {
  const [showSources, setShowSources] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowSources(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <section
      className="w-full py-24 md:py-32 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/websitechallenge.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            {challengeContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {challengeContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {challengeContent.challenges.slice(0, 3).map((challenge, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
                {challenge.stat}
              </div>
              <div className="text-sm text-accent-600 font-medium mb-4">
                {challenge.impact}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {challengeContent.challenges.slice(3).map((challenge, index) => (
            <div key={index + 3} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
                {challenge.stat}
              </div>
              <div className="text-sm text-accent-600 font-medium mb-4">
                {challenge.impact}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl md:text-3xl font-black text-accent-800 mb-6">
              {challengeContent.summary.title}
            </h3>
            <p className="text-lg md:text-xl font-semibold text-accent-700 leading-relaxed">
              {challengeContent.summary.description}
            </p>
          </div>
        </div>

        {/* Sources Dropdown */}
        <div className="absolute -bottom-8 right-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowSources(!showSources)}
              className="flex items-center gap-1 px-2 py-1 bg-gray-600 text-white text-xs rounded opacity-60 hover:opacity-100 transition-opacity"
            >
              Sources
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  showSources ? "rotate-180" : ""
                }`}
              />
            </button>

            {showSources && (
              <div className="absolute bottom-full right-0 mb-1 bg-white border border-gray-200 rounded shadow-lg p-2 min-w-[250px]">
                <div className="space-y-1">
                  {challengeContent.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 p-1 hover:bg-gray-50 rounded text-xs group"
                    >
                      <span className="font-medium text-gray-700">
                        {source.stat}
                      </span>
                      <ExternalLink className="w-2 h-2 text-gray-400 group-hover:text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
