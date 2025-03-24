/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables manual toggling of dark mode
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // Custom breakpoint for extra small devices
        'sm': '640px',    // Small screens (≥ 640px)
        'md': '768px',    // Medium screens (≥ 768px)
        'lg': '1024px',   // Large screens (≥ 1024px)
        'xl': '1280px',   // Extra large screens (≥ 1280px)
        '2xl': '1536px',  // 2x Extra large screens (≥ 1536px)
        '3xl': '1600px',  // Custom breakpoint for 3x extra large screens (≥ 1600px)
      },
    },
  },
  plugins: [],
}