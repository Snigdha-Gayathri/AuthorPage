/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        candle: {
          base: "#140f1b",
          plum: "#2a1a36",
          wine: "#4b1f37",
          aubergine: "#1b1225",
          gold: "#d5b277",
          ember: "#b96a44",
          text: "#f2e8db",
          muted: "#c9b8a0",
        },
      },
      boxShadow: {
        candle: "0 18px 45px rgba(8, 6, 12, 0.45)",
        glow: "0 0 24px rgba(185, 106, 68, 0.28)",
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

