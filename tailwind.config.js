/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F26522",
          black: "#0B0B0B",
          dark: "#1F1F1F",
          light: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
