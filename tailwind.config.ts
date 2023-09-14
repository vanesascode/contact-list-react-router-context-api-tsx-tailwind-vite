/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "rgb(248, 93, 3)",
        clearblue: "#d9e2eb",
        mediumblue: "#b2c5d4",
        semiblue: "#a3afb9",
        blue: "#95aec2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
