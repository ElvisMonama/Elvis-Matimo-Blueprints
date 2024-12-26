/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html", // Include all HTML files in the root directory
    "./script.js", // Include the script file for Tailwind usage
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          300: "#D1D5DB",
          400: "#9CA3AF",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        "futuristic-black": "#0a0a0a", // Custom futuristic black
        "futuristic-white": "#e8e8e8", // Custom futuristic white
      },
      fontFamily: {
        sans: ['"Poppins"', 'Inter', 'Arial', 'sans-serif'], // Combined modern fonts
      },
    },
  },
  plugins: [],
};
