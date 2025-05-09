/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // Marquee animation that loops infinitely over 30s
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          // Move by half of the doubled content width
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
