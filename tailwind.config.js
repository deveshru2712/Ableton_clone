/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#fbffa7",
        orange: "#ff764d",
        lightBlue: "#b1c5ff",
        purple: "#d5b3ff",
        green: "#b6ffc0",
        darkBlue: "#0000ff",
      },
    },
  },
  plugins: [],
};
