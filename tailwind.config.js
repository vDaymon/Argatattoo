const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gravitas One"', 'serif'],
        // Puedes añadir más fuentes aquí si lo deseas
      },
      colors:{
        bluep: "#0C1F36" ,
      }
    },
  },
  plugins: [],
});