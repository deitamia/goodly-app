import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        goodly: {
          hero: "#f0fdf4", // Very pale green background
          heroBorder: "#dcfce7",
          green: "#16a34a", // Action button green (Buy / Exact price View service)
          greenHover: "#15803d",
          gold: "#facc15", // Price on request button warm gold
          goldHover: "#eab308",
          text: "#111827", // Fixed black main text
          muted: "#6b7280",
          surface: "#ffffff",
          border: "#e5e7eb",
          cardBg: "#ffffff",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
} satisfies Config;
