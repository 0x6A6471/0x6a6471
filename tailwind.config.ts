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
        orange: {
          mute: "#FFA233",
          primary: "#F7931A",
          border: "#9E5D0F",
        },
        gray: {
          50: "#eeeeee",
          100: "#b4b4b4",
          200: "#7b7b7b",
          300: "#6e6e6e",
          400: "#606060",
          500: "#484848",
          600: "#3a3a3a",
          700: "#313131",
          800: "#2a2a2a",
          900: "#222222",
          950: "#191919",
          1000: "#111111",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-roboto-mono)"],
    },
  },
  plugins: [],
} satisfies Config;
