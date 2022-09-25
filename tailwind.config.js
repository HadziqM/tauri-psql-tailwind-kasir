/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        place: "url(assets/grass.jpg)",
      },
    },
  },
  plugins: [],
};
