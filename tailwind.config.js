/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1440px"
    },
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)"
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: []
};

