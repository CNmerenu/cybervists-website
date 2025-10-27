"use client";

import { useState, useEffect, useRef } from "react";

const impactContent = {
  title: "Our Impact",
  subtitle:
    "Empowering  Grassroot digital transformation, One Audience at a Time.",
  message: "Our Numbers from community engagement",
  stats: [
    { value: 1000, suffix: "+", label: "People impacted across our platforms" },
    { value: 50, suffix: "+", label: "Sessions planned and delivered" },
    {
      value: 98,
      suffix: "%",
      label: "Training attendees feel more confident with digital tools",
    },
    {
      value: 5,
      suffix: "+",
      label: "Languages adapted in our training and awareness materials",
    },
    {
      value: 15,
      suffix: "+",
      label: "Community workshops planned and delivered",
    },
    { value: 100, suffix: "%", label: "Training participant satisfaction" },
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
    <section className="w-full py-16 md:py-24 bg-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {impactContent.title}
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2 mb-6">
            {impactContent.subtitle}
          </p>
          <div className="inline-block bg-primary-50 px-6 py-3 rounded-full">
            <p className="text-sm md:text-base text-primary-700 font-medium">
              {impactContent.message}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {impactContent.stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-700 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
