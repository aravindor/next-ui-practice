import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background_green: "var(--background-green)"
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
