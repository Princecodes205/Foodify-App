/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fprimary: "#FA4A0C",
        fsecondary: "#9A9A9D",
        fgrey: {
          10: "#F2F2F2",
          20: "#C7C7C7",
          30: "#7C7C7C",
        },
      },
    },
  },
  plugins: [],
};
