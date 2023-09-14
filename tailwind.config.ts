/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clear: "rgb(251, 221, 202)",
        orange: "rgb(248, 93, 3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
