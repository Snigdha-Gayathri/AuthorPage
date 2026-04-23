/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        candle: {
          base: "#1e90ff",
          plum: "#5fb0ff",
          wine: "#9bd0ff",
          aubergine: "#0f2f7a",
          gold: "#0a1f5c",
          ember: "#16429f",
          text: "#081a4d",
          muted: "#12367f",
        },
      },
      boxShadow: {
        candle: "0 18px 45px rgba(8, 26, 77, 0.28)",
        glow: "0 0 24px rgba(10, 31, 92, 0.35)",
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

