/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cybersecurity Activism Theme - Dynamic Brand Colors
        primary: {
          50: "#f0f1ff",
          100: "#e1e4ff",
          200: "#c8cdff",
          300: "#a5acff",
          400: "#7d86ff",
          500: "#0F149A", // Cyber Blue (primary)
          600: "#0d1287",
          700: "#0b0f75",
          800: "#090d62",
          900: "#070a50",
        },
        accent: {
          50: "#fff5f4",
          100: "#ffe8e6",
          200: "#ffd5d1",
          300: "#ffb5ad",
          400: "#ff9284",
          500: "#ff6f61", // Neon Pink (accent - digital resistance)
          600: "#e6564a",
          700: "#cc4036",
          800: "#b32d25",
          900: "#991d17",
        },
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563", // Dark Gray (background)
          700: "#374151",
          800: "#1f2937",
          900: "#111827", // Deep Black (dark mode)
        },
        success: {
          500: "#10b981", // Secure Green
        },
        warning: {
          500: "#f59e0b", // Alert Amber
        },
        danger: {
          500: "#ef4444", // Alert Red
        },
      },
      backgroundImage: {
        "glossy-gradient":
          "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(236,72,153,0.1) 100%)",
        "glossy-dark":
          "linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(236,72,153,0.05) 100%)",
      },
      boxShadow: {
        glossy: "0 8px 32px 0 rgba(14,165,233,0.2)",
        "glossy-lg":
          "0 20px 60px 0 rgba(14,165,233,0.3), 0 0 40px rgba(236,72,153,0.15)",
        "glossy-sm": "0 4px 16px 0 rgba(14,165,233,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
