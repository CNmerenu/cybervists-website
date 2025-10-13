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
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Cyber Blue (primary)
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c3d66",
        },
        accent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f8a5d8",
          400: "#f472b6",
          500: "#ec4899", // Neon Pink (accent - digital resistance)
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
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
