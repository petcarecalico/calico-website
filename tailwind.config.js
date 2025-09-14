/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using the App Router
  ],
  theme: {
    extend: {},
    screens: {
      sm: "390px",
      md: "743px",
      lg: "1440px",
    },
  },
  plugins: [],
};
