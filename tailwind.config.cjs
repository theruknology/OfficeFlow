/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#2C3E50",
        "secondary": "#22A7F0",
        "accent": "#FF7F50"
      }
    },
    fontFamily: {
      "sans": ["Poppins"]
    },
  },
  plugins: [],
};
