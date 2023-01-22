/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f1852c",
      secondary: "#852cf1",
      danger: "#e3342f",
    }),
    extend: {
      fontFamily: {
        gangsta: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
