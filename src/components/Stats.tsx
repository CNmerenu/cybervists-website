"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Support Guarantee" },
  { value: 10, suffix: "+", label: "Workshops Conducted" },
  { value: 200, suffix: "+", label: "People Impacted" },
  { value: 6, suffix: "+", label: "Community Partners" },
];

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
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full md:w-[1440px] py-16 md:py-24 bg-gray-100">
      <div className="px-4 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
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
