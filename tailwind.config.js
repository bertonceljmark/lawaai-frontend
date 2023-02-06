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
    }),
    variants: {
      extend: {
        fontWeight: ["responsive", "hover", "focus"],
        opacity: ["hover"],
        borderColor: ["hover", "focus"],
        margin: ["first", "last"],
        backgroundColor: ["odd", "even"],
        scale: ["hover", "active", "group-hover"],
        display: ["hover", "active", "group-hover"],
      },
    },
    extend: {
      fontFamily: {
        gangsta: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
