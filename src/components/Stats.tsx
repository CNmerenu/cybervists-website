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
    { value: 1000, suffix: "+", label: "People impacted across our platforms" },
    { value: 100, suffix: "%", label: "Training participant satisfaction" },
    {
      value: 98,
      suffix: "%",
      label: "Training attendees feel more confident with digital tools",
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
      className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#ffefe4] to-[#c5c5c5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="relative flex items-center justify-center">
          {/* Left Stats */}
          <div className="flex flex-col space-y-8 mr-8 md:mr-16">
            {impactContent.stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-right">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-gray-700 text-sm md:text-base max-w-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Laptop Image */}
          <div className="flex-shrink-0 relative">
            <Image
              src="/assets/laptopimage-nobg.svg"
              alt="Laptop Impact"
              width={600}
              height={450}
              className="w-[500px] md:w-[600px] h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider text-center leading-tight">
                <div>HOW WE ARE</div>
                <div>MAKING A</div>
                <div>DIFFERENCE</div>
              </h2>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col space-y-8 ml-8 md:ml-16">
            {impactContent.stats.slice(3, 6).map((stat, index) => (
              <div key={index} className="text-left">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-gray-700 text-sm md:text-base max-w-xs">
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
