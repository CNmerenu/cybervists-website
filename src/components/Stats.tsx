"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const impactContent = {
  title: "How we are making a difference",
  stats: [
    {
      value: 5,
      suffix: "+",
      label: "Languages adapted in our training and awareness materials",
    },

    { value: 50, suffix: "+", label: "Sessions planned and delivered" },
    {
      value: 1040,
      suffix: "+",
      label: "Volunteer hours dedicated to the community",
    },
    { value: 5000, suffix: "+", label: "People impacted across our platforms" },
    { value: 100, suffix: "%", label: "Training participant satisfaction" },
    {
      value: 98,
      suffix: "%",
      label:
        "Of participants feel more confident in securing their digital footprint",
    },
  ],
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-2 md:mb-4"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full py-16 md:py-32 bg-gradient-to-b from-[#ffefe4] to-[#c5c5c5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            {impactContent.title}
          </h2>
        </div>
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {impactContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-gray-700 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative items-center justify-between">
          {/* Left Laptop Image */}
          <div className="flex-shrink-0 relative">
            <Image
              src="/assets/laptopimage.svg"
              alt="Laptop Impact"
              width={800}
              height={600}
              sizes="(max-width: 768px) 500px, 800px"
              className="w-[500px] md:w-[800px] h-auto"
            />
          </div>

          {/* Right Stats - All Together */}
          <div className="grid grid-cols-2 gap-8 ml-12">
            {impactContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-gray-700 text-sm md:text-lg max-w-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
