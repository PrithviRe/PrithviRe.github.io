import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        "ink": "rgb(var(--ink) / <alpha-value>)",
        "paper": "rgb(var(--paper) / <alpha-value>)",
        "card": "rgb(var(--card) / <alpha-value>)",
        "muted": "rgb(var(--muted) / <alpha-value>)",
        "line": "rgb(var(--line) / <alpha-value>)",
        "up": "#16a34a",
        "down": "#dc2626"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      maxWidth: {
        prose: "68ch",
        doc: "76ch"
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,10,10,0.06), 0 1px 3px rgba(10,10,10,0.08)",
        lift: "0 2px 4px rgba(10,10,10,0.06), 0 12px 32px -8px rgba(10,10,10,0.18)"
      }
    }
  },
  plugins: []
};

export default config;