/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F3EEE7",
        secondary: "#333439",
        accent: "#1F517B",
        opaque: "#BAC9D6",
        tertiary: "#FF6E11",
        blur: "rgba(0, 0, 0, 0.25)",
        blur2: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        body: ["Georama", "sans-serif"],
        logo: ["Mystique", "sans-serif"],
        showcase: ["Space Grotesk", "sans-serif"],
        showcase2: ["Major Mono Display", "monospace"],
      },
    },
  },
  plugins: [],
};
