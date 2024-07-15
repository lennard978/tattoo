/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/tattoo22.jpg')",
      },
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
